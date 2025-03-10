import React, { useState } from 'react';
import { Menu, X, Moon, Sun, Github, Linkedin, Mail, Phone, MapPin, ChevronRight, ChevronDown } from 'lucide-react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const [expandedExperiences, setExpandedExperiences] = useState({});

  const toggleExperience = (id) => {
    setExpandedExperiences(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  const qaExperiences = [
    {
      id: 'selenium',
      title: 'Web Automation Testing: RouteSpring (Travel Platform)',
      description: 'Developed and maintained comprehensive test suites for RouteSpring travel platform, achieving 80% automation coverage. Implemented robust test frameworks that reduced regression testing time by 60%. Collaborated with development teams to identify and resolve critical bugs before production release.'
    },
    {
      id: 'ai-testing',
      title: 'AI chatbot testing: ConveGenius: (Educational Platform)',
      description: 'Led testing efforts for ConveGenius AI chatbots used in educational technology. Created and executed test cases to validate conversational flows and response accuracy. Implemented automated testing solutions that improved chatbot response quality by 40%.'
    },
    {
      id: 'api-testing',
      title: 'Manual Testing: GetActyv (AI Powered Physiotherapy Platform)',
      description: 'Executed comprehensive functional and usability testing for GetActyv, an AI-driven exercise tracking web app. Validated AI-based motion tracking, real-time text-to-speech feedback, and report generation through end-to-end testing. Ensured seamless prescription flow, appointment scheduling, and overall application performance, meeting accuracy and user experience benchmarks.'
    }
  ];

  const devExperiences = [
    {
      id: 'react-native',
      title: 'App Development: ConveGenius',
      description: 'Designed and built two Android apps from scratch using React Native and Expo within a tight three-month timeline. Ensured a seamless, cross-platform user experience through responsive design and rigorous unit testing, optimizing performance and reliability. Implemented deep linking functionality that improved app navigation and user experience. Collaborated with design teams to create intuitive UI/UX that increased user engagement by 35%.'
    },
    {
      id: 'web-dev',
      title: 'Automation Script for Internal Projects',
      description: 'Automated employee onboarding, performance management, and other processes using Google Apps Script and Google Sheets. Eliminated repetitive tasks like form submissions, data validation, and email notifications, enhancing efficiency, accuracy, and real-time tracking.'
    },
    {
      id: 'chatbot-dev',
      title: 'ChatBot Development: ConveGenius',
      description: 'Developed and optimized AI-driven chatbots for ConveGenius, an EdTech platform, integrating backend systems with TypeScript-based frontends. Focused on enhancing chatbot performance, usability, and user engagement while ensuring seamless, intelligent conversational experiences aligned with business goals.'
    }
  ];

  const blogPosts = [
    {
      title: "How to Automate AI Chatbot Testing Using Our Best Solution",
      description: "Learn about innovative approaches to testing AI-powered chatbots with automated solutions...",
      link: "https://madgicaltechdom.com/blog/how-to-automate-ai-chatbot-testing-using-our-best-solution/",
      publisher: "Published at Madgical Techdom Blogs"
    },
    {
      title: "Mahabharat chatbot: discover how AI helps to improve the learning experience",
      description: "Exploring the development and impact of an educational chatbot based on the Mahabharat epic...",
      link: "https://madgicaltechdom.com/portfolio/mahabharat-chatbot-discover-how-ai-helps-to-improve-the-learning-experience/",
      publisher: "Published at Madgical Techdom Portfolios"
    },
    {
      title: "English Learning Chatbot: Master a New Language with AI",
      description: "A comprehensive look at how AI-powered chatbots are revolutionizing language learning...",
      link: "https://madgicaltechdom.com/portfolio/english-learning-chatbot-master-a-new-language-with-the-ai/",
      publisher: "Published at Madgical Techdom Portfolios"
    }
  ];


  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">Aarti Thakur</a>

          <div className="flex items-center gap-4">
            <button onClick={toggleDarkMode} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button onClick={toggleMenu} className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-full left-0 right-0 md:top-auto bg-white dark:bg-gray-900 md:bg-transparent py-4 md:py-0 gap-2 md:gap-6`}>
              <a href="#about" className="px-4 py-2 hover:text-blue-600 dark:hover:text-blue-400">About</a>
              <a href="#projects" className="px-4 py-2 hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
              <a href="#skills" className="px-4 py-2 hover:text-blue-600 dark:hover:text-blue-400">Skills</a>
              <a href="#blog" className="px-4 py-2 hover:text-blue-600 dark:hover:text-blue-400">Blog</a>
              <a href="#contact" className="px-4 py-2 hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                QA Tester & Software Developer
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Specializing in automation testing, mobile app development, and AI-powered solutions
              </p>
              <div className="flex gap-4">
                <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                  Get in Touch
                </a>
                <a href="#projects" className="border border-gray-300 dark:border-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                  View Projects
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?auto=format&fit=crop&w=600"
                alt="Developer workspace"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              I'm a detail-oriented QA Tester and Software Developer with over a year of experience in manual and automated testing, bot creation, and mobile app development. My aim is to enhance user satisfaction through effective testing practices and continuous improvement.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">Education</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight size={16} className="text-blue-600" />
                    <span>BCA - IGNOU (2023-2026)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight size={16} className="text-blue-600" />
                    <span>Advanced Diploma in Software Programming</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience Highlights</h2>

          {/* QA Experience */}
          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-300 dark:border-gray-700">QA Testing Experience</h3>
            <div className="space-y-4">
              {qaExperiences.map((exp) => (
                <div key={exp.id} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                  <div
                    className="flex items-start justify-between cursor-pointer"
                    onClick={() => toggleExperience(exp.id)}
                  >
                    <div className="flex items-center gap-2">
                      {expandedExperiences[exp.id] ?
                        <ChevronDown size={16} className="text-blue-600 min-w-4" /> :
                        <ChevronRight size={16} className="text-blue-600 min-w-4" />
                      }
                      <h4 className="text-lg font-medium">{exp.title}</h4>
                    </div>
                  </div>

                  {expandedExperiences[exp.id] && (
                    <div className="mt-4 pl-6 text-gray-600 dark:text-gray-300">
                      <p>{exp.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-300 dark:border-gray-700">Software Development Experience</h3>
            <div className="space-y-4">
              {devExperiences.map((exp) => (
                <div key={exp.id} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                  <div
                    className="flex items-start justify-between cursor-pointer"
                    onClick={() => toggleExperience(exp.id)}
                  >
                    <div className="flex items-center gap-2">
                      {expandedExperiences[exp.id] ?
                        <ChevronDown size={16} className="text-blue-600 min-w-4" /> :
                        <ChevronRight size={16} className="text-blue-600 min-w-4" />
                      }
                      <h4 className="text-lg font-medium">{exp.title}</h4>
                    </div>
                  </div>

                  {expandedExperiences[exp.id] && (
                    <div className="mt-4 pl-6 text-gray-600 dark:text-gray-300">
                      <p>{exp.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">QA Testing Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400"
                alt="RouteSpring Testing"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">RouteSpring Testing</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Comprehensive testing suite for travel platform using Selenium and Robot Framework
                </p>
                <h4 className="font-medium mb-1 text-sm">My Contribution:</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm line-clamp-3">
                  Developed automated test scripts that covered critical user journeys, reducing manual testing time by 70%.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Selenium</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Robot Framework</span>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=400"
                alt="AI Chatbot Testing"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">ConveGenius AI Testing</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Automated testing for AI-powered chatbots in educational technology
                </p>
                <h4 className="font-medium mb-1 text-sm">My Contribution:</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm line-clamp-3">
                  Created an innovative testing framework for validating AI-powered chatbot responses.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">AI Testing</span>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=400"
                alt="Mobile App Development"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">GetActyv AI Platform</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Manual testing for AI physiotherapy app
                </p>
                <h4 className="font-medium mb-1 text-sm">My Contribution:</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm line-clamp-3">
                  Conducted end-to-end manual testing of AI motion tracking features and feedback systems.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">React Native</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Expo</span>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-10 mb-12 text-center">Software Development Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400"
                alt="ConveGenius Mobile Apps"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">ConveGenius Mobile Apps</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  React Native apps with deep linking
                </p>
                <h4 className="font-medium mb-1 text-sm">My Contribution:</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm line-clamp-3">
                  Developed mobile applications for educational content delivery with seamless navigation.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">React Native</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Expo</span>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=400"
                alt="AI Chatbot Testing"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Mobile UI Development</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Mobile Frontend Development with HTML, CSS, and JavaScript
                </p>
                <h4 className="font-medium mb-1 text-sm">My Contribution:</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm line-clamp-3">
                Developed a responsive mobile user interface for the GetActyv platform's.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">HTML, CSS</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">JavaScript</span>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=400"
                alt="Mobile App Development"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">ConveGenius AI Chatbots</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Educational AI chatbots with NestJs
                </p>
                <h4 className="font-medium mb-1 text-sm">My Contribution:</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm line-clamp-3">
                  Developed conversational AI flows that improved student engagement rates by 45%.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Typescript</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">NestJs</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Tools</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Testing</h3>
              <ul className="space-y-2">
                <li>Selenium WebDriver</li>
                <li>Robot Framework</li>
                <li>Manual Testing</li>
                <li>Test Case Design</li>
                <li>API Testing</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Development</h3>
              <ul className="space-y-2">
                <li>React Native</li>
                <li>JavaScript/TypeScript</li>
                <li>Python</li>
                <li>Node.js</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Tools & Platforms</h3>
              <ul className="space-y-2">
                <li>Git & GitHub</li>
                <li>CI/CD Pipelines</li>
                <li>Expo</li>
                <li>Google Apps Script</li>
                <li>Google Data Studio</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Latest Blog Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">{post.publisher}</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {post.description}
                  </p>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                  >
                    Read Full Article <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail size={20} />
                    <a href="mailto:at739029@gmail.com" className="hover:text-blue-600">at739029@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={20} />
                    <a href="tel:+919990338653" className="hover:text-blue-600">+91 9990338653</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={20} />
                    <span>India, New Delhi</span>
                  </div>
                  <div className="flex gap-4 mt-6">
                    <a href="https://www.linkedin.com/in/aarti-thakur-b504b2249/" className="hover:text-blue-600">
                      <Linkedin size={24} />
                    </a>
                    <a href="#" className="hover:text-blue-600">
                      <Github size={24} />
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600" rows={4}></textarea>
                  </div>
                  <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t dark:border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-400">© 2025 Aarti Thakur. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
