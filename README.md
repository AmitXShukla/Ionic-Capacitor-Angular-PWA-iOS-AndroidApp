## Angular-Capacitor-Firebase-Setup
Angular Cordova GCloud Firebase development environment setup

The development environment setup in this episode will further be utilized in multiple desktop, web and mobile apps development in near future.

[Click here for Video Tutorials !](https://www.youtube.com/watch?v=Tua9Cbw_YgU&list=PLp0TENYyY8lF1I4EgKLcwRvxy820BgWpd)

### Introduction:
Angular is framework supported by Google, which lets you build Progressive Web apps, mobile apps for iOS, Android, Windows environment and desktop software for Windows, Mac and Linux machines.
www.angular.io

### Single Codebase, Server-less or multiple platforms/database:
My goal for this Angular development environment setup is to build, real world applications using a single code base for desktop and mobile apps.
I will try to setup my development environment in such way, that a single code base can serve desktop, mobile apps for different platform. Like iOS, Android, Windows and Linux desktop and mobile apps.

Also, my goal is use same codebase to support different hosting and databases with minimal changes.

Let’s get started :-

### Step 1 (Optional): github
Setup your GitHub account and environment

https://github.com/AmitXShukla/GitHub-Hello-World

Windows -> Env Variables -> Path -> Add <C:\amit.io\Program\PortableGit\cmd>

Please make sure to familiarize yourself with gitignore, git commands, git desktop, git pages, GCloud (optional) and Stackblitz (optional).

### Step 2: Install a text editor of your choice
vscode, sublime or atom

For using vscode, install plugings
Angular Language Service, Auto Import plugin

and update vscode settings -> Settings -> git.path=<git installation> (C:\\\amit.io\\\Program\\\PortableGit\\\cmd\\\git)
  
  
### Step 3. Node JS and NPM installation
https://nodejs.org/en/

NodeJs comes up with NPM, So no separate NPM installation is required

Please pick latest Current release. (I prefer zip version for windows)

in case of zip version, update Windows -> Env Variables -> Path -> Add <C:\amit.io\Program\node>

#### Validate Node and NPM installation

Verify that you are running at least node 6.9.x and npm 3.x.x by running node -v and npm -v in a terminal/console window. Older versions produce errors, but newer versions are fine.

(https://angular.io/guide/quickstart) - refer to this link for least node, npm requirement by Angular.

	1. Command prompt -> node -v
	2. Command prompt -> npm -v
  
check windows/ios/linux node environment variable to confirm node installation

### Step 4: Install Angular CLI

install @angular-cli

npm install -g @angular/cli

#### Validate @angular/cli
ng -v

### Step 5 (Optional): Cordova install

npm install -g cordova

### Step 6 (Optional): firebase-tools
*** update instructions

### Step 7: Create a new cordova project

cordova create elishio
cd elishio
cordova platform add browser
cordova run browser
cordova plugin remove cordova-plugin-whitelist
cordova plugin add cordova-plugin-whitelist

elishio -> dir / ls
### create a new <src> directory inside your cordova app. This is the directory where Angular app will reside.
	
mkdir src

cd src

ng new elishio // elishio is your new Angular App

### now your angular app is ready, it's time to setup

#### update .gitignore file

Environment.ts
Environment.prod.ts

#### update Angular CLI and configuration
Angular/Cli - assets directory
update polyfill

#### Package.json
In the simplest terms, the tilde matches the most recent minor version (the middle number). ~1.2.3 will match all 1.2.x versions but will miss 1.3.0.
The caret, on the other hand, is more relaxed. It will update you to the most recent major version (the first number). ^1.2.3 will match any 1.x.x release including 1.3.0, but will hold off on 2.0.0.

Talk about polyfill (update webanimations, hammerjs)
Angular-cli.json - talk about assets
Ng build -prod

### Step 8: build a browser, android and iOS app
Install and Configure Android Studio

### Step 9 (Optional): npm install electron
*** update instructions here
build a desktop app

### Step 10: Firebase hosting

https://www.npmjs.com/package/firebase-tools

npm install -g firebase-tools

firebase init

firebase login

firebase deploy


### Step 11: GCloud Hosting
*** update instructions here

### Step 12: Github/Stackbliz hosting
*** update instructions here

### Step 13: (Optional): npm update --save
*** update instructions here
Always keep your NPM packages current.

### Step 14 (Optional) : Angular Universal Server Side Rendering
*** update instructions here
Advantages
	1. SEO
	2. Android and iOS Cordova apps using firebase / social plugin / outh - or use any redirect URL page
  
