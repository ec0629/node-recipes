# Node.js Recipes

# Table of Contents
  - [Recipe 1: using string functions on buffers](#recipe-1-using-string-functions-on-buffers)
  - [Recipe 2: using string decoder](#recipe-2-using-string-decoder)
  - [Recipe 3: custom entrypoint for a node package](#recipe-3-custom-entrypoint-for-a-node-package)
  - [Recipe 4: determining if package is executed as a script or if being required by another script](#recipe-4-determining-if-package-is-executed-as-a-script-or-if-being-required-by-another-script)
  - [Recipe 5: understanding how circular dependencies are dealt with in node](#recipe-5-understanding-how-circular-dependencies-are-dealt-with-in-node)
  - [Recipe 6: using C++ addons](#recipe-6-using-c-addons)


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
2. npm run config (a build folder will be created in the top-level recipe_6 directory)
3. npm run build
4. npm start