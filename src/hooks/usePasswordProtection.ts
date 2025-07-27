import { useState, useEffect } from 'react';

export const usePasswordProtection = (projectName: string) => {
  const [hasAccess, setHasAccess] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Check if user has access stored in localStorage
    const storedAccess = localStorage.getItem(`project-access-${projectName}`);
    if (storedAccess === 'true') {
      setHasAccess(true);
    }
  }, [projectName]);

  const checkAccess = () => {
    const storedAccess = localStorage.getItem(`project-access-${projectName}`);
    if (storedAccess === 'true') {
      setHasAccess(true);
      return true;
    } else {
      setIsModalOpen(true);
      return false;
    }
  };

  const grantAccess = () => {
    setHasAccess(true);
    setIsModalOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return {
    hasAccess,
    isModalOpen,
    checkAccess,
    grantAccess,
    closeModal,
  };
}; 