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
// to display requested page
getNavLink=function (elem, sector) { 
    var myFile = "projects-page.html";  
    var myDiv=document.getElementById("pjcts-gal");
    fetchData(myFile);
    myDiv.innerHTML=sessionStorage.filelData; 
     var title=elem.innerHTML;
    console.log(sector);
    const page = document.getElementById("nav-page");
    const header =document.getElementById("header");
    const mediaMain= document.getElementById("main-wraper");
    //if (header) {document.getElementById("all-doc").removeChild(header);}
    w3.styleElement(header, 'display', "none");
    if (mediaMain) {document.getElementById("all-doc").removeChild(mediaMain);}
        w3.styleElement(page, 'display', "block");
        document.querySelector('h1#sector-title').innerHTML= title+" projects gallery"; 
        filterSelection(sector); 
        //displayProject();  
} 
displayProject = function () {
  //var id = location.search.substring(1); 
    var div = document.getElementById("pjcts-gal");
          console.log("Hello");
          document.querySelectorAll('#pjcts-gal a').forEach(occurence => {
          occurence.addEventListener('click', (e) => {
          let elementId = e.target.parentElement.id;
          console.log(elementId);          
        /*fetchData("xmls/project-cards.xml");
        var xmlText = sessionStorage.filelData; */ 
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                //populateElems(this,elementId);
            }
        };
        xmlhttp.open("GET", "xmls/project-cards.xml", true);
        xmlhttp.send();  
          });
        });    
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
      //x[i].style.display="none";
      msg.innerHTML="";
      if (x[i].className.indexOf(c) > -1) {
        w3AddClass(x[i],"show");
        //x[i].style.display="table-cell";
        j++;console.log(j);}      
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
