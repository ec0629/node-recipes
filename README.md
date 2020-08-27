# Node.js Recipes

# Table of Contents
  [Recipes](#recipes)
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
  - [Recipe 15: error handling best practices](#recipe-15-error-handling-best-practices)
  - [Recipe 16: basics of unit testing code with Jest](#recipe-16-basics-of-unit-testing-code-with-jest)
  
  [Notes](#notes)
  - [1: Understanding how require works](#1-understanding-how-require-works)
  - [2: CLI debugging](#2-cli-debugging)
  - [3: Chrome Dev Tools debugging](#3-chrome-dev-tools-debugging)
  - [4: Understanding the Event Queue](#4-understanding-the-event-queue)
  - [5: 3 ways to create Buffers objects](#5-3-ways-to-create-buffers-objects)
  - [6: Errors vs Exceptions](#6-errors-vs-exceptions)

# Recipes
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

---

## Recipe 15: error handling best practices
Node.js: Getting Started, Samer Buna, Pluralsight, (September 11, 2018)  
- demonstrates how overly generic catch can mask underlying issues and
provides an example of how to address the issue

---

## Recipe 16: basics of unit testing code with Jest
Testing JavaScript for Node.js with Mocha, Jonathan Mills, Pluralsight, (May 4, 2017)  
1. using testing hooks (i.e. beforeAll, beforeEach, afterAll, afterEach) allows for
  convenience setup and teardown. Each hook is scoped to its parent describe block
2. describe blocks and tests can invoke the only method and they will be the only
  tests that are run
3. the skip method can be used to skip tests without having to comment them out
4. the todo method can be used to document tests that need to be implemented later
5. testing asynchronous methods using the callback method
6. testing asynchronous methods returning Promises using special expect().resolve/reject
  methods

---

## Recipe 17: using Jest mocks to isolate code from its dependencies for unit testing
Testing JavaScript for Node.js with Mocha, Jonathan Mills, Pluralsight, (May 4, 2017)  
- demonstrates how to use mock functions where the code being tested has dependencies
  that it either invokes, relies on for side effects or handles return values.
- also demonstrates custom matchers in the Jest expect library designed specifically for mocks

---

## Recipe 18: using manual mocks in Jest to mock modules and complex behaviour
Testing JavaScript for Node.js with Mocha, Jonathan Mills, Pluralsight, (May 4, 2017)  
- in this recipe I used a manual mock to mock the https modules request functionality
  which returns a stream to the callback it receives
- we start by invoking jest.mock('name_of_module) in our test file. This mocks out the
  module only for that file any other requiring of the module will recieve the original
  implementation.
- the jest.mock() will first look for a manual mock in a folder labeled \_\_mocks\_\_ 
  at the same directory level as the module to be mocked
- in the manual mock file we call jest.createMockFromModule('name_of_module') which
  automocks the module. In this example I then extended the automocked module
  for the function .request()
- also created a mock of a user-defined module that returns a function that when
  executed return a function with private variables

---

# Notes
## 1: Understanding how require works
when a module is created we are given access to several local variables that may appear global.
This is because when our module is required in the future Node is implicitly wrapping our code
in the file with:
```js
(function(exports, module, require, __dirname, __filename) {
```
And:
```js
  return module.exports
})
```
Going back to when our module is required by another module this wrapping is performed and then
that new function is executed returning the module.exports as well as caching them for future use.

Steps performed by Node when requiring a module:
1. Resolving, search default paths or turning relative to absolute path
2. Loading, reading the file
3. Wrapping the module in an IIFE, gives a module private scope
4. Evaluating, what the vm does with the code in the module
5. Caching to be reused
    
console logging the module object  
1. has an id property, '.' for startup file, absolute path for every module
2. paths property which is an array of default paths to search for the module
3. parent property, all modules that require the current module
4. children, all modules required by the current module
5. [Circular] denotes a circular dependencies
6. exports, values exported by the module, values added to exports inside an async function
will NOT be exported to the requiring module

---

## 2: CLI debugging
[Node Debugger Documentation](https://nodejs.org/api/debugger.html)
```shell
# inspect argument differs from --inspect flag which is used when debugging with Chrome Dev Tools
# also applies to nodemon
$ node inspect <filename>
debug> list(10) # print the 10 lines above and below the current line the program is stopped on
debug> n # move to the next line of the program
debug> c # continue the program
debug> repl # can access program's current environment from here

# Set a breakpoint in a Node program
debugger; # include this in source code to cause the program to start there
```

## 3: Chrome Dev Tools debugging
```shell
$ node --inspect <filename> # by defualt opens port 9229
```
If debugging is required during app startup we can pause the program at the first line and
  wait for the debugger to attach by using the following command line argument
```shell
$ node --inspect-brk <filename>
```

## 4: Understanding the Event Queue
process.nextTick, setImmediate, timers and the Event Queue
when the call stack is empty, Node retrieves the next job from the event queue,
and push it to the call stack and move finish that job until:

1. asynchronous functionality is reached, at which point the job is moved
  off the call stack and handled by Node, and the next job is taken from the event queue.
  Once the asynchronous job is completed it is moved to the event queue.
2. the job is complete, the next job is taken from the event queue.

Asynchronous job generally consist of (also the order of priority each completed job enters 
and is removed from the event queue):
1. process.nextTick (when called these jobs are pushed to the front of the Event Queue)
2. setImmediate (basically a timer with a 0 ms. delay)
3. timers
4. I/O functions
The above is 

---

## 5: 3 ways to create Buffers objects
1. *alloc()*, will allocate a buffer of the desired size and set the contents
  to empty (all zeros)
2. *allocUnsafe()*, same as #1 but will not zero out the contents of the buffer
  has better performance than #1 but might cause side-effects
3. *from()*, accepts one of several types and creates a buffer equal to the size
  of that object

```js
const a = Buffer.alloc(8);
const b = Buffer.allocUnsage(8);
const c = Buffer.from('string');
```

---

## 6: Errors vs Exceptions
- An error is a "problem" whereas an exception is a "condition"
  (Node.js: Getting Started, Samer Buna, Pluralsight, (September 11, 2018))
- Fundamental question we need to ask ourselves is "Is it dangerous for the program to continue
after this error has occurred if yes then we let the program fail. Usually this is the result
of unforeseen issues however.
- Proceeding gracefully may simply mean we halt the process and inform the user that something
wrong has occurred