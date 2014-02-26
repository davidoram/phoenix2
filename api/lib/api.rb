class API < Grape::API
  
  version 'v1', using: :header, vendor: 'phoenix'
  
  desc "Ping the server to check it is online, no authentication required"
  get '/api/ping' do
    { message: "pong" }
  end
  
end
