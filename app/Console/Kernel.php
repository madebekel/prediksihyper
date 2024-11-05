<?php
namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use App\Http\Controllers\RandomNumberController;

class Kernel extends ConsoleKernel
{
    protected function schedule(Schedule $schedule)
    {
        // Menjalankan perintah artisan untuk masing-masing variable
        $schedule->command('random:acak1')->cron('05 18 * * *'); // Task Scheduler 1 
        $schedule->command('random:acak2')->cron('0 10 * * *'); // Task Scheduler 2 
        $schedule->command('random:acak3')->cron('0 15 * * *'); // Task Scheduler 3
        $schedule->command('random:acak4')->cron('0 16 * * *'); // Task Scheduler 4 
        $schedule->command('random:acak5')->cron('0 17 * * *'); // Task Scheduler 5 
        $schedule->command('random:acak6')->cron('0 18 * * *'); // Task Scheduler 6 
        $schedule->command('random:acak7')->cron('0 19 * * *'); // Task Scheduler 7 
        $schedule->command('random:acak8')->cron('0 20 * * *'); // Task Scheduler 8 
        $schedule->command('random:acak9')->cron('0 1 * * *'); // Task Scheduler 9 
        $schedule->command('random:acak10')->cron('0 2 * * *'); // Task Scheduler 10 
        $schedule->command('random:acak11')->cron('0 3 * * *'); // Task Scheduler 11 
        $schedule->command('random:acak12')->cron('0 5 * * *'); // Task Scheduler 12 
        $schedule->command('random:acak13')->cron('0 7 * * *'); // Task Scheduler 13 
        $schedule->command('random:acak14')->cron('0 8 * * *'); // Task Scheduler 14 
        
        // Tambahkan jadwal untuk masing-masing Task Scheduler sesuai kebutuhan
        // Misalnya untuk $acak3 hingga $acak14
    }
}