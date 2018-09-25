// Get all qt-tooltips
var tooltips = document.querySelectorAll("[data-qt]");
// If qt-tooltip elements exist
if (tooltips.length > 0){
    tooltips.forEach(function (e){

        // Vars
        var show, hide, fade;
        // Create qt-tooltip & Append to element
        e.innerHTML += '<span class="qt-tooltip" aria-hidden="true">' + e.dataset.qt + '</span>';
        // Get qt-tooltip
        var tooltip = e.getElementsByClassName('qt-tooltip')[0];
        // Cal qt-tooltip position
        var tooltip_w = tooltip.getBoundingClientRect();
        var tooltip_pos = '-' + (tooltip_w.width / 2) + 'px';

        // On mouseOver (hover)
        e.onmouseover = function(){
            show = setTimeout(function(){
                tooltip.style.display = 'block';
                tooltip.style.left = '50%';
                tooltip.style.marginLeft = tooltip_pos;
            }, 250);
            fade = setTimeout(function(){ tooltip.style.opacity = '1'; }, 500);
        }
        // On mouseOut
        e.onmouseout = function(){
            hide = setTimeout(function(){
                tooltip.style.display = 'none';
                tooltip.style.opacity = '0';
                tooltip.style.left = '-9999px';
            }, 150);
            clearTimeout(show);
            clearTimeout(fade);
        }
    });

    // Add css to document
    var style = document.createElement('style');
    var css = "[data-qt]{position:relative}.qt-tooltip,.qt-tooltip:before{position:absolute;background:#333}.qt-tooltip{line-height:1;margin-top:10px;top:100%;left:-9999px;padding:10px;pointer-events:none;color:#fff;text-decoration:none;white-space:nowrap;font-size:.75rem;opacity:0;z-index:1;border-radius:4px;transition:all 150ms ease-in-out}.qt-tooltip:before{content:'';display:block;top:-3px;left:50%;margin-left:-5px;width:10px;height:10px;transform:rotate(45deg)}";
    style.innerHTML = css;
    document.head.appendChild(style);
}