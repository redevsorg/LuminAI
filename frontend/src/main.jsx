import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import './styles/tailwind.scss';
import './styles/App.scss';
import { HelmetProvider } from 'react-helmet-async';
import { AuthContextProvider } from './context/AuthContext';

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
})

const rootElement = document.getElementById('app')
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <HelmetProvider>
        <AuthContextProvider>
        <RouterProvider router={router} />
        </AuthContextProvider>
      </HelmetProvider>
    </React.StrictMode>,
  )
}
