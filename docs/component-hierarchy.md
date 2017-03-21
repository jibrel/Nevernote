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

**TagIndexContainer**
- TagIndex
  + TagIndexHeader
	 - Search
	+ TagIndexItem

**NoteEditContainer** // Update
- Sidebar
- NoteDetail
	+ Formatbar
		- (NotebookIndex)
    - StyleButton

**NewNoteFormContainer**
- NoteDetail

**FormContainer**
- Form

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
| /note/:noteId                 | NoteDetailContainer      |
| /shortcuts                    | ShortcutIndexContainer   |
| /notebooks                    | NotebookIndexContainer   |
| /tags                         | TagIndexContainer        |
| /note/:noteId/edit            | NoteEditContainer        |
| /new-note                     | NewNoteFormContainer     |
| /new-notebook                 | FormContainer            |
| /new-tag                      | FormContainer            |
| /search                       | SearchPageContainer      |
| /search-results               | SearchResultsContainer   |
