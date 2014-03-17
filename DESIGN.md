Design
====

The system allows the user to work on Documents

A Document combines streams of interelated data

Data Types
----------

When nabvigating to a document, the system requests the data for that document.
This is a collection of fields.

Each Field consists of the following elements: 

* Values - the actual data to be displayed
* Layout - description of how to display the data
* Validation - instructions on how the field values are to be validated

Examples:

		"value" : {
			"key" :  20010,
			"type": "Project",
			"column": "projectKey",
			"value" : "CONT-123-ABC"
			"dataType": "string",
			"label" : "Project key"
		}
		

		"layout" : {
			"component": "read-only-string",
			"bootstrap":  {
				"row" : 1,
				"column-start" : 4,
				"column-span" : 3,
				"type" : "text", /* HTML type */
				"classes" : []   /* Extra bootstrap classes to apply */
				},
		}
		
The cleint combines them together on the screen as a read only component displaying 
the project key

The URL is ?????