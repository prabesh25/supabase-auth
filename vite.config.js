import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),    tailwindcss(),
  ],
})
// // tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       animation: {
//         'float': 'float 3s ease-in-out infinite',
//         'pop-in': 'pop-in 0.5s ease-out',
//       },
//       keyframes: {
//         float: {
//           '0%, 100%': { transform: 'translateY(0)' },
//           '50%': { transform: 'translateY(-20px)' },
//         },
//         'pop-in': {
//           '0%': { transform: 'scale(0)' },
//           '80%': { transform: 'scale(1.1)' },
//           '100%': { transform: 'scale(1)' },
//         },
//       }
//     }
//   }
// }