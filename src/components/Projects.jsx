import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-10 px-4 sm:px-8 lg:px-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-2">Mobibattle - Gaming Platform</h3>
            <p className="mb-4">Technologies: JavaScript, ReactJS, Tailwind CSS, HTML, CSS, Socket.IO, Nodejs,</p>
            <p className="mb-4">Description: Building a multiplayer gaming platform with a focus on organizing PUBG tournaments. Implemented robust features for multilingual support and integrated analytics to enhance user engagement and tournament management. Utilized React hooks extensively for efficient state management, ensuring smooth gameplay experiences and scalable tournament organization.</p>
            <motion.img
              src="https://demov1.mobibattle.com/static/media/mobibattle-onboarding-logo.49959b04.svg"
              alt="Mobibattle"
              className="rounded-lg mx-auto"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}
            />
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-2">ConnectedH CRM Software</h3>
            <p className="mb-4">Technologies: VueJs, Yii2 (PHP), Javascript, Bootstrap, HTML, CSS</p>
            <p className="mb-4">Description: Designed and implemented features for diagnostic labs to manage home sample collection efficiently. Integrated with existing enterprise systems using REST APIs.</p>
          
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-2">TutoDesk</h3>
            <p className="mb-4">Technologies: ReactJs, ExpressJs, MongoDB, Bootstrap</p>
            <p className="mb-4">Description: Developed a collaborative notes sharing web application with real-time editing capabilities. Implemented user authentication and MongoDB for data storage.</p>
           
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-2">Find Weather</h3>
            <p className="mb-4">Technologies: ReactJS, HTML, CSS</p>
            <p className="mb-4">Description: Built a weather information web application that fetches data from a third-party API. Implemented responsive design and integrated with GitHub for version control. <a href="https://github.com/rahul8074/weather-app" className="text-blue-500">GitHub link</a></p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
