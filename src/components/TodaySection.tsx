import React from 'react';
import { Quote, Lightbulb } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const TodaySection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Today's Message */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Quote className="h-8 w-8 text-red-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {t('today.messageTitle', "Today's Message")}
              </h2>
            </div>
            <blockquote className="text-lg text-gray-600 dark:text-gray-300">
              "Science is not only compatible with spirituality; it is a profound source of spirituality. When we recognize our place in an immensity of light-years and in the passage of ages, when we grasp the intricacy, beauty, and subtlety of life, then that soaring feeling, that sense of elation and humility combined, is surely spiritual."
            </blockquote>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              - Carl Sagan
            </p>
          </div>

          {/* Today's Thought */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Lightbulb className="h-8 w-8 text-red-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {t('today.thoughtTitle', "Today's Thought")}
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                "The beauty of science lies not only in its discoveries but in the journey of exploration and understanding. Each experiment, each observation, brings us closer to unraveling the mysteries of our universe."
              </p>
              <div className="flex items-center justify-between mt-6">
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    Dr. Anil Kumar
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Professor, Department of Physics
                  </p>
                </div>
                <span className="text-sm text-gray-400 dark:text-gray-500">
                  March 15, 2024
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodaySection;