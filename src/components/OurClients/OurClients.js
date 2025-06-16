import React from 'react';
import './OurClients.css';
import designcraft from "./clientimages/designcraft.png";  
import kraftmaids from "./clientimages/kraftmaids.png";  
import serenade from "./clientimages/serenade.png"; 
import yorktownwne from "./clientimages/yorktowne.png"; 
import StdSig from "./clientimages/studio signature.png";

const OurClients = () => {
  // Client data with logos and website URLs
  const clients = [
    {
      id: 1,
      name: 'DesignCraft',
      logo: designcraft,
      website: 'https://www.designcraftcabinets.com'
    },
    {
      id: 2,
      name: 'KraftMaid',
      logo: kraftmaids,
      website: 'https://www.kraftmaid.com'
    },
    {
      id: 3,
      name: 'Serenade',
      logo: serenade,
      website: 'https://www.serenadecabinetry.com'
    },
    {
      id: 4,
      name: 'Yorktowne',
      logo: yorktownwne,
      website: 'https://www.yorktownecabinetry.com'
    }
  ];

  // Function to handle client click and redirect to their website
  const handleClientClick = (website) => {
    window.open(website, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="our-clients-section">
      <h2 className="section-title">Signature Brand Partners</h2>
      <br></br>
      <div className="clients-grid">
        {clients.map((client) => (
          <div 
            key={client.id} 
            className="client-item"
            onClick={() => handleClientClick(client.website)}
            title={`Visit ${client.name}'s website`}
          >
            <img 
              src={client.logo} 
              alt={`${client.name} logo`} 
              className="client-logo"
            />
          </div>
        ))}
      </div>
      <div className="exclusive-brand-section">
        <h3 className="section-title">
          Our Exclusive Brand : Studio Signature Cabinets
        </h3>
        <img 
          src={StdSig} 
          alt="Studio Signature Cabinets logo" 
          className="exclusive-brand-logo"
          style={{ width: '250px', height: 'auto' }} // Adjust the width as necessar
        />
      </div>
    </section>
  );
};

export default OurClients;