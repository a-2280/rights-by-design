import React from "react"

export default function Button({ text, link, variant = "primary", download }) {
    let variantStyles = {}

    switch (variant) {
        case "primary":
            variantStyles = {
                backgroundColor: "rgba(226, 242, 206, 1)",
                color: "black",
            }
            break
        case "secondary":
            variantStyles = {
                backgroundColor: "rgba(145, 208, 242, 1)",
                color: "black",
            }
            break
    }

    return (
        <a className='flex p-button text-mono text-12 w-fit m-text-mono' href={link} download={download} style={variantStyles}>
            {text || "button"}
        </a>
    )
}
