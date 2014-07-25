Photobooth.JS
=========
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

Just one way how one could implement a nice Photobooth app for the web. 

  - Use a cool browser ![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/chrome/chrome_24x24.png)  ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/master/firefox/firefox_24x24.png)
  - Apply a nice effect
  - Smile :) and take a photo

Photobooth.JS has mainly been developed to play around with new stuff like WebRTC, Shaders, Browserify and the File-API. As it grew, I thought it would be a nice example project for others to learn. E.g. how to mock dependencies while testing Browserify modules...

If you are interested in what I've learned, head over to my blog [http://www.orange-coding.net] [1] I'll post some articles about the issues I ran into within the near future...

> Live as if you were to die tomorrow. Learn as if you were to live forever.
― Mahatma Gandhi


Action
-----------
You wanna see Photobooth.JS in action?
Head over to [Photobooth.JS][2]

Technology
-----------
##### General
A bunch of 'new' technology has been used within Photobooth.JS:

* [WebRTC] - To communicate with the webcam
* [Browserify] - For managing the dependencies within Javascript
* [Shader] - For generating the effects (much faster!!)
* [HTML 5 Audio] - To make this nice flash sounds if you take a photo
* [Canvas] - To display the actual webcam data
* [HTML 5 - FileAPI] - To save the photos taken by the webcam

##### Frameworks
Photobooth.JS uses a number of open source projects to work properly:

* [jQuery] - :) 
* [Seriously.JS] - A nice Framework for working with the camera + some neat effects that one can apply
* [Browserify] - I've worked with require.JS for too long, it was time for something new. Here it is. And it's great
* [Ion Sound] - Great Sound-Plugin for jQuery with some nice free sounds included
* [Grunt] - What else??
* [Handlebars] - Templating engine
* [Jasmine] - For testing purposes
* [Node.Js] - While developing



Installation
--------------

```sh
git clone https://github.com/orangecoding/photoboothJS.git
cd photoboothjs
npm install
grunt
```
If grunt can't be found, install it (I would recommend to install it globally)

######On Unix based machines, you need to be root to install packages globally
```sh
npm install -g grunt
npm install -g grunt-cli
```
Most important grunt tasks
--------------
####Default
The default task if you just call grunt without any parameter.
- will compile all sources
- will start a webserver that serves Photobooth.JS
- will start a livereload service

####Release
- will run JSLint / Tests
- if these tests are successful, the version number in package.json will be increased
- afterwards grunt does a git tag
- everything will be commited

####Test
- will run JSLint
- will run Jasmine tests
- will start a livereload service to run the tests over and over again
 
####Deploy
- will roughly do the same than the default task but without livereload
 

License
----

The MIT License (MIT)

Copyright (c) 2014 Christian Kellner

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


**Free Software, Hell Yeah!**

[1]:http://www.orange-coding.net
[2]:http://photobooth.orange-coding.net
[Seriously.JS]:https://github.com/brianchirls/Seriously.js
[Browserify]:http://browserify.org/
[node.js]:http://nodejs.org
[Ion Sound]:http://ionden.com/a/plugins/ion.sound/en.html
[Grunt]:http://gruntjs.com/
[Jasmine]:http://jasmine.github.io/
[jQuery]:http://jquery.com
[Handlebars]:http://handlebarsjs.com/
[WebRTC]:http://www.webrtc.org/
[Shader]:http://www.html5rocks.com/en/tutorials/webgl/shaders/
[HTML 5 Audio]:http://en.wikipedia.org/wiki/HTML5_Audio
[Canvas]:http://en.wikipedia.org/wiki/Canvas_element
[HTML 5 - FileAPI]:http://www.w3.org/TR/FileAPI/