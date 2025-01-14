import React from 'react';
import { Quote } from 'lucide-react';

const DirectorMessage = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="relative">
            <img
              className="w-1/2 rounded-lg shadow-lg"
              src="https://www.iiserbpr.ac.in/assets/images/director_header.jpg"
              alt="Prof. K.N. Ganesh, Director IISER Berhampur"
            />
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <Quote className="h-12 w-12 text-red-600 mb-4" />
              <p className="text-lg text-gray-600 dark:text-gray-300">
                "IISER Berhampur, established in 2016, is the youngest among the IISERs. 
                The Institute is committed to imparting high quality education in basic sciences 
                through its flagship five year BS-MS dual degree program. The Institute has 
                already made significant progress in establishing state-of-the-art research 
                facilities and attracting talented faculty members who are engaged in cutting 
                edge research in various disciplines of basic sciences."
              </p>
              <div className="mt-8">
                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                  Prof. K.N. Ganesh
                </p>
                <p className="text-base text-gray-500 dark:text-gray-400">
                  Director, IISER Berhampur
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorMessage;