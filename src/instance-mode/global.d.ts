//Add intellisense and type-checking for instance-mode p5.js
//But DON'T add types for global p5 functions - those functions won't be available at runtime.
import module = require("p5");
export = module;
export as namespace p5;
