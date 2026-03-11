import React from 'react'
import Banner from '@/components/sections/banner'
import site from "@/data/site.json";
import "../styles/global.css";
import ServicesMarquee from '@/components/sections/ServicesMarquee'
import SparkDigiServices from '@/components/sections/SparkDigiServices';
import TestimonialsClient from '@/components/sections/testimonials/TestimonailsClient';
import KeyBenefits from '@/components/sections/keybenefits';
import ContactSection from '@/components/sections/contactSection';

const page = () => {
  return (
    <div>
      <Banner />
      <ServicesMarquee/>
      <SparkDigiServices/>
       <TestimonialsClient testimonials={site.testimonials} />
       <KeyBenefits/>
       <ContactSection/>
    </div>
  )
}

export default page
