import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import GitHub from './components/GitHub/Followers'
import { gitloader } from './components/GitHub/Followers';
import User from './components/User'




// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'aboutUs',
//         element: <AboutUs />
//       },
//       {
//         path: 'ContactUs',
//         element: <ContactUs />
//       },
//       {
//         path: 'GitHub',
//         element: <GitHub />
//       }

//     ]
//   },


// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='aboutUs' element={<AboutUs />} />
      <Route path='ContactUs' element={<ContactUs />} />
      <Route path='user/:id' element={<User />} />
      <Route
        loader={gitloader}
        path='GitHub' element={<GitHub />} />
    </Route>
  )
)







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
