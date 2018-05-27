# VIDYA
Vidya JS - a full stack server + client Java Script Framework.

## Full stack runs on:
* Server - core modules use pure ES6+ and run on Node.js and are free from browser-specific and server-specific dependencies
* Client - browser/HTML + SPA stack + MVC + Full UI library of 10+ base widgets done in a classic RAD (Rapid Application Development) style

To clarify: one may use Vidya without UI stack in Node apps on the server. Vidya may be used a s alibrary or framework.

For client programming, Vidya borrows from the influence of React+Flux event-less programming based on action flows 
which get dispatched into controllers. Like in a typical server app, Controllers access data, services, and fill models feeding them to views. Views are controls, written in LJS (Laconic Java Script). They do smart control-level differencing 
(before DOM generation), releaving memory pressure and working faster (no need to store and do DOM tree diff every time).

The cutting edge Java Script Library engineered around ES6 - ECMA2017:
* Classes - "classic" OOP
* Asynchronous Flows / Promisses
* Generators 
* Iterable + Deferred execution a-la LINQ
* Symbols, Literals etc.

## Features

* Averments (checks a-la Assert -> Aver)
* Type coercion, conversion
* String manipulation + formatting
* I18n/Localization of money, dates
* Functional style defferred pipeline aka LINQ (select(), where(), any(), all(), distinct(), count(0 etc...)
* 
## Building / Assembly
Vidya uses WebPack + Babel with a bunch of typical plugins. See root package.json for deps

To re-build all artifacts: `npm run buildall`

To re-build and pack noms: `npm run dist`

Testing is done using Mocka runner and Vidya.Aver module for assertion library (rather "averment library").
Tests run on Node and Browser.

Test all (on Node): `npm test`
Test named harness (e.g. 'asString()'): `npm run trun #asString()`

Test in browser: open \*.htm file from /test


CI...[tbd]

