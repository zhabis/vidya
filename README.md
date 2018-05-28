# VIDYA
Vidya JS - a full stack client + server Java Script Framework.

## Full stack runs on:
* Server - **core modules use pure ES6+** and **run on Node.js** free from browser-specific and server-specific dependencies
* Client - browser/HTML + SPA stack + MVC + Full UI library of 10+ base widgets done in a **classic RAD** (Rapid Application Development) style

To clarify: one may **use Vidya without UI stack** in Node apps on the server. Vidya may be used as a library or framework.

For client programming, Vidya borrows from the **influence of React+Flux event-less programming** based on action flows 
which get dispatched into controllers. Like in a **typical server MVC app**, Controllers access data, services, and fill models feeding them into views. Views are controls, written in LJS (Laconic Java Script). They do smart **control-level model version differencing** 
(before DOM generation), releaving memory pressure and working faster (no need to store and do DOM tree diff every time).

### Size
The core is under 60Kb uncompressed. The full framework (core+UI) is under 150Kb uncompressed.

## Latest Java Script Standard
Vidya is a project done form scratch to take advantage of the latest ECMA standartization features.
As of May 2018, most modern browsers support the cutting edge JS features out-of-box, however you may want to
transpile for a borader audience (see WebPack Babel setup scripts).

The cutting edge Java Script Library engineered around ES6 - ECMA2017:

* Classes - "classic" OOP; convenient paradigm for business/data centric complex apps
* Asynchronous Flows / Promises  (async/await); forget callback hell and focus on algorithmic sequence
* Iterable + Deferred execution a-la LINQ (influenced by .NET framework); work with complex data models with almost no code
* Generators; awesome feature for gradual execution (paired with Iterable)
* Symbols, string literals etc..; things that just make sense!

## Functionality Coverage / Features

* Averments (checks a-la Assert -> Aver)
* Type coercion, conversion; work with models in a type-safe way
* String manipulation + formatting; basis for any app
* I18n/Localization of money, dates; basis for any app
* Functional style defferred pipeline aka LINQ (select(), where(), any(), all(), distinct(), count(0 etc...)
* Application facade + DI/Service locator - organize your services, data and logic modules well
* MVC: Model-View-Controller framework for event-free programming (similar to React/Flux)
* Models, Fields, MVVM base
* Basic Widgets
* Browser UI: z-stack manager(curtains, dialogs), SPA router, view engine (Scene,Screen etc.)
* 10+ base UI COntrolls with auto data model scaffolding including dropdowns, lookups, radios, checks and much more.
* tbd...





## Building / Assembly
Vidya uses WebPack + Babel with a bunch of typical plugins. See root package.json for deps

To re-build all artifacts: `npm run buildall`

To re-build and pack noms: `npm run dist`

Testing is done using Mocka runner and Vidya.Aver module for assertion library (rather "averment library").
Tests run on Node and Browser.

Test all (on Node): `npm test`

Test named harness (e.g. 'asString()'): `npm run trun #asString()`

Test in browser: open \*.htm file from /test

## Todo
Add watch + wpk dev server
Add CI (e.g. Travis)



