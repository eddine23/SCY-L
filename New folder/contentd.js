/* // Create a new div element for the pop-up dialog
var dialog = document.createElement('div');
dialog.style.position = 'absolute';
dialog.style.zIndex = '9999';
dialog.style.display = 'none';
dialog.style.padding = '8px';
dialog.style.background = 'white';
dialog.style.borderRadius = '8px';
dialog.style.boxShadow = '0px 3px 8px rgba(0, 0, 0, 0.3)';
dialog.style.fontFamily = 'Helvetica Neue,Helvetica,Arial,sans-serif';
dialog.style.fontSize = '18px';
dialog.style.color = '#333';
dialog.style.textAlign = 'center';

dialog.innerHTML = 'YouTube';
dialog.style.cursor = 'pointer';

// Add an event listener to the pop-up dialog
dialog.addEventListener('mousedown', function(e) {
  e.stopPropagation(); // Prevent the event from triggering the selectionchange listener
  // Get the selected text on the page
  var selection = window.getSelection().toString().trim();
  // Search for the selected text on YouTube
  if (selection) {
    window.open('https://www.youtube.com/results?search_query=' + selection);
  }
});

// Add the dialog to the page
document.body.appendChild(dialog);

// Add an event listener to the page for text selection
document.addEventListener('selectionchange', function() {
  // Get the selected text on the page
  var selection = window.getSelection().toString().trim();
  if (selection) {
    // Display the pop-up dialog above the selected text
    var range = window.getSelection().getRangeAt(0);
    var rect = range.getBoundingClientRect();
    dialog.style.left = rect.left + (rect.width / 2) - (dialog.offsetWidth / 2) + 'px';
    dialog.style.top = rect.top - dialog.offsetHeight - 8 + 'px';
    dialog.style.display = 'block';
  } else {
    // Hide the pop-up dialog if there is no selected text
    dialog.style.display = 'none';
  }
});

// Add an event listener to the page to hide the pop-up dialog when clicking outside of it
document.addEventListener('mousedown', function(e) {
  if (e.target != dialog) {
    dialog.style.display = 'none';
  }
});
 */
