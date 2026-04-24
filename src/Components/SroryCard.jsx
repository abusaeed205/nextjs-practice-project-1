import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SroryCard = ({ stories }) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm mx-auto flex flex-col items-center border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <Image
                src={stories.image}
                alt={stories.name}
                width={96}
                height={96}
                className="w-24 h-24 rounded-full object-cover border-4 border-blue-200 shadow mb-4"
                priority
            />
            <h2 className="text-xl font-bold text-gray-800 mb-1">{stories.name}</h2>
            <p className="text-blue-600 font-semibold mb-1">{stories.role}</p>
            <p className="text-gray-500 mb-2">{stories.company}</p>
            <p className="text-gray-700 text-center mb-3 line-clamp-3">{stories.story}</p>
            <div className="flex flex-wrap gap-2 mb-3 justify-center">
                {stories.skills.map((skill, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-medium">
                        {skill}
                    </span>
                ))}
            </div>
            <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                Experience: {stories.experience}
            </span>
            <Link href={`/stories/${stories.id}`}>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold mt-2 py-2 px-4 rounded-full transition-colors duration-300">
                    Full History
                </button>
            </Link>
        </div>
    );
};

export default SroryCard;