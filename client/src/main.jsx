import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import StoreContextProvider from './context/StoreContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoreContextProvider>
    <App />
    </StoreContextProvider>

</StrictMode>,
);







// import { TranslationProvider } from './hooks/useTranslation';
// import TranslateText from './components/Navbar/TranslateText'

{/* <TranslationProvider>
     <TranslateText />
      <App />
    </TranslationProvider> */}