# Continental Cookbook Collection

## An explanation of the what the app does and how it works.
RecipEATs is a cloud-based web application for new-age cooks to organize all their recipes in their own, individual recipe book to help them consolidate their multi-generational family recipes and favorite random online recipes in one place. Using React.js, the user is able create an account with email and password, that only they can see. From there, they can create “Recipes” in their cookbook and add it to their Ruby on Rails database. These “Recipes” can be updated with new “titles” or “servings”, and many other categories. If the user no longer has passion for one of their recipes, they can also delete the recipe completely. While accessing their account, they can change their passwords and then ultimately log out so they can go have a fun time cooking!

## A link to the other repo
Back-end Repository: https://github.com/jaemcu/RecipEATS-api

## A link to both deployed sites
Client: https://jaemcu.github.io/RecipEATS-client/#/

Heroku API: https://immense-mountain-49201.herokuapp.com/

## List of technologies used
Frontend uses open source projects to work:

React.js
Atom - Amazing code editor
Bootstrap - UI templates and premade css variables
WebPack - HTML, JavaScript, CSS & more compiler
jQuery/AJAX - Interact with DOM
EsLint - Code is clean and standardized

## List unsolved problems which would be fixed in future iterations.

Styling and adding one more resource

## Document your planning, process and problem-solving strategy

1. Made user stories, wireframes, ERDs
2. Setup environment in templates

## Link to wireframes and user stories

As an unregistered user, I would like to sign up with email and password.
As a registered user, I would like to sign in with email and password.
As a signed in user, I would like to change password.
As a signed in user, I would like to sign out.
As a signed in user, I would like to create a recipe item with a title, ingredients, and instructions.
As a signed in user, I would like to update my recipe item's title, ingredient, and instructions.
As a signed in user, I would like to delete my recipe item.
As a signed in user, I would like to see all my recipes but not other users'.

http://framebox.org/Aklvn

## An embedded screenshot of the app

![Picture](https://i.imgur.com/2QVzGdj.png)

## Set up and installation instructions for front end application
Requires Node.js v4+ to run. Install the dependencies...

Deploy:
$ npm install
$ grunt deploy
Development:
$ npm install
$ grunt server
note:grunt serve & grunt s work as well

(optional) Lint:
$ npm install
$ grunt nag
