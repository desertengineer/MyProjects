<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" id="stylesheet" 
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
  <html>
   <link rel="stylesheet" href=""/>
  <body>
    <xsl:for-each select="MyProjects/Project">
      <xsl:sort select="ID"/>
 <h3 id="pjct-ttl"><xsl:value-of select="ID"/></h3>
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
                            <img src="images\Awbari1.jpg" alt="Municipality of Ubari">
                        </a>
                    </div>
                    <div id="sdg-icons" class="w3-row w3-container">
                        <img src="images\sdgs\sdg 4.png" alt="Sustainable Development Goal 4" class="sdg">
                        <img src="images\sdgs\sdg 6.jpeg" alt="Sustainable Development Goal 6" class="sdg">
                        <img src="images\sdgs\sdg 17.png" alt="Sustainable Development Goal 17" class="sdg">
                    </div>
                    <div id="client" class="w3-row w3-container">
                        <p><b>Client:</b><pre> UNDP Libya </pre></p>
                        <a class="w3-mobile" href="https://www.undp.org/libya" target="_blank" title="UNDP Libya">
                            <img src="images\undp.jpeg" alt="United Nations Development Programme">
                        </a>
                    </div>
  <!-- ' Remove this part later' h2 class="w3-green">My Projects</h2>
<image src="https://www.autoguide.com/blog/wp-content/gallery/odd-and-ugly-cars-from-2016-geneva-motor-show/Ugly-RR.jpg" height="500"/> 

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
  </table-->
 
 </body>
  </html>
</xsl:template>
</xsl:stylesheet>