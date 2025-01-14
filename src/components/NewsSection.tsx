import React, { useState } from 'react';
import { Calendar, ArrowRight, Bell, Presentation, Newspaper } from 'lucide-react';

const NewsSection = () => {
  const [activeTab, setActiveTab] = useState('news');

  const news = [
    {
      date: '2024-03-15',
      title: 'IISER Researchers Make Breakthrough in Quantum Computing',
      category: 'Research',
      link: '#'
    },
    {
      date: '2024-03-14',
      title: 'New Center for Climate Science Inaugurated',
      category: 'Campus',
      link: '#'
    },
    {
      date: '2024-03-13',
      title: 'International Conference on Advanced Materials Announced',
      category: 'Events',
      link: '#'
    }
  ];

  const seminars = [
    {
      date: '2024-03-18',
      title: 'Advanced Materials and Their Applications in Modern Technology',
      speaker: 'Prof. Sarah Johnson, MIT',
      time: '14:00 IST',
      venue: 'Lecture Hall 1',
      link: '#'
    },
    {
      date: '2024-03-20',
      title: 'Quantum Computing: Present and Future',
      speaker: 'Dr. Michael Chang, Google Research',
      time: '15:30 IST',
      venue: 'Virtual',
      link: '#'
    },
    {
      date: '2024-03-22',
      title: 'Climate Change: Global Impact and Local Solutions',
      speaker: 'Dr. Emily Roberts, Climate Research Institute',
      time: '11:00 IST',
      venue: 'Seminar Hall A',
      link: '#'
    }
  ];

  const announcements = [
    {
      date: '2024-03-16',
      title: 'Applications Open for PhD Programs 2024',
      priority: 'High',
      deadline: '2024-04-15',
      link: '#'
    },
    {
      date: '2024-03-15',
      title: 'Campus Closure During National Holiday',
      priority: 'Medium',
      deadline: null,
      link: '#'
    },
    {
      date: '2024-03-14',
      title: 'New Research Funding Opportunities Available',
      priority: 'High',
      deadline: '2024-03-31',
      link: '#'
    }
  ];

  const TabButton = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center px-4 py-2 rounded-lg ${
        activeTab === id
          ? 'bg-red-600 text-white'
          : 'text-gray-600 hover:bg-red-50 dark:text-gray-300 dark:hover:bg-gray-700'
      }`}
    >
      <Icon className="h-5 w-5 mr-2" />
      {label}
    </button>
  );

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Latest Updates
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300 sm:mt-4">
            Stay informed with the latest news, seminars, and announcements
          </p>
        </div>

        <div className="mt-8 flex justify-center space-x-4">
          <TabButton id="news" label="News" icon={Newspaper} />
          <TabButton id="seminars" label="Seminars" icon={Presentation} />
          <TabButton id="announcements" label="Announcements" icon={Bell} />
        </div>

        <div className="mt-8">
          {activeTab === 'news' && (
            <div className="grid gap-8 lg:grid-cols-3">
              {news.map((item, index) => (
                <article
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(item.date).toLocaleDateString()}
                    </div>
                    <div className="mt-2">
                      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800">
                        {item.category}
                      </span>
                    </div>
                    <a href={item.link} className="block mt-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                    </a>
                    <div className="mt-6">
                      <a
                        href={item.link}
                        className="inline-flex items-center text-red-600 hover:text-red-500"
                      >
                        Read more
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {activeTab === 'seminars' && (
            <div className="grid gap-8 lg:grid-cols-3">
              {seminars.map((item, index) => (
                <article
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(item.date).toLocaleDateString()}
                    </div>
                    <a href={item.link} className="block mt-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                    </a>
                    <div className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <p><strong>Speaker:</strong> {item.speaker}</p>
                      <p><strong>Time:</strong> {item.time}</p>
                      <p><strong>Venue:</strong> {item.venue}</p>
                    </div>
                    <div className="mt-6">
                      <a
                        href={item.link}
                        className="inline-flex items-center text-red-600 hover:text-red-500"
                      >
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {activeTab === 'announcements' && (
            <div className="grid gap-8 lg:grid-cols-3">
              {announcements.map((item, index) => (
                <article
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="h-4 w-4 mr-2" />
                        {new Date(item.date).toLocaleDateString()}
                      </div>
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          item.priority === 'High'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {item.priority} Priority
                      </span>
                    </div>
                    <a href={item.link} className="block mt-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                    </a>
                    {item.deadline && (
                      <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                        <strong>Deadline:</strong> {new Date(item.deadline).toLocaleDateString()}
                      </div>
                    )}
                    <div className="mt-6">
                      <a
                        href={item.link}
                        className="inline-flex items-center text-red-600 hover:text-red-500"
                      >
                        Read more
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;