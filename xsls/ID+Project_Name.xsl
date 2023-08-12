<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" id="stylesheet" 
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
  <html>
   <link rel="stylesheet" href="myW3.css"/>
  <body style=" margin:50">
 
  <h2 class="w3-green">My Projects</h2>
<image src="file:///D:/!%20DRIVES/OneDrive/Documents/GitHub/MyProjects/images/Slider/higher_education-01.jpg" height="500"/> 

  <table border="3">
    <tr bgcolor="#1f78be">
      <th>ID</th>
      <th>Name</th>
    </tr>
    <xsl:for-each select="MyProjects/Project">
      <xsl:sort select="ID"/>
    <tr>
      <td><xsl:value-of select="ID"/></td>
      <td><xsl:value-of select="Project_Name"/></td>
    </tr>
    </xsl:for-each>
  </table>
 
 </body>
  </html>
</xsl:template>
</xsl:stylesheet>