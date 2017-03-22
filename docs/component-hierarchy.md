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
  + MessageBar

**NoteIndexContainer**
- NoteIndex
	+ NoteIndexHeader
	+ NoteIndexItem

**NoteDetailContainer**
- NoteDetail
	+ Toolbar
	+ Formatbar
		- NotebookSelector
    - StyleButton

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

**NewNoteFormContainer**
- NoteDetail

**FormContainer**
- Form

**SearchPageContainer** // Bonus
- SearchPage
	+ SearchSelect

**SearchResultsContainer** // Bonus
- SearchResultsHeader
- NoteIndex
	+ NoteIndexItem
		- NoteDetailContainer
			+ Formatbar
				- NotebookSelector
        - StyleButton
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
| /notebook/:notebookId         | NoteDetailContainer      | ??
| /tag/:tagId                   | NoteDetailContainer      | ??
| /new-note                     | NewNoteFormContainer     |
| /new-notebook                 | FormContainer            |
| /new-tag                      | FormContainer            |
| /search                       | SearchPageContainer      |
| /search-results               | SearchResultsContainer   |
