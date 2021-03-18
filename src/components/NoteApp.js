import '../index.css';
import Search from './Search';
import ProgressBar from './ProgressBar';
import NoteList from './NoteList';
import NoteTab from './NoteTab';
import Container from '@material-ui/core/Container';

function NoteApp() {
  return (
    <Container className="main-container" fixed>
      <Search />
      <NoteTab />
      <ProgressBar />
      <NoteList />
    </Container>
  );
}

export default NoteApp;
