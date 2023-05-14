// get required sector name
window.addEventListener('load', () => {
    
    const page = sessionStorage.getItem('PAGE'); //console.log(page);
    document.getElementsByName("sector-gallery")[0].getElementsByTagName("h1")[0].innerText=page+" Projects Gallery"
})
    
    /*document.getElementById('result-name').innerHTML = name;
    document.getElementById('result-email').innerHTML = email;*/
    
    // Via Query parameters - GET
    /* const params = (new URL(document.location)).searchParams;
    const name = params.get('name');
    const surname = params.get('email'); */

    // Via local Storage
    /* const name = localStorage.getItem('NAME');
    const email = localStorage.getItem('EMAIL'); */
function displayProject()
{
    var xmlFile="../xmls/Health-sector-page.xml";
    const xslFile="file:///D:/!%20DRIVES/OneDrive/Desktop/2-HTML%20&%20JScript/My_Projects/0_Active%20Projects/MyProjects-GitHub/xmls/"+sessionStorage.getItem('PAGE')+".xsl";
    console.log(xmlFile);console.log(xslFile);
xml = loadXMLDoc(xmlFile);
xsl = loadXMLDoc(xslFile);
// code for IE
if (window.ActiveXObject || xhttp.responseType == "msxml-document")
  {
  ex = xml.transformNode(xsl);
  document.getElementById("pjcts-gal").innerHTML = ex;
  }
// code for Chrome, Firefox, Opera, etc.
else if (document.implementation && document.implementation.createDocument)
  {
  xsltProcessor = new XSLTProcessor();
  xsltProcessor.importStylesheet(xsl);
  resultDocument = xsltProcessor.transformToFragment(xml, document);
  document.getElementById("example").appendChild(resultDocument);
  }
} 

// import data using XSL and XML files
function loadXMLDoc(filename)
{
if (window.ActiveXObject)  {xhttp = new ActiveXObject("Msxml2.XMLHTTP");}
else {xhttp = new XMLHttpRequest();}
xhttp.open("GET", filename, false);
try {xhttp.responseType = "msxml-document"} catch(err) {} // Helping IE11
xhttp.send("");
return xhttp.responseXML;
}
