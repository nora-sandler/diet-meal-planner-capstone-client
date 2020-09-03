# Diet Meal Planner (to do now)
For people who are following diets restrictions and need new ideas on recipes.

## Working Prototype (to do later)
(Example) You can access a working prototype of the React app here: https://your-app-client.herokuapp.com/ and Node app here: https://your-app-server.herokuapp.com/


## User Stories (to do now)
This app is for two types of users: a visitor and a logged-in user

#### Landing Page
* As a visitor
* I want to understand what I can do with this app (or sign up, or log in)
* so I can decide if I want to use it

### How it works page
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

### Login page
* As a registered user 
* I want to login to the web site 
* So that I can use it.

### Search diet page 
* As a registered user 
* I want to find the diet I am following and see what recipes are available and their details (not the whole list which is available for registered users).
* So I can decide if I want to register.

### Add recipe page
* As a registered user
* I want to find the recipes available in accordance with my diet plan  and their details.
* So I can save them in my account.

### Recipe details page
* As a registered user
* I want to see details of the recipe including cooking process, necessary ingredients and equipment.
* So I can save them in my account.


### User calendar page
* As a registered user
* I want to add chosen recipes into the '7-day calendar' inside the app.
* So that I can plan my weekly meal.



### Wireframes (to do now)
(Example) Landing Page
:-------------------------:
![Landing Page](/github-images/wireframes/landing_page.jpg)
Sign up Page 
![Register Page](/github-images/wireframes/sign_up_page.jpg)
Login Page
![Login Page](/github-images/wireframes/sign_up_page.jpg)
How it works 1 Page
![How it works 1 Page](/github-images/wireframes/how_it_works_1.jpg)
How it works 2 Page
![How it works 2 Page](/github-images/wireframes/how_it_works_2.jpg)
How it works  3 Page
![How it works page 3 Page](/github-images/wireframes/how_it_works_3.jpg)
How it works  4 Page
![How it works  4 Page](/github-images/wireframes/how_it_works_4.jpg)
Add recipes Page 
![Add recipes Page](/github-images/wireframes/add_recipes_page.jpg)
Recipe_details Page
![Recipe_details Page](/github-images/wireframes/recipe_detail_page.jpg)
Weekly calendar Page
![Weekly calendar Page](/github-images/wireframes/weekly_calendar_page.jpg)








## Screenshots (to do later)
(Example) Landing Page
:-------------------------:
![Landing Page](/github-images/screenshots/landing-page-screenshot.png)
Register Page
![Register Page](/github-images/screenshots/register-page-screenshot.png)

## Functionality (to do now)
The app's functionality includes:
* Every User has the ability to create an account
* Every User has the ability to login into the account
* Every User has the ability to search for diet recipes
* Every User has the ability to save recipes in the account
* Every User has the ability to layout recipes on weekly calendar 


## Technology (done)
* Front-End: HTML5, CSS3, JavaScript ES6, React
* Back-End: Node.js, Express.js, Mocha, Chai, RESTful API Endpoints, Postgres
* Development Environment: Heroku, DBeaver


## Front-end Structure - React Components Map (to do later)
* (Example) __Index.js__ (stateless)
    * __App.js__ (stateful)
        * __LandingPage.js__ (stateful) - gets the _"prop name"_ and the _"callback prop name"_ from the __App.js__
            * __Navbar.js__ (stateless) -
            * __Login.js__ (stateful) -
            * __Register.js__ (stateful) -
            * __Footer.js__ (stateless) -
        * __HowItWorks.js__ (stateless) -
            * __Navbar.js__ (stateless) -
            * __Footer.js__ (stateless) -
        * __listOfDiets.js__(stateful) -
            * __Navbar.js__ (stateless) -
            * __Footer.js__ (stateless) -
        * __addRecipesPage.js__(stateful) -
            * __Navbar.js__ (stateless) -
            * __Footer.js__ (stateless) -
        * __recipesDetailsPage.js__(stateful) -
            * __Navbar.js__ (stateless) -
            * __Footer.js__ (stateless) -
        * __weeklyCalendarPage.js__(stateless) -
            * __Navbar.js__ (stateless) -
            * __Footer.js__ (stateless) -

        
        


## Back-end Structure - Business Objects (to do later)
* (Example) Users (database table)
    * id (auto-generated)
    * username (email validation)
    * password (at least 8 chars, at least one alpha and a special character validation)


## API Documentation (to do later)
API Documentation details:
* (Example) get all users

## Responsive (done)
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