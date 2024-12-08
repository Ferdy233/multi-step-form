// src/hooks/useFormValidation.ts
import { useState, useCallback, useEffect } from 'react';
import {  FormData, FormErrors } from '../types/formTypes';
import {validateForm}  from '../Utils/validateForm/validateForm'
import { resetLocalStorage } from '../Utils/resetLocalStorage';

const useFormValidation = (initialState: FormData) => {
  const [formData, setFormData] = useState<FormData>(() => {
    const savedData = localStorage.getItem('formData');
    return savedData ? JSON.parse(savedData) : initialState;
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = useCallback(() => {
    const errors = validateForm(formData);
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  }, [formData]);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const newData = { ...prevData, [name]: value };
      localStorage.setItem('formData', JSON.stringify(newData)); // Save to local storage
      return newData;
    });
  };

  useEffect(() => {
    if (isSubmitted) {
      validate();
    }
  }, [formData, isSubmitted, validate]);

  const handleSubmitValidation = () => {
    setIsSubmitted(true);
    return validate();
  };

  const resetForm = () => {
    setFormData(resetLocalStorage(initialState)); // Reset form data
  };

  return {
    formData,
    formErrors,
    isSubmitted,
    setIsSubmitted,
    handleFormChange,
    handleSubmitValidation,
    resetForm,
  };
};

export default useFormValidation;