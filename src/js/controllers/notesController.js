import Notes from '../models/notes';
import Categories from '../models/categories';

import { getFreeId, getDateCreated } from '../helpers/helpers';

const getCategory = (noteId) => {
  const category = Categories.find((cat) => cat.id === noteId);
  return category ? category.name : undefined;
};

const countNotes = (categoryId, isActive) => Notes.filter((note) => note.active === isActive && note.category === categoryId).length;

const deleteNote = (noteIdDel) => {
  const index = Notes.findIndex((note) => note.id === +noteIdDel);
  Notes.splice(index, 1);
};

const loadNotes = (param) => {
  switch (param) {
    case 'active':
      return Notes.filter((note) => note.active);
    case 'archived':
      return Notes.filter((note) => !note.active);
    default:
      return Notes;
  }
};

const recordNote = (name, category, content, active) => {
  const note = {
    id: getFreeId(),
    name,
    created: getDateCreated(),
    content,
    category: Number(category),
    active,
  };
  Notes.push(note);
};

const activeSwitchNote = (switchId) => {
  const index = Notes.findIndex((note) => note.id === +switchId);
  Notes[index].active = !Notes[index].active;
};

const updateNote = (id, name, category, content, checkbox) => {
  const index = Notes.findIndex((note) => note.id === Number(id));
  if (index !== -1) {
    const updatedProperties = {
      name,
      category,
      content,
      active: checkbox,
    };
    Object.assign(Notes[index], updatedProperties);
  }
};

export {
  getCategory, deleteNote, loadNotes, recordNote, activeSwitchNote, updateNote, countNotes,
};
