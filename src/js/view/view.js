import { loadNotes } from '../controllers/notesController';
import {
  notesHeader,
  activeButton,
  archivedButton,
  buttonCreate,
} from '../dom/domElements';

import createNote from '../templates/noteTemplate';
import updateCategoriesList from '../templates/statisticsTemplate';

import { buttonCreateHandler } from '../handlers/formHandlers';

const updateNotes = (status) => {
  notesHeader.replaceChildren();
  buttonCreate.classList.remove('hidden');
  const notes = loadNotes(status);
  notes.forEach((note) => createNote(note));
};

const switcher = (status) => {
  if (status === 'active') {
    activeButton.classList.add('active');
    archivedButton.classList.remove('active');
  } else if (status === 'archived') {
    archivedButton.classList.add('active');
    activeButton.classList.remove('active');
  }
  updateNotes(status);
};

buttonCreate.addEventListener('click', (e) => buttonCreateHandler(e));
activeButton.addEventListener('click', () => switcher('active'));
archivedButton.addEventListener('click', () => switcher('archived'));

export { updateNotes, updateCategoriesList, switcher };