/*
// Create a new div element for the pop-up dialog
var dialog = document.createElement('div');
dialog.style.position = 'absolute';
dialog.style.zIndex = '9999';
dialog.style.display = 'none';
dialog.style.padding = '8px';
dialog.style.background = 'white';
dialog.style.borderRadius = '8px';
dialog.style.boxShadow = '0px 3px 8px rgba(0, 0, 0, 0.3)';
dialog.style.fontFamily = 'Helvetica Neue,Helvetica,Arial,sans-serif';
dialog.style.fontSize = '18px';
dialog.style.color = '#333';
dialog.style.textAlign = 'center';
dialog.innerHTML = '<button id="searchBtn" style="margin-right: 8px;">Search on YouTube</button><button id="copyBtn">Copy</button>';

// Add an event listener to the pop-up dialog
dialog.addEventListener('mousedown', function(e) {
  e.stopPropagation(); // Prevent the event from triggering the selectionchange listener
  // Get the selected text on the page
  var selection = window.getSelection().toString().trim();
  // Determine which button was clicked
  if (e.target.id == 'searchBtn') {
    // Search for the selected text on YouTube
    if (selection) {
      window.open('https://www.youtube.com/results?search_query=' + selection);
    }
  } else if (e.target.id == 'copyBtn') {
    // Copy the selected text to the clipboard
    navigator.clipboard.writeText(selection);
  }
});

// Add the dialog to the page
document.body.appendChild(dialog);

// Add an event listener to the page for text selection
document.addEventListener('selectionchange', function() {
  // Get the selected text on the page
  var selection = window.getSelection().toString().trim();
  if (selection) {
    // Display the pop-up dialog above the selected text
    var range = window.getSelection().getRangeAt(0);
    var rect = range.getBoundingClientRect();
    dialog.style.left = rect.left + (rect.width / 2) - (dialog.offsetWidth / 2) + 'px';
    dialog.style.top = rect.top - dialog.offsetHeight - 8 + 'px';
    dialog.style.display = 'block';
  } else {
    // Hide the pop-up dialog if there is no selected text
    dialog.style.display = 'none';
  }
});

// Add an event listener to the page to hide the pop-up dialog when clicking outside of it
document.addEventListener('mousedown', function(e) {
  if (e.target != dialog) {
    dialog.style.display = 'none';
  }
});
*/
/*
// Create a new div element for the pop-up dialog
var dialog = document.createElement('div');
dialog.style.position = 'absolute';
dialog.style.zIndex = '9999';
dialog.style.display = 'none';
dialog.style.padding = '8px';
dialog.style.background = '#fff';
dialog.style.borderRadius = '8px';
dialog.style.boxShadow = '0px 3px 8px rgba(0, 0, 0, 0.3)';
dialog.style.fontFamily = 'Helvetica Neue,Helvetica,Arial,sans-serif';
dialog.style.fontSize = '18px';
dialog.style.color = '#333';
dialog.style.textAlign = 'center';

// Add two buttons to the pop-up dialog
var youtubeBtn = document.createElement('button');
youtubeBtn.textContent = 'YouTube';
youtubeBtn.style.background = '#ff0000';
youtubeBtn.style.border = 'none';
youtubeBtn.style.color = '#fff';
youtubeBtn.style.padding = '8px';
youtubeBtn.style.borderRadius = '4px';
youtubeBtn.style.marginRight = '8px';
youtubeBtn.style.cursor = 'pointer';
dialog.appendChild(youtubeBtn);

var copyBtn = document.createElement('button');
copyBtn.textContent = 'Copy';
copyBtn.style.background = '#333';
copyBtn.style.border = 'none';
copyBtn.style.color = '#fff';
copyBtn.style.padding = '8px';
copyBtn.style.borderRadius = '4px';
copyBtn.style.cursor = 'pointer';
dialog.appendChild(copyBtn);

// Add event listeners to the buttons
youtubeBtn.addEventListener('click', function() {
  // Get the selected text on the page
  var selection = window.getSelection().toString().trim();
  if (selection) {
    // Search for the selected text on YouTube
    window.open('https://www.youtube.com/results?search_query=' + selection);
  }
  // Hide the pop-up dialog
  dialog.style.display = 'none';
});

copyBtn.addEventListener('click', function() {
  // Get the selected text on the page
  var selection = window.getSelection().toString().trim();
  if (selection) {
    // Copy the selected text to the clipboard
    navigator.clipboard.writeText(selection);
  }
  // Hide the pop-up dialog
  dialog.style.display = 'none';
});

// Add an event listener to the page for text selection
document.addEventListener('selectionchange', function() {
  // Get the selected text on the page
  var selection = window.getSelection().toString().trim();
  if (selection) {
    // Display the pop-up dialog above the selected text
    var range = window.getSelection().getRangeAt(0);
    var rect = range.getBoundingClientRect();
    dialog.style.left = rect.left + (rect.width / 2) - (dialog.offsetWidth / 2) + 'px';
    dialog.style.top = rect.top - dialog.offsetHeight - 8 + 'px';
    dialog.style.display = 'block';
  } else {
    // Hide the pop-up dialog if there is no selected text
    dialog.style.display = 'none';
  }
});

// Add the dialog to the page
document.body.appendChild(dialog);

// Add an event listener to the page to hide the pop-up dialog when clicking outside of it
document.addEventListener('mousedown', function(e) {
  if (e.target != dialog) {
    dialog.style.display = 'none';
  }
});
*/
/*

// Create a new div element for the pop-up dialog
var dialog = document.createElement('div');
dialog.style.position = 'absolute';
dialog.style.zIndex = '9999';
dialog.style.display = 'none';
dialog.style.padding = '8px';
dialog.style.background = '#f9f9f9';
dialog.style.borderRadius = '8px';
dialog.style.boxShadow = '0px 3px 8px rgba(0, 0, 0, 0.3)';
dialog.style.fontFamily = 'Helvetica Neue,Helvetica,Arial,sans-serif';
dialog.style.fontSize = '18px';
dialog.style.color = '#333';
dialog.style.textAlign = 'center';
dialog.innerHTML = '<button id="youtubeBtn" style="margin-right: 8px; background-color: #ff0000; color: #ffffff; border: none; border-radius: 8px; padding: 8px 16px; font-size: 16px; cursor: pointer;">YouTube</button><button id="copyBtn" style="background-color: #333; color: #ffffff; border: none; border-radius: 8px; padding: 8px 16px; font-size: 16px; cursor: pointer;">Copy</button><button id="googleBtn" style="margin-left: 8px; background-color: #4285f4; color: #ffffff; border: none; border-radius: 8px; padding: 8px 16px; font-size: 16px; cursor: pointer;">Search</button>';

// Add an event listener to the pop-up dialog
dialog.addEventListener('mousedown', function(e) {
  e.stopPropagation(); // Prevent the event from triggering the selectionchange listener
  // Get the selected text on the page
  var selection = window.getSelection().toString().trim();
  // Determine which button was clicked
  if (e.target.id == 'youtubeBtn') {
    // Search for the selected text on YouTube
    if (selection) {
      window.open('https://www.youtube.com/results?search_query=' + selection);
    }
  } else if (e.target.id == 'copyBtn') {
    // Copy the selected text to the clipboard
    navigator.clipboard.writeText(selection);
  } else if (e.target.id == 'googleBtn') {
    // Search for the selected text on Google
    if (selection) {
      window.open('https://www.google.com/search?q=' + selection);
    }
  }
  // Hide the pop-up dialog after 0.5 seconds
  setTimeout(function() {
    dialog.style.display = 'none';
  }, 100);
});

// Add the dialog to the page
document.body.appendChild(dialog);

// Add an event listener to the page for text selection
document.addEventListener('selectionchange', function() {
  // Get the selected text on the page
  var selection = window.getSelection().toString().trim();
  if (selection) {
    // Display the pop-up dialog above the selected text
    var range = window.getSelection().getRangeAt(0);
    var rect = range.getBoundingClientRect();
    dialog.style.left = rect.left + (rect.width / 2) - (dialog.offsetWidth / 2) + 'px';
    dialog.style.top = rect.top - dialog.offsetHeight - 50 + 'px';
    dialog.style.display = 'block';
  } else {
    // Hide the pop-up dialog if there is no selected text
    dialog.style.display = 'none';
  }
});

// Add an event listener to the page to hide the pop-up dialog when clicking outside of it
document.addEventListener('mousedown', function(e) {
  if (e.target != dialog) {
    dialog.style.display = 'none';
  }
});
*/
/*

function createPopup(x, y) {
    const popup = document.createElement('div');
    popup.style.position = 'absolute';
    popup.style.top = `${y - 30}px`;
    popup.style.left = `${x}px`;
    popup.style.backgroundColor = '#fff';
    popup.style.border = '1px solid #ddd';
    popup.style.borderRadius = '3px';
    popup.style.padding = '4px 8px';
    popup.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.3)';
    popup.style.zIndex = '9999';
    popup.style.display = 'flex';
    popup.style.flexDirection = 'row';
    popup.style.gap = '6px';
    popup.style.fontFamily = 'Arial, sans-serif';
  
    const youtubeButton = document.createElement('button');
    youtubeButton.textContent = 'YouTube';
    youtubeButton.style.background = '#FF0000';
    youtubeButton.style.color = '#fff';
    youtubeButton.style.border = 'none';
    youtubeButton.style.borderRadius = '3px';
    youtubeButton.style.padding = '6px 12px';
    youtubeButton.style.cursor = 'pointer';
    youtubeButton.addEventListener('click', () => {
      const selectedText = window.getSelection().toString().trim();
      if (selectedText.length > 0) {
        const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(selectedText)}`;
        window.open(searchUrl, '_blank');
      }
      popup.remove();
    });
  
    const copyButton = document.createElement('button');
    copyButton.textContent = 'Copy';
    copyButton.style.background = '#4CAF50';
    copyButton.style.color = '#fff';
    copyButton.style.border = 'none';
    copyButton.style.borderRadius = '3px';
    copyButton.style.padding = '6px 12px';
    copyButton.style.cursor = 'pointer';
    copyButton.addEventListener('click', () => {
      const selectedText = window.getSelection().toString().trim();
      if (selectedText.length > 0) {
        navigator.clipboard.writeText(selectedText);
      }
      popup.remove();
    });
  
    const searchButton = document.createElement('button');
    searchButton.textContent = 'Search';
    searchButton.style.background = '#4285F4';
    searchButton.style.color = '#fff';
    searchButton.style.border = 'none';
    searchButton.style.borderRadius = '3px';
    searchButton.style.padding = '6px 12px';
    searchButton.style.cursor = 'pointer';
    searchButton.addEventListener('click', () => {
      const selectedText = window.getSelection().toString().trim();
      if (selectedText.length > 0) {
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(selectedText)}`;
        window.open(searchUrl, '_blank');
      }
      popup.remove();
    });
  
    popup.appendChild(youtubeButton);
    popup.appendChild(copyButton);
    popup.appendChild(searchButton);
    document.body.appendChild(popup);
  
    setTimeout(() => {
      popup.remove();
    }, 500);
  }
  
  document.addEventListener('mouseup', (event) => {
    const selection = window.getSelection();
    if (selection.type === 'Range' && selection.toString().length > 0) {
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      createPopup(rect.x + rect.width / 2, rect.y - 8);
    }
  });
  */
