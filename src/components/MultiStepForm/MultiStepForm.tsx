import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Step1 from '../Step1/Step1';
import Step2 from '../Step2/Step2';
import Step3 from '../Step3/Step3';
import Step4 from '../Step4/Step4';
import { useNavigate } from 'react-router-dom';
import Confirmation from '../Confirmation/Confirmation';
import './MultiStepForm.scss';
import useFormValidation from '../../hooks/useFormValidation';
import usePlanSelection from '../../hooks/usePlanSelection';
import useMediaQuery from '../../hooks/useMediaQuery ';

const MultiStepForm: React.FC = () => {
  const navigate = useNavigate(); 
  const { formData, formErrors, isSubmitted, handleFormChange, handleSubmitValidation } = useFormValidation({
    name: '',
    email: '',
    phone: '',
  });

  const { billingType, selectedPlan, handlePlanChange, handleBillingToggle } = usePlanSelection();

  const [step, setStep] = useState<number>(() => {
    const savedStep = localStorage.getItem('step');
    return savedStep ? Number(savedStep) : 1;
  });

  const [selectedAddOns, setSelectedAddOns] = useState<Set<string>>(() => {
    const savedAddOns = localStorage.getItem('selectedAddOns');
    return savedAddOns ? new Set(JSON.parse(savedAddOns)) : new Set();
  });

  const [isConfirmed, setIsConfirmed] = useState(false);
  const isMobile = useMediaQuery('(max-width:768px)');

  // Save step to localStorage
  useEffect(() => {
    localStorage.setItem('step', step.toString());
  }, [step]);

  const handleNextStep = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (step === 4) {
      setIsConfirmed(true);
    } else {
      const isValid = handleSubmitValidation();
      if (isValid) {
        setStep((prev) => prev + 1);
      }
    }
  };

  const handleGoBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleToggleAddOn = (addOnId: string) => {
    setSelectedAddOns((prev) => {
      const newSelected = new Set(prev);
      if (newSelected.has(addOnId)) {
        newSelected.delete(addOnId);
      } else {
        newSelected.add(addOnId);
      }
      // Convert Set to Array before saving
      localStorage.setItem('selectedAddOns', JSON.stringify(Array.from(newSelected)));
      return newSelected;
    });
  };

  const resetForm = () => {
    localStorage.clear();
    navigate('/');
  };

  const stepTitles = [
    { title: 'Your info', headerTitle: 'Personal info', description: 'Please provide your name, email address, and phone number.' },
    { title: 'Select Plan', headerTitle: 'Select your plan', description: 'You have the option of monthly or yearly billing.' },
    { title: 'Add-ons', headerTitle: 'Pick add-ons', description: 'Add-ons help enhance your gaming experience.' },
    { title: 'Summary', headerTitle: 'Finishing up', description: 'Double-check everything looks OK before confirming.' },
  ];

  return (
    <form className='center-wrapper' onSubmit={handleNextStep}>
  <div className='multistep-container'>
    {/* Sidebar */}
    <aside className='sidebar' aria-label='Progress steps'>
      <ol className='steps'>
        {stepTitles.map((item, index) => (
          <li key={index} className={`step ${step === index + 1 ? 'active' : ''}`}>
            <span className='step-circle'>{index + 1}</span>
            <span className='step-text'>
              <span className='step-number'>Step {index + 1}</span>
              <span className='step-title'>{item.title}</span>
            </span>
          </li>
        ))}
      </ol>
    </aside>

    {/* Main Content */}
    <section className={`form-content ${!isConfirmed ? 'not-confirmed' : 'confirmed'}`} aria-labelledby='header-title'>
      {/* Reset Button */}
      {!isConfirmed && (
    <button className="reset-button" type="button" onClick={resetForm}>Reset</button>
  )}
      {!isConfirmed && (
        <>
          <Header title={stepTitles[step - 1].headerTitle} description={stepTitles[step - 1].description} titleId='header-title' />
          {step === 1 && <Step1 formData={formData} formErrors={formErrors} isSubmitted={isSubmitted} onChange={handleFormChange} />}
          {step === 2 && <Step2 billingType={billingType} selectedPlan={selectedPlan} onBillingToggle={handleBillingToggle} onPlanChange={handlePlanChange} />}
          {step === 3 && <Step3 billingType={billingType} selectedAddOns={selectedAddOns} onToggleAddOn={handleToggleAddOn} />}
          {step === 4 && <Step4 billingType={billingType} selectedPlan={selectedPlan} selectedAddOns={selectedAddOns} onGoToPlanStep={() => setStep(2)} />}
          {!isMobile && <Footer step={step} onBack={step > 1 ? handleGoBack : undefined} />}
        </>
      )}
      {isConfirmed && <Confirmation />}
    </section>
  </div>

  {!isConfirmed && isMobile && <Footer step={step} onBack={step > 1 ? handleGoBack : undefined} />}
</form>
  );
};

export default MultiStepForm;
