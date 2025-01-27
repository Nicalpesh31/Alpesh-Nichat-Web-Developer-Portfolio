import React, { useEffect, useRef, useState } from 'react';
import { Twitter, Facebook, Instagram, Linkedin, Github, MapPin, Mail, Phone, Share2, Award, Smile, FileText, Headphones, Globe, Database, Code } from 'lucide-react';
import 'devicon/devicon.min.css';
import './style/app.css';


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
      <header className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515343480029-43cdfe6b6aae?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <div className="text-center px-4 bg-black bg-opacity-50 py-10 rounded-lg max-w-4xl">
          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-400 to-pink-500 animate-text">
            <span className="typing-animation">Alpesh Nichat</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 mb-8">
            I'm a passionate <span className="text-blue-300">Web Developer</span> from Pune
          </h2>

          {/* Navigation */}
          <nav className="mb-8">
            <ul className="flex flex-wrap justify-center gap-6 text-lg text-white">
              <li className="highlight-item"><a href="#header" className="hover:text-blue-300 transition-colors">Home</a></li>
              <li className="highlight-item"><a href="#about" className="hover:text-blue-300 transition-colors">About</a></li>
              <li className="highlight-item"><a href="/src/file/Alpesh_Nichat-Resume.pdf" className="hover:text-blue-300 transition-colors">Resume</a></li>
              <li className="highlight-item"><a href="#skills" className="hover:text-blue-300 transition-colors">Skills</a></li>
              <li className="highlight-item"><a href="#portfolio" className="hover:text-blue-300 transition-colors">Projects</a></li>
              <li className="highlight-item"><a href="#contact" className="hover:text-blue-300 transition-colors">Contact</a></li>
            </ul>
          </nav>


          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            <a href="https://twitter.com/AlpeshNichat" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-blue-300 transition-colors text-white">
              <Twitter size={24} />
            </a>
            <a href="https://www.facebook.com/Alpeshnichat123" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-blue-300 transition-colors text-white">
              <Facebook size={24} />
            </a>
            <a href="https://www.instagram.com/alpesh_nichat/" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-blue-300 transition-colors text-white">
              <Instagram size={24} />
            </a>
            <a href="https://www.linkedin.com/in/alpesh-nichat-751993326/" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-blue-300 transition-colors text-white">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/Nicalpesh31" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-blue-300 transition-colors text-white">
              <Github size={24} />
            </a>
          </div>
        </div>
      </header>

    {/* About Section */}
