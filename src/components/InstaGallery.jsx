import React from 'react'

const InstaGallery = () => {
    
  return (

    <section id="redes"> 
    <div>InstaGallery</div>

    <div className="md:grid md:grid-cols-4">
            <div><div>
      {/* Código de embebido del video de Instagram */}
      {/* <blockquote 
        className="instagram-media" 
        data-instgrm-permalink="https://www.instagram.com/p/Cpl7yprAINd/" 
        data-instgrm-version="14"
      ></blockquote> */}
      {/* Script de Instagram para embeber el video */}
      {/* <script async src="https://www.instagram.com/embed.js"></script> */}
    </div>
    
    </div>
            <div className="iframe-container md:col-span-2 mt-2">
              <iframe
                className="w-full" 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/1W0IUqz4YXI?si=Ih55PcywjkLaR46O" title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
              </iframe>
            </div>
          </div>


          
    </section>
  )
}

export default InstaGallery