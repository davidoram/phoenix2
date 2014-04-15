class API < Grape::API
  
  format :json
  
  # Specify verion number in http header eg:
  #
  #   curl -H Accept:application/vnd.phoenix-v1+json http://localhost/api/ping
  #
  #version 'v1', using: :header, vendor: 'phoenix'
  
  desc "Ping the server to check it is online, no authentication required"
  get '/api/ping' do
    { message: "pong" }
  end

  desc "Return a list of documents"
  get '/api/documents' do 
    [
      {
        id: 1,
        projectKey: 'ABC-123',
        title: 'Doc 1',
      },
      {
        id:  2,
        projectKey: 'ABC-456',
        title: 'A new form of pig',
      }
    ]
  end
  
  desc "Return the data need to render a document"
  get '/api/documents/:id' do 
		{
			id: 1,
			key: 'PROJ-123',
			title: 'A better way of designing databases',
			data: {
				firstName: 'Dave',
				surname: 'Smith',
				age: 45,
				height: 180
			},
			layout: [ {
				formGroup: 1,
				label: 'First name',
				key: 'firstName',
				labelColumnWidth: 2,
				inputColumnWidth: 3,
				type: 'text'
			},
			{
				formGroup: 1,
				label: 'Age',
				key: 'age',
				labelColumnOffset: 1,
				labelColumnWidth: 3,
				inputColumnWidth: 3,
				type: 'number'
			},
			{
				formGroup: 2,
				label: 'Surname',
				key: 'surname',
				labelColumnWidth: 3,
				inputColumnWidth: 2,
				type: 'text'
			}
			]
		}
  end

  desc "Return the data need to render a form"
  get '/api/forms/:id' do 
		{
			id: 1,
			title: 'Form1',
			data: {
				firstName: 'Sample',
				surname: 'Sample',
				age: 99,
				height: 88
			},
			layout: [ {
				formGroup: 1,
				label: 'First name',
				key: 'firstName',
				labelColumnWidth: 2,
				inputColumnWidth: 3,
				type: 'text'
			},
			{
				formGroup: 1,
				label: 'Age',
				key: 'age',
				labelColumnOffset: 1,
				labelColumnWidth: 3,
				inputColumnWidth: 3,
				type: 'number'
			},
			{
				formGroup: 2,
				label: 'Surname',
				key: 'surname',
				labelColumnWidth: 3,
				inputColumnWidth: 2,
				type: 'text'
			}
			]
		}
  end
  
end
