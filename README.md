<h2>Deploy Angular 6.0 (HTML, JS, CSS) App to cross platform mobile, web and desktop using Ionic Capacitor</h2>

<h4>Objective:</h4>

The development environment setup in this episode will further be utilized in multiple desktop, web and mobile apps development in near future.<br>

[Click here for Video Tutorials !](https://www.youtube.com/watch?v=Tua9Cbw_YgU&list=PLp0TENYyY8lF1I4EgKLcwRvxy820BgWpd)

<h4>Introduction:- Angular</h4>
Angular is framework supported by Google, which lets you build Progressive Web apps, mobile apps for iOS, Android, Windows environment and desktop software for Windows, Mac and Linux machines.<br>
<a href="http://angular.io" target="_blank">angular.io</a><br>

<h4>Introduction:- Ionic Capacitor</h4>
Capacitor is a cross-platform app runtime that makes it easy to build web apps that run natively on iOS, Android, Electron, and the web.<br>
<a href="https://capacitor.ionicframework.com/" target="_blank">capacitor.ionicframework.com/</a><br>

<h4>Single Codebase, Server-less or multiple platforms/database:</h4>
My goal for this Angular development environment setup is to build, real world applications using a single code base for desktop and mobile apps.<br>
I will try to setup my development environment in such way, that a single code base can serve desktop, mobile apps for different platform. Like iOS, Android, Windows and Linux desktop and mobile apps.<br>

Also, my goal is use same codebase to support different hosting and databases with minimal changes.<br>

<h2>Let’s get started :</h2>
-------------------------------------------

I have been using Apache Cordova framework to build cross platform mobile apps. The reasons I want to try out and looking forward to Ionic Capacitor framework are
<ul>
<li>Capacitor fits into existing "package.json" Angular, React or any project. No separate setup is required.</li>
<li>Capacitor Pro version will allow iOS development on Windows or any other machine.</li>
<li>Built-in Electron app functionality.</li>
<li>Built-in PWA (Progressive Web App) functionality.</li>
<li>backwards-compatible support for many existing Cordova plugins.</li>
</ul>

<h5>Capacitor Required Dependencies</h5>
$ node -v // make sure node is 8.6.0+<br>
$ npm -v // make sure node is 5.6.0+<br>

<h5>iOS - Capacitor Required Dependencies</h5>
Mac with Xcode 9 or above.<br> Soon, you'll be able to use Ionic Pro to build for iOS even if you're on Windows.<br>
install CocoaPods (sudo gem install cocoapods)<br>
 install the Xcode Command Line tools (either from Xcode, or running xcode-select --install)<br>

<h5>Android - Capacitor Required Dependencies</h5>
JAVA 8 SDK<br>
ANDROID ADK + ANDROID STUDIO<br>
//Target API Level 21

<h5>PWA - Capacitor Required Dependencies</h5>
JavaScript project with module loading support. For example, using Webpack or Rollup<br>

<h5>Electron - Capacitor Required Dependencies</h5>
JavaScript project with module loading support. For example, using Webpack or Rollup<br>

<h2>Development :</h2>
-------------------------------------------
<h5>Adding Capacitor to an existing web app</h5>
Capacitor was designed to drop-in to any existing modern JS web app.<br>
To add Capacitor to your web app, run the following commands:

<h5>$ cd my-app</h5>
<h5>$ npm install --save @capacitor/core @capacitor/cli</h5>
Then, init Capacitor with your app information. This will also install the default native platforms.
<br>
<h5>$ npx cap init</h5>
This command will prompt you to enter the name of your app, the app id (used primarily as the package for android), and the directory of your app.<br>
Capacitor is now installed in your project<br><br>

npm run build // for npm projects<br>
<h5>ng build </h5>// for Angular 6.0+ projects
<h5>ionic build </h5>// for Ionic projects

<h4>Capacitor : PWA - Progressive Web App</h4>
<h5>With a Build System</h5> // if you are using Angular or React npm build (like ng build)

<h5>$ ng build --prod // first build your angular app</h5>
<h5> ** make sure in angular.json file, outputPath = "www"</h5>
<h5> ** make sure in capacitor.config.json file, webDir = "www"</h5>
<h5> ** make sure in capacitor.config.json file, bundledWebRuntime = "false"</h5>
<h5>$ npx cap add web</h5>
<h5>$ npx cap copy web</h5>
<h5>$ npx cap serve</h5><br>

<h4>Capacitor : iOS</h4>
<h5>$ npx cap add ios</h5>
<h5>$ npx cap copy ios</h5>// Once your web code is built, it needs to be copied to each native project
<h5>$ npx cap open ios</h5>

<h4>Capacitor : Android</h4>
<h5>$ npx cap add android</h5>
<h5>$ npx cap copy android</h5>// Once your web code is built, it needs to be copied to each native project
<h5>$ npx cap open android</h5>

<h4>Capacitor : Electron</h4>
<h5>$ npx cap add electron</h5>
<h5>$ npx cap copy electron</h5>// Once your web code is built, it needs to be copied to each native project
<h5>$ cd electron</h5>
<h5>$ npm run electron:start</h5>

<h4>Other helpful commands for PWA </h4>
** Directly call capacitor in your code<br>
import { Capacitor } from '@capacitor/core';<br>
import { Plugins } from '@capacitor/core';<br><br>
const position = await Plugins.Geolocation.getCurrentPosition();<br>
<h5>Running Natively and on the Web</h5>
import { Capacitor } from '@capacitor/core';<br><br>
const isAvailable = Capacitor.isPluginAvailable('Camera');<br><br>

if (!isAvailable) {<br>
  // Have the user upload a file instead<br>
} else {<br>
  // Otherwise, make the call:<br>
  Camera.getPhoto()<br>
}<br>
<h5>Without a Build System</h5>
** update capacitor.config.json<br>
{<br>
  "bundleWebRuntime": true<br>
}<br>
<h5>$ npx cap copy web</h5>
In index.html, import capacitor.js before your app's JS:<br>
< script src="capacitor.js" >< /script >  // remove extra space in script tag<br>
< script src="your/app.js" >< /script >// remove extra space in script tag<br>
<h5>$ npx cap serve</h5>
When you're ready to publish your Progressive Web App and share it with the world, just upload the contents of your web directory (default: public/<br>

<h5>Commands to remember for later use</h5>
<h5>$ npx cap copy</h5>
<h5>$ npx cap open</h5>
<h5>$ npx cap serve </h5>// for progressive web apps<br>
<h5>$ npx cap update</h5>
<h5>$ npm install really-cool-plugin</h5>
<h5>$ npx cap update // after plugin install</h5>
<h5>$ npx cap sync</h5>
<h5>Add this to package.json</h5>
{<br>
  "scripts": {<br>
    "build": "command-to-build (ex: webpack, tsc, babel, etc.)"<br>
  }<br>
}<br>
