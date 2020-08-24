# Node.js Recipes

# Table of Contents
  - [Recipe 1: using string functions on buffers](#recipe-1-using-string-functions-on-buffers)
  - [Recipe 2: using string decoder](#recipe-2-using-string-decoder)
  - [Recipe 3: custom entrypoint for a node package](#recipe-3-custom-entrypoint-for-a-node-package)
  - [Recipe 4: determining if package is executed as a script or if being required by another script](#recipe-4-determining-if-package-is-executed-as-a-script-or-if-being-required-by-another-script)
  - [Recipe 5: understanding how circular dependencies are dealt with in node](#recipe-5-understanding-how-circular-dependencies-are-dealt-with-in-node)
  - [Recipe 6: using C++ addons](#recipe-6-using-c-addons)
  - [Recipe 7: Use case for process.nextTick](#recipe-7-use-case-for-processnexttick)
  - [Recipe 8: Providing Callback and Promise API to a function](#recipe-8-providing-callback-and-promise-api-to-a-function)
  - [Recipe 9: extending eventEmitter, error event, multiple handlers, .once, .prependListener](#recipe-9-extending-eventemitter-error-event-multiple-handlers-once-prependlistener)
  - [Recipe 11: Node.js REPL, loading modules into a session, TAB completion, _](#recipe-11-nodejs-repl-loading-modules-into-a-session-tab-completion-_)
  - [Recipe 12: using TCP sockets to create a basic chat server](#recipe-12-using-tcp-sockets-to-create-a-basic-chat-server)
  - [Recipe 13: getting familiar with the DNS module](#recipe-13-getting-familiar-with-the-dns-module)
  - [Recipe 14: getting familiar with the UDP/dgram module](#recipe-14-getting-familiar-with-the-udpdgram-module)


## Recipe 1: using string functions on buffers  
Advanced Node.js, Samer Buna, Pluralsight, (February 16, 2017)  
- the same methods are available for both strings and buffers

---

## Recipe 2: using string decoder
Advanced Node.js, Samer Buna, Pluralsight, (February 16, 2017)  
- StringDecoder is more reliable than Buffer.toString() when receiving text
expecially in Unicode in binary since some characters may span 16 bytes.

---

## Recipe 3: custom entrypoint for a node package
Advanced Node.js, Samer Buna, Pluralsight, (February 16, 2017)  
- custom entrypoints to a package can be defined in the "main" property
in the package.json file

---

## Recipe 4: determining if package is executed as a script or if being required by another script
Advanced Node.js, Samer Buna, Pluralsight, (February 16, 2017)  
- require.main contains metadata regarding the entrypoint module for the executed script
and it will be the exact same object as the module param wrapping the entrypoint script.
This provides a means of determining how a module came to be executed.
- execute index.js which requires printStars.js or run printStars.js and provide the required
command line arguments.

---

## Recipe 5: understanding how circular dependencies are dealt with in node
Advanced Node.js, Samer Buna, Pluralsight, (February 16, 2017)  
- node will automatically deal with circular dependencies by only allowing the child module access to what has already
been exported by the parent up until the point of the parent module requiring the child.

---

## Recipe 6: using C++ addons
Advanced Node.js, Samer Buna, Pluralsight, (February 16, 2017)  
The binding.gyp and hello.cc files were obtained from the Node.js documents page on C++ addons. To
run the script perform the following steps:
1. npm install
2. npm run configure OR npx node-gyp configure
    - a build folder will be created in the top-level recipe_6 directory
    - npx will execute local modules instead of having to create a script for them
3. npm run build OR npx node-gyp build
4. npm start

---

## Recipe 7: use case for process.nextTick
Advanced Node.js, Samer Buna, Pluralsight, (February 16, 2017)  
- the first version of fileSize mixes both async and sync operations
- Node.js best practices dictate that functions should be fully synchronous or asynchronous
- we use process.nextTick to simulate asynchronous behaviour from synchronous functions
- process.nextTick pushes the result to the front of the Node Event Queue

---

## Recipe 8: providing Callback and Promise API to a function
Advanced Node.js, Samer Buna, Pluralsight, (February 16, 2017)  
- Demonstrates an easy way for providing both options for handling asynchronous operations

---

## Recipe 9: extending eventEmitter, error event, multiple handlers, .once, .prependListener
Advanced Node.js, Samer Buna, Pluralsight, (February 16, 2017)  
- The error event is special because if an error event is emitted without a listener
subscribed then the process will exit
- handlers are executed in the order with which they are registered to the event, this
can be manipulated using .prependListener()
- a handler registered to an event using .once() will only fire the first time

---

## Recipe 10: practical example using the EventEmitter
Advanced Node.js, Samer Buna, Pluralsight, (February 16, 2017)  
- using the event emitter to respond to keyboard inputs emulating a simple terminal app

---

## Recipe 11: Node.js REPL, loading modules into a session, TAB completion, _
Node.js: Getting Started, Samer Buna, Pluralsight, (September 11, 2018)  
- further commands that can be executed from the REPL can be found using .help
- when in the REPL a single TAB keypress will complete the command if possible
- two consecutive TAB keypresses will print out a list of possible commands in
the terminal window
- the _ variable represents the value of the last evaluated expression

---

## Recipe 12: using TCP sockets to create a basic chat server
Advanced Node.js, Samer Buna, Pluralsight, (February 16, 2017)  
- the first example net.js is a simple echo server
- the second example net-multiple-clients.js connects several clients together
- net-improved-chat.js has some basic improvements on the underlying functionality
- these examples demonstrate the usage of standard TCP socket events such as connect, end and data

---

## Recipe 13: getting familiar with the DNS module
Advanced Node.js, Samer Buna, Pluralsight, (February 16, 2017)  
- brief discussion on the differences between the lookup and resolve methods

---

## Recipe 14: getting familiar with the UDP/dgram module
Advanced Node.js, Samer Buna, Pluralsight, (February 16, 2017)  
- brief of creating both a udp server and client