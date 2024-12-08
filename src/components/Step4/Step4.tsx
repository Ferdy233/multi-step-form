import React from 'react';
import './Step4.scss';
import { Plan } from '../../types/plan';
import { Billing } from '../../types/billing';

interface Step4Props {
  billingType: Billing;
  selectedPlan: Plan;
  selectedAddOns: Set<string>;
  onGoToPlanStep: () => void;
}

const Step4: React.FC<Step4Props> = ({ billingType, selectedPlan, selectedAddOns, onGoToPlanStep }) => {
  const planOptions: Record<Plan, { monthly: number; yearly: number }> = {
    arcade: { monthly: 9, yearly: 90 },
    advanced: { monthly: 12, yearly: 120 },
    pro: { monthly: 15, yearly: 150 },
  };

  const addOnOptions: Record<string, { monthly: number; yearly: number }> = {
    'online-service': { monthly: 1, yearly: 10 },
    'larger-storage': { monthly: 2, yearly: 20 },
    'customizable-profile': { monthly: 2, yearly: 20 },
  };

  const planPrice = planOptions[selectedPlan][billingType];
  const addOnPrices = Array.from(selectedAddOns).reduce((total, addOn) => total + addOnOptions[addOn][billingType], 0);
  const totalPrice = planPrice + addOnPrices;

  return (
    <>
      <div className='step4-summary'>
        <div className='plan-summary'>
          <div className='plan-details'>
            <span className='plan-name'>
              {selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)} ({billingType.charAt(0).toUpperCase() + billingType.slice(1)})
            </span>
            <button type='button' onClick={onGoToPlanStep} className='change-plan'>
              Change
            </button>
          </div>
          <span className='plan-price'>
            ${planPrice}/{billingType === 'monthly' ? 'mo' : 'yr'}
          </span>
        </div>

        {selectedAddOns.size > 0 && <hr className='divider' />}
        <div className='add-ons-summary'>
          {Array.from(selectedAddOns).map((addOn) => (
            <div key={addOn} className='add-on-item'>
              <span className='add-on-name'>{addOn.replace('-', ' ').replace(/\b\w/g, (c) => c.toUpperCase())}</span>
              <span className='add-on-price'>
                +${addOnOptions[addOn][billingType]}/{billingType === 'monthly' ? 'mo' : 'yr'}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className='total-cost'>
        <span className='total-cost-label'>Total (per {billingType === 'monthly' ? 'month' : 'year'})</span>
        <span className='total-price'>
          +${totalPrice}/{billingType === 'monthly' ? 'mo' : 'yr'}
        </span>
      </div>
    </>
  );
};

export default Step4;
