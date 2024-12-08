// src/components/Step1/Step1.tsx
import React from 'react';
import { FormData, FormErrors } from '../../types/formTypes';
import './Step1.scss';

interface Step1Props {
    formData: FormData;
    formErrors: FormErrors;
    isSubmitted: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Step1: React.FC<Step1Props> = ({ formData, formErrors, isSubmitted, onChange }) => {
    return (
        <div>
            <div className='step-form'>
                <div className='form-group'>
                    <div className='label-wrapper'>
                        <label htmlFor='name'>Name</label>
                        {formErrors.name && isSubmitted && (
                            <span id='name-error' className='error-message' role='alert'>
                                {formErrors.name}
                            </span>
                        )}
                    </div>
                    <input type='text' id='name' name='name' placeholder='e.g. Stephen King' value={formData.name} onChange={onChange} aria-describedby={formErrors.name && isSubmitted ? 'name-error' : undefined} className={formErrors.name && isSubmitted ? 'error' : ''} />
                </div>

                <div className='form-group'>
                    <div className='label-wrapper'>
                        <label htmlFor='email'>Email Address</label>
                        {formErrors.email && isSubmitted && (
                            <span id='email-error' className='error-message' role='alert'>
                                {formErrors.email}
                            </span>
                        )}
                    </div>
                    <input type='email' id='email' name='email' placeholder='e.g. stephenking@lorem.com' value={formData.email} onChange={onChange} aria-describedby={formErrors.email && isSubmitted ? 'email-error' : undefined} className={formErrors.email && isSubmitted ? 'error' : ''} />
                </div>

                <div className='form-group'>
                    <div className='label-wrapper'>
                        <label htmlFor='phone'>Phone Number</label>
                        {formErrors.phone && isSubmitted && (
                            <span id='phone-error' className='error-message' role='alert'>
                                {formErrors.phone}
                            </span>
                        )}
                    </div>
                    <input type='tel' id='phone' name='phone' placeholder='e.g. +1 234 567 890' value={formData.phone} onChange={onChange} aria-describedby={formErrors.phone && isSubmitted ? 'phone-error' : undefined} className={formErrors.phone && isSubmitted ? 'error' : ''} />
                </div>
            </div>
        </div>
    );
};

export default Step1;