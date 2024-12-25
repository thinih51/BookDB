import { writable } from 'svelte/store';

// Standardmäßig false = Light Mode
export const darkMode = writable(false);