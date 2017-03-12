Root
	Header

AuthFormContainer
	AuthForm

HomeContainer
	Home
	Sidebar

MessageBar

NoteDetailContainer
	Toolbar
	Formatbar
		(NotebookIndex)
	NoteDetail

NoteIndexContainer
	NoteIndexHeader
	NoteIndex
		NoteIndexItem
			NoteDetailContainer
				Toolbar
				Formatbar
					(NotebookIndex)
				NoteDetail

ShortcutIndexContainer
	ShortcutIndexHeader
	ShortcutIndex

NotebookIndexContainer
	NotebookIndexHeader
		Search
	NotebookIndex
		NotebookIndexItem

TagIndexContainer
	TagIndexHeader
		Search
	TagIndex

NewNoteFormContainer
	NewNoteForm

NewNotebookFormContainer
	NewNotebookForm

NewTagFormContainer
	NewTagForm

SearchPageContainer
	SearchPage
		SearchSelect

SearchResultsContainer
	SearchResultHeader
	NotesIndex
		NotesIndexItem
			NoteDetailContainer
				Toolbar
				Formatbar
					(NotebookIndex)
				NoteDetail

DeleteConfirmation


Routes:

/ --> Root

/signup	--> AuthFormContainer

/login --> AuthFormContainer

/home --> HomeContainer

/home/note/:noteId --> NoteIndexContainer or NoteDetailContainer

/new-note --> NewNoteFormContainer

/new-notebook --> NewNotebookFormContainer

/new-tag --> NewTagFormContainer

/search --> SearchPageContainer

/home/search-results --> SearchResultsContainer






