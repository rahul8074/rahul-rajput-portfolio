import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

const Experience = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-10 px-4 sm:px-8 lg:px-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">Experience</h2>
        <div className="space-y-12">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-blue-500 mr-2" />
              <span>Gurugram</span>
            </div>
            <h3 className="text-2xl font-semibold mb-2">
              BNG Advanced Mobile Solutions Pvt Ltd
            </h3>
            <p className="text-lg italic mb-4">
              Software Engineer - Frontend (June 2022 - Present)
            </p>
            <p className="text-lg leading-relaxed">
              Building Mobibattle - Gaming platform using JavaScript, ReactJS,
              and Tailwind CSS. Implemented multilingual support, resulting in
              an increase from 1 client to 23 clients. Integrated Google
              Analytics and Elastic Search events, and developed backend APIs in
              ExpressJS for an Islamic portal service.
              <br />
              • Currently developing a Customer Value Management system with
              workflow builder, reporting, analytics and user management for
              Telecom operators
              <br />
              • Designed and developed a Reporting dashboard for visualisation
              of data for multiple ongoing services and applications
              <br />
              • Daily maintenance of code, debugging issues and working on
              client feedback
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-blue-500 mr-2" />
              <span>Gurugram</span>
            </div>
            <h3 className="text-2xl font-semibold mb-2">
              ConnectedH - Simplifying Healthcare
            </h3>
            <p className="text-lg italic mb-4">
              Software Development Engineering Intern (Nov 2021 - May 2022)
            </p>
            <p className="text-lg leading-relaxed">
              Worked on CRM software for diagnostic labs. Implemented sample
              lost detection and automated phlebotomist creation features.
              Developed email report generation for day-to-day analysis.
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-blue-500 mr-2" />
              <span>Gwalior</span>
            </div>
            <h3 className="text-2xl font-semibold mb-2">
              Praedico Global Research Pvt. Ltd
            </h3>
            <p className="text-lg italic mb-4">
              Summer Intern (June 2021 - July 2021)
            </p>
            <p className="text-lg leading-relaxed">
              Developed a stock market predictor and analyzer web application
              using ReactJS, ExpressJS, and MongoDB.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
