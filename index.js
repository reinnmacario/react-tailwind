import React from 'react'
import  { createRoot }  from 'react-dom/client';
import App from './src/App.js'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);

// With callback after render
// function AppWithCallbackAfterRender() {
//     useEffect(() => {
//       console.log('rendered');
//     });
  
//     return <App tab="home" />
//   }
  
//   const container = document.getElementById('app');
//   const root = createRoot(container);
//   root.render(<AppWithCallbackAfterRender />);