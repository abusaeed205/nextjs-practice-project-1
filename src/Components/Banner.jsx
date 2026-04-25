"use client"

import { useRouter } from "next/navigation";


const Banner = () => {
    const router = useRouter()


    const handleButton = () => {
        console.log(router);
        const password = prompt("Please enter your password:");
        if (password === "55555") {
            console.log(router);
            router.push("/dashboard");

        }
    }
    return (
        <div className="relative w-full h-125 md:h-150 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 bg-linear-to-r from-blue-900 via-blue-800 to-indigo-900">
                {/* Decorative circles */}
                <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                <div className="max-w-2xl">
                    <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-blue-200 bg-blue-500/30 rounded-full backdrop-blur-sm">
                        Welcome to Our Platform
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                        Discover Amazing
                        <span className="block text-blue-300">Possibilities</span>
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={handleButton}
                            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-blue-900 bg-white rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                            Share-Story
                        </button>

                    </div>
                </div>
            </div>

            {/* Bottom wave decoration */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg className="w-full h-16 text-white" viewBox="0 0 1440 100" fill="currentColor">
                    <path d="M0,50 C360,100 720,0 1080,50 C1260,75 1380,75 1440,50 L1440,100 L0,100 Z"></path>
                </svg>
            </div>
        </div>
    );
};

export default Banner;