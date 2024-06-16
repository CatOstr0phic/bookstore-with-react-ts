import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { StateProvider } from "./redux/StateProvider";
import reducer, { initialState } from "./redux/reducer";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
       <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
  </React.StrictMode>,
)
