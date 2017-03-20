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
    - StyleButton
	+ MessageBar

**ShortcutIndexContainer**
- ShortcutIndex
	+ ShortcutIndexHeader

**NotebookIndexContainer**
- NotebookIndex
  + NotebookIndexHeader
	 - Search
	+ NotebookIndexItem

**TagIndexContainer** // UPDATE FROM HERE DOWN!
- TagIndexHeader
	+ Search
- TagIndex
	+ TagIndexItem

**NoteEditContainer**
- Sidebar
- NoteDetail
	+ Formatbar
		- (NotebookIndex)
    - StyleButton

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
| /home/shortcuts               | ShortcutIndexContainer   |
| /home/notebooks               | NotebookIndexContainer   |
| /home/tags                    | TagIndexContainer        |
| /note/:noteId/edit            | NoteEditContainer        |
| /new-note                     | NewNoteFormContainer     |
| /new-notebook                 | NewNotebookFormContainer |
| /new-tag                      | NewTagFormContainer      |
| /search                       | SearchPageContainer      |
| /home/search-results          | SearchResultsContainer   |
