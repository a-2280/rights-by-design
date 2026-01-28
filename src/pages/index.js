import React from "react"

import Seo from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/sections/hero"
import Introduction from "../components/sections/introduction"

export default function IndexPage() {
    return (
        <Layout>
            <Hero />
            <Introduction />
        </Layout>
    )
}

export const Head = () => <Seo title='Home' />
