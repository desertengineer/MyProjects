<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" id="stylesheet" 
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
  <html> 
  <body>
	  <xsl:for-each select="MyProjects/Project">
		  <xsl:sort select="ID"/>
	  <div <xsl:value-of select="classes"/>>
		  <a href="pages/project-cover-page.html">
			  <img src="<xsl:value-of select="img"/>"</>
			  <h3><xsl:value-of select="name"/></h3>
		  </a>
		  <p><xsl:value-of select="end-user"/></p>
	  </div> 
    </xsl:for-each> 
 
 </body>
  </html>
</xsl:template>
</xsl:stylesheet>