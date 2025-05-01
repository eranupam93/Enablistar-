import { lazy } from 'react'

const Home = lazy(() => import('./pages/Home'))
const AddBeneficiary = lazy(() => import('./pages/AddBeneficiary'))
const ViewBeneficiary = lazy(() => import('./pages/ViewBeneficiary'))
const EditBeneficiary = lazy(() => import('./pages/EditBeneficiary'))

const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/add',
        element: <AddBeneficiary />
    },
    {
        path: '/view/:id',
        element: <ViewBeneficiary />
    },
    {
        path: '/edit/:id',
        element: <EditBeneficiary />
    }
]

export default routes