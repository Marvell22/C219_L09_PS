import React, { useState } from 'react';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const questions = [
    { question: 'What is this portal for?', answer: 'This portal helps you explore courses and register your interest.' },
    { question: 'How can I register?', answer: 'Go to the Register page and fill out the form.' },
  ];

  return (
    <div>
      <h2>Frequently Asked Questions</h2>
      {questions.map((q, index) => (
        <div key={index}>
          <h3 onClick={() => setActiveIndex(index === activeIndex ? null : index)}>
            {q.question}
          </h3>
          {index === activeIndex && <p>{q.answer}</p>}
        </div>
      ))}
    </div>
  );
}

export default FAQ;