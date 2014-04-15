require 'sinatra'
require 'grape'
require 'api'
require 'web'
require 'rack/cors'

use Rack::Cors do
  allow do
    origins '*'
    resource '*', headers: :any, methods: :any
  end
end
use Rack::Session::Cookie
run Rack::Cascade.new [API, Web]