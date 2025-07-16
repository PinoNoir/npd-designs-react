import React, { useState } from 'react';
import Hero from '../../components/hero/Hero';
import styles from './Contact.module.css';
import { Button } from '@/components';

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
        overlayImage='/assets/img/profile1.jpg'
        noBackground
        overlayBlendMode='normal'
        overlayOpacity={1}
      />

      {/* Contact Section */}
      <div className={styles.contactSection}>
        <div className={styles.contactContainer}>
          {/* Map Section */}
          <div className={styles.mapSection}>
            <div className={styles.mapHeader}>
              <h2 className={styles.mapTitle}>Location</h2>
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
                Have a project in mind? Let's discuss how we can work together.
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
              <div className={styles.formGroup}>
                <label htmlFor='name' className={styles.label}>
                  Name
                </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.input}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor='email' className={styles.label}>
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor='subject' className={styles.label}>
                  Subject
                </label>
                <input
                  type='text'
                  name='subject'
                  id='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  className={styles.input}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor='message' className={styles.label}>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.textarea}
                  required
                  disabled={isSubmitting}
                />
              </div>
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
    </div>
  );
};

export default Contact;
