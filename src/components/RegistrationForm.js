import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({ name: '', email: '', course: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h2>Register for a Course</h2>
      {submitted ? (
        <p>Thank you for registering, {formData.name}!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Course"
            value={formData.course}
            onChange={(e) => setFormData({ ...formData, course: e.target.value })}
            required
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default RegistrationForm;
