import React from 'react'
import { Link, Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <div>
        <nav className="flex gap-2 mt-4 font-stretch-50% text-2xl text-center gap-11 font-bold text-blue-950 pb-0.9 mb-1.5">
            <Link to="/">Home</Link>
            <Link to="/blog-list">Blog List</Link>
            <Link to="/admin">Admin</Link>

        </nav>

        <Outlet/>
    </div>
  )
}

export default MainLayout;