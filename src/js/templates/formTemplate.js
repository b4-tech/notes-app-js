import loadCategories from '../controllers/categoriesController';
import { formPlace } from '../dom/domElements';

const generateSelectOptions = () => {
  const categories = loadCategories();
  return categories.map((category) => `<option value="${category.id}">${category.name}</option>`).join('');
};

const showForm = () => {
  const selectOptions = generateSelectOptions();
  const formHTML = `
    <form class="form-note">
      <h1 class="form-note__title">Create Note</h1>
      <div class="form-note__label1">Name:</div>
      <input class="form-note__name">
      <div class="form-note__label2">Category:</div>
      <select class="form-note__select">
        ${selectOptions}
      </select>
      <div class="form-note__label3">Content:</div>
      <textarea class="form-note__content" cols="35" rows="10"></textarea>
      <div class="form-note__checkboxdiv">
        <input class="form-note__checkbox" type="checkbox" checked>
        <span class="form-note__label4">Active</span>           
      </div>
      <div>
        <input class="form-note__button1" type="submit" value="Create">
        <input class="form-note__button2" type="reset" value="Cancel">
      </div>
    </form>
  `;

  formPlace.insertAdjacentHTML('beforeBegin', formHTML);
};

export default showForm;
