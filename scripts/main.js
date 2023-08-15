function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("includeElement");
      if (file) {
        /*make an HTTP request using the attribute value as the file name:*/
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /*remove the attribute, and call this function once more:*/
            elmnt.removeAttribute("includeElement");
            includeHTML();
          }
        }      
        xhttp.open("GET", file, true);
        xhttp.send();
        /*exit the function:*/
        return;
      }
    }
  };

// This is the script for fetching data from the script: 
fetchData=function (file) { 
  fetch(file)
    .then((response) => response.text())
    .then((text) => { 
      sessionStorage.filelData= text; 
      //console.log(text); 
      //div.innerHTML=sessionStorage.filelData;
    });   
}  
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

function transformXsl(xmlFile,xslFile,elemId,param1){ 
   document.querySelector('h1#sector-title').innerHTML="";
  document.getElementById(elemId).innerHTML= "";
  xml = loadXMLDoc(xmlFile);
  //console.log(xml);
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
  }
} 
// to display requested page
getNavLink=function (elem, sector) { 
  var title=elem.innerHTML;
  const page = document.getElementById("nav-page");
  const header =document.getElementById("header");
  const mediaMain= document.getElementById("main-wraper");
  w3.styleElement(header, 'display', "none");
  w3.styleElement(mediaMain, 'display', "none");
  var xmlFile="xmls/ProjectsGallery.xml";
  var xslFile="xsls/ProjectsGallery.xsl";
  var elemId="pjcts-gal";
  transformXsl(xmlFile,xslFile,elemId,'');
  document.querySelector('h1#sector-title').innerHTML= title+" projects gallery"; 
  w3.styleElement(page, 'display', "block"); 
        filterSelection(sector); 
        //displayProject();  
} 

displayProject = function (elem) {
  //var id = location.search.substring(1); 
          sessionStorage.project = elem.id;
          console.log(elem.id);
          var xmlFile="xmls/project-card.xml";
          var xslFile="xsls/project-card.xsl";
          var elemId="pjcts-gal"; 
           /*transformXsl(xmlFile,xslFile,elemId,elem.id);
  setTimeout(document.getElementById(elemId).appendChild(resultDocument),2000);
          document.querySelector('h1#sector-title').innerHTML= ""; 
   var div = document.getElementById("pjcts-gal");
          document.querySelectorAll('#pjcts-gal a').forEach(occurence => {
          occurence.addEventListener('click', (e) => {
          let elementId = e.target.parentElement.id;
          console.log(elementId);          
        fetchData("xmls/project-cards.xml");
        var xmlText = sessionStorage.filelData; 
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                //populateElems(this,elementId);
            }
        };
        xmlhttp.open("GET", "xmls/project-cards.xml", true);
        xmlhttp.send();  
          });
        });    */
}  
function populateElems(xml,elementId) {
          var xmlDoc = xml.responseXML;     
          var elemsCount =xmlDoc.querySelectorAll('Project').length-1;
          for (let index = 0; index < elemsCount; index++) {
            //console.log(xmlDoc.childNodes[0].childNodes[index].textContent);
            if (xmlDoc.querySelectorAll('Project')[index].childNodes[1].textContent==elementId) { 
              var myPjct=xmlDoc.querySelectorAll('Project')[index]; 
              var file = "elements/pjct-card.html";  
            var div = document.getElementById("pjcts-gal");
          console.log("Hello");
              fetchData(file);
              div.innerHTML = sessionStorage.filelData; 
              for (let pjctChild = 1; pjctChild < myPjct.childNodes.length; pjctChild+=2) { 
               console.log( myPjct.childNodes[pjctChild].textContent);
                
              }
              break;
            }            
          }   
}

function showSlides() {  
  const header =document.getElementById("header");
  if (header.style.display != "none") {
  let slideIndex = 0;
  let i;
  let slides = document.getElementsByClassName("mySlides"); 
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";    
  }
  setTimeout(showSlides, 3000); // Change image every 2 seconds   
}

function Accordion() {
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
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
    //console.log(c);
    const msg=document.getElementById("no-pjcts-msg");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i],"show"); 
      msg.innerHTML="";
      if (x[i].className.indexOf(c) > -1) {
        w3AddClass(x[i],"show"); 
        j++;}      
    }
    console.log(" filter end");
      if (j==0) {
        msg.innerHTML="No Projects to display at the moment";} 
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