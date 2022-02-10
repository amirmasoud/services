<?php

namespace App\UI;

class StatUI
{

    public function __construct(
        public string $name,
        public string $stat,
        public string $previousStat,
        public string $change,
        public string $changeType,
    )
    {
        return [
            'name' => $this->name,
            'stat' => $this->stat,
            'previousStat' => $this->previousStat,
            'change' => $this->change,
            'changeType' => $this->changeType,
        ];
    }
}
