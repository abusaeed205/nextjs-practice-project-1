import Image from 'next/image';
import React from 'react';

const StoriesDetailsPages = async ({ params }) => {
    const { id } = await params

    const devStories = [
        {
            "id": 1,
            "name": "Arafat Rahman",
            "role": "Frontend Developer",
            "company": "TechNova Ltd.",
            "image": "https://randomuser.me/api/portraits/men/32.jpg",
            "story": "Started as a self-taught developer using YouTube. Built small projects daily and eventually landed a frontend role at a startup. Passionate about React and UI/UX.",
            "skills": ["React", "Tailwind CSS", "JavaScript"],
            "experience": "2 years"
        },
        {
            "id": 2,
            "name": "Nusrat Jahan",
            "role": "Full Stack Developer",
            "company": "CodeCrafters",
            "image": "https://randomuser.me/api/portraits/women/45.jpg",
            "story": "Transitioned from a non-CS background into tech. Learned MERN stack and built real-world apps. Now working as a full-stack developer.",
            "skills": ["MongoDB", "Express", "React", "Node.js"],
            "experience": "3 years"
        },
        {
            "id": 3,
            "name": "Siam Hasan",
            "role": "Backend Developer",
            "company": "SoftEdge",
            "image": "https://randomuser.me/api/portraits/men/76.jpg",
            "story": "Focused on backend systems and APIs. Loves solving complex logic problems and optimizing database performance.",
            "skills": ["Node.js", "PostgreSQL", "Docker"],
            "experience": "4 years"
        },
        {
            "id": 4,
            "name": "Farhana Akter",
            "role": "UI/UX Designer",
            "company": "DesignPro",
            "image": "https://randomuser.me/api/portraits/women/22.jpg",
            "story": "Started as a graphic designer and moved into UI/UX. Now designs user-friendly interfaces for web and mobile apps.",
            "skills": ["Figma", "Adobe XD", "User Research"],
            "experience": "3 years"
        },
        {
            "id": 5,
            "name": "Tanvir Ahmed",
            "role": "DevOps Engineer",
            "company": "CloudSync",
            "image": "https://randomuser.me/api/portraits/men/55.jpg",
            "story": "Specializes in cloud infrastructure and CI/CD pipelines. Helps teams deploy faster and more reliably.",
            "skills": ["AWS", "Docker", "CI/CD", "Kubernetes"],
            "experience": "5 years"
        },
        {
            "id": 6,
            "name": "Riya Sultana",
            "role": "Mobile App Developer",
            "company": "Appify",
            "image": "https://randomuser.me/api/portraits/women/68.jpg",
            "story": "Builds cross-platform mobile apps using Flutter. Loves creating smooth and performant user experiences.",
            "skills": ["Flutter", "Dart", "Firebase"],
            "experience": "2.5 years"
        },
        {
            "id": 7,
            "name": "Mahmudul Hasan",
            "role": "Software Engineer",
            "company": "InnovateX",
            "image": "https://randomuser.me/api/portraits/men/41.jpg",
            "story": "Enjoys building scalable systems and solving real-world problems with clean code and architecture.",
            "skills": ["Java", "Spring Boot", "Microservices"],
            "experience": "4 years"
        },
        {
            "id": 8,
            "name": "Sadia Noor",
            "role": "QA Engineer",
            "company": "QualityFirst",
            "image": "https://randomuser.me/api/portraits/women/12.jpg",
            "story": "Ensures software quality through automated and manual testing. Strong believer in bug-free user experience.",
            "skills": ["Selenium", "Jest", "Cypress"],
            "experience": "3 years"
        }
    ]

    const singelStories = devStories.find((dev) => dev.id == id)
    if (!singelStories) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-slate-700">Story Not Found</h2>
                    <p className="text-slate-500 mt-2">The story you're looking for doesn't exist.</p>
                </div>
            </div>
        )
    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Back Button */}
                <a
                    href="/stories"
                    className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium mb-8 transition-colors"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Stories
                </a>

                {/* Main Card */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                    {/* Header Banner */}
                    <div className="h-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

                    <div className="px-8 pb-8">
                        {/* Profile Image */}
                        <div className="relative -mt-16 mb-6">
                            <Image
                                width={96}
                                height={96}
                                src={singelStories.image}
                                alt={singelStories.name}
                                className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
                            />
                            <div className="absolute bottom-2 right-2 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
                        </div>

                        {/* Name & Role */}
                        <div className="mb-6">
                            <h1 className="text-3xl font-bold text-slate-800">{singelStories.name}</h1>
                            <p className="text-lg text-indigo-600 font-medium">{singelStories.role}</p>
                            <p className="text-slate-500 flex items-center gap-1 mt-1">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                {singelStories.company}
                            </p>
                        </div>

                        {/* Experience Badge */}
                        <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {singelStories.experience} of experience
                        </div>

                        {/* Story Section */}
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold text-slate-800 mb-3">My Journey</h2>
                            <p className="text-slate-600 leading-relaxed text-lg">{singelStories.story}</p>
                        </div>

                        {/* Skills Section */}
                        <div>
                            <h2 className="text-xl font-semibold text-slate-800 mb-4">Skills</h2>
                            <div className="flex flex-wrap gap-2">
                                {singelStories.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-sm font-medium border border-indigo-200"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="mt-8 flex justify-center gap-4">
                    <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl">
                        Share Story
                    </button>
                    <button className="px-6 py-3 bg-white text-slate-700 rounded-xl font-medium hover:bg-slate-50 transition-colors shadow-lg hover:shadow-xl border border-slate-200">
                        Download PDF
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StoriesDetailsPages;