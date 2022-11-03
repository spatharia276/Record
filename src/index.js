import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SignIn from './components/Basics/SignIn';
import Home from './components/Basics/Home';
import Upload from './components/Basics/Upload';
import UploadAudio from './components/Basics/record';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);


