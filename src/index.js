import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NoteApp from './components/NoteApp';
import { Provider } from 'react-redux';
import store from './store/notesStore'

ReactDOM.render(
  <Provider store={store}>
    <NoteApp />
  </Provider>,
  document.getElementById('root')
);