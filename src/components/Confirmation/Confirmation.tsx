import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Confirmation.scss';
import thankYouIcon from '../../assets/images/icon-thank-you.svg'; // Ensure you have a thank you icon

const Confirmation: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear local storage
    localStorage.clear();

    // Set a timeout to redirect after 6 seconds
    const timer = setTimeout(() => {
      navigate('/'); // Redirect to the Starter Page
    }, 6000); 

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className='confirmation'>
      <img src={thankYouIcon} alt='Thank you icon' className='thank-you-icon' />
      <h1 className='confirmation-title'>Thank You!</h1>
      <p className='confirmation-message'>
        Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
      </p>
    </div>
  );
};

export default Confirmation;