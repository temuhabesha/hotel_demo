import React, { useState } from "react";
import "./ContactForm.css"; // Link to its specific CSS file

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // 'loading', 'success', 'error'
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[0-9\s-()]{7,15}$/; // Basic phone number regex

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (formData.phoneNumber && !phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Invalid phone number format.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear error for the field being typed into
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      setStatus("error"); // Set status to error if validation fails
      return;
    }

    setStatus("loading");
    setErrors({}); // Clear previous errors on new submission attempt

    // --- Backend Integration Placeholder ---
    // For a real application, you would send this data to your backend here.
    // Examples:
    // 1. Formspree.io:
    //    const formspreeUrl = "https://formspree.io/f/YOUR_FORM_ID"; // Replace with your Formspree ID
    //    try {
    //      const response = await fetch(formspreeUrl, {
    //        method: 'POST',
    //        headers: {
    //          'Content-Type': 'application/json',
    //        },
    //        body: JSON.stringify(formData),
    //      });
    //      if (response.ok) {
    //        setStatus('success');
    //        setFormData({ fullName: '', email: '', phoneNumber: '', message: '' }); // Clear form
    //      } else {
    //        setStatus('error');
    //      }
    //    } catch (error) {
    //      console.error('Submission error:', error);
    //      setStatus('error');
    //    }

    // 2. Netlify Forms: Just add a `data-netlify="true"` attribute to the form tag
    //    and a hidden input with `name="form-name"`

    // 3. Custom API Endpoint:
    //    try {
    //      const response = await fetch('/api/contact', { // Replace with your API endpoint
    //        method: 'POST',
    //        headers: {
    //          'Content-Type': 'application/json',
    //        },
    //        body: JSON.stringify(formData),
    //      });
    //      if (response.ok) {
    //        setStatus('success');
    //        setFormData({ fullName: '', email: '', phoneNumber: '', message: '' });
    //      } else {
    //        setStatus('error');
    //      }
    //    } catch (error) {
    //      console.error('Submission error:', error);
    //      setStatus('error');
    //    }

    // --- Simulation for demonstration ---
    // Simulate API call success/failure after a delay
    setTimeout(() => {
      // Simulate success
      setStatus("success");
      setFormData({ fullName: "", email: "", phoneNumber: "", message: "" });

      // Simulate error (uncomment to test error state)
      // setStatus('error');
    }, 1500);
    // --- End Simulation ---
  };

  return (
    <section className="contact-form-section">
      <div className="contact-form-container">
        <h2 className="section-heading">Send Us a Message</h2>
        <p className="section-subheading">
          Have a question or special request? Fill out the form below and we'll
          get back to you shortly.
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your Full Name"
              className={errors.fullName ? "input-error" : ""}
              required
            />
            {errors.fullName && (
              <p className="error-message">{errors.fullName}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className={errors.email ? "input-error" : ""}
              required
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number (Optional)</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="+251-9XX-XXX-XXXX"
              className={errors.phoneNumber ? "input-error" : ""}
            />
            {errors.phoneNumber && (
              <p className="error-message">{errors.phoneNumber}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us how we can help you..."
              className={errors.message ? "input-error" : ""}
              required
            ></textarea>
            {errors.message && (
              <p className="error-message">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="submit-button"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="form-status success">
              Your message has been sent successfully! We'll get back to you
              soon.
            </p>
          )}
          {status === "error" && (
            <p className="form-status error">
              There was an error sending your message. Please check your inputs
              and try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
