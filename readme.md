# Lartify
Lartify is a laravel starter project template.

## 🚧 Work in progress.
The template is likley unstable and not everything is tested yet.
Use at your own risk!

## Installation using fast_start.sh

For easier install, you can use the fast_start.sh script to get started more quickly.<br>
Benefits are:
* Ability to define a project name which is set in every relevant file
* Ability to automatically install frontend and backend dependencies
* Auto-Run migrations
* Auto-Generate app keys

How to run?
* First, run `ddev start` to start, followed by `ddev ssh` to get into the container
* Next, make the script executable by running `chmod +x fast_start.sh`
* Then, call the script using `./fast_start.sh` and follow the instructions

Note: You *can* use the script without ddev on a generic linux host.
It will automatically determine if it is running inside of ddev or not.
## Installation with DDEV
* `git clone https://github.com/Hans4221/lartify.git`
* `cd lartify`
* `ddev start`
* `ddev ssh`
* `cp .env.ddev .env`
* `composer install`
* `php artisan key:generate`
* `php artisan migrate`
* `php artisan telescope:publish`
* `php artisan passport:install`
* `ddev exit`
* Copy the folders of languages that you want, in the resources/lang folder of your Laravel application (Files of languages are in "vendor/caouecs/laravel-lang" directory)
* `cd frontend`
* `yarn install`
* `yarn serve`
* Open http://localhost:8080 in your Browser
