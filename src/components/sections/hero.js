import React from "react"

import Header from "../header"

export default function Hero() {
    return (
        <section className='h-100vh flex flex-col space-between bg-black text-white'>
            <Header />
            <div className='ratio-2-1 pos-rel h-100 overflow'>
                <iframe className='bg-image' src='https://player.vimeo.com/video/1124381270?background=1&autoplay=1&loop=1&muted=1'></iframe>
            </div>
            <p className='p40 text-60 m-text-40'>
                Safe and respectful organisations <br />
                don’t just happen. They’re designed.
            </p>
        </section>
    )
}
