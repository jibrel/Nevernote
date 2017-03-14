# Component Hierarchy

**Root**

**AuthFormContainer**
- AuthForm
	+ Errors

**HomeContainer**
- Home
- Sidebar
- Toolbar
- MessageBar

**NoteDetailContainer**
- Formatbar
	+ (NotebookIndex)
- NoteDetail

**NoteIndexContainer**
- NoteIndexHeader
- NoteIndex
	+ NoteIndexItem
		- NoteDetailContainer
			+ Formatbar
				- (NotebookIndex)
			+ NoteDetail

**ShortcutIndexContainer**
- ShortcutIndexHeader
- ShortcutIndex

**NotebookIndexContainer**
- NotebookIndexHeader
	+ Search
- NotebookIndex
	+ NotebookIndexItem

**TagIndexContainer**
- TagIndexHeader
	+ Search
- TagIndex
	+ TagIndexItem

**NewNoteFormContainer**
- Formatbar
	+ (NotebookIndex)
- NewNoteForm

**NewNotebookFormContainer**
- NewNotebookForm

**NewTagFormContainer**
- NewTagForm

**SearchPageContainer**
- SearchPage
	+ SearchSelect

**SearchResultsContainer**
- SearchResultsHeader
- NoteIndex
	+ NoteIndexItem
		- NoteDetailContainer
			+ Formatbar
				- (NotebookIndex)
			+ NoteDetail

**DeleteConfirmation**


# Routes

|Path                           | Component                |
|-------------------------------|--------------------------|
| /                             | Root                     |
| /signup                       | AuthFormContainer        |
| /login                        | AuthFormContainer        |
| /home                         | HomeContainer            |
| /home/note/:noteId            | NoteIndexContainer       |
| /home/note/:noteId/fullscreen | NoteDetailContainer      |
| /new-note                     | NewNoteFormContainer     |
| /new-notebook                 | NewNotebookFormContainer |
| /new-tag                      | NewTagFormContainer      |
| /search                       | SearchPageContainer      |
| /home/search-results          | SearchResultsContainer   |








