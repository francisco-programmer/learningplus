import React, {useEffect}from 'react'

const ScrollToTopMount = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return null
}

export default ScrollToTopMount