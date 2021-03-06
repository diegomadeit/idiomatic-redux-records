# Idiomatic Redux Records

### Overview

This is the third of a series of projects. My goal is to learn how to build reliable React apps using React and many of the tools in its ecosystem.

### The project

In react-records project I showed my record collection fetching the data from the Discogs API. In redux-records I introduced Redux to manage the state of the app. In this project I want to learn practical production ready techniques for building React and Redux applications.

Image requests to the Discogs API require authentication. To be able to see record covers is necessary to authenticate. Fill in _AUTH_TOKEN_ with a valid token in _src/data/api/utils_.

### Covered concepts

- Use browser localStorage API to persist the State
- Filter Redux State with [React Router](https://github.com/ReactTraining/react-router) Params
- Use withRouter() to inject the Params into Connected Components
- Use of Selectors in Reducers
- Memoized Selectors with [Reselect](https://github.com/reduxjs/reselect)
- Normalize Redux State shape with [normalizr](https://github.com/paularmstrong/normalizr)
- Understand the Middleware Chain
- Dispatch Actions asynchronously with [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- Tests with [Jest](https://jestjs.io/) and [Enzyme](https://airbnb.io/enzyme/)

### Run the project

In the project directory, you can run:

```sh
$ npm install
$ npm start
```

### Credits

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