/*
  function createPopup() {
    const popup = document.createElement("div");
    popup.innerHTML = `
      <div style="
        background-color: #FF0000;
        color: white;
        font-size: 16px;
        font-weight: bold;
        padding: 8px;
        border-radius: 8px;
        position: absolute;
        z-index: 999999;
        top: ${window.pageYOffset + 8}px;
        left: ${window.pageXOffset}px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 120px;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        cursor: pointer;
      ">
        <span>YouTube</span>
        <div style="display: flex; gap: 8px;">
          <button style="
            background-color: white;
            color: #FF0000;
            border: none;
            font-size: 14px;
            font-weight: bold;
            padding: 8px;
            border-radius: 8px;
            cursor: pointer;
          ">Search</button>
          <button style="
            background-color: white;
            color: #FF0000;
            border: none;
            font-size: 14px;
            font-weight: bold;
            padding: 8px;
            border-radius: 8px;
            cursor: pointer;
          ">Copy</button>
        </div>
      </div>
    `;
  
    const searchButton = popup.querySelector("button:nth-of-type(1)");
    searchButton.addEventListener("click", () => {
      const selectedText = window.getSelection().toString().trim();
      if (selectedText) {
        window.open(`https://www.youtube.com/results?search_query=${selectedText}`);
      }
      popup.style.display = "none";
    });
  
    const copyButton = popup.querySelector("button:nth-of-type(2)");
    copyButton.addEventListener("click", () => {
      const selectedText = window.getSelection().toString().trim();
      if (selectedText) {
        navigator.clipboard.writeText(selectedText);
      }
      popup.style.display = "none";
    });
  
    const closeButton = () => {
      popup.style.display = "none";
    };
    popup.addEventListener("click", closeButton);
    popup.querySelector("span").addEventListener("click", closeButton);
  
    document.body.appendChild(popup);
  
    setTimeout(() => {
      popup.style.display = "none";
    }, 5000);
  }
  
  document.addEventListener("mouseup", () => {
    const selectedText = window.getSelection().toString().trim();
    if (selectedText) {
      createPopup();
    }
  });
*/  

