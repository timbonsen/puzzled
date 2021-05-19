import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthContextProvider from "./context/AuthContext";
import ImageUploadContextProvider from "./context/ImageUploadContext";

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <AuthContextProvider>
              <ImageUploadContextProvider>
                  <App />
              </ImageUploadContextProvider>
          </AuthContextProvider>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();