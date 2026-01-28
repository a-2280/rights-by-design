import React from "react"
import Button from "./ui/button"
import Contact from "./ui/contact"

export default function Footer() {
    return (
        <footer className='flex space-between bg-footer text-white p-footer m-flex-col'>
            <div className='flex flex-col gap-90 m-pb-40 m-gap-40'>
                <h2 className='text-60'>Get in touch</h2>
                <Button text='download our capability deck ↓' link='/capability-deck.pdf' download />
            </div>
            <div className='flex flex-col space-between gap-60 w-520 m-fit m-gap-20'>
                <Contact title='CLIENT PARTNERSHIPS'>
                    info@rightsbydesign.com
                    <br />
                    +61 506 234 116
                </Contact>
                <Contact title='victoria'>
                    PO Box
                    <br />
                    Level 1, 240 Collins St
                    <br />
                    Melbourne 2010
                </Contact>
                <Contact title='engage'>LinkedIn</Contact>
            </div>
        </footer>
    )
}
