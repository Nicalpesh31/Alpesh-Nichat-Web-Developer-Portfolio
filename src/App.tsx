import React, { useEffect, useRef, useState } from 'react';
import { Twitter, Facebook, Instagram, Linkedin, Github, MapPin, Mail, Phone, Share2 } from 'lucide-react';
import 'devicon/devicon.min.css';


function App() {
  const [filter, setFilter] = useState('all');
  const aboutRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const sections = [
      aboutRef.current,
      resumeRef.current,
      skillRef.current,
      projectsRef.current,
      contactRef.current,
    ];

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header Section */}
      <header
        id="header"
        className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1515343480029-43cdfe6b6aae?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="relative z-10 text-center px-6 py-12 rounded-lg max-w-4xl">
          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-400 to-pink-500 animate-text">
            <span className="typing-animation">Alpesh Nichat</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-300 mb-8">
            I'm a passionate <span className="text-blue-300 font-semibold">Web Developer</span> from Pune
          </h2>

          {/* Navigation */}
          <nav className="mb-8">
            <ul className="flex flex-wrap justify-center gap-6 text-lg text-white font-medium">
              <li><a href="#header" className="hover:text-blue-400 transition">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
              <li>
                <a
                  href="/Alpesh_Nichat-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  Resume
                </a>
              </li>
              <li><a href="#skills" className="hover:text-blue-400 transition">Skills</a></li>
              <li><a href="#portfolio" className="hover:text-blue-400 transition">Projects</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </nav>

          {/* Social Links */}
          <div className="flex justify-center space-x-5">
            <a href="https://github.com/Nicalpesh31" target="_blank" rel="noopener noreferrer" className="social-icon hover:text-blue-400 transition">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/alpesh-nichat-751993326/" target="_blank" rel="noopener noreferrer" className="social-icon hover:text-blue-400 transition">
              <Linkedin size={24} />
            </a>
            <a href="https://www.instagram.com/alpesh_nichat/" target="_blank" rel="noopener noreferrer" className="social-icon hover:text-blue-400 transition">
              <Instagram size={24} />
            </a>
            <a href="https://twitter.com/AlpeshNichat" target="_blank" rel="noopener noreferrer" className="social-icon hover:text-blue-400 transition">
              <Twitter size={24} />
            </a>
            <a href="https://www.facebook.com/Alpeshnichat123" target="_blank" rel="noopener noreferrer" className="social-icon hover:text-blue-400 transition">
              <Facebook size={24} />
            </a>
          </div>
        </div>
      </header>


      {/* About Section */}
      <section
        ref={aboutRef}
        id="about"
        className="section py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              About Me
            </h2>
            <p className="text-lg text-gray-400">A quick overview of who I am and what I do</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div>
              <h3 className="text-3xl font-semibold mb-6">Full Stack Web Developer</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                I'm a dedicated Full Stack Developer with a focus on crafting responsive, user-centric web applications.
                I enjoy blending logic and creativity to build seamless, modern experiences that solve real-world problems.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                With a strong base in front-end and back-end technologies, and a hunger to learn more, I'm prepared to take on challenges that help me grow while contributing meaningfully to any team or project.
              </p>

              <a
                href="/Alpesh_Nichat-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-md hover:scale-105 transform transition duration-300"
              >
                Download Resume
              </a>
            </div>

            {/* Right: Info Grid Card Style */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-gray-800 rounded-xl p-6 shadow-lg">
              {/* Info Item */}
              {[
                ['Email', 'alpesh.nic31@gmail.com'],
                ['Phone', '+91 98345 98196'],
                ['City', 'Pune, Maharashtra'],
                ['Age', '25'],
                ['Birthday', '31 May 2000'],
                ['Degree', 'MCA'],
                ['Experience', 'Completed 6-month internship at Oytie Pvt. Ltd. and currently pursuing a React internship at Anudip Foundation'],
                ['Interests', 'Web Development, Software Development, UI/UX Design'],
              ].map(([label, value], i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-sm text-blue-400 font-medium">{label}</span>
                  <span className="text-gray-200">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>




      {/* Skills Section */}
      <section ref={skillRef} id="skills" className="section py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Skills</h2>
            <p className="text-blue-400">Technologies and tools I am proficient in</p>

          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
            {/* HTML */}
            <div className="flex flex-col items-center">
              <i className="devicon-html5-plain text-6xl text-orange-500 mb-4"></i>
              <p className="font-semibold">HTML5</p>
            </div>

            {/* CSS */}
            <div className="flex flex-col items-center">
              <i className="devicon-css3-plain text-6xl text-blue-500 mb-4"></i>
              <p className="font-semibold">CSS3</p>
            </div>

            {/* JavaScript */}
            <div className="flex flex-col items-center">
              <i className="devicon-javascript-plain text-6xl text-yellow-500 mb-4"></i>
              <p className="font-semibold">JavaScript</p>
            </div>

            {/* React */}
            <div className="flex flex-col items-center">
              <i className="devicon-react-original text-6xl text-cyan-400 mb-4"></i>
              <p className="font-semibold">React</p>
            </div>

            {/* Node.js */}
            <div className="flex flex-col items-center">
              <i className="devicon-nodejs-plain text-6xl text-green-500 mb-4"></i>
              <p className="font-semibold">Node.js</p>
            </div>

            {/* Java */}
            <div className="flex flex-col items-center">
              <i className="devicon-java-plain text-6xl text-red-700 mb-4"></i>
              <p className="font-semibold">Java</p>
            </div>

            {/* MongoDB */}
            <div className="flex flex-col items-center">
              <i className="devicon-mongodb-plain text-6xl text-green-400 mb-4"></i>
              <p className="font-semibold">MongoDB</p>
            </div>

            {/* Git */}
            <div className="flex flex-col items-center">
              <i className="devicon-git-plain text-6xl text-red-500 mb-4"></i>
              <p className="font-semibold">Git</p>
            </div>

            {/* GitHub */}
            <div className="flex flex-col items-center">
              <i className="devicon-github-original text-6xl text-gray-300 mb-4"></i>
              <p className="font-semibold">GitHub</p>
            </div>

            {/* Bootstrap */}
            <div className="flex flex-col items-center">
              <i className="devicon-bootstrap-plain text-6xl text-purple-600 mb-4"></i>
              <p className="font-semibold">Bootstrap</p>
            </div>

            {/* Tailwind CSS */}
            <div className="flex flex-col items-center">
              <i className="devicon-tailwindcss-plain text-6xl text-cyan-500 mb-4"></i>
              <p className="font-semibold">Tailwind CSS</p>
            </div>

            {/* SQL */}
            <div className="flex flex-col items-center">
              <i className="devicon-sqlite-plain text-6xl text-blue-400 mb-4"></i>
              <p className="font-semibold">SQL</p>
            </div>


          </div>
        </div>
      </section>



      {/* Projects Section */}
      <section ref={projectsRef} id="portfolio" className="section py-20 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Projects</h2>
            <p className="text-blue-400">My Works</p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="flex gap-4">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg transition-colors ${filter === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('app')}
                className={`px-4 py-2 rounded-lg transition-colors ${filter === 'app'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
              >
                App
              </button>
              <button
                onClick={() => setFilter('web')}
                className={`px-4 py-2 rounded-lg transition-colors ${filter === 'web'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
              >
                Web
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Gemini Chat Clone */}
            <div
              className={`transition-all duration-300 ${filter === "all" || filter === "web"
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 hidden"
                }`}
            >
              <div className="bg-gray-900 rounded-lg overflow-hidden group">

                <div className="relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800"
                    alt="Gemini Chat Clone"
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />


                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center p-4">
                      <h4 className="text-xl font-bold text-white mb-2">
                        Gemini Chat Clone
                      </h4>
                      <p className="text-gray-200 text-sm">
                        A real-time messaging application with authentication and chat
                        functionality.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <h4 className="text-lg font-semibold mb-2">Gemini Chat Clone</h4>

                  <p className="text-gray-400 text-sm mb-4">
                    Built using React, Node.js and WebSocket for real-time communication.
                  </p>


                  <div className="flex flex-col sm:flex-row gap-3 sm:justify-start">

                    <a
                      href="https://clogemini.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-all duration-200 w-full sm:w-auto"
                    >
                      🚀 Live Demo
                    </a>

                    <a
                      href="https://github.com/Nicalpesh31/Gemini-Chat-Clone"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all duration-200 w-full sm:w-auto"
                    >
                      💻 View Code
                    </a>

                  </div>
                </div>
              </div>
            </div>
            {/* LoveConnect Project */}
            <div className={`transition-all duration-300 ${filter === 'all' || filter === 'web'
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-95 hidden'
              }`}>
              <div className="bg-gray-900 rounded-lg overflow-hidden group">

                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1516589091380-5d8e87df6999?auto=format&fit=crop&q=80&w=800"
                    alt="LoveConnect"
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />

                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center p-4">
                      <h4 className="text-xl font-bold text-white mb-2">
                        LoveConnect
                      </h4>
                      <p className="text-gray-200 text-sm">
                        A modern social connection platform designed to help people discover and connect with others through an interactive interface.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h4 className="text-lg font-semibold mb-2">LoveConnect</h4>

                  <p className="text-gray-400 text-sm mb-4">
                    A web-based platform that allows users to connect, interact, and explore meaningful relationships with a clean and responsive UI.
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">

                    {/* Live Demo */}
                    <a
                      href="https://loveconnected.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition w-full sm:w-auto"
                    >
                      🚀 Live Demo
                    </a>

                    {/* View Code */}
                    <a
                      href="https://github.com/Nicalpesh31/LoveConnect"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition w-full sm:w-auto"
                    >
                      💻 View Code
                    </a>

                  </div>
                </div>

              </div>
            </div>


            {/* Variable Vortex */}
            <div className={`transition-all duration-300 ${filter === 'all' || filter === 'web' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 hidden'
              }`}>
              <div className="bg-gray-900 rounded-lg overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800"
                    alt="Variable Vortex"
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center p-4">
                      <h4 className="text-xl font-bold text-white mb-2">Variable Vortex</h4>
                      <p className="text-gray-200 text-sm">
                        Interactive multiplication game for practicing mental math skills with variables.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold mb-2">Variable Vortex</h4>
                  <p className="text-gray-400 text-sm mb-4">
                    A fun and interactive game that builds essential math skills
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">

                    <a
                      href="https://nicalpesh31.github.io/Variable-Vortex/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition w-full sm:w-auto"
                    >
                      🚀 Live Demo
                    </a>

                    <a
                      href="https://github.com/Nicalpesh31/Variable-Vortex"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition w-full sm:w-auto"
                    >
                      💻 View Code
                    </a>

                  </div>
                </div>
              </div>
            </div>

            {/* Brick Basket */}
            <div className={`transition-all duration-300 ${filter === 'all' || filter === 'app'
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-95 hidden'
              }`}>
              <div className="bg-gray-900 rounded-lg overflow-hidden group">


                <div className="relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=500&auto=format&fit=crop&q=60"
                    alt="Brick Basket Game"
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />

                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center p-4">
                      <h4 className="text-xl font-bold text-white mb-2">
                        Brick Basket Application
                      </h4>
                      <p className="text-gray-200 text-sm">
                        A classic arcade-style game developed using Java AWT featuring brick-breaking gameplay mechanics.
                      </p>
                    </div>
                  </div>
                </div>


                <div className="p-4">
                  <h4 className="text-lg font-semibold mb-2">Brick Basket Game</h4>

                  <p className="text-gray-400 text-sm mb-4">
                    Java-based arcade game with paddle controls and brick-breaking mechanics
                  </p>


                  <div className="flex flex-col sm:flex-row gap-3">




                    <a
                      href="https://github.com/Nicalpesh31/brick-bracket"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition w-full sm:w-auto"
                    >
                      💻 View Code
                    </a>

                  </div>
                </div>

              </div>
            </div>



            {/* CIMS Website */}
            <div className={`transition-all duration-300 ${filter === 'all' || filter === 'web' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 hidden'
              }`}>
              <div className="bg-gray-900 rounded-lg overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80&w=800"
                    alt="CIMS Website"
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center p-4">
                      <h4 className="text-xl font-bold text-white mb-2">CIMS Website</h4>
                      <p className="text-gray-200 text-sm">
                        College Information Management System for seamless interaction between students, teachers, and parents.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold mb-2">CIMS Website</h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Web-based college management system with multiple user roles
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">


                    <a
                      href="https://github.com/Nicalpesh31/CIMS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition w-full sm:w-auto"
                    >
                      💻 View Code
                    </a>

                  </div>
                </div>
              </div>
            </div>


            {/* Mess Finder */}
            <div className={`transition-all duration-300 ${filter === 'all' || filter === 'app' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 hidden'
              }`}>
              <div className="bg-gray-900 rounded-lg overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800"
                    alt="Mess Finder App"
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center p-4">
                      <h4 className="text-xl font-bold text-white mb-2">Mess Finder Application</h4>
                      <p className="text-gray-200 text-sm">
                        Mobile application for finding and managing mess services, developed with XML and Java.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold mb-2">Mess Finder App</h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Android app for discovering and managing mess services
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://github.com/Nicalpesh31/Mess-Finder-Android-Application"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition w-full sm:w-auto"
                    >
                      💻 View Code
                    </a>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="section py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-2">Get in Touch</h2>
            <p className="text-blue-400 text-lg">I'd love to hear from you</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">

            <div className="bg-gray-800 p-6 rounded-lg">
              <MapPin className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">My Address</h3>
              <p>Pune, Maharashtra, India</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <Share2 className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Social Profiles</h3>
              <div className="flex gap-4">
                <a href="https://twitter.com/AlpeshNichat" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                  <Twitter />
                </a>
                <a href="https://www.facebook.com/Alpeshnichat123" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                  <Facebook />
                </a>
                <a href="https://www.instagram.com/alpesh_nichat/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                  <Instagram />
                </a>
                <a href="https://github.com/Nicalpesh31" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                  <Github />
                </a>
                <a href="https://www.linkedin.com/in/alpesh-nichat-751993326/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                  <Linkedin />
                </a>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <Mail className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Me</h3>
              <p>alpesh.nic31@gmail.com</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <Phone className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Me</h3>
              <p>+91-9834598196</p>
            </div>
          </div>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="space-y-6"
          >
            {/* Netlify hidden input */}
            <input type="hidden" name="form-name" value="contact" />

            {/* Honeypot field */}
            <input type="hidden" name="bot-field" />

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Message"
              required
              className="w-full p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>


      <footer className="text-center py-6 bg-gray-800">
        <p>Designed by <a href="#" className="text-blue-400">Alpesh Nichat</a></p>
        <p>© 2025 Alpesh Nichat. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;