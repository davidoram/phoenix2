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

	$ rvm 2.0.0@phoenix2  --create
	$ rvm use 2.0.0@phoenix2
	$ gem install bundler
	

Project Setup 
===

Server
---

Install pre-requisite gems for API

	$ rvm use 2.0.0@phoenix2
	$ cd api
	$ bundle install
	
Run API / Backend

	$ cd api
	$ rackup -Ilib config.ru

	# Test API
	$ curl -H Accept:application/vnd.phoenix-v1+json http://localhost:9292/api/ping
	
	# Test Web
	$ open http://localhost:9292/
	
Client
---

Install prerequisistes

	$ cd client
	
	# Check node version
	$ node -v
	v0.10.26
	
	# Install yoeman
	$ npm install yo
	
	# Pull in webapp generator
	$ npm install generator-webapp
	