// Create a new div element for the pop-up dialog
var dialog = document.createElement('div');
dialog.style.position = 'absolute';
dialog.style.zIndex = '9999';
dialog.style.display = 'none';
dialog.style.padding = '8px';
dialog.style.background = '#f9f9f9';
dialog.style.borderRadius = '8px';
dialog.style.boxShadow = '0px 3px 8px rgba(0, 0, 0, 0.3)';
dialog.style.fontFamily = 'Helvetica Neue,Helvetica,Arial,sans-serif';
dialog.style.fontSize = '18px';
dialog.style.color = '#333';
dialog.style.textAlign = 'center';
dialog.innerHTML = '<button id="youtubeBtn" style="margin-right: 8px; background-color: #ff0000; color: #ffffff; border: none; border-radius: 8px; padding: 8px 16px; font-size: 16px; cursor: pointer;">YouTube</button><button id="copyBtn" style="background-color: #333; color: #ffffff; border: none; border-radius: 8px; padding: 8px 16px; font-size: 16px; cursor: pointer;">Copy</button><button id="googleBtn" style="margin-left: 8px; background-color: #4285f4; color: #ffffff; border: none; border-radius: 8px; padding: 8px 16px; font-size: 16px; cursor: pointer;">Search</button>';

// Add an event listener to the pop-up dialog
dialog.addEventListener('mousedown', function(e) {
  e.stopPropagation(); // Prevent the event from triggering the selectionchange listener
  // Get the selected text on the page
  var selection = window.getSelection().toString().trim();
  // Determine which button was clicked
  if (e.target.id == 'youtubeBtn') {
    // Search for the selected text on YouTube
    if (selection) {
      window.open('https://www.youtube.com/results?search_query=' + selection);
      setTimeout(function() { dialog.style.display = 'none'; }, 100); // Hide the pop-up dialog after 0.5 seconds
    }
  } else if (e.target.id == 'copyBtn') {
    // Copy the selected text to the clipboard
    navigator.clipboard.writeText(selection);
    setTimeout(function() { dialog.style.display = 'none'; }, 100); // Hide the pop-up dialog after 0.5 seconds
  } else if (e.target.id == 'googleBtn') {
    // Search for the selected text on Google
    if (selection) {
      window.open('https://www.google.com/search?q=' + selection);
      setTimeout(function() { dialog.style.display = 'none'; }, 100); // Hide the pop-up dialog after 0.5 seconds
    }
  }
});

