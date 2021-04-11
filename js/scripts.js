// ------------------------------------------------------------------------------------------------
// Event listeners --------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------

window.onload = function() {
    
    this.update();
}

window.onresize = function() {
    
    this.update();
}

window.onscroll = function() {

    this.update();
}

// ------------------------------------------------------------------------------------------------
// Functions called from event --------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------

// Updates debug information if any.
function update() {
    
    $("viewportSizes").innerHTML  = "<span class=\"key\">Viewport sizes</span>"
                                  + "<ul class=\"list\">"
                                  + "    <li class=\"item\"><span class=\"key\">Inner</span> " + window.innerWidth + " x " + window.innerHeight + " px</li>"
                                  + "    <li class=\"item\"><span class=\"key\">Outer</span> " + window.outerWidth + " x " + window.outerHeight + " px</li>"
                                  + "</ul>";

    $("screenInformation").innerHTML = "<span class=\"key\">Screen information</span>"
                                     + "<ul class=\"list\">"
                                     + "    <li class=\"item\"><span class=\"key\">Scroll value</span>" + document.documentElement.scrollTop        + "</li>"
                                     + "    <li class=\"item\"><span class=\"key\">Zoom level</span>"   + Math.round(window.devicePixelRatio) * 100 + " %</li>"         
                                     + "</ul>";
                
}

// ------------------------------------------------------------------------------------------------

//
function handleScroll() {

    // Exits for large screens.
    if (window.outerWidth > 1440 ) {
        return;
    }
    
    // Hides the profile picture and keep the name at the top of the page.
    if ( window.outerWidth < 1440 && document.documentElement.scrollTop > 25 ) {

        $("profile-name").style.position = "fixed";
        
        $("profile-name").style.left = "0px";
        $("profile-name").style.right = "0px";
        $("profile-name").style.width = "100%";
        
        $("profile-name").style.marginTop = "-5px";
        
        $("profile-name").style.background = "white";
        
        $("profile-name").style.paddingTop = "30px"; // 25px by default
        
        // Hide profile picture
        $("profile-picture").style.display = "none";
    }
    
    // Adjusts the margin of the profile-name element to hide extra behind content.
    if ( window.outerWidth > 650 && window.outerWidth < 1440 && document.documentElement.scrollTop < 25 ) {

        $("profile-name").style.marginTop = "0px";
    }
    
    // Adjusts margins.
    if ( window.outerWidth > 650 && window.outerWidth < 1440 ) {

        $("profile").style.marginTop = "5px";
    }
    
    if ( window.outerWidth < 650 ) {
        
        $("profile").style.marginTop = "150px";
        
        $("profile-name").style.marginTop = "-205px";
        $("profile-name").style.marginBottom = "-0px";
    }
    
    $("right-bottom").style.display = "none";
}

// ------------------------------------------------------------------------------------------------
// Miscellaneous functions ------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------

// Returns an alias to the document element from its ID.
// Equivalent to the jQuery function.
var $ = function( id ) {
    
    return document.getElementById( id );
}
