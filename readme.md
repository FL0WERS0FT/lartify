# Lartify
Lartify is a laravel starter project template.

## 🚧 Work in progress.
The template is likley unstable and not everything is tested yet.
Use at your own risk!

## Installation using DDEV install

For easier install, you can use the `ddev install` command to get started more quickly.<br>
Benefits are:
* Ability to define a project name which is set in every relevant file
* Ability to automatically install frontend and backend dependencies
* Auto-Run migrations
* Auto-Generate app keys

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