// Add the dialog to the page
document.body.appendChild(dialog);

/*

// Add an event listener to the page for text selection
document.addEventListener('selectionchange', function(event) {
  // Get the selected text on the page
  var selection = window.getSelection().toString().trim();
  if (selection) {
    // Display the pop-up dialog above the selected text


    // Find out how much (if any) user has scrolled
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        
    // Get cursor position
    const posX = event.clientX - 110;
//console.log(posX);
    const posY = event.clientY + 20 + scrollTop;
   // console.log(posY);


    var range = window.getSelection().getRangeAt(0);
    var rect = range.getBoundingClientRect();
    dialog.style.left = rect.left + (rect.width / 2) - (dialog.offsetWidth / 2) + 'px';
    
    //console.log(scrollTop);

    //dialog.style.left = posX + 'px';
    dialog.style.top = rect.top - dialog.offsetHeight - 50 + scrollTop + 'px';
    //console.log(rect.top - dialog.offsetHeight - 8);
    //console.log(scrollTop);


    //dialog.style.top = posY + 'px';
    dialog.style.display = 'block';
  } else {
    // Hide the pop-up dialog if there is no selected text
    dialog.style.display = 'none';
  }
});

// Add an event listener to the page to hide the pop-up dialog when clicking outside of it
document.addEventListener('mousedown', function(e) {
  if (e.target != dialog) {
    dialog.style.display = 'none';
  }
});

*/
/*

// Find out how much (if any) user has scrolled
var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        
// Get cursor position
const posX = event.clientX - 110;
const posY = event.clientY + 20 + scrollTop;


*/


