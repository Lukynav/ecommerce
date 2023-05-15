import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home, Page404, Page400, Product } from './pages'
import { Provider } from 'react-redux'
import store from './redux/store/index'
import './index.css'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/product/:id', element: <Product /> },
  { path: '/product-notExist', element: <Page400 /> },
  { path: '*', element: <Page404 /> }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
