| Users                    										                   |
|------------------|----------------------------|-------|--------|
| :username				 | null: false, unique: true  | index | string |
| :session_token	 | null: false						  	|	index |	string |
|	:password_digest | null: false						  	|				|	string |


| Notes 																											|
|--------------|----------------------------|-------|---------|
|	:title 			 | null: false              	|	index | string  |
|	:body 			 |														|				|	text    |
|	:author_id   | null: false								|	index | integer |
|	:notebook_id |														|	index | integer |


| Notebooks																								 |
|------------|---------------------------|-------|---------|
|	:title  	 | null: false, unique: true | index | string  |
|	:author_id | null: false 								 index | integer |


| Tags 																							 |
|-------|---------------------------|-------|--------|
| :name | null: false, unique: true	|	index | string |


| Taggings																 |
|----------|-------------|-------|---------|
|	:tag_id  | null: false | index | integer |
|	:note_id | null: false | index | integer |