import React, { useState } from 'react';
import { Building2, Users, Microscope, ChevronRight } from 'lucide-react';

const AcademicSections = () => {
  const [activeTab, setActiveTab] = useState('centers');

  const centers = [
    {
      title: "Center for Quantum Sciences",
      description: "Advancing the frontiers of quantum mechanics and its applications in computing, cryptography, and sensing.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
    {
      title: "Institute for Molecular Biology",
      description: "Exploring life's fundamental building blocks through interdisciplinary research in genetics, biochemistry, and cellular biology.",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
    {
      title: "Advanced Computing Research Center",
      description: "Pushing the boundaries of computational science, artificial intelligence, and data analytics.",
      image: "https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
    {
      title: "Climate Science Institute",
      description: "Addressing global environmental challenges through innovative research and sustainable solutions.",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "#"
    }
  ];

  const people = [
    {
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Faculty Excellence",
      description: "Our distinguished faculty includes Nobel laureates, national academy members, and pioneering researchers who are shaping the future of science.",
      stats: [
        { label: "Faculty Members", value: "150+" },
        { label: "Research Publications", value: "1000+" },
        { label: "Research Grants", value: "$50M+" }
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Student Achievement",
      description: "Our students are bright, ambitious individuals who go on to become leaders in academia, industry, and research institutions worldwide.",
      stats: [
        { label: "Students", value: "2000+" },
        { label: "International Students", value: "25%" },
        { label: "Graduate Placement", value: "95%" }
      ]
    }
  ];

  const divisions = [
    {
      name: "Physics & Astronomy",
      image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Exploring the fundamental laws of the universe, from quantum mechanics to cosmology.",
      highlights: ["Quantum Computing", "Particle Physics", "Astrophysics"]
    },
    {
      name: "Chemistry & Chemical Engineering",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Advancing molecular science and engineering for societal impact.",
      highlights: ["Catalysis", "Materials Science", "Biochemistry"]
    },
    {
      name: "Biology & Biological Engineering",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Understanding life at all scales, from molecules to ecosystems.",
      highlights: ["Neuroscience", "Synthetic Biology", "Biophysics"]
    },
    {
      name: "Mathematics & Computing",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Advancing theoretical foundations and computational methods.",
      highlights: ["Pure Mathematics", "Computer Science", "Data Science"]
    }
  ];

  const TabButton = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`group relative px-8 py-4 text-lg font-medium transition-colors ${
        activeTab === id
          ? 'text-red-600'
          : 'text-gray-600 hover:text-red-600 dark:text-gray-300'
      }`}
    >
      <span className="relative z-10">{label}</span>
      {activeTab === id && (
        <span className="absolute bottom-0 left-0 h-0.5 w-full bg-red-600"></span>
      )}
    </button>
  );

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <div className="flex justify-center space-x-8">
            <TabButton id="centers" label="Centers & Institutes" icon={Building2} />
            <TabButton id="people" label="Students & Faculty" icon={Users} />
            <TabButton id="divisions" label="Academic Divisions" icon={Microscope} />
          </div>
        </div>

        <div className="mt-12">
          {activeTab === 'centers' && (
            <div className="grid md:grid-cols-2 gap-8">
              {centers.map((center, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={center.image}
                      alt={center.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 p-6 flex flex-col justify-end">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {center.title}
                    </h3>
                    <p className="text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      {center.description}
                    </p>
                    <a
                      href={center.link}
                      className="inline-flex items-center text-white hover:text-red-400"
                    >
                      Learn more <ChevronRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'people' && (
            <div className="space-y-16">
              {people.map((section, index) => (
                <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative aspect-w-16 aspect-h-9">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                      {section.title}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      {section.description}
                    </p>
                    <div className="grid grid-cols-3 gap-4">
                      {section.stats.map((stat, idx) => (
                        <div key={idx}>
                          <p className="text-2xl font-bold text-red-600">
                            {stat.value}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'divisions' && (
            <div className="grid md:grid-cols-2 gap-8">
              {divisions.map((division, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={division.image}
                      alt={division.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 p-6 flex flex-col justify-end">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {division.name}
                    </h3>
                    <p className="text-gray-200 mb-4">
                      {division.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {division.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-sm bg-red-600 text-white rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AcademicSections;