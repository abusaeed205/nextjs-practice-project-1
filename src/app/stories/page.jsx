import SroryCard from '@/Components/SroryCard';
import Tittle from '@/Components/Tittle';
import React from 'react';

const Stories = () => {
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
    return (
        <div className=' h-screen py-20 '>
            <p>Welcome to the stories page!</p>
            {
                devStories.map((stories) => <SroryCard key={stories.id} stories={stories}></SroryCard>)
            }
        </div>
    );
};

export default Stories;