import React from 'react'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import ProductListPage from './pages/ProductList'
import ProductActionPage from './pages/ProductAction'

const routes = [
    {
        path:'/',
        exact:true,
        main: ()=><HomePage/>
    },
    {
        path:'/product',
        exact:true,
        main: ()=><ProductListPage/>
    },
    {
        path:'/product/add',
        exact:false,
        main: ({history})=><ProductActionPage history={history}/>
    },
    {
        path:'/product/:id/edit',
        exact:false,
        main: ({match,history})=><ProductActionPage match={match} history={history}/>
    },
    {
        path:'',
        exact:false,
        main: ()=><NotFound/>
    }
]

export default routes