Mar. 16:
- Got error "notebook must exist" when trying to make a new note w/ out notebook id, even though there was no validation for notebook id at db level or model level.
- Rails 5 belongs_to is automatically validated

- Validating for uniqueness of notebook title, but different users should be able to create notebooks w/ same title

Mar. 17:
- Asynchronous error, in component did mount for note index, was trying to set the state to store the index of the first note after fetching all the notes, but was trying to set state before this.props.notes were defined
- Solved with a .then, used debugger to check what this.state was
- Tested a console.log for .then, realized it would work

Mar. 20:
- Error with updating the note before rendering the new note
- Had to set a default state for currentNote in the container because was rendering asyncronously before fetching all notes from database
