import React from "react";

const ImageCard = ({ image }) => {
    const tags = image.tags.split(',');
    return (
    <div className = "max-w-sm p-3 overflow-hidden shadow-lg flex flex-col h-full justify-between">
        <img src ={image.webformatURL} alt='image' className='w-full rounded-xl'/>
        <div>
        <div className='px-6 py-4'>
            <div className='font-bold text-purple-500 text-xl mb-2'>
            Photo by {image.user}
            </div>
            <ul>
                <li>
                    <strong>Views: </strong>
                    {image.views}
                </li>
                <li>
                    <strong>Downloads: </strong>
                    {image.downloads}
                </li>
                <li>
                    <strong>Likes: </strong>
                    {image.likes}
                </li>
            </ul>
        </div>
        <div className='px-6 py-4'>
            {tags.map((tag, index) => (
            <span key={index} className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
            #{tag}
            </span>
            ))}
        </div>
        </div>
    </div>
    )
}

export default ImageCard