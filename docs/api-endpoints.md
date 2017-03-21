# API Endpoints

## HTML Endpoints:

### root:
	- `GET /`

## JSON Endpoints:

### users:

- `POST /api/users`

### session:

- `POST /api/session`
- `DELETE /api/session`

### notes:

- `POST /api/notes`
- `GET /api/notes`
	+ can be filtered by notebook or tag on the frontend
- `GET /api/notes/:id`
- `PATCH /api/notes/:id`
- `DELETE /api/notes/:id`

### notebooks:

- `POST /api/notebooks`
- `GET /api/notebooks`
	+ shows list of all notebooks
- `DELETE /api/notebooks/:id`

### tags

- `POST /api/tags`
- `GET /api/tags`
- `DELETE /api/tags/:id`

### taggings: // may not be necessary at all!!

- `POST /api/taggings`
	+ automatically creates tag if doesn't exist
- `DELETE /api/taggings/:id`
	+ doesn't delete the tag but removes it from note
