import * as React from 'react'
import PageLayout from '../components/PageLayout'
import styles from '../styles/style.css'

export default function Home() {
    return (
        <PageLayout>
            <main>
                <div className="wrapper">
                    <p className="tagline">Feng Shui & Lifestyle</p>
                    <h1>Improve Your Space Improve Your Life</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut et massa mi.
                    </p>
                </div>
            </main>
        </PageLayout>
    )
}
