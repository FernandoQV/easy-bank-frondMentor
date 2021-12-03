import { $iconClose, $iconMenu, $nav } from '../helpers/domElements.js';
const hideIcon = (icon1, icon2) => {
    icon1.style.display = 'none';
    icon2.style.display = 'block';
};
export const show = (e) => {
    $nav.classList.toggle('showMenu');
    e.target === $iconMenu ? hideIcon($iconMenu, $iconClose) : hideIcon($iconClose, $iconMenu);
};
