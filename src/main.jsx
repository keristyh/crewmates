import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Layout from './routes/Layout';
import CreateView from './routes/CreateView';
import Gallery from './routes/Gallery';
import Detail from './routes/Details';
import Edit from './routes/Edit';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<App />} />
          <Route path="/create" element={<CreateView />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="crewmate/:id" element={<Detail />} />
          <Route path="edit/:id" element={<Edit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
