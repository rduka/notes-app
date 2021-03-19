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
      notesData : notesData,
      searchValue : ""
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleSearchChange(value) {
    //the source should be the state but if I use that data will be lost after some filtering
    //for now i am using the notesData but might change later after i do some reading on best practices
    let filteredNotesData = notesData.filter(note => 
      note.description.toLowerCase().includes(value.toLowerCase()) ||
      note.title.toLowerCase().includes(value.toLowerCase()));
    this.setState({
      searchValue : value,
      notesData : filteredNotesData
    });
  }

  handleTabFilterChange(value) {
    this.setState({
      searchValue : value
    });
  }

  handleDeleteClick(id) {
    
    this.setState(prevState => {
      let filteredNotesData = prevState.notesData.filter(note => note.id !== id);
      return {
        searchValue : prevState.value,
        notesData : filteredNotesData
      }
    });
  }

  render() {
    return (
      <Container className="main-container" fixed>
        <Search searchValue = {this.state.searchValue} handleChange = {this.handleSearchChange} />
        <NoteTab searchValue = {this.state.searchValue} handleChange = {this.handleTabFilterChange}/>
        <ProgressBar notesData = {this.state.notesData}/>
        <NoteList 
          searchValue = {this.state.searchValue} 
          notesData = {this.state.notesData}
          handleDeleteClick = {this.handleDeleteClick}/>
      </Container>
    )
  }
}

export default NoteApp;
