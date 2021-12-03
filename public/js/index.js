import { show } from "./ux/showMenu.js";
import { $iconClose, $iconMenu } from "./helpers/domElements.js";
$iconMenu.addEventListener("click", show);
$iconClose.addEventListener("click", show);
window.addEventListener("resize", (_) => {
    if (window.innerWidth >= 768) {
        $iconMenu.style.display = 'none';
        $iconClose.style.display = 'none';
        return;
    }
    $iconMenu.style.display = 'block';
}, false);
