import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout.jsx';
import Home from './components/Home.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import SignIn from './components/SignIn.jsx';
import SingUp from './components/SignUp.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Users from './components/Users.jsx';
import View from './components/View.jsx';
import Store from './components/Store.jsx';
import Cart from './components/Cart.jsx'; // Import Cart component
import { CartProvider } from './components/CartContext.jsx'; // Import CartProvider
import ProductView from './components/ProductView.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/coffee')
      },
      
    ]
  },
  {
    path: 'cart',
    element: <Cart></Cart> // Add Cart route
  },
  {
    path: 'addCoffee',
    element: <AddCoffee></AddCoffee>
  },
  {
    path: 'updateCoffee/:id',
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path: 'signin',
    element: <SignIn></SignIn>
  },
  {
    path: 'signup',
    element: <SingUp></SingUp>
  },
  {
    path: 'users',
    element: <Users></Users>,
    loader: () => fetch('http://localhost:5000/users')
  },
  {
    path: 'view/:id',
    element: <View></View>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path: 'productView/:id',
    element: <ProductView></ProductView>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path: 'store',
    element: <Store></Store>,
    loader: () => fetch('http://localhost:5000/coffee')
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider> {/* Wrap with CartProvider */}
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  </StrictMode>,
);