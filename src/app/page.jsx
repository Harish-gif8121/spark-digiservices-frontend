import React from 'react'
import Banner from '@/components/sections/banner'
import site from "@/data/site.json";
import "../styles/global.css";
import ServicesMarquee from '@/components/sections/ServicesMarquee'
import SparkDigiServices from '@/components/sections/SparkDigiServices';
import TestimonialsClient from '@/components/sections/testimonials/TestimonailsClient';
import KeyBenefits from '@/components/sections/keybenefits';
import ContactSection from '@/components/sections/contactSection';
import TrustStats from '@/components/sections/TrustStats';
import WhyChoose from '@/components/sections/WhyChoose';
import ClientsSection from '@/components/sections/ClientsSection';
import IndustriesSection from '@/components/sections/Industries';
import FreeAuditSection from '@/components/sections/FreeAuditSection';
import BlogSection from '@/components/sections/BlogSection';

const page = () => {
  return (
    <div className='mt-10'>
      <Banner />
      <ServicesMarquee/>
       {/* <TrustStats data={site} /> */}
       <SparkDigiServices/>
       <WhyChoose data={site} />
       <ClientsSection data={site.clientsSection} />
       <IndustriesSection data={site.industries} />
       <TestimonialsClient testimonials={site.testimonials} />

      
      <FreeAuditSection />
       {/* <KeyBenefits/> */}
       <BlogSection/>
       <ContactSection/>
       
    </div>
  )
}

export default page
