users
	:username				 null: false, unique: true  	index 	string
  :session_token	 null: false									index 	string
	:password_digest null: false													string

notes
	:title 					 null: false, unique: true		index   string
	:body 					 																			text
	:notebook_id 																	index   integer
	:tagging_id																		index   integer

notebooks
	:title  				 null: false, unique: true		index   string

tags
	:name 				   null: false, unique: true		index   string

taggings
	:tag_id  				 null: false 								  index
	:note_id 				 null: false								  index