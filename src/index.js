import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);
require('dotenv').config();

const root = createRoot(document.getElementById('root'));
root.render(<App />);