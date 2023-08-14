<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" id="stylesheet" 
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<param name="projectId" ></param>
<xsl:template match="/">
  <html> 
  <body> 
<p><b>location:</b>Ubari, libya</p>
    <xsl:for-each select="MyProjects/Project"> 
           <h3 id="pjct-ttl"><xsl:value-of select="Id"/></h3>
                <div id="project-cover" class="w3-row">
                    <div id="project-visual" class="w3-col s4 w3-green w3-center w3-container">
                        <h4><b>project rehabilitation story</b></h4>
                        <!--iframe ID="pjct-slides" src="https://docs.google.com/presentation/d/e/2PACX-1vSK1hpf6KTIOyT-ivjmiB8rrClDQtZmhDUMIHzX1RbO0ePXfye9P2pJ0kbn-0aznFD2wchaGdS-uQ3S/embed?start=true&loop=true&delayms=4000"
                        frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true">
                        </iframe-->
                        <img src="gifs/nltc.gif" />
                    </div>
                    <div id="pjct-info" class="w3-col s8 w3-indigo">
                        <h4><strong>project information</strong></h4>
                        <p><b>location:</b>Ubari, libya</p>
                        <p><b>capacity:</b>400 students</p>
                        <p><b>construction time:</b>2022 -</p>
                        <p><b>status:</b>in final stages</p>
                    </div>
                </div>
                <div id="pjct-footer" class="w3-row w3-container">
                    <div id="end-user" class="w3-row w3-container">
                        <p><b>end user:</b><pre> Municipality of Ubari </pre></p>
                        <a class="w3-mobile" href="https://m.facebook.com/100064771327032/" target="_blank" title="Municipality of Ubari">
                            <img src="images\Awbari1.jpg" alt="Municipality of Ubari"/>
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
                  <!--xsl:if test="$projectId={Id}"> </xsl:if-->
          </xsl:for-each>  
 
 </body>
  </html>
</xsl:template>
</xsl:stylesheet>