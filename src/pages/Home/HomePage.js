import React from 'react'
import HeroSection from '../../components/Sections/Hero/HeroSection'
import AboutSection from '../../components/Sections/About/AboutSection'
import SpecialsSection from '../../components/Sections/Specials/SpecialsSection'
import TestimonialsSection from '../../components/Sections/Testimonials/TestimonialsSection'

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
