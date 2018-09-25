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

        // On mouseOver (hover)
        e.onmouseover = function(){
            // Cal qt-tooltip position
            var tooltip_w = tooltip.offsetWidth;
            var tooltip_pos = '-' + tooltip_w / 2 + 'px';

            // Show tooltip
            show = setTimeout(function(){
                tooltip.style.display = 'block';
                tooltip.style.left = '50%';
                tooltip.style.marginLeft = tooltip_pos;
            }, 250);
            // Animate tooltip
            fade = setTimeout(function(){ tooltip.style.opacity = '1'; }, 500);
        }
        // On mouseOut
        e.onmouseout = function(){
            // Hide tooltip
            tooltip.style.opacity = '0';
            tooltip.style.left = '-9999px';
            tooltip.style.marginLeft = "0";
            // Cancel actions
            clearTimeout(show);
            clearTimeout(fade);
        }
    });

    // Add css to document
    var style = document.createElement('style');
    var css = "[data-qt]{position:relative}.qt-tooltip,.qt-tooltip:before{position:absolute;background:#333}.qt-tooltip{display:block;line-height:1;margin-top:10px;top:100%;left:-9999px;padding:10px;pointer-events:none;color:#fff;text-decoration:none;white-space:nowrap;font-size:.75rem;opacity:0;z-index:1;border-radius:4px;-webkit-transition:opacity 150ms ease-in-out;transition:opacity 150ms ease-in-out}.qt-tooltip:before{content:'';display:block;top:-3px;left:50%;margin-left:-5px;width:10px;height:10px;transform:rotate(45deg)}";
    style.innerHTML = css;
    document.head.appendChild(style);
}
