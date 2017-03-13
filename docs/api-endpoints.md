## HTML Endpoints:

root:
	GET, "/"


## JSON Endpoints:

users:
	users#create --> POST, "/api/users"

session:
	sessions#create --> POST, "/api/session"
	sessions#destroy --> DELETE, "/api/session"

notes:
	notes#create --> POST, "/api/notes"
	notes#index --> GET, "/api/notes"
							--> accepts query params to list by tag or notebook
	notes#show --> GET, "/api/notes/:id"
	notes#update --> PATCH, "/api/notes/:id"
	notes#destroy --> DELETE, "/api/notes/:id"

notebooks:
	notebooks#create --> POST, "/api/notebooks"
	notebooks#index --> GET, "/api/notebooks"
								  --> shows list of all notebooks
	notebooks#destroy --> DELETE, "/api/notebooks/:id"

tags:
	tags#create --> POST, "/api/tags"
	tags#index --> GET, "/api/tags"
	tags#destroy --> DELETE, "/api/tags/:id"

taggings:
	taggings#create --> POST, "/api/taggings"
								  --> automatically creates tag if doesn't exist
	taggings#destroy --> DELETE, "/api/taggings/:id"
									 --> doesn't delete the actual tag

