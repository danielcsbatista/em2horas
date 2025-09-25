import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TaskPages from './pages/taskPages.tsx'


const BrowserRouter = createBrowserRouter([
  { path: "/*", element: <App /> },
  {path: "/tasks", element: <TaskPages /> }
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <RouterProvider router={BrowserRouter} />
  </StrictMode>
)
