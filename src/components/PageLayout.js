import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function PageLayout({ children }) {
    return (
        <>
            <Header />
            <div className="content">{children}</div>
            <Footer />
        </>
    )
}
