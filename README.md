phoenix2
========

Experiment with ember.js and rack based api, dynamic form system

Backend - Sinatra/Grape
Frontend - Ember.js

Pre-requisites
---

Install rvm

	$ rvm install 2.0.0

Create a gemset private to this project, and grab the bundler gem

	$ rvm 2.0.0@phoenix2-api  --create
	$ rvm use 2.0.0@phoenix2-api
	$ gem install bundler

	$ rvm 2.0.0@phoenix2-client --create
	$ rvm use 2.0.0@phoenix2-client
	$ gem install bundler


Project Setup 
===

Server
---

Install pre-requisite gems for API

	$ rvm use 2.0.0@phoenix2-api
	$ cd api
	$ bundle install
	
Run API / Backend

	$ cd api
	$ rvm use 2.0.0@phoenix2-api
	$ rackup -Ilib config.ru

	# Test API
	$ curl http://localhost:9292/api/ping
	
	# Test Web
	$ open http://localhost:9292/
	
Client
---

Install prerequisistes

	$ cd client
	$ rvm use 2.0.0@phoenix2-client
		
	# Check node version
	$ node -v
	v0.10.26
	
	# Install yoeman
	$ sudo npm install -g yo
	
	# Pull in webapp generator(s)
	$ npm install generator-webapp
	$ npm install generator-angular
	
	# Install web testing
	$ sudo npm install -g karma-jasmine
	
	# Create new app 
	$ yo angular
	
	# Setup Karma web testing
	$ npm install karma --save-dev
	$ npm install karma-jasmine karma-chrome-launcher --save-dev	

Execution
---
	
Running in development mode

	$ rvm use 2.0.0@phoenix2-client
	$ cd client
	$ grunt server
	

