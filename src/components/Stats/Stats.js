import React from 'react';
import './Stats.css';

const Stats = () => {
  const statistics = [
    {
      id: 1,
      number: '12+',
      label: 'Years on market'
    },
    {
      id: 2,
      number: '1200+',
      label: 'Completed Projects'
    },
    {
      id: 3,
      number: '1.2M+',
      label: 'sq.ft. of crafted sheet goods'
    },
    {
      id: 4,
      number: '10K+',
      label: 'sq.ft. manufacture facility'
    }
  ];

  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {statistics.map((stat) => (
            <div key={stat.id} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;