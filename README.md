# Virtual Noticeboard

This assignment will have you building a backend to service an already existing frontend (virtual noticeboard)

The noticeboard will serve as a place for multiple people to leave messages in a communal environment (for example in a shared kitchen or hallway)

![Bart Simpson writes on a blackboard](https://media.giphy.com/media/3o6MboRuplc08qlxiE/giphy.gif)

> Difficulty level: Beginner 🫖 🍵

## What you will be doing

For this assignment you will have to:

1. Setup your server
2. Create the code necessary to service all client requests
3. Setup your database
4. Setup the schema for your data
5. Connect your database to your server endpoints

The client (frontend) code has already been written. You do not need to change this.

This project assumes you've already had experience with:

- Express.js
- dotenv
- Setting up routes / endpoints
- Mongoose / MongoDB (schemas, models and `find()`)

## Folder Structure

This repository contains the `client` (frontend) as a subfolder

When you run your node server, it will automatically handle requests to serve the `/client` pages. You can view it in the browser under the URL `http://localhost:3001/`

**There is no need to serve the client separately**

## Getting Started

1. run `npm run setup`
2. run `npm run build`

> Make some tea, this may take a while
> You only need to run these commands once

## Usage

1. run `nodemon server.js` or `node server.js` (if you do not have nodemon installed)

##### Changing the frontend

If you want to change the client, you must rebuild the static client files

1. run `npm run build`

## Tasks

For these tasks, you are expected to write your code in the file `server.js`

## Task 1 - Initial setup

1. Install the `dotenv` package with `npm i dotenv`
2. Install the `mongoose` package with `npm i mongoose`
3. Create a `.env` file which includes the connection to your MongoDB database. For your database name you can use the name `virtual-noticeboard"
4. In `server.js`, import the `dotenv` library and configure it
5. In `server.js`, import the `mongoose` library and setup the connection to your database
6. Setup the `express.json()` middleware

> Important: Before moving to the next task, make sure your database connection is working

## Task 2 - Creating a schema for your collection

We need to store some information into the database. This information will be held inside a new collection.

1. Create a schema with the name "Notice". The schema should accommodate the following data structure:

```text
text: String
author: String
date: Date
```

## Task 3 - Creating a model for your collection

The schema on its own does nothing - it is the model that does the work of interfacing with the collection

1. Create a model for the schema you just created

## Task 4 - Creating a route

We would like to organise our code, so it is easier to manage in the long run

1. Create a route with the path `/notices`

## Task 5 - Creating an endpoint - find notices

For this task you will create an endpoint which will return all the documents from the "Notice" collection

1. Inside your `/notices` route, create an **endpoint**
2. The endpoint must return all documents from the "Notice" collection
3. The endpoint must respond to the path `/all`
4. The endpoint must only respond to **GET** requests

> Hint: To interface with your collection, you will need to import and use the model you created in Task 2

> Hint: You can use the `find()` method from your model. By passing into this method 0 arguments, you will return all the documents from the collection

## Task 6 - Creating an endpoint - add notice

For this task you will create an endpoint which will allow the user to add a new message to the "Notice" collection

1. Inside your `/notices` route, create an **endpoint**
2. The endpoint will receive a JSON object from the client. Here is an example of a JSON object you could receive:
```json
{
  "text": "Don't use the toilet, it's blocked yo! Someone call a plumber",
  "author": "Luigi",
  "date": 1628972562000
}
```
3. Read the JSON object from the `request.body` property, and store that information into the "Notice" collection
4. The endpoint must respond to the path `/new`
5. The endpoint must only respond to **POST** requests

> Hint: To interface with your collection, you will need to import and use the model you created in Task 2

> Hint: You can use the `find()` method from your model. By passing into this method 0 arguments, you will return all the documents from the collection

## Task 7 - Creating an endpoint - clear all notices

For this task you will create an endpoint which will allow the user to delete all documents in the "Notice collection"

1. Inside your `/notices` route, create an **endpoint**
2. The endpoint must respond to the path `/clear`
3. The endpoint must only respond to **DELETE** requests

> Hint: You can use the `deleteMany({})` method from your model. By passing into this method 0 arguments, you will return all the documents from the collection
