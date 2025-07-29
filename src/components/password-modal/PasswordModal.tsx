import React, { useState, useEffect } from 'react';
import { X, Lock, ArrowLeft } from 'lucide-react';
import { Button, Input } from '@/components';
import styles from './PasswordModal.module.css';

interface PasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  projectName: string;
  password: string;
}

const PasswordModal: React.FC<PasswordModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  projectName,
  password,
}) => {
  const [inputPassword, setInputPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setInputPassword('');
      setError('');
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate a brief delay for better UX
    setTimeout(() => {
      if (inputPassword === password) {
        // Store access in localStorage
        localStorage.setItem(`project-access-${projectName}`, 'true');
        onSuccess();
        onClose();
      } else {
        setError('Incorrect password. Please try again.');
      }
      setIsLoading(false);
    }, 500);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <X size={20} />
        </button>

        <div className={styles.content}>
          <div className={styles.iconContainer}>
            <Lock size={32} />
          </div>

          <h2 className={styles.title}>Protected Content</h2>
          <p className={styles.description}>
            This project is protected. Please enter the password to view the
            content.
          </p>

          <form onSubmit={handleSubmit} className={styles.form}>
            <Input
              id='password'
              name='password'
              type='password'
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
              placeholder='Enter password'
              required
              error={error}
              className={styles.input}
            />

            <div className={styles.buttonContainer}>
              <Button
                type='submit'
                disabled={isLoading || !inputPassword.trim()}
              >
                {isLoading ? 'Verifying...' : 'Access Project'}
              </Button>
            </div>
          </form>

          <div className={styles.backButtonContainer}>
            <Button variant='ghost' href='/projects'>
              <ArrowLeft size={16} />
              Back
            </Button>
          </div>

          <p className={styles.helpText}>
            Contact me for access to this project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PasswordModal;
