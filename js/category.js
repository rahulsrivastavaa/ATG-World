function toggleCategory(categoryId) {
  const categories = document.querySelectorAll('.category-content');
  const categoryButtons = document.querySelectorAll('.category');
  const linew = document.querySelector('.linew');

  categories.forEach(category => {
      category.style.display = 'none';
  });

  categoryButtons.forEach(button => {
      button.classList.remove('active');
  });

  const selectedCategory = document.getElementById(categoryId);
  
  if (selectedCategory) {
      selectedCategory.style.display = 'block';
      selectedCategory.classList.add('active');

      // Adjust the width of .linew based on the width of the selected category
      linew.style.width = selectedCategory.offsetWidth + 'px';
  }

  const selectedButton = document.querySelector(`.category[data-category-id="${categoryId}"]`);
  if (selectedButton) {
      selectedButton.classList.add('active');
  }
}
