<?php

use Illuminate\Contracts\Filesystem\FileNotFoundException;
use Illuminate\Support\Facades\File;

try {
    File::requireOnce(app_path('Dashboard/web.php'));
} catch (FileNotFoundException $e) {
    // @todo: Handle exception
}
