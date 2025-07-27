import React from 'react';
import { PasswordModal } from '@/components';
import { usePasswordProtection } from '@/hooks/usePasswordProtection';

interface ProtectedProjectProps {
  projectName: string;
  password: string;
  children: React.ReactNode;
}

const ProtectedProject: React.FC<ProtectedProjectProps> = ({
  projectName,
  password,
  children,
}) => {
  const { hasAccess, isModalOpen, checkAccess, grantAccess, closeModal } = 
    usePasswordProtection(projectName);

  // Check access on component mount
  React.useEffect(() => {
    checkAccess();
  }, [checkAccess]);

  if (!hasAccess) {
    return (
      <>
        <div style={{ 
          minHeight: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <div>
            <h1 style={{ marginBottom: '1rem' }}>Protected Content</h1>
            <p style={{ color: 'var(--gray-11)' }}>
              Please enter the password to view the content.
            </p>
          </div>
        </div>
        
        <PasswordModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onSuccess={grantAccess}
          projectName={projectName}
          password={password}
        />
      </>
    );
  }

  return <>{children}</>;
};

export default ProtectedProject; 