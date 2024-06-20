module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      backgroundImage: {
       'dots-pattern': "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2210%22 height=%2210%22 viewBox=%220 0 10 10%22%3E%3Ccircle fill=%22%232f3c7e%22 cx=%225%22 cy=%225%22 r=%221%22/%3E%3C/svg%3E')",
      },
    },
  },
  plugins: [],
}
