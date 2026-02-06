
import MainLayout from '@/components/layout/MainLayout';
import ProtectedRoute from '@/components/ProtectedRoute';
import Admin from '@/pages/Admin';
import BlogDetails from '@/pages/BlogDetails';
import BlogList from '@/pages/BlogList';
import Home from '@/pages/Home';
import React from 'react'
import { Route, Routes } from 'react-router-dom';   

function AppRoutes() {
  return (
    <Routes>
        <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/blog-list" element={<BlogList />}/>
        <Route path="/blog-list/:id" element={<BlogDetails />}/>
        <Route 
        path="/admin" 
        element=
        {<ProtectedRoute> 
            <Admin/> 
            </ProtectedRoute>} />

        </Route>
    </Routes>
  );
}

export default AppRoutes;