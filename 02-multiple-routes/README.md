JavaScript / Node Track - Part 2
================================

Instructions
------------
1. Pull this code. It contains a basic Node web server application which has only one route.
2. Add two new routes. You can put any sort of data structure on there, but they must return JSON of some sort.
3. Push this code back up to GitHub classroom. As soon as you do so, we can use the facilities on there to discuss what you've done.

Resources
---------
The resources from the last exercise are still valid.

#### On The Web

* https://medium.com/@adnanrahic/hello-world-app-with-node-js-and-express-c1eb7cfa8a30
* https://medium.com/@onejohi/building-a-simple-rest-api-with-nodejs-and-express-da6273ed7ca9
* https://www.robinwieruch.de/node-express-server-rest-api

#### On Pluralsight

* https://app.pluralsight.com/library/courses/node-js-express-rest-web-services-update/table-of-contents

#### Once You're Done

If you found that horrifically easy, and you didn't try this exercise in the previous session, then use Self Service to install Postgres, and pull information from a database table into you Express API, then display it.

* https://medium.com/@dannibla/connecting-nodejs-postgresql-f8967b9f5932
* https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8/

If you have already completed the Postgres task, then the next "stretch exercise" is to use an ORM to access the data. There is a tutorial here:

* https://stackabuse.com/using-sequelize-orm-with-nodejs-and-express/

If you get through that and are still struggling to find things to do with your time, then run up a local Docker instance, and use it to interface with Redis. Follow the instructions in this blog to cache the routes on your application which access the database via the ORM:

* https://www.npmjs.com/package/express-redis-cache

###### Warning!

I haven't checked those two guides, they may be wrong or out of date, and you might find that there are issues on DWP devices, but this is the "nice to have" section. Give it a go if you have time.
