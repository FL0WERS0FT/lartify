# Lartify
Lartify is a laravel starter project template.

## 🚧 Work in progress.
The template is still in progress and cannot be used yet.

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
* `npm install`
* Copy the folders of languages that you want, in the resources/lang folder of your Laravel application (Files of languages are in "vendor/caouecs/laravel-lang" directory)