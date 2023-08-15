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
                        <img>
                        <xsl:attribute name="src">
                            <xsl:value-of select="Project/sdg1img"/>
                        </xsl:attribute> 
                        <xsl:attribute name="title">
                            <xsl:value-of select="Project/sdg1alt"/>
                        </xsl:attribute>           
                        <xsl:attribute name="class">
                            <xsl:text>sdg</xsl:text>
                        </xsl:attribute> 
                    </img>
                    <img>
                    <xsl:attribute name="src">
                        <xsl:value-of select="Project/sdg2img"/>
                    </xsl:attribute> 
                    <xsl:attribute name="title">
                        <xsl:value-of select="Project/sdg2alt"/>
                    </xsl:attribute>           
                    <xsl:attribute name="class">
                        <xsl:text>sdg</xsl:text>
                    </xsl:attribute> 
                </img>
                <img>
                <xsl:attribute name="src">
                    <xsl:value-of select="Project/sdg3img"/>
                </xsl:attribute> 
                <xsl:attribute name="title">
                    <xsl:value-of select="Project/sdg3alt"/>
                </xsl:attribute>           
                <xsl:attribute name="class">
                    <xsl:text>sdg</xsl:text>
                </xsl:attribute> 
            </img>
                    </div>
                    <div id="client" class="w3-row w3-container">
                        <p><b>Client:</b><pre> <xsl:value-of select="Project/clientAlt"/> </pre></p>
                        <a  href="https://www.undp.org/libya" target="_blank" title="UNDP Libya">                        
                            <xsl:attribute name="class">
                                <xsl:text>w3-mobile</xsl:text>
                            </xsl:attribute>                           
                            <xsl:attribute name="href">
                                <xsl:value-of select="Project/clientHref"/>
                            </xsl:attribute>                           
                            <xsl:attribute name="target">
                                <xsl:text>_blank</xsl:text>
                            </xsl:attribute>                           
                            <xsl:attribute name="title">
                                <xsl:value-of select="Project/clientAlt"/>
                            </xsl:attribute>

                            <img>
                                <xsl:attribute name="src">
                                    <xsl:value-of select="Project/clientLogo"/>
                                </xsl:attribute> 
                                <xsl:attribute name="alt">
                                    <xsl:value-of select="Project/clientAlt"/>
                                </xsl:attribute> 
                            </img> 
                        </a>
                    </div>
                  </div>  
 </body>
  </html>
</xsl:template>
</xsl:stylesheet>