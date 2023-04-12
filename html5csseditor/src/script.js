
function insertAtCursor(myField, myValue) {

//IE support

if (document.selection) {

    myField.focus();

    sel = document.selection.createRange();

    sel.text = myValue;

}
//MOZILLA/NETSCAPE support

else if (myField.selectionStart || myField.selectionStart == '0') {

    var startPos = myField.selectionStart;
    var endPos = myField.selectionEnd;
    myField.value = myField.value.substring(0, startPos)
    + myValue
    + myField.value.substring(endPos, myField.value.length);
} else {
    myField.value += myValue;
}
}
function typeInTextarea(el, newText){
  var start = el.prop("selectionStart");
  var end = el.prop("selectionEnd");
  var text = el.val();
  var before = text.substring(0, start);
  var after  = text.substring(end, text.length);
  el.val(before + newText + after);
  el[0].selectionStart = el[0].selectionEnd = start + newText.length;
  el.focus();
  console.log(el+"THIS IS WHERE WE ARE");
  return false
}
dragElement(document.getElementById(("mydiv")));
var toggle  = document.getElementById("toggle");
var mydiv = document.getElementById("mydiv");
toggle.addEventListener("click", function() {
  content.style.display = (content.dataset.toggled ^= 1) ? "block" : "none";
});

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
   
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
   
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
 //   console.log(elmnt.style.top + 'right here'+elmnt.style.left);
    var xyPos = elmnt.style.left+"<X Y>"+elmnt.style.top;
    document.getElementById("mydivheader").innerHTML=elmnt.style.top;
    document.getElementById("mydivheader").innerHTML=xyPos;
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
 
}
function saveTextAsFile()
{
	var textToWrite = document.getElementById("inputTextToSave").value;
	var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
	var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value;

	var downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	downloadLink.innerHTML = "Download File";
	if (window.webkitURL != null)
	{
		// Chrome allows the link to be clicked
		// without actually adding it to the DOM.
		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
	}
	else
	{
		// Firefox requires the link to be added to the DOM
		// before it can be clicked.
		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		downloadLink.onclick = destroyClickedElement;
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
	}
	downloadLink.click();
}

function destroyClickedElement(event)
{
	document.body.removeChild(event.target);
}

function loadFileAsText()
{
	var fileToLoad = document.getElementById("fileToLoad").files[0];
	var fileReader = new FileReader();
	fileReader.onload = function(fileLoadedEvent) 
	{
        var textFromFileLoaded = fileLoadedEvent.target.result;
        console.log(textFromFileLoaded);
		document.getElementById("inputTextToSave").value = textFromFileLoaded;
	};
	fileReader.readAsText(fileToLoad, "UTF-8");
}     
