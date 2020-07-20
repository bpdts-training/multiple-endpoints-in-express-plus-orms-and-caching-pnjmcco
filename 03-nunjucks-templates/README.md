Instructions
============

Okay, this week I'd like you to use the Nunjucks templating system, to serve up some html.

Essentially, create a new route in the provided app.js, and use it to preprocess a response with Nunjucks, before serving that HTML up to the user.

You will need to create some data to load into the template, so may I suggest that you create a JSON data structure and pass that to the template as a context.

Stretch Exercise
----------------

Once you've got a basic Nunjucks template being returned by your app.js, add a *list* data structure to your JSON, and use the for-loops in Nunjucks to iterate over the list and display all the items in it.

Resources
---------

Nunjucks: 

https://mozilla.github.io/nunjucks/getting-started.html

See the example in the answer to this StackOverflow question as a very basic way of using Nunjucks quickly:

https://stackoverflow.com/questions/30978722/simplest-possible-node-js-nunjucks-example

This is a better example of using Nunjucks to poke data into templates:

https://riptutorial.com/node-js/example/20689/nunjucks

JSON Quick Reference (As requested!):

https://www.w3schools.com/jsreF/jsref_obj_json.asp