import React from 'react';
import './Step2.scss';
import arcadeIcon from '../../assets/images/icon-arcade.svg';
import advancedIcon from '../../assets/images/icon-advanced.svg';
import proIcon from '../../assets/images/icon-pro.svg';
import { Plan } from '../../types/plan';
import { Billing } from '../../types/billing';

interface Step2Props {
  billingType: Billing;
  selectedPlan: string;
  onBillingToggle: () => void;
  onPlanChange: (plan: Plan) => void;
}

const Step2: React.FC<Step2Props> = ({ billingType, selectedPlan, onBillingToggle, onPlanChange }) => {
  return (
    <div className='step2-form'>
      {/* Plan Selection */}
      <div className='plans'>
        <button type='button' className={`plan ${selectedPlan === 'arcade' ? 'selected' : ''}`} onClick={() => onPlanChange('arcade')} aria-pressed={selectedPlan === 'arcade'}>
          <span className='plan-content'>
            <img src={arcadeIcon} alt='Arcade Plan Icon' className='icon' />
            <span className='plan-details'>
              <span className='plan-name'>Arcade</span>
              <span className='plan-price'>{billingType === 'yearly' ? '$90/yr' : '$9/mo'}</span>
              {billingType === 'yearly' && <span className='plan-features'>2 months free</span>}
            </span>
          </span>
        </button>

        <button type='button' className={`plan ${selectedPlan === 'advanced' ? 'selected' : ''}`} onClick={() => onPlanChange('advanced')} aria-pressed={selectedPlan === 'advanced'}>
          <span className='plan-content'>
            <img src={advancedIcon} alt='Advanced Plan Icon' className='icon' />
            <span className='plan-details'>
              <span className='plan-name'>Advanced</span>
              <span className='plan-price'>{billingType === 'yearly' ? '$120/yr' : '$12/mo'}</span>
              {billingType === 'yearly' && <span className='plan-features'>2 months free</span>}
            </span>
          </span>
        </button>

        <button type='button' className={`plan ${selectedPlan === 'pro' ? 'selected' : ''}`} onClick={() => onPlanChange('pro')} aria-pressed={selectedPlan === 'pro'}>
          <span className='plan-content'>
            <img src={proIcon} alt='Pro Plan Icon' className='icon' />
            <span className='plan-details'>
              <span className='plan-name'>Pro</span>
              <span className='plan-price'>{billingType === 'yearly' ? '$150/yr' : '$15/mo'}</span>
              {billingType === 'yearly' && <span className='plan-features'>2 months free</span>}
            </span>
          </span>
        </button>
      </div>

      {/* Billing Type Toggle */}
      <div className='billing-toggle'>
        <span className={`billing-toggle-label ${billingType === 'monthly' ? 'checked' : ''}`}>Monthly</span>
        <button type='button' className={`toggle-button ${billingType === 'yearly' ? 'checked' : ''}`} onClick={onBillingToggle} aria-label={`Billing is currently ${billingType}.`} role='switch' aria-checked={billingType === 'yearly'}>
          <span className='toggle-switch'></span>
        </button>

        <span className={`billing-toggle-label ${billingType === 'yearly' ? 'checked' : ''}`}>Yearly</span>
      </div>
    </div>
  );
};

export default Step2;
