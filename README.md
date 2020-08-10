# Diet Meal Planner (to do now)
For people who are following diets restrictions and need new ideas on recipes.

## Working Prototype (to do later)
(Example) You can access a working prototype of the React app here: https://your-app-client.herokuapp.com/ and Node app here: https://your-app-server.herokuapp.com/


## User Stories (to do now)
This app is for two types of users: a visitor and a logged-in user

#### (Example) Landing Page
* As a visitor
* I want to understand what I can do with this app (or sign up, or log in)
* so I can decide if I want to use it

### Login page
* As a visitor 
* I want to log in to the website 
* So that I can use the dashboard of the app.

### Register page
* As visitor 
* I want to register to the web site 
* So that I can use it.

### Search diet page 
* As a visitor 
* I want to find the diet I am following and see what recipes are available and their details (not the whole list which is available for registered users).
* So I can decide if I want to register.

### User dashboard page
* As a registered user
* I want to see the list of recipes and their ingredients 
* So that I can include them in my meal plan.

### Add recipe page
* As a registered user
* I want to find the diet I am following and see what recipes are available and their details.
* So I can save them in my account.

### User calendar page
* As a registered user
* I want to add chosen recipes into the '7-day calendar' inside the app.
* So that I can plan my weekly meal.



### Wireframes (to do now)
(Example) Landing Page
:-------------------------:
![Landing Page](/github-images/wireframes/landing-page-wireframe.png)
Register Page
![Register Page](/github-images/wireframes/register-page-wireframe.png)

## Screenshots (to do later)
(Example) Landing Page
:-------------------------:
![Landing Page](/github-images/screenshots/landing-page-screenshot.png)
Register Page
![Register Page](/github-images/screenshots/register-page-screenshot.png)

## Functionality (to do now)
The app's functionality includes:
* (Example) Every User has the ability to create an account

## Technology (done)
* Front-End: HTML5, CSS3, JavaScript ES6, React
* Back-End: Node.js, Express.js, Mocha, Chai, RESTful API Endpoints, Postgres
* Development Environment: Heroku, DBeaver


## Front-end Structure - React Components Map (to do later)
* (Example) __Index.js__ (stateless)
    * __App.js__ (stateful)
        * __LandingPage.js__ (stateful) - gets the _"prop name"_ and the _"callback prop name"_ from the __App.js__
            * __Login.js__ (stateful) -
            * __Register.js__ (stateful) -
        * __Navbar.js__ (stateless) -

## Back-end Structure - Business Objects (to do later)
* (Example) Users (database table)
    * id (auto-generated)
    * username (email validation)
    * password (at least 8 chars, at least one alpha and a special character validation)


## API Documentation (to do later)
API Documentation details:
* (Example) get all users

## Responsive
App is built to be usable on mobile devices, as well as responsive across mobile, tablet, laptop, and desktop screen resolutions.

## Development Roadmap (to do later)
This is v1.0 of the app, but future enhancements are expected to include:
* (Example) add more functionality

## How to run it (done)
Use command line to navigate into the project folder and run the following in terminal

### Local Node scripts
* To install the node project ===> npm install
* To migrate the database ===> npm run migrate -- 1
* To run Node server (on port 8000) ===> npm run dev
* To run tests ===> npm run test

### Local React scripts
* To install the react project ===> npm install
* To run react (on port 3000) ===> npm start
* To run tests ===> npm run test