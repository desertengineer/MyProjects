function MyincludeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("my-include-html");
      if (file) {
        /*make an HTTP request using the attribute value as the file name:*/
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /*remove the attribute, and call this function once more:*/
            elmnt.removeAttribute("my-include-html");
            MyincludeHTML();
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
      //console.log(file); 
      //console.log(text); 
      sessionStorage.filelData= text; 
    });  
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
getNavLink=function (elem, c) { 
     var title=elem.innerHTML;
    //console.log(c);
    const page = document.getElementById("nav-page");
    const div = document.getElementById("pjcts-gal");
    
    if (window.location.href.split("/").pop()=='single-project-page.html') {
      w3.styleElement(document.getElementById("pjct-card"),'display',"none");
      } else {
        w3.styleElement(document.getElementById("header"),'display',"none");
        w3.styleElement(document.getElementById("main-wraper"),'display',"none");
      }
    //; 
    var file = "projects-page.html";  
        fetchData(file);
        div.innerHTML = sessionStorage.filelData; 
        w3.styleElement(page, 'display', "block");
        const heading=  document.querySelector('h1#sector-title').innerHTML= title+" projects gallery"; 
        filterSelection(c); 
}

displayProject = function () {
  var id = location.search.substring(1); 
    console.log(id);
}
    //xml = loadXMLDoc("xmls/project-cards.xml");
    //xsl = loadXMLDoc("xmls/project-cards.xsl");
    function load(url, callback) {
      var req = new XMLHttpRequest();
      req.open('GET', url);
      // to allow us doing XSLT in IE
      try { req.responseType = "msxml-document" } catch (ex) {}
      req.onload = function() {
        callback(req.responseXML);
      };
      req.send();
    }
    
    function transform(xml, xsl) {
      load(
        xml,
        function(inputXml) {
          load(
            xsl,
            function(xsltSheet) {
              displayResult(inputXml, xsltSheet);
            }
          );
        }
      );
    }
    
    function displayResult(xmlInput, xsltSheet) {
      if (typeof XSLTProcessor !== 'undefined') {
        var proc = new XSLTProcessor();
        proc.importStylesheet(xsltSheet);
        document.getElementById('pjct-card').appendChild(proc.transformToFragment(xmlInput, document));
      }
      else if (typeof xmlInput.transformNode !== 'undefined') {
        document.getElementById("pjct-card").innerHTML = xmlInput.transformNode(xsltSheet);
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

w3.getElements = function (id) {if (typeof id == "object") {return [id];} else {return document.querySelectorAll(id);}};

//filterSelection("all") 
  function filterSelection(c) { 
    var x, i,j=0;
    x = document.getElementsByClassName("pjct");
    //console.log(c);
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      //console.log(x.length);
      document.getElementById("no-pjcts-msg").innerHTML="";
      if (x[i].className.indexOf(c) > -1) {w3AddClass(x[i], "show");j++;}
    }
    console.log(j);
      if (j==0) document.getElementById("no-pjcts-msg").innerHTML="No Projects to display at the moment";
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
