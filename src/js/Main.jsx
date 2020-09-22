import React from 'react';
import '../sass/_main.scss'
import OutstandingIntelligence from './components/section1/OutstandingIntelligence';
import Description from './components/section2/Description'

export default function Main() {
    return (
        <>
        <section className='product-info'> 
            <OutstandingIntelligence />
        </section>
        <section  className='product-description'>
            <Description />
        </section>
        </>
    )
}
