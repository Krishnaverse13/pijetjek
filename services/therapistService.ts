
import { Therapist } from '../types';
import { MOCK_THERAPISTS } from '../constants';

// Simulate API delay
const API_DELAY = 500; // milliseconds

export const fetchTherapists = (): Promise<Therapist[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_THERAPISTS);
    }, API_DELAY);
  });
};

export const fetchTherapistById = (id: string): Promise<Therapist | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const therapist = MOCK_THERAPISTS.find(t => t.id === id);
      resolve(therapist);
    }, API_DELAY);
  });
};
