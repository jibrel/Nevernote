import React from 'react';
import ReactDOM from 'react-dom';
import { Editor, EditorState, ContentState, RichUtils } from 'draft-js';

import StyleButton from './style_button.jsx';

export const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 12,
    padding: 5
  },
  STRIKETHROUGH: {
    textDecoration: "line-through"
  }
};

export const blockStyleFn = (contentBlock) => {
  switch(contentBlock.getType()) {
    case "unordered-list-item":
      return "ul-block-style";
    case "ordered-list-item":
      return "ol-block-style";
    default:
      return null;
  }
};

export const INLINE_STYLES = [
  { class: "fa fa-bold", style: 'BOLD'},
  { class: "fa fa-italic", style: 'ITALIC'},
  { class: "fa fa-underline", style: 'UNDERLINE'},
  { class: "fa fa-strikethrough", style: 'STRIKETHROUGH'},
  { class: "fa fa-code", style: 'CODE'}
];

export const InlineStyleControls = ({ editorState, onToggle }) => {
  var currentStyle = editorState
    .getCurrentInlineStyle();

  return (
    <div className="style-controls">
      { INLINE_STYLES.map(type =>
        <StyleButton
          key={ type.style }
          class={ type.class }
          style={ type.style }
          active={ currentStyle.has(type.style) }
          onToggle={ onToggle }
        />
      )}
      <p></p>
    </div>
  );
};

export const BLOCK_TYPES = [
  { class: "fa fa-list-ul", style: "unordered-list-item"},
  { class: "fa fa-list-ol", style: "ordered-list-item"}
];

export const BlockStyleControls = ({ editorState, onToggle }) => {
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <div className="style-controls">
      { BLOCK_TYPES.map(type =>
        <StyleButton
          key={ type.style }
          class={ type.class }
          style={ type.style }
          active={ type.style === blockType }
          onToggle={ onToggle }
        />
      )}
      <p></p>
    </div>
  );
};
