<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" id="stylesheet" 
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
      <html> 
          <body>   
            <xsl:for-each select="Health/Project">
            <xsl:sort select="Project_Title"/>      
            <div id="pjct-card" class="w3-container w3-half w3-pale-yellow w3-border">
              <div id="pjct-facts" class="w3-row">
                <table class="w3-table">
                  <tr><th><xsl:value-of select="Project_Title"/></th></tr>
                  <tr><th>location</th><td><xsl:value-of select="Location"/></td></tr>
                  <tr><th>end user</th><td><xsl:value-of select="End_User"/></td></tr>
                  <tr><th>beneficiaries</th><td><xsl:value-of select="Beneficiaries"/></td></tr>
                  <tr><th>start</th><td><xsl:value-of select="Start"/></td></tr>
                  <tr><th>completion</th><td><xsl:value-of select="Completion"/></td></tr>
                </table>
                <img src=<xsl:value-of select="Image"/>>
              </div>
              <p><xsl:value-of select="Intro"/></p>
              <div class="w3-bar">
                <a href=<xsl:value-of select="Home_Link"/> class="w3-bar-item w3-button w3-pink">Home</a>
                <a href=<xsl:value-of select="Link1"/> class="w3-bar-item w3-button w3-blue">Link 1</a>
                <a href=<xsl:value-of select="Link2"/> class="w3-bar-item w3-button w3-teal">Link 2</a>
                <a href=<xsl:value-of select="Link3"/> class="w3-bar-item w3-button w3-amber">Link 3</a>
              </div>
            </div>
          </body>
      </html>
  </xsl:template>
</xsl:stylesheet>