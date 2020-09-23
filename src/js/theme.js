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
function onChecked() {
  !inputRef.hasAttribute('checked')
    ? inputRef.setAttribute('checked', true)
    : inputRef.removeAttribute('checked');

  changeTheme();
}
/**
 * добавит 'light-theme', или 'dark-theme',
 */
function changeTheme() {
  !inputRef.hasAttribute('checked') ? lightTheme() : darkTheme();
}

function lightTheme() {
  bodyRef.classList.add('light-theme');
  bodyRef.classList.remove('dark-theme');
  const light = JSON.stringify(Theme.LIGHT);
  localStorage.setItem('theme', light);
}

function darkTheme() {
  bodyRef.classList.remove('light-theme');
  bodyRef.classList.add('dark-theme');
  const dark = JSON.stringify(Theme.DARK);
  localStorage.setItem('theme', dark);
}

// const savadTheme = localStorage.getItem('theme');
// if (savadTheme) {
//   console.log(savadTheme);
// }
