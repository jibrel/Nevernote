import React from 'react';
import { Link } from 'react-router';

import DeleteConfirmation from '../delete_confirmation.jsx';

class TagIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteOpen: false
    }
    this.toggleDeletePage = this.toggleDeletePage.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.renderDeleteConfirmation = this.renderDeleteConfirmation.bind(this);
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
    this.props.deleteTag(this.props.tag.id)
      .then(() => this.props.router.push("/home"));
  }

  renderDeleteConfirmation() {
    if (this.state.deleteOpen) {
      return (
        <DeleteConfirmation
          name={ this.props.tag.name }
          type="tag"
          handleDelete={ this.handleDelete }
          handleCancel={ this.toggleDeletePage }>
        </DeleteConfirmation>
      );
    }
  }

  render() {
    const tag = this.props.tag;
    const tools = (
      <nav className="tag-index-tools">
        <i className="fa fa-star-o" aria-hidden="true"></i>
        <i className="fa fa-trash" onClick={ this.toggleDeletePage } aria-hidden="true"></i>
      </nav>
    );

    return (
      <div>
        <li className="tag-index-item">
          <Link to={ `/tag/${tag.id}` }>
            <div className="tag-item">
              <p>{ tag.name }</p>
            </div>
          </Link>
          { tools }
        </li>

        { this.renderDeleteConfirmation() }
      </div>
    );
  }
}

export default TagIndexItem;
