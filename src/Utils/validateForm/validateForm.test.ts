// src/utils/validateForm.test.ts
import { validateForm } from './validateForm';

describe('validateForm', () => {
  test('should return an error if name is empty', () => {
    const formData = { name: '', email: 'test@example.com', phone: '1234567890' };
    const errors = validateForm(formData);
    expect(errors.name).toBe('This field is required');
  });

  test('should return an error if email is empty', () => {
    const formData = { name: 'John Doe', email: '', phone: '1234567890' };
    const errors = validateForm(formData);
    expect(errors.email).toBe('This field is required');
  });

  test('should return an error if email is invalid', () => {
    const formData = { name: 'John Doe', email: 'invalid-email', phone: '1234567890' };
    const errors = validateForm(formData);
    expect(errors.email).toBe('Please enter a valid email address');
  });

  test('should return an error if phone is empty', () => {
    const formData = { name: 'John Doe', email: 'test@example.com', phone: '' };
    const errors = validateForm(formData);
    expect(errors.phone).toBe('This field is required');
  });

  test('should return no errors for valid form data', () => {
    const formData = { name: 'John Doe', email: 'test@example.com', phone: '1234567890' };
    const errors = validateForm(formData);
    expect(errors).toEqual({});
  });
});