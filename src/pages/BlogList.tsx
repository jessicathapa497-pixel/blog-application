import { blogs } from '@/data/blog'

import { Link } from 'react-router-dom';

function BlogList() {
  return (
    <div>
        <h1 className ="mt-4 text-4xl font-bold text-center bg-gray-200">Blog Post</h1>
        <div className="flex flex-col gap-2 ml-4 mt-8 ">
        {blogs.map((blog) => (
            <Link key={blog.id}
             to={`/blog-list/${blog.id}`} 
            className="hover:underline"> 
            {blog.title}
            </Link>
        ))}
        </div>
    </div>
  );
}

export default BlogList;