{
	currentUser: {
		id: 1, 
		username: "Claire"
	},

	forms: {
		signup: {errors: []},
		login: {errors: []},
		newNotebook: {
			errors: ["A notebook named Dogs already exists."],
			messages: ["Notebook Whales created."]
		},
		newTag: {
			errors: ["A tag named Cats already exists."],
			messages: ["Tag Horses created."]}
	},

	notes: {
		1: {
			title: "Javascript",
			body: "Not sure how this is going to store text formatting...",
			author_id: 1,
			notebook_id: 1,
			tags: {
				1: {
					id: 1,
					name: "Programming"
				}
			}
		}
	}, 

	notebooks: {
		1: {
			title: "App Academy",
			author_id: 1
		}
	},

	tagFilters: []
}
