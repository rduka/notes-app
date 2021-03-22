import Container from '@material-ui/core/Container';
import React from 'react';
import '../index.css';
import Search from './Search';
import ProgressBar from './ProgressBar';
import NoteList from './NoteList';
import NoteTab from './NoteTab';
import { connect } from "react-redux";

class NoteApp extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Container className="main-container" fixed>
        <Search 
          search = {this.props.search}
        />
        <NoteTab 
          category = {this.props.category}
        />
        <ProgressBar 
          notes = {this.props.notes}
        />
        <NoteList 
          search = {this.props.search} 
          category = {this.props.category}
          notes = {this.props.notes}
        />
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    search : state.search,
    category : state.category
  }
}

export default connect(mapStateToProps, null)(NoteApp);