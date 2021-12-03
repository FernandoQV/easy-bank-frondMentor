import { show } from "./ux/showMenu.js";
import { $iconClose, $iconMenu, $nav } from "./helpers/domElements.js";
//show menu
$iconMenu.addEventListener("click", show);
$iconClose.addEventListener("click", show);
//hidden icons min-width:768px
window.addEventListener(
  "resize",
  (_):void => {      
    if (window.innerWidth >= 768) {
      $iconMenu.style.display='none'
      $iconClose.style.display='none'
      return
    }
    $iconMenu.style.display='block'
    //$iconClose.style.display='block'
    
  },
  false
);
