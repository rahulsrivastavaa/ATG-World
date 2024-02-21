var searchInput = document.getElementById('search-input');
    var editIcon = document.getElementById('edit-icon').firstElementChild;

    searchInput.addEventListener('input', function () {
        if (this.value.trim() !== "Noida, India") {
            editIcon.classList.remove('fa-solid fa-pen');
            editIcon.classList.add('fa-solid fa-x');
        } else {
            editIcon.classList.remove('fa-solid fa-x');
            editIcon.classList.add('fa-solid fa-pen');
        }
    });