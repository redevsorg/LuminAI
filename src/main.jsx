import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import './styles/tailwind.css';
import './styles/App.css';
import { HelmetProvider } from 'react-helmet-async';

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
        <RouterProvider router={router} />
      </HelmetProvider>
    </React.StrictMode>,
  )
}
