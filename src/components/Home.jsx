import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaRegEnvelope, FaPhoneAlt, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython, FaGitAlt, FaVuejs, FaAws } from 'react-icons/fa';
import {Typed} from 'react-typed';

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      new Typed(typedRef.current, {
        strings: [
          'Rahul Rajput'
        ],
        typeSpeed: 100,
        loop: false,
        showCursor: false,
        cursorChar: '|',
      });
    }
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-blue-700 to-teal-900 dark:from-gray-800 dark:to-gray-900 text-white">
      <div className="absolute inset-0">
        <FaHtml5 className="text-red-600 w-16 h-16 absolute top-10 left-22 opacity-20" />
        <FaCss3Alt className="text-blue-500 w-16 h-16 absolute top-20 right-32 opacity-20" />
        <FaJsSquare className="text-yellow-400 w-16 h-16 absolute bottom-20 left-32 opacity-20" />
        <FaReact className="text-blue-300 w-16 h-16 absolute bottom-10 right-32 opacity-20" />
        <FaNodeJs className="text-green-600 w-16 h-16 absolute top-1/2 left-/5 transform -translate-y-1/2 opacity-20" />
        <FaPython className="text-yellow-500 w-16 h-16 absolute top-1/4 right-1/4 opacity-20" />
        <FaGitAlt className="text-orange-600 w-16 h-16 absolute bottom-1/4 left-1/3 opacity-20" />
        <FaVuejs className="text-green-500 w-16 h-16 absolute top-1/4 left-2/5 opacity-20" />
        <FaAws className="text-orange-400 w-16 h-16 absolute bottom-1/4 right-5/8 opacity-20" />
      </div>
      <div className="relative flex flex-col items-center justify-center h-screen px-4 text-center">
        <div className="max-w-4xl mb-10">
          <span>'Hi, I am an enthusiastic and passionate software engineer with strong problem-solving skills, specializing in frontend development. I have experience in ReactJS, JavaScript, Typescript, Redux, TailwindCSS, HTML, CSS, NodeJS, VueJS, C++, and Data Structures.'</span>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center"
        >
          <motion.img
            src="https://media.licdn.com/dms/image/D5603AQFT_-jR8bbCgA/profile-displayphoto-shrink_200_200/0/1708255930492?e=2147483647&v=beta&t=CH3pUW_BJXvI7RpRNJX0Ta2OmmiQg5G05s-tUqFmAGk"
            alt="Profile"
            className="rounded-full w-40 h-40 mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}
          />
          <h1 className="text-5xl font-bold mb-2" ref={typedRef}></h1>
          <p className="mt-4 text-2xl">Frontend Developer</p>
          <p className="mt-2 text-lg">Gurugram, India</p>
          <div className="flex items-center mt-4 space-x-4">
            <motion.div
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.7, type: 'spring', stiffness: 120 }}
            >
              <FaPhoneAlt className="inline-block mr-2" />
              <span>+91 7974039748</span>
            </motion.div>
            <motion.div
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.8, type: 'spring', stiffness: 120 }}
            >
              <FaRegEnvelope className="inline-block mr-2" />
              <span>rahulrajput8074@gmail.com</span>
            </motion.div>
          </div>
          <div className="flex space-x-6 mt-6">
            <motion.a
              href="https://www.linkedin.com/in/rahul-rajput-1a8353194/"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.9, type: 'spring', stiffness: 120 }}
              className="text-3xl"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com/rahul8074"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: 'spring', stiffness: 120 }}
              className="text-3xl"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://leetcode.com/rahulmits"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.1, type: 'spring', stiffness: 120 }}
              className="text-3xl"
            >
              <img src="https://leetcode.com/favicon.ico" alt="LeetCode" className="w-8 h-8" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
