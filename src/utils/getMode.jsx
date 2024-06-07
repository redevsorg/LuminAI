// Function to detect light/dark mode
const getMode = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

export default getMode;