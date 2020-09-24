const inputRef = document.querySelector('.js-switch-input');
const bodyRef = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

inputRef.addEventListener('click', applyTheme);

function applyTheme() {
  const theme = bodyRef.classList.contains('dark-theme');
  theme ? lightTheme() : darkTheme();
  onChecked();
}

checkTheme();

function checkTheme() {
  const theme = localStorage.getItem('theme');

  if (theme === '"light-theme"') {
    lightTheme();
  }
  if (theme === '"dark-theme"') {
    darkTheme();
    onChecked();
  }
}

function lightTheme() {
  bodyRef.classList.add('light-theme');
  bodyRef.classList.remove('dark-theme');

  lightThemeLocalStorage();
}

function darkTheme() {
  bodyRef.classList.remove('light-theme');
  bodyRef.classList.add('dark-theme');

  darkThemeLocalStorage();
}

function lightThemeLocalStorage() {
  const light = JSON.stringify(Theme.LIGHT);
  localStorage.setItem('theme', light);
}

function darkThemeLocalStorage() {
  const dark = JSON.stringify(Theme.DARK);
  localStorage.setItem('theme', dark);
}

function onChecked() {
  !inputRef.hasAttribute('checked')
    ? inputRef.setAttribute('checked', true)
    : inputRef.removeAttribute('checked');
}
