import updateCategoriesList from '../templates/statisticsTemplate';
import { notesHeader } from '../dom/domElements';
import { deleteNote, loadNotes, activeSwitchNote } from '../controllers/notesController';
import { contentPreview } from '../helpers/helpers';

const handleActiveButton = (event) => {
  const noteDiv = event.target.parentNode.parentNode;
  const id = noteDiv.getAttribute('data-id');
  notesHeader.removeChild(noteDiv);
  activeSwitchNote(id);
  updateCategoriesList();
};

const handleDeleteButton = (event) => {
  const noteDiv = event.target.parentNode.parentNode;
  const id = noteDiv.getAttribute('data-id');
  notesHeader.removeChild(noteDiv);
  deleteNote(id);
  updateCategoriesList();
};

const handleContent = (e) => {
  const noteDiv = e.target.parentNode;
  const id = noteDiv.getAttribute('data-id');

  const note = loadNotes().find((el) => el.id === +id);
  e.target.classList.toggle('full');
  if (e.target.classList.contains('full')) {
    e.target.innerHTML = note.content;
  } else {
    e.target.innerHTML = contentPreview(note.content);
  }
};

export { handleActiveButton, handleDeleteButton, handleContent };
