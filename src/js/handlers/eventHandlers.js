import { notesHeader } from '../dom/domElements';
import { handleEditButton } from './formHandlers';
import { handleActiveButton, handleDeleteButton, handleContent } from './noteHandlers';

const addEventListeners = () => {
  const noteElement = notesHeader.lastElementChild;
  const itemButtonEdit = noteElement.querySelector('.item__edit');
  const itemButtonActive = noteElement.querySelector('.item__active');
  const itemButtonDelete = noteElement.querySelector('.item__delete');
  const itemContent = noteElement.querySelector('.item__content');

  itemButtonEdit.addEventListener('click', handleEditButton);
  itemButtonActive.addEventListener('click', handleActiveButton);
  itemButtonDelete.addEventListener('click', handleDeleteButton);
  itemContent.addEventListener('click', handleContent);
};

export default addEventListeners;
