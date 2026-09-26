import { useEffect, useRef, useState } from 'react';
import { Twitter, Facebook, Instagram, Linkedin, Github, MapPin, Mail, Phone, Share2 } from 'lucide-react';
import 'devicon/devicon.min.css';


function App() {
  const [filter, setFilter] = useState('all');
  const aboutRef = useRef<HTMLDivElement>(null);
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
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 py-12 max-w-5xl mx-auto">

          {/* Availability Badge */}
          <div className="inline-flex items-center rounded-full border border-blue-400/40 bg-blue-500/10 backdrop-blur-sm px-5 py-2 text-sm font-medium text-blue-200 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Assistant Lecturer & Software Professional
          </div>

          {/* Name */}
          <h1 className="text-6xl md:text-7xl font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-400 to-pink-500">
            <span>Alpesh Nichat</span>
          </h1>

          {/* Professional Title */}
          <h2 className="text-xl md:text-3xl text-gray-200 mb-6 leading-relaxed">
            Assistant Lecturer at{" "}
            <span className="text-blue-300 font-semibold">
              Gokul Global University
            </span>
          </h2>

          {/* Professional Description */}
          <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-300 leading-8 mb-8">
            MCA professional with{" "}
            <span className="text-white font-semibold">5+ years of IT experience</span>,
            specializing in{" "}
            <span className="text-blue-300">Web Development</span>,{" "}
            <span className="text-purple-300">Software Development</span>, and{" "}
            <span className="text-pink-300">UI/UX Design</span>.
            Currently teaching and mentoring students in modern web technologies,
            Git & Version Control, Mathematics for AI, and Dynamic Web Development.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-gray-200 text-sm backdrop-blur-sm">
              React.js
            </span>

            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-gray-200 text-sm backdrop-blur-sm">
              JavaScript
            </span>

            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-gray-200 text-sm backdrop-blur-sm">
              Web Development
            </span>

            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-gray-200 text-sm backdrop-blur-sm">
              Git & GitHub
            </span>

            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-gray-200 text-sm backdrop-blur-sm">
              UI/UX Design
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">

            <button
              type="button"
              onClick={() =>
                document.getElementById("portfolio")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="inline-flex items-center justify-center rounded-full bg-blue-500 px-7 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-400 hover:scale-105 shadow-lg shadow-blue-500/20"
            >
              View Projects
            </button>

            <button
              type="button"
              onClick={() =>
                document.getElementById("about")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-7 py-3 font-semibold text-white transition-all duration-300 hover:border-blue-400 hover:text-blue-300 hover:scale-105"
            >
              About Me
            </button>

            <a
              href="/Alpesh_Nichat_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-purple-400/40 bg-purple-500/10 px-7 py-3 font-semibold text-purple-200 transition-all duration-300 hover:bg-purple-500/20 hover:scale-105"
            >
              View Resume
            </a>

          </div>



          {/* Social Links */}
          <div className="flex justify-center items-center gap-5 text-white">
            <a
              href="https://github.com/Nicalpesh31"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon hover:text-blue-400 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/alpesh-nichat-751993326/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon hover:text-blue-400 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>

            <a
              href="https://www.instagram.com/alpesh_nichat/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon hover:text-pink-400 transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>

            <a
              href="https://twitter.com/AlpeshNichat"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon hover:text-blue-400 transition-all duration-300 hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>

            <a
              href="https://www.facebook.com/Alpeshnichat123"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon hover:text-blue-500 transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
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
                I’m a developer focused on creating responsive, user-friendly web experiences that combine clean design with solid functionality.
                I enjoy turning ideas into practical digital products that are easy to use and built to perform.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                My work spans front-end interfaces, dynamic web applications, and backend logic with a strong interest in modern JavaScript frameworks, product thinking, and scalable UI development.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-200">React</span>
                <span className="rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-sm text-purple-200">JavaScript</span>
                <span className="rounded-full border border-green-400/30 bg-green-500/10 px-3 py-1 text-sm text-green-200">Node.js</span>
                <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-200">UI/UX</span>
              </div>

              <a
                href="/Alpesh_Nichat_Resume.pdf"
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
                ['Age', '26'],
                ['Birthday', '31 May 2000'],
                ['Degree', 'MCA'],
                ['Current Position', 'Assistant Lecturer at Gokul Global University'],
                ['Organization', 'Arrivo Private Limited'],
                ['Experience', '5+ years of IT-sector experience'],
                ['Previous Experience', '6-month internship at Oytie Pvt. Ltd. and React internship at Anudip Foundation'],
                ['Subjects Taught', 'Web Development, Git & Version Control, Mathematics for AI, Dynamic Web Development'],
                ['Interests', 'Web Development, Software Development, UI/UX Design']
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
            <p className="text-blue-400">Core technologies and tools I use to build modern digital products</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center rounded-xl border border-white/5 bg-gray-800/60 p-4 shadow-lg">
              <i className="devicon-html5-plain text-6xl text-orange-500 mb-4"></i>
              <p className="font-semibold">HTML5</p>
            </div>

            <div className="flex flex-col items-center rounded-xl border border-white/5 bg-gray-800/60 p-4 shadow-lg">
              <i className="devicon-css3-plain text-6xl text-blue-500 mb-4"></i>
              <p className="font-semibold">CSS3</p>
            </div>

            <div className="flex flex-col items-center rounded-xl border border-white/5 bg-gray-800/60 p-4 shadow-lg">
              <i className="devicon-javascript-plain text-6xl text-yellow-500 mb-4"></i>
              <p className="font-semibold">JavaScript</p>
            </div>

            <div className="flex flex-col items-center rounded-xl border border-white/5 bg-gray-800/60 p-4 shadow-lg">
              <i className="devicon-react-original text-6xl text-cyan-400 mb-4"></i>
              <p className="font-semibold">React</p>
            </div>

            <div className="flex flex-col items-center rounded-xl border border-white/5 bg-gray-800/60 p-4 shadow-lg">
              <i className="devicon-nodejs-plain text-6xl text-green-500 mb-4"></i>
              <p className="font-semibold">Node.js</p>
            </div>

            <div className="flex flex-col items-center rounded-xl border border-white/5 bg-gray-800/60 p-4 shadow-lg">
              <i className="devicon-java-plain text-6xl text-red-700 mb-4"></i>
              <p className="font-semibold">Java</p>
            </div>

            <div className="flex flex-col items-center rounded-xl border border-white/5 bg-gray-800/60 p-4 shadow-lg">
              <i className="devicon-mongodb-plain text-6xl text-green-400 mb-4"></i>
              <p className="font-semibold">MongoDB</p>
            </div>

            <div className="flex flex-col items-center rounded-xl border border-white/5 bg-gray-800/60 p-4 shadow-lg">
              <i className="devicon-git-plain text-6xl text-red-500 mb-4"></i>
              <p className="font-semibold">Git</p>
            </div>

            <div className="flex flex-col items-center rounded-xl border border-white/5 bg-gray-800/60 p-4 shadow-lg">
              <i className="devicon-github-original text-6xl text-gray-300 mb-4"></i>
              <p className="font-semibold">GitHub</p>
            </div>

            <div className="flex flex-col items-center rounded-xl border border-white/5 bg-gray-800/60 p-4 shadow-lg">
              <i className="devicon-bootstrap-plain text-6xl text-purple-600 mb-4"></i>
              <p className="font-semibold">Bootstrap</p>
            </div>

            <div className="flex flex-col items-center rounded-xl border border-white/5 bg-gray-800/60 p-4 shadow-lg">
              <i className="devicon-tailwindcss-plain text-6xl text-cyan-500 mb-4"></i>
              <p className="font-semibold">Tailwind CSS</p>
            </div>

            <div className="flex flex-col items-center rounded-xl border border-white/5 bg-gray-800/60 p-4 shadow-lg">
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
            <h2 className="text-3xl font-bold mb-2">Selected Projects</h2>
            <p className="text-blue-400">A few of the products and experiences I’ve built</p>
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
            <p className="text-blue-400 text-lg">Available for freelance work, internships, and full-time opportunities</p>
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
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 bg-gray-800 rounded-lg"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 bg-gray-800 rounded-lg"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full p-3 bg-gray-800 rounded-lg"
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Message"
              required
              className="w-full p-3 bg-gray-800 rounded-lg"
            />

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 font-semibold text-white transition hover:opacity-90"
            >
              Send Message
            </button>
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