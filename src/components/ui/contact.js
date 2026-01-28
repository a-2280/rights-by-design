import React from "react"

export default function Contact({ title, children }) {
    return (
        <div className='contact flex flex-col gap-20'>
            <h3 className='text-grey text-mono'>{title}</h3>
            <div className='text-26'>{children}</div>
        </div>
    )
}
