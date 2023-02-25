#!/bin/sh
set -e

branch="1.x"
web_container_id=""

pullLatestVersion()
{
  if ! [ -x "$(command -v git)" ]; then
    echo "Error: git is not installed." >&2
    exit 1
  fi

  if [ -n "$(git status -s)" ]; then
    echo "Error: You have unstaged changes." >&2
    exit
  fi

  git pull origin $branch
}

containerReady()
{
  if ! [ -x "$(command -v docker)" ]; then
    echo "Error: docker is not installed." >&2
    exit 1
  fi

  if ! [ -x "$(command -v docker-compose)" ]; then
    echo "Error: docker-compose is not installed." >&2
    exit 1
  fi

  echo "Info: Pulling docker images..."
  echo "$(docker-compose pull)"

  echo "Info: Starting containers..."
  echo "$(docker-compose up -d)"

  web_container_id="$(docker-compose ps -q web)"

  while : ; do
    if [ "$(docker inspect -f '{{.State.Running}}' $web_container_id)" = "true" ]; then
      echo 'Info: Web container is running.'
      break
    else
      echo 'Info: Waiting for web container to start...'
    fi
  done
}

initDotEnvIfRequired()
{
  if [ -f ".env" ]; then
    echo "Info: .env file already exists, continuing..."
    return 0
  fi

  echo "Info: Creating .env file for the first time."

  if ! [ -f ".env.example" ]; then
    echo "Error: Example env file (.env.example) is missing." >&2
    exit
  fi

  echo "Info: Creating .env file for the first time..."
  echo "$(cp .env.example .env)"

  echo "Info: Invoking Laravel application key command..."
  echo "$(docker-compose exec -T web php artisan key:generate)"
}

updateWebContainer()
{
  echo "Info: Running migrate database..."
  echo "$(docker-compose exec -T web php artisan migrate --step --no-interaction --force)"

  echo "Info: Running cache clear..."
  echo "$(docker-compose exec -T web php artisan cache:clear)"

  echo "Info: Running optimize clear..."
  echo "$(docker-compose exec -T web php artisan optimize:clear)"

  echo "Info: Running route cache clear..."
  echo "$(docker-compose exec -T web php artisan route:cache)"

  echo "Info: Running config cache clear..."
  echo "$(docker-compose exec -T web php artisan config:cache)"

  echo "Info: Running view cache clear..."
  echo "$(docker-compose exec -T web php artisan view:cache)"
}

pullLatestVersion
initDotEnvIfRequired
containerReady
updateWebContainer

echo "Info: Prune all unused images..."
echo "$(docker image prune -a -f)"

#export $(grep -v '^#' .env | xargs -0)
#echo $web_container_id
