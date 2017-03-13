## Users:

| columns          | validations   						  | index | datatype |
|------------------|----------------------------|-------|----------|
| :username				 | null: false, unique: true  | index | string   |
| :session_token	 | null: false						  	|	index |	string   |
|	:password_digest | null: false						  	|				|	string   |


## Notes:

| columns 		 | validations								| index | datatype |
|--------------|----------------------------|-------|----------|
|	:title 			 | null: false              	|	index | string   |
|	:body 			 |														|				|	text     |
|	:author_id   | null: false								|	index | integer  |
|	:notebook_id |														|	index | integer  |


## Notebooks:

| columns 	 | validations               | index | datatype |
|------------|---------------------------|-------|----------|
|	:title  	 | null: false, unique: true | index | string   |
|	:author_id | null: false 							 | index | integer  |


## Tags:

| columns | validations               | index | datatype |
|---------|---------------------------|-------|----------|
| :name   | null: false, unique: true	|	index | string   |


## Taggings:

| columns  | validations | index | datatype |
|----------|-------------|-------|----------|
|	:tag_id  | null: false | index | integer  |
|	:note_id | null: false | index | integer  |