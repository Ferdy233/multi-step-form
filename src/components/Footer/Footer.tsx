import React from 'react';
import './Footer.scss';

interface FooterProps {
  step: number;
  onBack?: () => void;
}

const Footer: React.FC<FooterProps> = ({ step, onBack }) => {
  return (
    <footer className='form-footer'>
      {onBack && (
        <button type='button' className='go-back-btn' onClick={onBack}>
          Go Back
        </button>
      )}
      <button type='submit' className={`next-step-btn ${step === 4 ? 'confirm-btn' : ''}`}>
        {step === 4 ? 'Confirm' : 'Next Step'}
      </button>
    </footer>
  );
};

export default Footer;
