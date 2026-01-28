import React from "react"

import Button from "../ui/button"
import { ArrowRight } from "lucide-react"

export default function Introduction() {
    return (
        <section className='p40 flex flex-col h-800px gap-40 bg-offwhite text-charcoal m-h-100'>
            <hr />
            <div className='h-100 flex flex-col space-between'>
                <p className='text-40 max-950 m-pb-60'>Rights by Design partners to build safe, respectful and inclusive organisations—by listening, understanding, and co-creating change with the people inside them.</p>
                <div className='flex space-between align-end m-flex-col m-align-start'>
                    <div className='text-26 max-830 flex flex-col gap-20 m-pb-40'>
                        <p>We’re a collective known for navigating complexity: working through tension, transition and systems in need of uplift and transformation. Whether it’s minimising harm, building restorative processes, or reshaping workplace culture, we combine insight with human-centred design to create practical, ethical and future-ready solutions.</p>
                        <p>We call it Rights by Design. Because safe and respectful organisations don’t just happen. They’re designed—with intent and integrity.</p>
                        <p>Reimagining tomorrow, together.</p>
                    </div>
                    <Button text='get in touch →' variant='secondary' link='mailto:info@rbd.com.au' />
                </div>
            </div>
            <hr />
        </section>
    )
}
