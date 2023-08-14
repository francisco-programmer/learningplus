import React from 'react'


const VideoPrincipal = () => {
  return (
    <div className='w-screen'>
      <div className='hidden sm:block  px-60'>
        <iframe src="https://player.vimeo.com/video/801056176?h=053f7f5561&title=0&byline=0&portrait=0" width="840" height="460" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen className='rounded bg-redventa'></iframe>

      </div>
      <div className='block sm:hidden'>
      <iframe src="https://player.vimeo.com/video/801056176?h=053f7f5561&title=0&byline=0&portrait=0" width="400" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

      </div>

    </div>
  )
}

export default VideoPrincipal