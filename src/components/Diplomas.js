import React from 'react';
import { Link } from 'react-router-dom';

function Diplomas() {
  const diplomas = [
    { id: '1', name: 'Diploma in IT' },
    { id: '2', name: 'Diploma in Cybersecurity' },
    { id: '3', name: 'Diploma in Data Science' },
  ];

  return (
    <div>
      <h2>Diplomas Offered</h2>
      <ul>
        {diplomas.map((diploma) => (
          <li key={diploma.id}>
            <Link to={`/diplomas/${diploma.id}`}>{diploma.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Diplomas;