/*

// Create a new div element for the pop-up dialog
var dialog = document.createElement('div');
dialog.style.position = 'absolute';
dialog.style.zIndex = '9999';
dialog.style.display = 'none';
dialog.style.padding = '8px';
dialog.style.background = '#f9f9f9';
dialog.style.borderRadius = '8px';
dialog.style.boxShadow = '0px 3px 8px rgba(0, 0, 0, 0.3)';
dialog.style.fontFamily = 'Helvetica Neue,Helvetica,Arial,sans-serif';
dialog.style.fontSize = '18px';
dialog.style.color = '#333';
dialog.style.textAlign = 'center';
dialog.innerHTML = '<button id="youtubeBtn" style="margin-right: 8px; background-color: #ff0000; color: #ffffff; border: none; border-radius: 8px; padding: 8px 16px; font-size: 16px; cursor: pointer;">YouTube</button><button id="copyBtn" style="background-color: #333; color: #ffffff; border: none; border-radius: 8px; padding: 8px 16px; font-size: 16px; cursor: pointer;">Copy</button><button id="googleBtn" style="margin-left: 8px; background-color: #4285f4; color: #ffffff; border: none; border-radius: 8px; padding: 8px 16px; font-size: 16px; cursor: pointer;">Search</button>';

// Add an event listener to the pop-up dialog
dialog.addEventListener('mousedown', function(e) {
  e.stopPropagation(); // Prevent the event from triggering the selectionchange listener
  // Get the selected text on the page
  var selection = window.getSelection().toString().trim();
  // Determine which button was clicked
  if (e.target.id == 'youtubeBtn') {
    // Search for the selected text on YouTube
    if (selection) {
      window.open('https://www.youtube.com/results?search_query=' + selection);
      setTimeout(function() { dialog.style.display = 'none'; }, 500); // Hide the pop-up dialog after 0.5 seconds
    }
  } else if (e.target.id == 'copyBtn') {
    // Copy the selected text to the clipboard
    navigator.clipboard.writeText(selection);
    setTimeout(function() { dialog.style.display = 'none'; }, 500); // Hide the pop-up dialog after 0.5 seconds
  } else if (e.target.id == 'googleBtn') {
    // Search for the selected text on Google
    if (selection) {
      window.open('https://www.google.com/search?q=' + selection);
      setTimeout(function() { dialog.style.display = 'none'; }, 500); // Hide the pop-up dialog after 0.5 seconds
    }
  }
});

// Add the dialog to the page
document.body.appendChild(dialog);

// Add an event listener to the page for text selection
document.addEventListener('selectionchange', function() {
  // Get the selected text on the page
  var selection = window.getSelection().toString().trim();
  if (selection) {
    // Display the pop-up dialog above the selected text
    var range = window.getSelection().getRangeAt(0);
    var rect = range.getBoundingClientRect();
    dialog.style.left = rect.left + (rect.width / 2) - (dialog.offsetWidth / 2) + 'px';
    dialog.style.top = rect.top - dialog.offsetHeight - 8 +
*/
let clicked = false;
let dbclicked = false;
let move = false;
document.addEventListener('mousedown', e => { clicked = true; });
document.addEventListener('dblclick', e => { dblclick = true; });
document.addEventListener('mousemove', e => { move = true; });
// Add an event listener to the page for text selection
document.addEventListener('selectionchange', function(event) {
  // Get the selected text on the page
  var selection = '';
  if ( window.getSelection().toString().trim() !== ''){
    selection = window.getSelection().toString().trim()
  }
  
/*   if (selection !=='') {
  console.log(selection);
  } */
  if (selection !== '') {
    console.log(selection);
    // Display the pop-up dialog above the selected text

    // Find out how much (if any) user has scrolled
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

    var range = window.getSelection().getRangeAt(0);
    var rect = range.getBoundingClientRect();

    /*
    
    document.addEventListener('mousemove', e => { move = true; 
      if(clicked){
        dialog.style.left = rect.left + (rect.width / 2) - (dialog.offsetWidth / 2) + 'px';

        //console.log(rect.top - dialog.offsetHeight - 10 + scrollTop + 'px');
    
        dialog.style.top = rect.top - dialog.offsetHeight - 10 + scrollTop + 'px';
        //console.log(scrollTop);
            
        dialog.style.display = 'block'; 
      }
    });
    */
/*     document.addEventListener('dblclick', e => { dbclicked = true;
       }); */
    document.addEventListener('mouseup', e => { 

      if(/*clicked && !move && !*/dbclicked) {
        console.log(clicked +' c  1');
        console.log(dbclicked  + ' db  2');
        //console.log(selection + ' ' +2);
        //console.log(selection);
        // The mouse was clicked without moving it around!
        // Do your "only clicked" logic in here.
        dialog.style.left = rect.left + (rect.width / 2) - (dialog.offsetWidth / 2) + 'px';

        //console.log(rect.top - dialog.offsetHeight - 10 + scrollTop + 'px');
    
        dialog.style.top = rect.top - dialog.offsetHeight - 10 + scrollTop + 'px';
        //console.log(scrollTop);
            
        dialog.style.display = 'block';

        //console.log("clicked without drag and not a double click 007");
    }




        /* if(clicked && !move && !dbclicked) {
            // The mouse was clicked without moving it around!
            // Do your "only clicked" logic in here.
            dialog.style.left = rect.left + (rect.width / 2) - (dialog.offsetWidth / 2) + 'px';
    
            console.log(rect.top - dialog.offsetHeight - 10 + scrollTop + 'px');
        
            dialog.style.top = rect.top - dialog.offsetHeight - 10 + scrollTop + 'px';
            //console.log(scrollTop);
                
            dialog.style.display = 'block';

            console.log("clicked without drag and not a double click 007");
        } */
        /* if(move) {
          // The mouse was double clicked
          // Do your "double clicked" logic in here.
          //console.log("dbclicked");
          dialog.style.left = rect.left + (rect.width / 2) - (dialog.offsetWidth / 2) + 'px';
    
          //console.log(scrollTop);
      
          //dialog.style.left = posX + 'px';
          dialog.style.top = rect.top - dialog.offsetHeight - 100 + scrollTop + 'px';
          //console.log(rect.top - dialog.offsetHeight - 8);
          //console.log(scrollTop);
      
      
          //dialog.style.top = posY + 'px';
          dialog.style.display = 'block';

        } 
    */
    
        // Reset this back to false for next time
        clicked = false; 
        move = false;
        dbclicked = false; 
    });

    /* 
    dialog.style.left = rect.left + (rect.width / 2) - (dialog.offsetWidth / 2) + 'px';
    
    //console.log(scrollTop);

    //dialog.style.left = posX + 'px';
    dialog.style.top = rect.top - dialog.offsetHeight - 50 + scrollTop + 'px';
    //console.log(rect.top - dialog.offsetHeight - 8);
    //console.log(scrollTop);


    //dialog.style.top = posY + 'px';
    dialog.style.display = 'block'; */
  } else {
    // Hide the pop-up dialog if there is no selected text
    dialog.style.display = 'none';
  }
});

// Add an event listener to the page to hide the pop-up dialog when clicking outside of it
document.addEventListener('mousedown', function(e) {
  if (e.target != dialog) {
    dialog.style.display = 'none';
  }
});

/*
let clicked = false;
let dbclicked = false;
let move = false;
document.addEventListener('mousedown', e => { clicked = true; });
document.addEventListener('mousemove', e => { move = true; });
document.addEventListener('dblclick', e => { dbclicked = true; });
document.addEventListener('mouseup', e => { 
    if(clicked && !move && !dbclicked) {
        // The mouse was clicked without moving it around!
        // Do your "only clicked" logic in here.
        console.log("clicked without drag and not a double click ");
    }
    if(dbclicked) {
      // The mouse was double clicked
      // Do your "double clicked" logic in here.
      //console.log("dbclicked");
    }


    // Reset this back to false for next time
    clicked = false; 
    move = false;
    dbclicked = false;
});
*/