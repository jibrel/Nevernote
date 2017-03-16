# Component Hierarchy

**Root**

**AuthFormContainer**
- AuthForm
	+ Errors

**HomeContainer**
- Home
 	+ Sidebar
	+ NoteIndexContainer
		- NoteIndex
			+ NoteIndexHeader
			+ NoteIndexItem
	+ NoteDetailContainer
		- Toolbar
		- Formatbar
			+ (NotebookIndex)
		- MessageBar
		- NoteDetail

**NoteIndexContainer**
- NoteIndex
	+ NoteIndexHeader
	+ NoteIndexItem

**NoteDetailContainer**
- Toolbar
- Formatbar
	+ (NotebookIndex)
- MessageBar
- NoteDetail

**NoteEditContainer**
- Sidebar
- Formatbar
	+ (NotebookIndex)
- NoteDetail

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
| /home/note/:noteId            | NoteDetailContainer      |
| /note/:noteId/edit            | NoteEditContainer        |
| /new-note                     | NewNoteFormContainer     |
| /new-notebook                 | NewNotebookFormContainer |
| /new-tag                      | NewTagFormContainer      |
| /search                       | SearchPageContainer      |
| /home/search-results          | SearchResultsContainer   |
