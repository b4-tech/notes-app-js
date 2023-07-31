import { notesHeader } from '../dom/domElements';

import { iconName, dates, contentPreview } from '../helpers/helpers';
import { getCategory } from '../controllers/notesController';

import addEventListeners from '../handlers/eventHandlers';

const createNote = ({
  id, category, name, created, content,
}) => {
  notesHeader.insertAdjacentHTML('beforeEnd', `
 <div class="item" data-id=${id}>
  <div class="item__ico"><i class="material-icons">${iconName(category)}</i></div>
  <div class="item__name">${name}</div>
  <div class="item__created">${created}</div>
  <div class="item__category">${getCategory(category)}</div>
  <div class="item__content">${contentPreview(content)}</div>
  <div class="item__dates">${dates(content)}</div>
  <button class="item__edit"><i class="material-icons">create</i></button>
  <button class="item__active"><i class="material-icons">archive</i></button>
  <button class="item__delete"><i class="material-icons">delete</i></button>
</div>
`);
  addEventListeners();
};

export default createNote;
