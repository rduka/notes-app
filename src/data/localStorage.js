import notesData from './notesMock';

//Save the state data (notes) on localstorage
export const saveNotes = (notes) => {
  try
  {
    const serializedState = JSON.stringify(notes);
    localStorage.setItem('notes', serializedState);
  }
  catch
  {
    // We'll just ignore it for now
  }
};

//Get all notes persisted in localstorage
export const loadNotes = () => {
  try
  {
    const serializedState = localStorage.getItem('notes');
    if (serializedState === null)
    {
      return notesData; //This should happen only once, the first time the app is opened in the browser
    }
    return JSON.parse(serializedState);
  }
  catch (error)
  {
    return []; //empty array if anything goes wrong
  }
};