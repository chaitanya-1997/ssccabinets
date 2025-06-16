import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'One-stop Shop',
      subtitle: 'A-to-Z Millwork Solutions',
      description: 'Complete millwork solutions for all your needs, from design to installation.'
    },
    {
      id: 2,
      title: 'Millwork Projects Management',
      subtitle: 'Project Planning',
      description: 'Professional project planning and management for any complexity of millwork and woodworking projects.'
    },
    {
      id: 3,
      title: 'Top Millwork Specialists',
      subtitle: 'Millwork Contracting',
      description: 'With a strong dedication to sustainability and a loyal base of returning clients, we take pride in the trust we have earned over the years.'
    },
    {
      id: 4,
      title: 'Free Estimate',
      subtitle: 'Transparent Bidding',
      description: 'Get a free, detailed estimate for your millwork project, ensuring transparency and quality with our competitive pricing.'
    },
    {
      id: 5,
      title: 'Full Spectrum Services',
      subtitle: 'Complete Services',
      description: 'For your architectural millwork, custom cabinets, kitchens, or built-ins needs, rest assured, we\'ve got you covered with everything necessary to deliver exceptional results.'
    },
    {
      id: 6,
      title: 'Own Fabrication Facility',
      subtitle: 'In-house Fabrication',
      description: 'We employ state-of-the-art equipment, cutting-edge software, and top professionals to guarantee the quality of our solutions.'
    },
    {
      id: 4,
      title: 'Free Estimate',
      subtitle: 'Transparent Bidding',
      description: 'Get a free, detailed estimate for your millwork project, ensuring transparency and quality with our competitive pricing.'
    },
    {
      id: 5,
      title: 'Full Spectrum Services',
      subtitle: 'Complete Services',
      description: 'For your architectural millwork, custom cabinets, kitchens, or built-ins needs, rest assured, we\'ve got you covered with everything necessary to deliver exceptional results.'
    },
    {
      id: 6,
      title: 'Own Fabrication Facility',
      subtitle: 'In-house Fabrication',
      description: 'We employ state-of-the-art equipment, cutting-edge software, and top professionals to guarantee the quality of our solutions.'
    },
    {
      id: 6,
      title: 'Own Fabrication Facility',
      subtitle: 'In-house Fabrication',
      description: 'We employ state-of-the-art equipment, cutting-edge software, and top professionals to guarantee the quality of our solutions.'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Studio Cabinets Colors in Stock</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <h3>{service.title}</h3>
              <h4>{service.subtitle}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;