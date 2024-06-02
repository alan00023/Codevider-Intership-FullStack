import { createBrowserRouter } from 'react-router-dom'

import Layout from './components/Layout'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import AdminPage from './components/AdminPage'
import AnimalGallery from './components/AnimalGallery'

const router = createBrowserRouter([
    {
    path: '/',
    element: <Layout />,
    children: [
        {
            index: true,
            element: <HomePage />
        },
        {
            path: 'about',
            element: <AboutPage />
        },
        {
            path: 'contact',
            element: <ContactPage />
        },
        {
            path: 'admin/:type',
            element: <AdminPage />
        },
        {
            path: 'gallery/:type',
            element: <AnimalGallery />
        }
    ]
    }
])


export default router 