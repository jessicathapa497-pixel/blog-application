import { blogs } from "@/data/blog";

import { useParams } from "react-router-dom";

function BlogDetails() {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === id);
  return (
    <div>
      <h2 className="font-stretch-110% text-4xl text-center font-bold text-blue-950 pb-0.9 mb-1.5"> {blog?.title}</h2>
      <p className="text-2xl text-botton text- to-blue-300 "> {blog?.content}</p>
    </div>
  );
}

export default BlogDetails;
