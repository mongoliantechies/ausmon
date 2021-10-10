#!/bin/sh

if which node > /dev/null
  then
      echo "node is installed"
      version=$(node -v)
      echo "node version is $version"
  else
      echo "Please install Node.js to get started. https://nodejs.dev/learn/how-to-install-nodejs"
  fi

echo "Installing npm dependencies"

cd frontend

npm install
