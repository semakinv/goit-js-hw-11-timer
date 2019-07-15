import './styles.css';
import theme from './js/theme';
import menuItem from './menu.json';
import menuItemTemplate from './templates/menu.hbs';

const refs = {
  menuList: document.getElementById('menu'),
};
buildMenuFeed(menuItem);
function buildMenuFeed(menuItem) {
  const markup = menuItem.map(menu => menuItemTemplate(menu)).join(' ');
  refs.menuList.insertAdjacentHTML('beforeend', markup);
}
