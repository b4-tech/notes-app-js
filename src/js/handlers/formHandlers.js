import { notesHeader, buttonCreate } from '../dom/domElements';
import showForm from '../templates/formTemplate';
import {
  recordNote, loadNotes, updateNote, getCategory,
} from '../controllers/notesController';
import updateCategoriesList from '../templates/statisticsTemplate';
import scrollToElement from '../helpers/scrollToElement';
import { updateNotes, switcher } from '../view/view';

import {
  iconName, contentPreview, dates,
} from '../helpers/helpers';

const buttonCreateHandler = () => {
  notesHeader.replaceChildren();
  buttonCreate.classList.add('hidden');
  showForm();
  const noteAdd = document.querySelector('.form-note');
  scrollToElement(noteAdd);
  const buttonOk = noteAdd.querySelector('.form-note__button1');
  buttonOk.addEventListener('click', (e) => {
    const noteEdit = document.querySelector('.form-note');
    e.preventDefault();
    const name = noteEdit.querySelector('.form-note__name').value;
    const category = noteEdit.querySelector('.form-note__select').value;
    const content = noteEdit.querySelector('.form-note__content').value;
    const checkbox = noteEdit.querySelector('.form-note__checkbox').checked;
    if (name === '') {
      alert('Enter note name');
    } else {
      recordNote(name, category, content, checkbox);
      noteAdd.remove();
      updateNotes('active');
      updateCategoriesList();
      buttonCreate.classList.remove('hidden');
    }
  });
  const buttonCancel = noteAdd.querySelector('.form-note__button2');
  buttonCancel.addEventListener('click', (e) => {
    e.preventDefault();
    noteAdd.remove();
    updateNotes('active');
    updateCategoriesList();
    buttonCreate.classList.remove('hidden');
  });
};

const handleEditButton = (event) => {
  const noteDiv = event.target.parentNode.parentNode;
  const id = +noteDiv.getAttribute('data-id');

  buttonCreate.classList.add('hidden');
  if (document.querySelector('.form-note')) {
    document.querySelector('.form-note').remove();
    document.querySelector('.hidden').classList.remove('hidden');
  }
  noteDiv.classList.add('hidden');
  showForm();
  const noteEdit = document.querySelector('.form-note');
  scrollToElement(noteEdit);

  const note = loadNotes().find((el) => el.id === +id);
  noteEdit.querySelector('.form-note__name').value = note.name;
  noteEdit.querySelector('.form-note__select').value = note.category;
  noteEdit.querySelector('.form-note__content').value = note.content;
  noteEdit.querySelector('.form-note__checkbox').checked = note.active;
  noteEdit.querySelector('.form-note__title').innerHTML = 'Edit note';
  noteEdit.querySelector('.form-note__button1').value = 'Save';

  const buttonOk = noteEdit.querySelector('.form-note__button1');
  buttonOk.addEventListener('click', (e) => {
    e.preventDefault();
    const name = noteEdit.querySelector('.form-note__name').value;
    const category = Number(noteEdit.querySelector('.form-note__select').value);
    const content = noteEdit.querySelector('.form-note__content').value;
    const checkbox = noteEdit.querySelector('.form-note__checkbox').checked;
    if (name === '') {
      alert('Enter note name');
    } else {
      updateNote(id, name, category, content, checkbox);
      noteEdit.remove();
      noteDiv.querySelector('.material-icons').innerHTML = iconName(note.category);
      noteDiv.querySelector('.item__name').innerHTML = name;
      noteDiv.querySelector('.item__category').innerHTML = getCategory(category);
      noteDiv.querySelector('.item__content').innerHTML = contentPreview(content);
      noteDiv.querySelector('.item__dates').innerHTML = dates(content);
      if (note.active) {
        switcher('active');
      } else {
        switcher('archived');
      }
      updateCategoriesList();
      buttonCreate.classList.remove('hidden');
    }
  });
  const buttonCancel = noteEdit.querySelector('.form-note__button2');
  buttonCancel.addEventListener('click', (e) => {
    e.preventDefault();
    noteEdit.remove();
    buttonCreate.classList.remove('hidden');
    noteDiv.classList.remove('hidden');
  });
};

export { buttonCreateHandler, handleEditButton };
