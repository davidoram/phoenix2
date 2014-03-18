class API < Grape::API
  
  # Specify verion number in http header eg:
  #
  #   curl -H Accept:application/vnd.phoenix-v1+json http://localhost/api/ping
  #
  #version 'v1', using: :header, vendor: 'phoenix'
  
  desc "Ping the server to check it is online, no authentication required"
  get '/api/ping' do
    { message: "pong" }
  end
  
  desc "Return the data need to render a document"
  get '/api/document/:id' do 
		{ fields:
      [
        {
          value: {
      			key:      20010,
      			type:     "Project",
      			column:   "projectKey",
      			value:    "CONT-123-ABC",
      			dataType: "string",
      			label:    "Project key"
      		},
      		layout: {
      			component: "read-only-string",
      			bootstrap:  {
      				row:            1,
      				column_start:   4,
      				column_span:    3,
      				type:           "text", # HTML type 
      				classes:        []      # Extra bootstrap classes to apply 
      			}
          }
        }
      ]
		}
  end
  
end
