import React from 'react';
import { useParams, Link } from "react-router-dom";
import { BlogData } from '../../../../components/Data/BlogData/BlogData'; 

export default function Post() {
    const { id } = useParams();
    const currentPostIndex = BlogData.findIndex((post) => post.id === Number(id));
    const prevPost = BlogData[currentPostIndex - 1];
    const nextPost = BlogData[currentPostIndex + 1];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen pt-40 px-4 md:pt-40 lg:pt-60 md:px-30 lg:px-40">
            <div className="flex flex-col items-start justify-center text-left w-full max-w-xl mx-auto lg:max-w-3xl">
                <p className="font-semibold tracking-widest text-lg mb-6">
                    {BlogData[currentPostIndex].date} <span className="text-black">&#8226;</span> Written by {BlogData[currentPostIndex].user}
                </p>           
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-regular mb-10 mt-3 text-[#A27943]">{BlogData[currentPostIndex].title}</h1>
                <p className="text-sm sm:text-base lg:text-lg tracking-widest mb-20 leading-relaxed">{BlogData[currentPostIndex].mainContent}</p>
                <img className="w-20 h-20 mb-6 rounded-full" src={BlogData[currentPostIndex].img} alt={BlogData[currentPostIndex].title} />
                <p className="font-semibold text-sm sm:text-md ml-2 mb-10">-{BlogData[currentPostIndex].user}</p>
            </div>

            <div className="w-full flex justify-between items-center mb-10 ">
            <div className="w-1/3">
                {prevPost ? (
                    <Link to={`/blog/${prevPost.id}`} className="font-semibold text-md md:text-2xl lg:text-3xl tracking-wide leading-6 text-[#C38F4B] hover:text-[#A27943]">
                        &#x2190; {prevPost.title}
                    </Link>
                ) : (
                    <div></div>
                )}
            </div>

            <div className="w-1/3 text-right">
                {nextPost && (
                    <Link to={`/blog/${nextPost.id}`} className="font-semibold text-md md:text-2xl lg:text-3xl tracking-wide leading-6 text-[#C38F4B] hover:text-[#A27943]">
                        {nextPost.title} &#x2192;
                    </Link>
                )}
            </div>
        </div>
        </div>
    );
}
