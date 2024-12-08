import { useState } from 'react';
import { Plan } from '../types/plan';
import { Billing } from '../types/billing';

const usePlanSelection = () => {
  const [billingType, setBillingType] = useState<Billing>(() => {
    return (localStorage.getItem('billingType') as Billing) || 'monthly';
  });
  const [selectedPlan, setSelectedPlan] = useState<Plan>(() => {
    return (localStorage.getItem('selectedPlan') as Plan) || 'arcade';
  });

  const handlePlanChange = (plan: Plan) => {
    setSelectedPlan(plan);
    localStorage.setItem('selectedPlan', plan);
  };

  const handleBillingToggle = () => {
    setBillingType((prev) => {
      const newType = prev === 'monthly' ? 'yearly' : 'monthly';
      localStorage.setItem('billingType', newType);
      return newType;
    });
  };

  return { billingType, selectedPlan, handlePlanChange, handleBillingToggle };
};

export default usePlanSelection;
