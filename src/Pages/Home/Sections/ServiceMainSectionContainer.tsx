import React, { useState } from 'react'
import ServiceSection from '../../../Component/ServicesSection/ServiceSection';


export interface IService {
    id: string;
    href: string;
    title: string;
    description: string;
}

type ServiceType = IService[];

const ServiceMainSectionContainer = () => {
    const [listService, setListService] = useState <ServiceType>([
        { id: '1', href: '/', title: 'internet-shop', description: 'internet-shop-description'},
        { id: '2', href: '/', title: 'site-company', description: 'site-company-description'},
        { id: '3', href: '/', title: 'landing-page', description: 'landing-page-description'},
        // Add more services here...
  
    ])
  return (
    <ServiceSection 
          listService={listService}
    />
  )
}

export default ServiceMainSectionContainer;