// src/utils/validateForm.ts
import { FormData, FormErrors } from '../../types/formTypes';

export const validateForm = (formData: FormData): FormErrors => {
    const errors: FormErrors = {};

    if (!formData.name.trim()) {
        errors.name = 'This field is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
        errors.email = 'This field is required';
    } else if (!emailRegex.test(formData.email)) {
        errors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
        errors.phone = 'This field is required';
    }

    return errors;
};