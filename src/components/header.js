import React from "react"
import { Link } from "gatsby"
import Button from "./ui/button"
import { ArrowDown, ArrowRight } from "lucide-react"

export default function Header({ siteTitle }) {
    return (
        <header className='flex space-between p40 align-start gap-20 m-flex-col'>
            <div className='ratio-2-1 pos-rel logo m-pr-40'>
                <img src='/logo.svg' alt='Logo' className='bg-image' />
            </div>
            <div className='flex gap-20 m-gap-10'>
                <Button text='download our capability deck ↓' link='/capability-deck.pdf' download />
                <Button text='get in touch →' link='mailto:info@rbd.com.au' />
            </div>
        </header>
    )
}