<section ref={aboutRef} id="about" className="section py-20 px-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
  <div className="max-w-6xl mx-auto">
    {/* Section Header */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
      <p className="text-lg text-blue-400">A quick overview of who I am and what I do</p>
    </div>

    {/* Content */}
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Text Content */}
      <div>
        <h3 className="text-3xl font-semibold text-white mb-6">Full Stack Web Developer</h3>
        <p className="text-gray-300 mb-4">
          I am a dedicated Full Stack Web Developer skilled in creating responsive, user-centric websites and applications. I combine technical expertise with creative problem-solving to deliver high-quality solutions that meet business goals.
        </p>
        <p className="text-gray-300 mb-4">
          My strong foundation in modern development technologies, paired with a passion for learning and innovation, positions me to thrive in dynamic and challenging environments.
        </p>
        {/* Resume Button */}
        <div className="text-center mt-6">
          <a 
            href="/src/file/Alpesh_Nichat-Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Column 1 */}
        <ul className="space-y-4">
          <li className="flex items-center gap-3">
            <span className="font-bold text-white">Birthday:</span>
            <span className="text-gray-300">31 May 2000</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="font-bold text-white">Phone:</span>
            <span className="text-gray-300">+91 98345 98196</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="font-bold text-white">City:</span>
            <span className="text-gray-300">Pune, Maharashtra, India</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="font-bold text-white">Experience:</span>
            <span className="text-gray-300">Fresher</span>
          </li>
        </ul>
        {/* Column 2 */}
        <ul className="space-y-4">
          <li className="flex items-center gap-3">
            <span className="font-bold text-white">Age:</span>
            <span className="text-gray-300">24</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="font-bold text-white">Degree:</span>
            <span className="text-gray-300">Master of Computer Applications (MCA)</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="font-bold text-white">Email:</span>
            <span className="text-gray-300">alpesh.nic31@gmail.com</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="font-bold text-white">Interests:</span>
            <span className="text-gray-300">Web Development, UI/UX Design, Cloud Computing</span>
          </li>
        </ul>
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

            {/* Express */}
            <div className="flex flex-col items-center">
              <i className="devicon-express-original text-6xl text-gray-300 mb-4"></i>
              <p className="font-semibold">Express.js</p>
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

            {/* Java */}
            <div className="flex flex-col items-center">
              <i className="devicon-java-plain text-6xl text-red-700 mb-4"></i>
              <p className="font-semibold">Java</p>
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
            {/* Brick Basket */}
            <div className={`transition-all duration-300 ${filter === 'all' || filter === 'app' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 hidden'
              }`}>
              <div className="bg-gray-900 rounded-lg overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJyZWFrJTIwYmFza2V0JTIwbW9iaWxlJTIwZ2FtZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
                    alt="Brick Basket Game"
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center p-4">
                      <h4 className="text-xl font-bold text-white mb-2">Brick Basket Application</h4>
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
                  <a
                    href="https://github.com/Nicalpesh31/brick-bracket"
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>

            {/* Portfolio Website */}
            <div className={`transition-all duration-300 ${filter === 'all' || filter === 'web' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 hidden'
              }`}>
              <div className="bg-gray-900 rounded-lg overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800"
                    alt="Portfolio Website"
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center p-4">
                      <h4 className="text-xl font-bold text-white mb-2">Portfolio Website</h4>
                      <p className="text-gray-200 text-sm">
                        A modern and responsive portfolio showcasing projects, skills, and contact information.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold mb-2">Portfolio Website</h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Built using React, Tailwind CSS, and TypeScript with smooth animations and clean design.
                  </p>
                  <a
                    href="#"
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </a>
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
                  <a
                    href="https://github.com/Nicalpesh31/CIMS"
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>

            {/* Gemini Chat Clone */}
            <div className={`transition-all duration-300 ${filter === 'all' || filter === 'web' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 hidden'
              }`}>
              <div className="bg-gray-900 rounded-lg overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="Gemini Chat Clone"
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center p-4">
                      <h4 className="text-xl font-bold text-white mb-2">Gemini Chat Clone</h4>
                      <p className="text-gray-200 text-sm">
                        A real-time messaging app with user authentication and group chat functionality.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold mb-2">Gemini Chat Clone</h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Built using React, Node.js, and WebSocket for seamless communication and a modern UI.
                  </p>
                  <a
                    href="https://github.com/Nicalpesh31/Gemini-Chat-Clone"
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </a>
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
                  <a
                    href="https://github.com/Nicalpesh31/Mess-Finder-Android-Application"
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </a>
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
                    Educational game focusing on mathematical skills
                  </p>
                  <a
                    href="https://github.com/Nicalpesh31/Variable-Vortex"
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="section py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Contact</h2>
            <p className="text-blue-400">Contact Me</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-800 p-6 rounded-lg">
              <MapPin className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">My Address</h3>
              <p>Anjangaon Bari, Dist Amravati, State Maharashtra</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <Share2 className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Social Profiles</h3>
              <div className="flex gap-4">
                <a href="https://twitter.com/AlpeshNichat" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                  <Twitter />
                </a>
                <a href="https://www.facebook.com/Alpeshnichat123" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                  <Facebook />
                </a>
                <a href="https://www.instagram.com/alpesh_nichat/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                  <Instagram />
                </a>
                <a href="https://github.com/Nicalpesh31" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                  <Github />
                </a>
                <a href="https://www.linkedin.com/in/alpesh-nichat-751993326/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                  <Linkedin />
                </a>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <Mail className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Me</h3>
              <p>alpeshnichat123@gmail.com</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <Phone className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Me</h3>
              <p>+91-9834598196</p>
            </div>
          </div>

          <form action="https://formspree.io/f/xvgplezr" method="post" className="space-y-6">
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
      </footer>
    </div>
  );
}

export default App;