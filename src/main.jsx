import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppStore from './store/AppStore.jsx';
import { Provider } from 'react-redux';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={AppStore}>
    <App />
    </Provider>
  </StrictMode>,
)
