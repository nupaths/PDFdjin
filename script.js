var n = 0

let putWidth = 0
let putHeight = 0
let putHeightArray = []
let putWidthArray = []
let putNameArray = []
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
function typeInTextarea(el, newText) {
  var start = el.prop("selectionStart");
  var end = el.prop("selectionEnd");
  var text = el.val();
  var before = text.substring(0, start);
  var after = text.substring(end, text.length);
  el.val(before + newText + after);
  el[0].selectionStart = el[0].selectionEnd = start + newText.length;
  el.focus();
  console.log(el + "THIS IS WHERE WE ARE");
  return false
}
dragElement(document.getElementById(("mydiv")));
var toggle = document.getElementById("toggle");
var toggle1 = document.getElementById("toggle1");
var mydiv = document.getElementById("mydiv");
toggle.addEventListener("click", function () {
  content.style.display = (content.dataset.toggled ^= 1) ? "block" : "none";
});

toggle1.addEventListener("click", function () {
  // let fieldNames = ["name", "last name", "credit card", "insurance number", "address", "another address"]
  let fieldNames2 = document.getElementById("inputTextToSave").value
  let fieldNames = fieldNames2.split("\n")
  console.log("fieldNames = " + fieldNames2)
  // document.getElementById("formfields.groove").position(relative).bottom(0)
  // {position : relative; bottom:0;}
  // let w = n
  // let h = n

  // document.getElementById('form_fields').innerHTML = ""


  function formHTML(n) {
    w = n
    h = n

    document.getElementById('form_fields').innerHTML += ` <p>
      <label for="name"></label>
      <input type="text" id="nameN${n}" data-bind="value: name" title="name"  name="${n}"
      params: { initialText: "Hello, world!" }> 
      <label for="width" ></label>
      <input type="text" maxlength="6" size="6"  data-bind="value: width" id="widthW${w}" title="width"  name="${String(w)}"> 
      <label for="height"></label>
      <input type="text" maxlength="6" size="6"  data-bind="value: height" id="heightH${String(h)}" title="height" onkeyup="myFunction(heightH${String(h)})"  name="${String(h)}"> </p> `

    // nameN0.onblur = function () {
    //   if (!input.value.includes('@')) { // not email
    //     input.classList.add('invalid');
    //     error.innerHTML = 'Please enter a correct email.'
    //   }
    // };
    //onkeyup="myFunction(nameN${n})
    var myViewModel = {
      personName: "nameN" + String(n),
      height: String(putHeight),
      width: String(putWidth)
    };
    putNameArray.push(String(fieldNames[n]))
    putHeightArray.push(String(putHeight))
    putWidthArray.push(String(putWidth))
    if (fieldNames.length >= n + 1) {
      nextfield.innerHTML = fieldNames[n + 1]
      mydivheader.innerHTML = nextfield.innerHTML
      var fieldElement = document.getElementById('form_fields');
      // fieldElement.innerHTML
      fieldElement.scrollTop = fieldElement.scrollHeight;
    }
    // ko.applyBindings(new AppViewModel());
  }


  formHTML(n)
  populateTheValuesInPlace(n, putNameArray, putHeightArray, putWidthArray)

  // for (i = 0; i <= n; i++) {
  //   console.log("name: " + putNameArray[i] + " height: " + putHeightArray[i] + " width: " + putWidthArray[i])

  // }
  n += 1;
})
function myFunction(ids) {
  //console.log(ids.value)
  // document.getElementById(ids).value = document.getElementById(ids).value
  var x = document.getElementById(ids.id).value
  x.value = ids.value
  if (ids.title = "name") {
    putNameArray[Number("name")] = ids.value
    console.log("putNameArray = " + putNameArray[Number("name")])
  }
  if (ids.title = "width") {
    putWidthArray[Number("name")] = ids.value
    console.log("putWidthArray = " + putWidthArray[Number("name")])
  }
  if (ids.title = "height") {
    putHeightArray[Number("name")] = ids.value
    console.log("putHeightArray = " + putHeightArray[Number("name")])
  }
  numbers = document.getElementById(ids.id).value
  console.log("ids.value = " + numbers)
  return
}
function populateTheValuesInPlace(n, putNameArray, putHeightArray, putWidthArray) {
  // let valueHolder = ""
  // putNameArray = []
  // putHeightArray = []
  // putWidthArray = []

  // putNameArray.length = 0
  // putHeightArray.length = 0
  // putWidthArray.length = 0
  // for (i = 0; i <= n; i++) {
  //   var nameHolder = "nameN" + String(i)
  //   valueHolderN = document.getElementById(`${nameHolder}`).value
  //   console.log("nameHolder " + nameHolder + " valueHolder: " + valueHolderN)
  //   putNameArray.push(valueHolderN)
  //   console.log("name " + valueHolderN)

  //   var widthHolder = "widthW" + String(i)
  //   var valueHolderW = document.getElementById(`${widthHolder}`).value
  //   console.log("nameHolder " + widthHolder + " valueHolder: " + valueHolderW)
  //   putWidthArray.push(valueHolderW)
  //   console.log("width " + valueHolderW)

  //   var heightHolder = "heightH" + String(i)
  //   var valueHolderH = document.getElementById(`${heightHolder}`).value
  //   console.log("nameHolder " + heightHolder + " valueHolder: " + valueHolderH)
  //   putHeightArray.push(valueHolderH)
  //   console.log("height " + valueHolderH)


  // }
  putTheValuesInPlace(n, putNameArray, putWidthArray, putHeightArray)
}

