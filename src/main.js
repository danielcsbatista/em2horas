import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TaskPages from './pages/taskPages.tsx';
const BrowserRouter = createBrowserRouter([
    { path: "/*", element: _jsx(App, {}) },
    { path: "/tasks", element: _jsx(TaskPages, {}) }
]);
createRoot(document.getElementById('root')).render(_jsx(StrictMode, { children: _jsx(RouterProvider, { router: BrowserRouter }) }));
