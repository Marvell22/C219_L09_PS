import React from 'react';
import { useParams } from 'react-router-dom';

function ModuleDetails() {
  const { moduleId } = useParams();
  const moduleDetails = {
    '101': 'Learn the basics of IT.',
    '102': 'Explore web development technologies.',
    '201': 'Understand network security protocols.',
    '202': 'Learn techniques for ethical hacking.',
    '301': 'Dive into machine learning concepts.',
    '302': 'Analyze large datasets with big data tools.',
  };

  return (
    <div>
      <h2>Module Details</h2>
      <p>{moduleDetails[moduleId] || 'No details available.'}</p>
    </div>
  );
}

export default ModuleDetails;