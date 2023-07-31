const scrollToElement = (element) => {
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition - 20;
  window.scrollBy({
    top: offsetPosition,
    behavior: 'smooth',
  });
};

export default scrollToElement;
