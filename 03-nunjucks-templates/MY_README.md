
# Creating a Basic Server with Express

====================================

Simple server that runs on port 3000 - most of the endpoints requires postgresdb, create.sql script will create the table.

create a postgres instance using docker run:

`docker run --name js-course -e POSTGRES_PASSWORD=Correct-Horse-Battery-Staple -e POSTGRES_DB=postgres -p 5432:5432 postgres`

Run the app with

`node app.js`

## Endpoints

Use Postman or a browser to test the endpoints:

URL | Request Type | Description
--- | --- | --- |
/ | GET | returns Hello World!
/people | GET | lists all the people in the people table
/people/{id} | GET | gets the id from the url and returns that person
/delete/{id} | DELETE | deletes the person with the id from the url
/create | POST | requires name aand birthday params and inserts the new person in the table. Returns the new person when successful

## What did I read on Google in addition to the links provided?

https://scotch.io/tutorials/use-expressjs-to-get-url-and-post-parameters

https://www.rithmschool.com/courses/node-express-fundamentals/express-postgres-crud-noe (this one has a persistent sign up modal)