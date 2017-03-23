import React from 'react';

class TagSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: this.props.currentTags
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllTags();
  }

  handleClick(e) {
    this.setState({
      tags: this.state.tags.concat(parseInt(e.target.value))
    }, () => (
      this.props.onChange(this.state.tags) //
    ));
  }

  render() {
    const tags = this.props.tags;
    const tagKeys = Object.keys(tags);

    const tagItems = tagKeys.map(tagId => {
      let className = "";
      if (this.state.tags.includes(parseInt(tagId))) {
        className = "active-tag";
      }

      return (
        <div className="tag-item" onClick={ this.handleClick } value={ tagId } key={ tagId }>
          <p className={ className }>{ tags[tagId].name }</p>
        </div>
      );
    });

    return (
      <ul className="selector-scroll">
        <li className="selector-header">
          <div className="selector-header-text">
            <p>TAGS</p>
          </div>
        </li>

        { tagItems }
      </ul>
    );
  }
}

export default TagSelector;
