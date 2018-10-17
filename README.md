# lb-visualware
A server-side REST API exposing the MySQL data from Visualware.
Built using the [LoopBack JS](https://loopback.io) framework.

## SDK's
There is a ReactJS SDK available to make consuming this API
easier on the front-end. Look in the `/client/sdks/react` folder.

## Database Migrations
This application uses Loopback's autoupdate() migrations to automatically
create the database schema from the models for you (and keep them in sync). 

## Create an ecosystem.config.js file
Before running the application, you must first copy the `ecosystem.config.js.example`
file to a new file named `ecosystem.config.js`. This is where you will set your
environmental variables. The ecosystem file is used by the pm2 process manager to
inject different environmental variables for the different stages (development, staging
and production).

## Deploy for (Local) Development
To deploy this application to your local machine for development, first 
make sure you have Node.js 8.x LTS or greater installed.

Clone the repo using `git clone`, then `cd` into the directory and run `npm install` 
to install the app and its dependencies. 

While still in the top-level directory of the application, run `pm2 start ecosystem.config.js`
to launch and run the application.

In development mode (default), this application points to a MySQL DB that is hosted for
Brad Goodwin by VisualWare. Because our pm2 ecosystem file sets the `NODE_ENV` environmental variable to 'development' unless otherwise specified, the application uses the 
`datasources.development.js` file and the DB settings under `env` inside the 
`ecosystem.config.js` file.

## Deploy to Professional Services Lab Servers for Staging
To deploy this application onto the Pro Services lab server maintained by Brad Goodwin,
you must first connect to the network via the Zurich VPN gateway `https://zrh01-c01-ssl01.ringcentral.com/RSA-SecurID` using RSA authentication in order
to be able to reach the lab servers.

Servers:
  -Lab MySQL: 10.24.132.93 (private IP)
  -Lab App Server: 10.24.132.94 (private IP), 192.209.28.112 (public IP)

The app is already located at `/opt/lb-visualware`, but if you want to start fresh you
can simply do a `pm2 delete` to remove and delete the current instance of the app from 
the pm2 process manager, then `git clone` the repo back to `/opt/lb-visualware`. 

Once the app code is there, use `pm2 startOrReload ecosystem.config.js --env staging` to
launch the app in staging mode, which uses the lab MySQL server as the datasource. The
`--env staging` part injects what is declared under `env_staging` in the 
`ecosystem.config.js` file.

Otherwise, if you don't want to start fresh and just need to pull in some quick code 
updates, just do a `git pull` to pull in the latest code from the repo. The app can then
be restarted using pm2 to pull in the changes, e.g. 
`pm2 reload ecosystem.config.js --env staging`.


## Extra: Deploy on Heroku
To deploy this application on Heroku, first create a new app
on Heroku and give it a name, eg. lb-visualware.

Clone the repo using `git clone`. After making your changes, push the app to 
your git repo (or the git repo).

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
to use the `datasources.development.json` file and development settings in 
`ecosystem.config.js`.

Deploy the app from your repo with `git push heroku master`.