import React from 'react';
import { Link } from 'react-router';

class ShortcutIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.deleteShortcut(this.props.shortcut.id);
  }

  render() {
    const shortcut = this.props.shortcut;

    return (
      <li className="shortcut-index-item">
        <Link to={ shortcut.route }>
          <div className="shortcut-item">
            <i className="fa fa-file-text-o" aria-hidden="true"></i>
            <p>{ shortcut.name }</p>
          </div>
        </Link>
        <i className="fa fa-minus-circle" onClick={ this.handleDelete } aria-hidden="true"></i>
      </li>
    );
  }
}

export default ShortcutIndexItem;
