# Node Express Starter

---

Video Walkthrough => https://www.loom.com/share/d6c492b2834b409398e1ea170ae4359e

A barebones node express app with some basic CRUD operations using an object in place of a database.

---

## Architecture

---

This app uses a common pattern of having `controllers` and `routes` in separate folders.

Controllers are used to manipulate and query data.

Routes simply listen for requests on certain paths and provide methods which are called on those routes.

Middlewares are methods that are called before the request goes to a controller. In this app, we have a `validateUserBody` middleware which ensures all incoming requests have an `id` property - if they DO NOT, we simply reject the request - if they DO, we continue the request using `next`

---

## Getting Started

---

`npm install`

`npm start`

`nodemon server.js` to start with hot reloading

---

## How To Use

---

You'll see many comments throughout the codebase which highlight common patterns and libraries.

There are 4 routes you can reach from your localhost like so:

`http://localhost:5000/user/add`

`http://localhost:5000/user/get`

`http://localhost:5000/user/update`

`http://localhost:5000/user/delete`

### Examples:

To create a new user
http://localhost:5000/user/add

```js
{
    "id": "123",
    "email": "brianjenney83@gmail.com",
    "name": "brian"
}
```

To get a user with an id of 123:
http://localhost:5000/user/get?id=123

---

## Next Steps

---

You can create a true database connection to persist your data and add new routes, controllers and middlewares.
