# lb-visualware
A server-side REST API exposing the MySQL data from Visualware.
Built using the [LoopBack JS](https://loopback.io) framework.

## SDK's
There is a ReactJS SDK available to make consuming this API
easier on the front-end. Look in the `/client/sdks/react` folder.

## Environmental Variables
You must set the NODE_ENV variable to either development, staging, or
production in order to run this application correctly.

## Database Migrations
This application uses Loopback's autoupdate() migrations to automatically
create the database schema from the models for you (and keep them in sync). 
It decides which datasource to use based on the NODE_ENV environmental 
variable setting.

## Deploy for (Local) Development
To deploy this application to your local machine for development, first 
make sure you have Node.js 8.x LTS or greater installed.

Set your NODE_ENV variable to development. For example:

    + Windows: `C:\> set NODE_ENV=development`
    
    + MacOS and Linux: `export NODE_ENV=development`

Clone the repo using `git clone`. Open up the `datasources.development.json`
file and change the host, database, password, and user fields to match
the credentials for your local MySQL instance (or you can simply use the
built-in in-memory database called 'db'. When using the in-memory database, 
data is persisted to the db.json file for development purposes.).

Run `npm install` to install the app and its dependencies. Run `node .` or
`node server.js` to start the app.

## Deploy on Heroku for Staging
To deploy this application on Heroku, first create a new app
on Heroku and give it a name, eg. lb-visualware.

Install the MySQL add-on (clearDB) to the new Heroku app
instance.

Clone the repo using `git clone`. Open up the `datasources.staging.json`
file and change the host, database, password, and user fields to match
the credentials for your clearDB instance (you can retrieve your clearDB 
credentials by selecting the app in Heroku, going to the settings tab, and 
clicking on the "Reveal Config Vars" button).

After making the changes, push the app to your git repo.

Download and install the [Heroku toolbelt](https://toolbelt.heroku.com/).

Using the toolbelt, issue the `heroku login` command to login 
to the heroku services.

`cd` to the project directory and run `heroku create` to 
initialize Heroku.

Add the strongloop buildpack to the Heroku app you already 
created (still in the project directory): `heroku config:set BUILDPACK_URL=https://github.com/strongloop/strongloop-buildpacks.git`

Set `NODE_ENV` to staging using `heroku config:set NODE_ENV=staging`.
If you do not set the NODE_ENV to staging in your Heroku instance, then
Express will install in development mode and the application will attempt
to use the datasources.development.json, model-config.development.json and middleware.development.json files instead.

Deploy the app from your repo with `git push heroku master`.

The project was created using [LoopBack](http://loopback.io).