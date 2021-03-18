import '../index.css';
import React from 'react';
import Search from './Search';
import ProgressBar from './ProgressBar';
import NoteList from './NoteList';
import NoteTab from './NoteTab';
import Container from '@material-ui/core/Container';
import notesData from '../data/NotesData';

class NoteApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notesData : notesData
    };
  }

  render() {
    return (
      <Container className="main-container" fixed>
        <Search />
        <NoteTab />
        <ProgressBar notesData = {this.state.notesData}/>
        <NoteList notesData = {this.state.notesData}/>
      </Container>
    )
  }
}

export default NoteApp;
