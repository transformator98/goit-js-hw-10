const inputRef = document.querySelector('.js-switch-input');
const bodyRef = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
/**
 * Записываем в localStorage
 * localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));
 * localStorage.setItem('theme', JSON.stringify(Theme.DARK));
 *
 * Удаление
 * localStorage.remove('theme');
 *
 */

inputRef.addEventListener('click', onChecked);

/**
 * Добавлеие и удаление checked
 *
 */
// function onChecked() {
//   !inputRef.hasAttribute('checked')
//     ? inputRef.setAttribute('checked', true)
//     : inputRef.removeAttribute('checked');

//   changeTheme();
//   const savadTheme = localStorage.getItem('theme');
//   if (savadTheme === '"light-theme"') {
//     console.log(savadTheme);
//     console.log(typeof savadTheme);
//   }
//   if (savadTheme === '"dark-theme"') {
//     console.log(savadTheme);
//     console.log(typeof savadTheme);
//   }
// }

function onChecked() {
  if (!inputRef.hasAttribute('checked')) {
    inputRef.setAttribute('checked', true);
    const dark = JSON.stringify(Theme.DARK);
    localStorage.setItem('theme', dark);
  } else {
    inputRef.removeAttribute('checked');
    const light = JSON.stringify(Theme.LIGHT);
    localStorage.setItem('theme', light);
  }
  changeTheme();
}

/**
 * добавит 'light-theme', или 'dark-theme',
 */
// function changeTheme() {
//   !inputRef.hasAttribute('checked') ? lightTheme() : darkTheme();
// }

function changeTheme() {
  localStorage.getItem('theme') === '"light-theme"'
    ? lightTheme()
    : darkTheme();
}

function lightTheme() {
  bodyRef.classList.add('light-theme');
  bodyRef.classList.remove('dark-theme');
}

function darkTheme() {
  bodyRef.classList.remove('light-theme');
  bodyRef.classList.add('dark-theme');
}

// const savadTheme = localStorage.getItem('theme');
// if (savadTheme) {
//   console.log(savadTheme);
// }
