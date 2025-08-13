import React from 'react';
import Navbar from '../navbar/Navbar';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <section className="mt-[5rem] h-auto text-xl">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              Meet Our Team
            </h2>
          </div>

          <div className="mb-6 lg:mb-16">
            {/* Durgashree */}
            <div
              className="items-center rounded-xl shadow sm:flex dark:border-gray-700 mb-6 p-5"
              style={{
                background: 'linear-gradient(to right, #D1D5DB, #E5E7EB, #F3F4F6)',
              }}
            >
              <div className="p-5 w-full">
                <h3 className="text-xl font-bold tracking-tight text-gray-900">
                  Durgashree
                </h3>
                <span className="text-gray-500 dark:text-gray-400">
                  AJ Institute of Engineering and Technology, Mangaluru
                </span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  Visvesvaraya Technological University, Belagavi
                </p>
                <div className="flex gap-4 mt-3">
                  <a
                    href="https://www.linkedin.com/in/durgashree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-2xl"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://github.com/durgashree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-black text-2xl"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>

            {/* Divyalaxmi */}
            <div
              className="items-center rounded-xl shadow sm:flex dark:border-gray-700 mb-6 p-5"
              style={{
                background: 'linear-gradient(to right, #D1D5DB, #E5E7EB, #F3F4F6)',
              }}
            >
              <div className="p-5 w-full">
                <h3 className="text-xl font-bold tracking-tight text-gray-900">
                  Divyalaxmi
                </h3>
                <span className="text-gray-500 dark:text-gray-400">
                  AJ Institute of Engineering and Technology, Mangaluru
                </span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  Visvesvaraya Technological University, Belagavi
                </p>
                <div className="flex gap-4 mt-3">
                  <a
                    href="https://www.linkedin.com/in/divyalkshmi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-2xl"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://github.com/divyalkshmi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-black text-2xl"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
