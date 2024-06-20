import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaGraduationCap, FaGithub } from 'react-icons/fa'; // Import icons from react-icons library

const About = () => {
  return (
    <>
      <motion.section
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ delay: 0.4, type: 'spring', stiffness: 120 }}
        className="flex flex-col items-center justify-center py-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg shadow-lg mb-8"
      >
        <div className="max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Education</h2>
          <div className="flex items-center space-x-4 mb-4">
            <FaGraduationCap className="text-3xl text-blue-500" />
            <div>
              <h3 className="text-2xl font-semibold mb-2">B.Tech in Computer Science Engineering</h3>
              <div className='flex items-center'>
              <p className="text-lg italic mb-2">Madhav Institute of Technology and Science</p>
              <div className="flex items-center mb-2">
                <FaMapMarkerAlt className="text-gray-500 mr-2" />
                <span className="text-gray-500">Gwalior, India</span>
              </div>
              </div>
              
              <strong className="text-lg leading-relaxed">
                Graduated in 2022 with a CGPA of <b>8.29</b> 
              </strong>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ delay: 0.6, type: 'spring', stiffness: 120 }}
        className="flex flex-col items-center justify-center py-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg shadow-lg"
      >
        <div className="max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">GitHub</h2>
          <p className="mb-4">
            You can find more about my projects and contributions on <a href="https://github.com/rahul8074" className="text-blue-500 hover:underline">GitHub</a>.
          </p>
        </div>
      </motion.section>
    </>
  );
};

export default About;
