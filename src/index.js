import './styles.css';
import theme from './js/theme';
import menuItem from './menu.json';
import menuItemTemplate from './templates/menu.hbs';

//const oneItem = menuItemTemplate(menuItem[1]);

const refs = {
  menuList: document.getElementById('menu'),
};
// refs.menuList.insertAdjacentHTML('beforeend', oneItem);
buildMenuFeed(menuItem);
function buildMenuFeed(menuItem) {
  const markup = menuItem.map(menu => menuItemTemplate(menu)).join(' ');
  refs.menuList.insertAdjacentHTML('beforeend', markup);
}
