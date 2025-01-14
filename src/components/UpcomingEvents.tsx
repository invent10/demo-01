import React from 'react';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';

const UpcomingEvents = () => {
  const events = [
    {
      date: "Mar 20",
      time: "4:30 PM",
      title: "Distinguished Lecture Series: Quantum Computing and Beyond",
      location: "Main Auditorium",
      category: "Academic",
      link: "#"
    },
    {
      date: "Mar 22",
      time: "2:00 PM",
      title: "International Science Symposium 2024",
      location: "Conference Center",
      category: "Research",
      link: "#"
    },
    {
      date: "Mar 25",
      time: "10:00 AM",
      title: "Graduate Research Showcase",
      location: "Science Complex",
      category: "Student",
      link: "#"
    },
    {
      date: "Mar 27",
      time: "3:00 PM",
      title: "AI and Machine Learning Workshop",
      location: "Computer Science Building",
      category: "Workshop",
      link: "#"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Upcoming Events
          </h2>
          <a
            href="#all-events"
            className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
          >
            View all events
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <a
              key={index}
              href={event.link}
              className="group bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-center bg-red-50 dark:bg-red-900/20 rounded-lg px-4 py-2">
                    <span className="block text-red-600 dark:text-red-400 font-bold">
                      {event.date}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                    {event.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-red-600 transition-colors">
                  {event.title}
                </h3>
                
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <Clock className="h-4 w-4 mr-2 text-gray-400" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                    {event.location}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="#calendar"
            className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400"
          >
            <Calendar className="h-5 w-5 mr-2" />
            View Academic Calendar
          </a>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;