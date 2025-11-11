// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   // theme: {
//   //   extend: {},
//   // },
//       darkMode: 'class', // Enable dark mode with class strategy
//   theme: {
//     extend: {
//       colors: {
//         pastel: {
//           blue: '#e6efff',
//           teal: '#e0f7fa',
//           purple: '#ede7f6',
//           softBlue: '#eaf6fb',
//         },
//       },
//       fontFamily: {
//         sans: ['Inter', 'Poppins', 'Roboto', 'sans-serif'],
//       },
//       boxShadow: {
//         glass: '0 8px 32px 0 rgba(31, 38, 135, 0.12)'
//       },
//       backgroundImage: {
//         'hero-gradient':
//           'linear-gradient(135deg, #e6efff 0%, #e0f7fa 100%)',
//         'hero-gradient-dark':
//           'linear-gradient(135deg, #21273c 0%, #25316D 100%)',
//       }
//     }
//   },
//  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]

// }
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
};
