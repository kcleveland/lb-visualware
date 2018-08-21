# lb-visualware
A server-side REST API exposing the MySQL data from Visualware.
Built using the [LoopBack JS](https://loopback.io) framework.

### SDK's
There is a ReactJS SDK available to make consuming this API
easier on the front-end. Look in the `/sdks/react` folder.

## Deploy on Heroku
To deploy this application on Heroku, first create a new app
on Heroku and give it a name, eg. lb-visualware.

Install the MySQL add-on (clearDB) to the new Heroku app
instance.

Clone the repo using `git clone`. Open up the `datasources.production.json`
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

Set `NODE_ENV` to production using `heroku config:set NODE_ENV=production`.
If you do not set the NODE_ENV to production in your Heroku instance, then
Express will install in development mode and the application will attempt
to use the datasources.development.json (and middleware.development.json)
files instead.

Deploy the app from your repo with `git push heroku master`.

The project was created using [LoopBack](http://loopback.io).