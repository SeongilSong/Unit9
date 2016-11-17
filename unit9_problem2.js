// register event handlers
function start()
{
	[].forEach.call(document.getElementsByTagName("strong"),function(el){
        // register event handlers for the mouse over. 
    	el.addEventListener("mouseover",mouseOver); 
    	// register event handlers for the mouse leave. 
    	el.addEventListener("mouseleave",mouseLeave); 
    });
}

// A JavaScript code that highlights the bold words of the following paragraph by changing the text color to red, on mouse over
function mouseOver()
{
	document.getElementsByTagName("strong")[0].setAttribute("style", "color: red;");
}

function mouseLeave()
{
// A JavaScript code that dehighlights the bold words of the following paragraph by changing the text color to black, on mouse leave
	document.getElementsByTagName("strong")[0].setAttribute("style", "color: black;");
}

// Call start function to register event handlers when the page is loading 
window.addEventListener("load", start, false); 	

 