// src/utils/resetLocalStorage.ts

import { FormData } from '../types/formTypes';

export const resetLocalStorage = (initialState: FormData) => {
  localStorage.removeItem('formData');
  return initialState;
};