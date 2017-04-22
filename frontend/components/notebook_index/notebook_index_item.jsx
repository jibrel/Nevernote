import React from 'react';
import { Link } from 'react-router';

import DeleteConfirmation from '../delete_confirmation.jsx';
import { toggleStar } from '../../util/star_util.js';

class NotebookIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteOpen: false
    }
    this.addShortcut = this.addShortcut.bind(this);
    this.toggleDeletePage = this.toggleDeletePage.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.renderDeleteConfirmation = this.renderDeleteConfirmation.bind(this);
  }

  addShortcut() {
    const path = `/notebook/${this.props.notebook.id}`;
    const shortcut = {
      name: this.props.notebook.title,
      route: path,
      author_id: this.props.notebook.author_id
    };
    this.props.createShortcut({ shortcut })
      .then(() => this.props.router.push(path))
      .then(() => this.props.receiveErrors(["Shortcut created."], "main"));
  }

  toggleDeletePage() {
    if (this.state.deleteOpen) {
      this.setState({ deleteOpen: false });
    }
    else {
      this.setState({ deleteOpen: true });
    }
  }

  handleDelete() {
    this.props.deleteNotebook(this.props.notebook.id)
      .then(() => this.props.router.push("/home"));
  }

  renderDeleteConfirmation() {
    if (this.state.deleteOpen) {
      return (
        <DeleteConfirmation
          name={ this.props.notebook.title }
          type="notebook"
          handleDelete={ this.handleDelete }
          handleCancel={ this.toggleDeletePage }>
        </DeleteConfirmation>
      );
    }
  }

  render() {
    const notebook = this.props.notebook;
    const count = this.props.count;
    const tools = (
      <nav className="notebook-index-tools">
        <i className="fa fa-star-o" onClick={ this.addShortcut } onMouseEnter={ toggleStar } onMouseLeave={ toggleStar } aria-hidden="true"></i>
        <i className="fa fa-trash" onClick={ this.toggleDeletePage } aria-hidden="true"></i>
      </nav>
    );

    return (
      <div>
        <li className="notebook-index-item">
          { tools }
          <Link to={ `/notebook/${notebook.id}` }>
            <div className="notebook-index-text">
              <h5>{ notebook.title }</h5>
              <p>{ count } notes</p>
            </div>
          </Link>
        </li>

        { this.renderDeleteConfirmation() }
      </div>
    );
  }
}

export default NotebookIndexItem;
