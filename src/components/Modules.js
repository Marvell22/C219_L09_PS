import React from 'react';
import { useParams, Link } from 'react-router-dom';

function Modules() {
  const { diplomaId } = useParams();
  const modules = {
    '1': [
      { id: '101', name: 'Introduction to IT' },
      { id: '102', name: 'Web Development' },
    ],
    '2': [
      { id: '201', name: 'Network Security' },
      { id: '202', name: 'Ethical Hacking' },
    ],
    '3': [
      { id: '301', name: 'Machine Learning' },
      { id: '302', name: 'Big Data Analytics' },
    ],
  };

  return (
    <div>
      <h2>Modules for Diploma {diplomaId}</h2>
      <ul>
        {modules[diplomaId]?.map((module) => (
          <li key={module.id}>
            <Link to={`/diplomas/${diplomaId}/${module.id}`}>{module.name}</Link>
          </li>
        )) || <p>No modules found.</p>}
      </ul>
    </div>
  );
}

export default Modules;