import React from 'react'

const Video = () => {
  const anchopantalla = screen.width
  return (
    <div>
        <div className="w-screen">
            <div className="hidden sm:block  px-60 py-5">
              <iframe
                src="https://player.vimeo.com/video/801056158?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1#t="
                width="840"
                height="460"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
                className="rounded bg-redventa"
              ></iframe>
            </div>
            <div className="block sm:hidden">
              <iframe
                src="https://player.vimeo.com/video/801056158?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1#t="
                width={anchopantalla}
                height={anchopantalla}
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          
    </div>
  )
}

export default Video