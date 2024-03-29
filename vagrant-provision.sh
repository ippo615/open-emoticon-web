#!/usr/bin/env bash

# Node JS
sudo add-apt-repository -y ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install -y git node.js fontforge
sudo apt-get install npm

# Install Grunt
sudo npm install -g grunt
sudo npm install -g grunt-cli

# Install Woff2 Converter
sudo npm install -g ttf2woff2

# Path to vagrant folder
cd
cd ../../vagrant/

# Install npm dependencies
sudo npm install

# Start
grunt font-dev
