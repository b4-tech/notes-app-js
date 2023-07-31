import loadCategories from '../controllers/categoriesController';
import { categoriesList } from '../dom/domElements';
import { iconName } from '../helpers/helpers';
import { countNotes } from '../controllers/notesController';

const updateCategoriesList = () => {
  categoriesList.replaceChildren();
  const categories = loadCategories();
  categories.forEach(({ id, name }) => {
    const item2Div = document.createElement('div');
    item2Div.className = 'item2';
    item2Div.innerHTML = `
      <div class="item2__ico"><i class="material-icons">${iconName(id)}</i></div>
      <div class="item2__category">${name}</div>
      <div class="item2__active">${countNotes(id, true)}</div>
      <div class="item2__archived">${countNotes(id, false)}</div>
    `;
    categoriesList.appendChild(item2Div);
  });
};

export default updateCategoriesList;
