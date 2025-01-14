import React, { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight, Play, Pause } from 'lucide-react';

interface CarouselItem {
  type: 'video' | 'image';
  url: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  ctaText: string;
  ctaLink: string;
}

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const carouselItems: CarouselItem[] = [
    {
      type: 'video',
      url: 'https://www.iiserbpr.ac.in/assets/images/IISER_Weppage.mp4',
      title: 'Welcome to IISER Berhampur',
      subtitle: 'Excellence in Science Education & Research',
      description: 'Experience world-class education in a vibrant, innovative environment designed to inspire and empower the next generation of scientists.',
      tags: ['Featured', 'Campus Life'],
      ctaText: 'Explore Campus',
      ctaLink: '/about/campus'
    },
    {
      type: 'image',
      url: 'https://www.iiserbpr.ac.in/imges/slider/4th_Convocation17231274861878599880.jpg',
      title: '4th Convocation Ceremony',
      subtitle: 'Celebrating Academic Excellence',
      description: 'Honoring our graduates and their remarkable achievements in scientific research and academic excellence.',
      tags: ['Event', 'Academic'],
      ctaText: 'View Highlights',
      ctaLink: '/events/convocation'
    },
    {
      type: 'image',
      url: 'https://www.iiserbpr.ac.in/imges/slider/Panel_discussion_on_Career_in_Science__a_part_ofInvenio_the_Science_Fest_of_IISER_Berhampur1726497086590101257.jpg',
      title: 'Invenio Science Fest',
      subtitle: 'Inspiring Scientific Innovation',
      description: 'Join us for engaging panel discussions, workshops, and exhibitions showcasing cutting-edge research and scientific discoveries.',
      tags: ['Science Fest', 'Research'],
      ctaText: 'Learn More',
      ctaLink: '/events/invenio'
    },
    {
      type: 'image',
      url: 'https://www.iiserbpr.ac.in/imges/slider/Prof_James_D_Martin_from_North_Carolina_state_university__USA_delivering_lecture_at_IISER_Berhampur1733374446511585726.png',
      title: 'International Collaboration',
      subtitle: 'Global Research Perspectives',
      description: 'Distinguished lectures and collaborations with leading international researchers enriching our academic environment.',
      tags: ['International', 'Research'],
      ctaText: 'Explore Research',
      ctaLink: '/research'
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  }, [carouselItems.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(nextSlide, 6000); // Change slide every 6 seconds
    }
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  const handleVideoEnd = () => {
    nextSlide();
  };

  return (
    <div className="relative h-[calc(100vh-4rem)] overflow-hidden bg-gray-900">
      {/* Carousel Items */}
      <div className="relative h-full">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {item.type === 'video' ? (
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src={item.url}
                autoPlay={currentSlide === index && isVideoPlaying}
                muted
                loop={false}
                onEnded={handleVideoEnd}
                playsInline
              />
            ) : (
              <img
                src={item.url}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                  <div className="flex gap-2 mb-4">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm font-medium bg-red-600 text-white rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                    {item.title}
                  </h1>
                  <p className="text-xl sm:text-2xl text-gray-200 mb-4">
                    {item.subtitle}
                  </p>
                  <p className="text-lg text-gray-300 mb-8 max-w-2xl">
                    {item.description}
                  </p>
                  <a
                    href={item.ctaLink}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors"
                  >
                    {item.ctaText}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Previous slide"
              >
                <ArrowLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Next slide"
              >
                <ArrowRight className="h-6 w-6" />
              </button>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
              >
                {isPlaying ? (
                  <Pause className="h-6 w-6" />
                ) : (
                  <Play className="h-6 w-6" />
                )}
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex gap-2">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === index
                      ? 'bg-red-600'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;