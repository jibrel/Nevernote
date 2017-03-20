import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    }
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  update(e) {
    e.preventDefault();
    this.setState({ input: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.formType === "new-notebook") {
      const notebook = {
        title: this.state.input,
        author_id: this.props.author_id
      }
      this.props.processForm({ notebook });
    }
    else {
      const tag = {
        name: this.state.input
      }
      this.props.processForm({ tag });
    }
    this.goBack(e);
  }

  goBack(e) {
    e.preventDefault();
    path = (this.props.formType === "new-notebook") ? "/notebooks" : "/tags";
    this.props.router.push(path); // can you just go back a page?
  }

  render() {
    const notebook = (this.props.formType === "new-notebook");

    const icon = (notebook) ?
    const header = (notebook) ? "CREATE NOTEBOOK" : "CREATE TAG";
    const placeholder = (notebook) ? "Title your notebook" : "Name your tag";
    const buttonText = (notebook) ? "Create notebook" : "Create tag";

    return (
      <div className="new">
        { icon }

        <h2 className="new-header">{ header }</h2>

        <form className="new-form" onSubmit={ this.handleSubmit }>
          <input
            className="new-input"
            onChange={ this.update }
            type="text"
            placeholder={ placeholder }
            value={ this.state.input }>
          </input>

          <div className="new-buttons">
            <input className="new-button submit" type="submit"></input>
            <button className="new-button cancel" onClick={ this.goBack }></button>
          </div>
        </form>
      </div>
    );
  }
}
