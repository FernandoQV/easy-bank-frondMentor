import { $iconClose, $iconMenu, $nav} from '../helpers/domElements.js'
const hideIcon=(icon1:HTMLButtonElement,icon2:HTMLButtonElement):void=>{
    icon1.style.display='none'
    icon2.style.display='block'
}
export const show=(e:Event)=>{
$nav.classList.toggle('showMenu')
e.target===$iconMenu?hideIcon($iconMenu,$iconClose):hideIcon($iconClose,$iconMenu)
}