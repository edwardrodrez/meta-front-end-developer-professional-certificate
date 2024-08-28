import React from 'react'
import HeroSection from '../../components/Sections/HeroSection/HeroSection'
import AboutSection from '../../components/Sections/AboutSection/AboutSection'
import SpecialsSection from '../../components/Sections/SpecialsSection/SpecialsSection'
import TestimonialsSection from '../../components/Sections/TestimonialsSection/TestimonialsSection'

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <SpecialsSection />
            <TestimonialsSection />
            <AboutSection />
        </>
    )
}
