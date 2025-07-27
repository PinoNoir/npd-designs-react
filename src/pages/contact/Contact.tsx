import React, { useState } from 'react';
import Hero from '../../components/hero/Hero';
import styles from './Contact.module.css';
import { Button, Footer, Input, TextArea } from '@/components';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);
      const response = await fetch('/contact.php', {
        method: 'POST',
        body: formDataToSend,
      });
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      {/* Hero with profile image overlay */}
      <Hero
        title='Contact'
        subtitle='Thank you for checking out my portfolio!'
        description=" I'm open to freelancing opportunities. If you have a project in mind or are simply interested in finding out more, get in touch and let's get things moving."
        backgroundImage='/assets/img/profile1.jpg'
        showProjectsButton={true}
        showContactButton={false}
      />

      {/* Contact Section */}
      <div className={styles.contactSection}>
        <div className={styles.contactContainer}>
          {/* Map Section */}
          <div className={styles.mapSection}>
            <div className={styles.mapHeader}>
              <h1 className={styles.mapTitle}>Location</h1>
              <p className={styles.mapSubtitle}>Melbourne, Florida</p>
            </div>
            <iframe
              src='https://snazzymaps.com/embed/144902'
              width='100%'
              height='300px'
              className={styles.map}
              allowFullScreen
              title='Location Map'
            />
          </div>
          {/* Contact Form */}
          <div className={styles.formSection}>
            <div className={styles.formHeader}>
              <h2 className={styles.formTitle}>Get in Touch</h2>
              <p className={styles.formSubtitle}>
                Have a project in mind? Let's talk!
              </p>
            </div>

            {/* Contact Form */}
            {submitStatus === 'success' && (
              <div className={styles.successMessage}>
                Thank you! Your message has been sent successfully. I'll get
                back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className={styles.errorMessage}>
                Sorry, there was an error sending your message. Please try again
                or contact me directly.
              </div>
            )}
            <form onSubmit={handleSubmit} className={styles.form}>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                label="Name"
                required
                disabled={isSubmitting}
              />
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                label="Email"
                required
                disabled={isSubmitting}
              />
              <Input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                label="Subject"
                required
                disabled={isSubmitting}
              />
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                label="Message"
                rows={6}
                required
                disabled={isSubmitting}
              />
              <Button
                type='submit'
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
