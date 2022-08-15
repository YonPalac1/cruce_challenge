import React, { useState } from 'react'

import { bannerTop } from '../../data'

const TopBanner = () => {
    const [showBannerTop, setShowBannerTop] = useState(bannerTop.show)

  return (
    <div className='mt-24 bg-tertiary'>
    { showBannerTop &&
        <div className='max-w-[1024px] mx-auto text-white flex justify-between'>
            <h3 className='text-white'>{ bannerTop.text }</h3>
            <button onClick={() => setShowBannerTop(false)}>X</button>
        </div>
    }
    </div>
  )
}

export default TopBanner