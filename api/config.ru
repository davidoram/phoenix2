require 'sinatra'
require 'grape'
require 'api'
require 'web'


use Rack::Session::Cookie
run Rack::Cascade.new [API, Web]