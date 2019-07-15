import Storage from './storage';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// Функционал смены темы
const swichTheme = document.getElementById('theme-switch-control');
const bodySelector = document.querySelector('body');
//проверка и установка предыдущей темы
if (Storage.load('theme') === 'dark-theme') {
  bodySelector.classList.add(Theme.DARK);
  //установка чекбокса в соответствии с темой
  swichTheme.setAttribute('checked', true);
}
//Смена темы с помощью чекбокса
swichTheme.addEventListener('change', changeTheme);
function changeTheme(event) {
  if (swichTheme.checked === false) {
    bodySelector.classList.remove(Theme.DARK);
    bodySelector.classList.add(Theme.LIGHT);

    Storage.save('theme', 'light-theme');
  } else {
    bodySelector.classList.remove(Theme.LIGHT);
    bodySelector.classList.add(Theme.DARK);
    Storage.save('theme', 'dark-theme');
  }
}
