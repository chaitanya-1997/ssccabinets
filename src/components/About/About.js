import React from 'react';
import './About.css';

const About = () => {
  const values = [
    {
      id: 1,
      percentage: '100%',
      title: 'Responsibility',
      description: 'Sustainable and high-quality raw materials used from the USA and Canada'
    },
    {
      id: 2,
      percentage: '97%',
      title: 'Contentedness',
      description: 'Customer satisfaction rate for over a decade is our pride'
    },
    {
      id: 3,
      percentage: '76%',
      title: 'Loyalty',
      description: 'Three-fourths of our revenue is generated from loyal, returning clients'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Us</h2>
            <h3>We are Brooklyn Millwork</h3>
            <p>
              At Brooklyn Millwork, we shape experiences, proudly serving residential and commercial real estate nationwide.
              Based in Brooklyn, NY, our facilities, with over 1 million sq ft of crafted sheet goods, redefine excellence with attention to detail.
            </p>
            <p>
              As the foremost millwork manufacturer, we proudly serve as your premier destination for premium and versatile millwork solutions,
              catering to the needs of high-net-worth individuals and Fortune500 companies.
            </p>
          </div>
          <div className="values-grid">
            {values.map((value) => (
              <div key={value.id} className="value-item">
                <div className="value-percentage">{value.percentage}</div>
                <h4 className="value-title">{value.title}</h4>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;