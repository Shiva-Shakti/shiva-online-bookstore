module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./styles/components/**/*.{js,ts,jsx,tsx}",  // This should point to your components folder under styles
    "./styles/globals.css", // Ensure globals.css is included here
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
