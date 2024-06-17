import React from 'react';
import { useFormData } from 'herotofu-react';
import '../components/Contact.css';

const ContactForm = () => {
  // TODO - update to the correct endpoint
  const { formState, getFormSubmitHandler } = useFormData('https://herotofu.com/start');

  return (
    <div className="form-container">
      {!!formState.status && <div className="form-status">Current form status is: {formState.status}</div>}
      <form onSubmit={getFormSubmitHandler()}>
        <div className="pt-0 mb-3">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            className="form-input"
            required
          />
        </div>
        <div className="pt-0 mb-3">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="form-input"
            required
          />
        </div>
        <div className="pt-0 mb-3">
          <textarea
            placeholder="Your message"
            name="message"
            className="form-textarea"
            required
          />
        </div>
        <div className="pt-0 mb-3">
          <button
            className="form-button"
            type="submit"
          >
            Send a message (simple)
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
