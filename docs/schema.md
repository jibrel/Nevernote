| Users            | validations   						  | index | datatype |
|------------------|----------------------------|-------|----------|
| :username				 | null: false, unique: true  | index | string   |
| :session_token	 | null: false						  	|	index |	string   |
|	:password_digest | null: false						  	|				|	string   |


| Notes 			 | validations								| index | datatype |
|--------------|----------------------------|-------|----------|
|	:title 			 | null: false              	|	index | string   |
|	:body 			 |														|				|	text     |
|	:author_id   | null: false								|	index | integer  |
|	:notebook_id |														|	index | integer  |


| Notebooks	 | validations               | index | datatype |
|------------|---------------------------|-------|----------|
|	:title  	 | null: false, unique: true | index | string   |
|	:author_id | null: false 								 index | integer  |


| Tags  | validations               | index | datatype |
|-------|---------------------------|-------|----------|
| :name | null: false, unique: true	|	index | string   |


| Taggings | validations | index | datatype |
|----------|-------------|-------|----------|
|	:tag_id  | null: false | index | integer  |
|	:note_id | null: false | index | integer  |