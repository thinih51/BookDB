import { writable } from 'svelte/store';

// Standardmässig false = Light Mode
export const darkMode = writable(false);