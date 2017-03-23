# Sample State

```js
{
	currentUser: {
		id: 1,
		username: "Claire"
	},
	errors: {
		signup: [],
		login: [],
		main: ["A tag named Cats already exists."]
	},
	messages: ["Notebook Whales created."],
	}
	notes: {
		1: {
			id: 1,
			title: "Javascript",
			body: "json string representing editor state",
			author_id: 1,
			notebook_id: 1,
			tags: [1, 2, 3]
			}
		}
	},
	notebooks: {
		1: {
			id: 1,
			title: "App Academy",
			author_id: 1
		}
	},
	tags: {
		1: {
			id: 1,
			name: "Programming",
			author_id: 1
		}
	},
	tagFilters: [],
	currentNote: {
		id: 1,
		title: "Javascript",
		body: "Not sure how this is going to store text formatting...",
		author_id: 1,
		notebook_id: 1,
		tags: [1, 2, 3]
		}
	}
}
```