function putTheValuesInPlace(n, putNameArray, putWidthArray, putHeightArray) {
  console.log(putNameArray + " " + putWidthArray + " " + putHeightArray)
  let identity = ""
  for (i = 0; i <= n; i++) {
    identity = "nameN" + String(i)
    document.getElementById(identity).value = putNameArray[i]
    identity = "widthW" + String(i)
    document.getElementById(identity).value = putWidthArray[i]
    identity = "heightH" + String(i)
    document.getElementById(identity).value = putHeightArray[i]
    console.log("name: " + putNameArray[i] + " height: " + putHeightArray[i] + " width: " + putWidthArray[i])

  }
  console.log('returning from placement')
}
// putNameArray.push(document.getElementById("name" + n).value)
// putWidthArray.push(document.getElementById("width" + n).value)
// putHeightArray.push(document.getElementById("height" + n).value)


// while (form_fields.firstChild) {
//   form_fields.removeChild(form_fields.firstChild);
// }
//}


function addToEditWindow() {
  document.getElementById("inputTextToSave").value = ""
  for (i = 0; i < n; i++) {
    //Check this loop to make sure you aren't slicing off the last field 
    document.getElementById("inputTextToSave").value += String(putNameArray[i]) + "," + String(putWidthArray[i]) + "," + String(putHeightArray[i])
    if (i < n - 1) { document.getElementById("inputTextToSave").value += "," }
  }
}
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
    var xyPos = elmnt.style.left + "<X Y>" + elmnt.style.top + "&nbsp &nbsp &nbsp" + nextfield.innerHTML;
    document.getElementById("mydivheader").innerHTML = elmnt.style.top;
    document.getElementById("mydivheader").innerHTML = xyPos;
    putHeight = elmnt.offsetTop - pos2
    putWidth = elmnt.offsetLeft - pos1
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }

}
function saveTextAsFile() {
  var textToWrite = document.getElementById("inputTextToSave").value;
  var textFileAsBlob = new Blob([textToWrite], { type: 'text/plain' });
  // var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value;

  var downloadLink = document.createElement("a");
  // downloadLink.download = fileNameToSaveAs;
  downloadLink.download = "New_File";
  downloadLink.innerHTML = "Download File";
  if (window.webkitURL != null) {
    // Chrome allows the link to be clicked
    // without actually adding it to the DOM.
    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
  }
  else {
    // Firefox requires the link to be added to the DOM
    // before it can be clicked.
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
  }
  downloadLink.click();
}

function destroyClickedElement(event) {
  document.body.removeChild(event.target);
}

function loadFileAsText() {
  var fileToLoad = document.getElementById("fileToLoad").files[0];
  // <body background="HCIF2.jpg"></body>
  var fileReader = new FileReader();
  fileReader.onload = function (fileLoadedEvent) {
    var textFromFileLoaded = fileLoadedEvent.target.result;
    console.log(textFromFileLoaded);
    document.getElementById("inputTextToSave").value = textFromFileLoaded;
    var fullPathPreSplit = document.getElementById('fileToLoad').value;
    var fullPath1 = fullPathPreSplit.split(/(\\|\/)/g).pop()
    var fullPath = fullPath1.split("_")
    var fullPathHolder = fullPath[0]
    console.log("fileToLoad =" + fullPath[0])
    var img = new Image();
    img.src = "images/" + fullPathHolder + ".jpg"
    img.onload = function () {
      var ctx = document.getElementById('ctx').getContext('2d');
      // ctx.width = this.naturalWidth;
      // ctx.height = this.naturalHeight;
      ctx.width = img.width;
      ctx.height = img.height;

      ctx.drawImage(img, 0, 0);
      console.log("fileToLoad =" + fullPathHolder)
    }


  };
  fileReader.readAsText(fileToLoad, "UTF-8");
}

function spawnWindow(){
  const div = document.getElementById('mydiv')
  const clone = div.cloneNode(true);
 // clone.id = "mydiv2";
  // clone.width = 50;
  // clone.height = 50;
  document.body.appendChild(clone);
  console.log("I'm in this function")
}

function myFunction3() {
	var body = document.getElementsByTagName("BODY")[0];
	body.classList.toggle("night");
	var html = document.getElementsByTagName("HTML")[0];
	html.classList.toggle("night");
	var sun = document.getElementById("sun");
	sun.classList.toggle("gone");
	var moon = document.getElementById("moon");
	moon.classList.toggle("gone");
	var element = document.getElementById("toggle-btn");
	element.classList.toggle("right");
	var elem = document.getElementById("toggle");
	elem.classList.toggle("right");
}