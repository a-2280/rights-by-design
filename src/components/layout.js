import React from "react"

import Footer from "./footer"

import "../scss/site.scss"

export default function Layout({ children }) {
    return (
        <>
            <main>{children}</main>
            <Footer />
        </>
    )
}
