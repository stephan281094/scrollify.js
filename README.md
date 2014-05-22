scrollify.js
============
A micro (0.263 kb) jQuery library that disables parent scrolling

Don't you hate it when sometimes you're scrolling inside of a div or textarea and when you finish at the bottom, the parent continues scrolling? Scrollify.js makes sure that won't happen.

When you reach the end of the div, the parent won't continue scrolling! :)


### How to use it
Define what elements you want to apply scrollify to by adding a class or id. It really doesn't matter how you call it.
In this example I use the class-name 'scrollable'
```html
<div class="scrollable"></div>
```

Then in the Javascript do the following:
```javascript
$('.scrollable').scrollify();
```

And that's probably all you need! :)

Unless you want to specify what element you want to disable for scrolling. To do this, simply add a parameter:
```javascript
$('.scrollable').scrollify(".container");
```


### [Live demo](http://jsfiddle.net/RsuLU/)
