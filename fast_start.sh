#!/bin/bash

targetFiles=(".env.ddev" ".env.example" ".env" "frontend/src/store/store.ts" "frontend/vue.config.js" ".ddev/config.yaml" "resources/views/errors/404.blade.php" "frontend/src/views/Dashboard.vue" "frontend/public/index.html" "frontend/src/App.vue" "public/index.html" "frontend/src/views/Home.vue")

function continuePrompt(){
echo !!! "To continue, press [ENTER]."
read -r
}
function projectNamePrompt(){
clear
echo !!! Please enter your desired project name.
echo !!! Note! You can only run this script once after checkout. It replaces "lartify" with "your project name" everywhere!
read -r projectName
clear
echo !!! "Ok, so your project is called: $projectName"
continuePrompt
echo !!! "Applying names"
setProjectName "$projectName"
}
function replace(){
    local search=$1
    local replace=$2
    local target="./${3}"
    echo !!! "replacing '${search}' by '${replace}' in ${target}"
    sed -i "s/${search}/${replace}/gI" "${target}"
}
function setProjectName(){
    local projectName=$1
    for file in "${targetFiles[@]}"
do
	replace "lartify" "$projectName" "$file"
done
}
function ddevSwitch(){
    local commandToRun=$1
    if hash ddev 2>/dev/null; then
        echo !!! Not inside ddev, running ddev exec.
        ddev exec "$commandToRun"
    else
        echo !!! inside ddev, running regular command.
        $commandToRun
    fi
}

function installBackendPackages() {
ddevSwitch "cp .env.ddev .env"
ddevSwitch "composer install"
}
function installFrontendPackages() {
    echo !!! Installing frontend packages...
    cd frontend || exit
    yarn install
    cd ..
}

function configureDependencies(){
echo !!! The script is now going to install all project dependencies !!currently no frontend!!.
echo !!! If you are not running this script through ddev, please start ddev first.
continuePrompt
installBackendPackages
#installFrontendPackages
echo !!! Dependencies installed.
}
function deploymentStep() {
echo !!! Running final deployment steps...
ddevSwitch "php artisan key:generate"
ddevSwitch "php artisan telescope:publish"
ddevSwitch "php artisan passport:install"
ddevSwitch "php artisan migrate"
echo !!! finished deployment!
exit 0
}

function init() {
echo !!! Welcome to the Fast-Start script!
echo !!! In the next steps, you are going to set your project name and fast-deploy all dependencies.
continuePrompt
projectNamePrompt
configureDependencies
deploymentStep
}

init
