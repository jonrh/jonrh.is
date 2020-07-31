---
title: Fix for “Cannot read property apply of undefined” using Reflux
date: "2015-01-22T00:00:00Z"
path: "/fix-for-cannot-read-property-apply-of-undefined-using-reflux/"
---

At [Vaki][0] we are in the process of creating a new site and are using [React][1] and [Reflux][2]
(a library implementation of [Flux][3] among other things. I had been struggling with a cryptic
JavaScript error originating from Reflux for some hours:

```
Uncaught TypeError: Cannot read property 'apply' of undefined
```

I guess this error message can arise in many situations but I just wanted to document what it was
in my case. Turns out it was a pretty silly mistake. I had a [data store][4] looking a bit like
this:



```javascript
var Reflux = require("reflux");
var LeetActions = require("LeetActions.js");

var LeetStore = Reflux.createStore({
   init: function() {
       // Listen to myEvent the wrong way
       this.listenTo(LeetActions.myEvent, this.onMyEvent());
   },

   onMyEvent: function() {
       console.log("Super important event just happened!");
   }
});
```

This error would occur every time `myEvent` triggered. The fault is that when hooking up the
callback function `onMyEvent` I accidentally called the function by including the two parentheses
(); `this.onMyEvent()`. Instead I should of course have passed the function itself as a parameter
like so:

```javascript
// Listen to myEvent the correct way
this.listenTo(LeetActions.myEvent, this.onMyEvent);
```


[0]: http://vaki.is/
[1]: http://facebook.github.io/react/
[2]: https://github.com/spoike/refluxjs
[3]: https://facebook.github.io/flux/docs/overview.html#content
[4]: https://github.com/spoike/refluxjs#creating-data-stores