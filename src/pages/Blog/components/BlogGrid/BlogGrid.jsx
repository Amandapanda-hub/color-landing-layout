import React from 'react'
import { Link } from 'react-router-dom';
import { BlogData } from '../../../../components/Data/BlogData/BlogData'; // Import your blogData

export default function BlogGrid() {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen py-20 px-4">
        <div className="flex flex-col items-center justify-center text-center min-h-screen px-4">
            <h1 className="text-4xl font-bold mb-20 text-[#A27943]">Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[10rem] gap-y-10 max-w-6xl w-full mx-auto">
                {BlogData.map((post) => (
                  <div key={post.id} className="flex flex-col items-center bg-white p-4  w-full space-y-10">
                    <p className="font-semibold text-lg">{post.date}</p>
                    <h2 className="text-xl font-bold my-2">{post.title}</h2>
                    <p className="text-md">{post.content}</p>
                    <Link to={`/blog/${post.id}`} className="mt-2 underline text-[#A27943]">Read More</Link>
                  </div>
                ))}
            </div>
        </div>
    </div>
  )
}

