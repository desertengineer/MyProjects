function loadXMLDoc(filename)
{
if (window.ActiveXObject)
  {
  xhttp = new ActiveXObject("Msxml2.XMLHTTP");
  }
else
  {
  xhttp = new XMLHttpRequest();
  }
xhttp.open("GET", filename, false);
try {xhttp.responseType = "msxml-document"} catch(err) {} // Helping IE11
xhttp.send("");
return xhttp.responseXML;
}

function displayResult(sector,xmlFile,xslFile,elemId)
{ 
  xml = loadXMLDoc(xmlFile);
  xsl = loadXMLDoc(xslFile);
// code for IE
if (window.ActiveXObject || xhttp.responseType == "msxml-document")
  {
  ex = xml.transformNode(xsl);
  document.getElementById(elemId).innerHTML = ex;
  }
// code for Chrome, Firefox, Opera, etc.
else if (document.implementation && document.implementation.createDocument)
  {
  xsltProcessor = new XSLTProcessor();
  xsltProcessor.importStylesheet(xsl);
  resultDocument = xsltProcessor.transformToFragment(xml, document);
  document.getElementById(elemId).appendChild(resultDocument);
filterSelection(sector);
  }
} 

var w3 = {};
w3.styleElements = function (elements, prop, val) {
  var i, l = elements.length;
  for (i = 0; i < l; i++) {    
    w3.styleElement(elements[i], prop, val);
  }
};
w3.styleElement = function (element, prop, val) {
  element.style.setProperty(prop, val);
};
w3.getElements = function (id) 
{if (typeof id == "object") {return [id];} else {return document.querySelectorAll(id);}
};
//filterSelection("all") 
  function filterSelection(c) { 
    var x, i,j=0;
    x = document.getElementsByClassName("pjct");
    console.log(c);
    const msg=document.getElementById("no-pjcts-msg");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i],"show"); 
      //msg.innerHTML="";
      if (x[i].className.indexOf(c) > -1) {
        w3AddClass(x[i],"show"); 
        j++;console.log(j);}      
    }
    console.log(" filter end");
      if (j==0) {
        //msg.innerHTML="No Projects to display at the moment";
      } 
  }
// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}
// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
