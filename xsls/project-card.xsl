<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" id="stylesheet" 
xmlns:xsl="http://www.w3.org/1999/XSL/Transform"> 
<xsl:template match="/">
  <html> 
  <body>  
           <h3 id="pjct-ttl"></h3>
                <div id="project-cover" class="w3-row">
                    <div id="project-visual" class="w3-col s4 w3-green w3-center w3-container">
                        <h4><b>project Implementation story</b></h4>  
                        <img>
                            <xsl:attribute name="src">
                                <xsl:value-of select="Project/Visualization"/>
                            </xsl:attribute>
                        </img>
                    </div>
                    <div id="pjct-info" class="w3-col s8 w3-indigo">
                        <h4><strong>project information</strong></h4>
                        <p><b>location:</b><xsl:value-of select="Project/Location"/></p>
                        <p><b>Beneficiaries:</b><xsl:value-of select="Project/Beneficiaries"/></p>
                        <p><b>capacity:</b><xsl:value-of select="Project/Capacity"/></p>
                        <p><b>construction time:</b><xsl:value-of select="Project/Time"/></p>
                        <p><b>status:</b><xsl:value-of select="Project/Status"/></p>
                    </div>
                </div>
                <div id="pjct-footer" class="w3-row w3-container">
                    <div id="end-user" class="w3-row w3-container">
                        <p><b>end user:</b><pre> <xsl:value-of select="Project/enduser"/> </pre></p> 
                        <a>                           
                            <xsl:attribute name="class">
                                <xsl:text>w3-mobile</xsl:text>
                            </xsl:attribute>                           
                            <xsl:attribute name="href">
                                <xsl:value-of select="Project/enduser_link"/>
                            </xsl:attribute>                           
                            <xsl:attribute name="target">
                                <xsl:text>_blanck</xsl:text>
                            </xsl:attribute>                           
                            <xsl:attribute name="title">
                                <xsl:value-of select="Project/enduser"/>
                            </xsl:attribute>

                            <img>
                                <xsl:attribute name="src">
                                    <xsl:value-of select="Project/enduser_logo"/>
                                </xsl:attribute> 
                                <xsl:attribute name="alt">
                                    <xsl:value-of select="Project/enduser"/>
                                </xsl:attribute> 
                            </img>
                        </a>
                    </div>
                    <div id="sdg-icons" class="w3-row w3-container">
                        <img src="images\sdgs\sdg 4.png" alt="Sustainable Development Goal 4" class="sdg"/>
                        <img src="images\sdgs\sdg 6.jpeg" alt="Sustainable Development Goal 6" class="sdg"/>
                        <img src="images\sdgs\sdg 17.png" alt="Sustainable Development Goal 17" class="sdg"/>
                    </div>
                    <div id="client" class="w3-row w3-container">
                        <p><b>Client:</b><pre> UNDP Libya </pre></p>
                        <a class="w3-mobile" href="https://www.undp.org/libya" target="_blank" title="UNDP Libya">
                            <img src="images\undp.jpeg" alt="United Nations Development Programme"/>
                        </a>
                    </div>
                  </div>  
 </body>
  </html>
</xsl:template>
</xsl:stylesheet>