import Notes from '../models/notes';

const iconName = (categoryId) => {
  switch (categoryId) {
    case 1: return 'local_grocery_store';
    case 2: return 'lightbulb_outline';
    case 3: return 'help_outline';
    default: return 'info_outline';
  }
};

const getFreeId = () => {
  const maxId = Math.max(...Notes.map((note) => note.id));
  return Number.isFinite(maxId) ? maxId + 1 : 0;
};

const getDateCreated = () => new Date().toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

const dates = (text) => {
  const result = text.match(/\d+\/\d+\/\d+/g) || [];
  return result.join(', ');
};

const contentPreview = (content, maxLength = 15) => (content.length > maxLength ? `${content.slice(0, maxLength)}...` : content);

export {
  iconName, getFreeId, getDateCreated, dates, contentPreview,
};
