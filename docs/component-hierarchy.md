# Component Hierarchy

**Root**

**AuthFormContainer**
- AuthForm

**HomeContainer**
- Home
 	+ Sidebar
	+ NoteIndexContainer
		- NoteIndex
			+ NoteIndexHeader
			+ NoteIndexItem

**NoteIndexContainer**
- NoteIndex
	+ NoteIndexHeader
	+ NoteIndexItem

**NoteDetailContainer**
- NoteDetail
	+ Toolbar
	+ Formatbar
		- (NotebookIndex)
	+ MessageBar

**NoteEditContainer**
- Sidebar
- NoteDetail
	+ Formatbar
		- (NotebookIndex)

**ShortcutIndexContainer**
- ShortcutIndex
	+ ShortcutIndexHeader

**NotebookIndexContainer** // UPDATE FROM HERE DOWN!
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
