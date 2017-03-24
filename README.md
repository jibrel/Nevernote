# README

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions




Note: This README was created using Nevernote

Nevernote

Nevernote live demo

Nevernote is a full-stack web application built using Ruby on Rails on the backend, a PostgreSQL database, and React.js on the frontend.  It imitates the basic functionality and appearance of Evernote.


Features and Implementation

Rich Text Editing

Rich text editing is implemented using Draft.js.  Note content is stored in the database as a JSON string, which maps different styles to different sections of text.  Selecting a note to view in the browser fires an AJAX request, and stores that note's information in the global state, as currentNote.The NoteDetail component then parses the note body, and converts it to a Draft.js EditorState:

const content = convertFromRaw(JSON.parse(note.body));

this.setState({ editorState: EditorState.createWithContent(content) });


Rendering the <Editor /> on the page, passing in the editorState and onChange handlers, then allows the user to type in the browser and update the note.  Notes are automatically saved to the database when the note detail component receives new props or unmounts.  The EditorState is converted back to raw form, using convertToRaw, and the raw content is then stringified using JSON.stringify(rawContent).

Some libraries, such as Quill, provide a ready-to-use toolbar for rich text editing, but I decided instead to implement my own format bar and style buttons.  The NoteDetail component defines two click handlers, toggleInlineStyle and toggleBlockStyle, that take a style type as a string and apply it to the EditorState:

changeBody(editorState) {
 this.setState({ editorState });
}

toggleInlineStyle(type) {
  this.changeBody(RichUtils.toggleInlineStyle(this.state.editorState, type));
}

toggleBlockStyle(type) {
    this.changeBody(RichUtils.toggleBlockType(this.state.editorState, type));
  }

These two toggle style methods are passed down to the InlineStyleControls and BlockStyleControls components respectively.  Both style controls components render a collection of StyleButton components.  These are created by mapping over an array of objects specifying each style type as a string, and the corresponding class for the font-awesome icon.  With the method for toggling the style in EditorState being passed down twice, it was important to make sure the final event handler on the StyleButton was only trying to handle one event!

I also defined my own custom styleMap, which specifies styling for code blocks and strikethroughs.  The styleMap is passed to the Editor as a prop.


Notebooks and Tags

The noteIndex component lists all the notes a user has created at the route "/home", but can also select notes by notebook or by tag.  Before rendering noteIndex, the notes in the store are passed through a selector, which matches them against notebookId or tagId in the params.  The routes "/notebook/:notebookId" and "/tag/:tagId" are nested under "/home", and the NoteIndexHeader component also uses the pathname to determine the appropriate header to display (either the notebook title, the tag name, or just NOTES).

The note detail component renders two dropdowns on click of the corresponding button, allowing the user to assign the note to a notebook, or attach tags to a note.  Attaching tags is the more complicated of the two because a note can belong to only one notebook, but a note has many tags.

In the TagSelector component, tag id's are stored as an array in a local state.  On clicking a tag item in the dropdown, the local state is updated to either add or remove that tag id.  Then the click handler calls changeTags, a method on the note detail component, updating it's local state so that it can send the correct array of tag id's back to the database.  changeTags only saves the note to the database if you are editing a note.  It waits to submit all note information at once if you are creating a new note.

changeTags(tagIds) {
    this.setState({
      tags: tagIds
    }, () => {
      const note = {
        id: this.props.params.noteId,
        tag_ids: this.state.tags
      };
      if (this.props.formType === "edit") {
        this.props.updateNote(note);
      }
    });
  }


On the backend, tags are connected to notes through a join table, taggings.  Because the correct associations are set up between tags, notes, and taggings in the rails models, the NotesController can accept an array of tag_ids, which will automatically create the right taggings.

def note_params
    params.require(:note).permit(:id, :title, :body, :author_id, :notebook_id, tag_ids: [])
  end

The frontend does not need to access taggings, because tags are included when fetching notes from the database.  For example, from the notes controller:

def index
    @notes = Note.includes(:tags).where(author_id: current_user.id)
    render :index
  end

And JSON is returned from the backend like so:

json.extract! note, :id, :title, :body, :author_id, :notebook_id, :tag_ids



Future Features

Search by notebook, tag, or note body text
Add shortcuts to notes, notebooks, and tags
Embed images and pdf files in notes
Additional rich text editing (font, font size, font color, etc.)
