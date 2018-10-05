# lb-visualware
A server-side REST API exposing the MySQL data from Visualware.
Built using the [LoopBack JS](https://loopback.io) framework.

## SDK's
There is a ReactJS SDK available to make consuming this API
easier on the front-end. Look in the `/client/sdks/react` folder.

## Database Migrations
This application uses Loopback's autoupdate() migrations to automatically
create the database schema from the models for you (and keep them in sync). 

## Deploy for (Local) Development
To deploy this application to your local machine for development, first 
make sure you have Node.js 8.x LTS or greater installed.

Clone the repo using `git clone`. This application points to a MySQL DB that
is hosted for Brad Goodwin by VisualWare. You can see its details in 
`datasources.json`.

Run `npm install` to install the app and its dependencies. Run `node .` or
`node server.js` to start the app.

## Deploy on Heroku for Staging
To deploy this application on Heroku, first create a new app
on Heroku and give it a name, eg. lb-visualware.

Clone the repo using `git clone`. After making your changes, push the app to 
your git repo.

Download and install the [Heroku toolbelt](https://toolbelt.heroku.com/).

Using the toolbelt, issue the `heroku login` command to login 
to the heroku services.

`cd` to the project directory and run `heroku create` to 
initialize Heroku.

Add the strongloop buildpack to the Heroku app you already 
created (still in the project directory): `heroku config:set BUILDPACK_URL=https://github.com/strongloop/strongloop-buildpacks.git`

Set `NODE_ENV` to staging using `heroku config:set NODE_ENV=production`.
If you do not set the NODE_ENV to production in your Heroku instance, then
Express will install in development mode and the application will attempt
to use the `middleware.development.json` file instead of `middelware.json`.

Deploy the app from your repo with `git push heroku master`.

The project was created using [LoopBack](http://loopback.io).