// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React from "react";

// export default function App() {
//   return (
//     <div className="font-sans">
//       {/* Navbar */}
//       <nav className="flex justify-between items-center p-4 shadow-md bg-white sticky top-0">
//         <h1 className="text-xl font-bold">MyWebsite</h1>
//         <div className="space-x-4">
//           <a href="#home" className="hover:text-blue-500">Home</a>
//           <a href="#about" className="hover:text-blue-500">About</a>
//           <a href="#services" className="hover:text-blue-500">Services</a>
//           <a href="#contact" className="hover:text-blue-500">Contact</a>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section id="home" className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center">
//         <h2 className="text-4xl font-bold mb-4">Welcome to My Website</h2>
//         <p className="text-lg mb-6">This is a complete React website example</p>
//         <button className="bg-blue-500 text-white px-6 py-2 rounded-xl hover:bg-blue-600">Get Started</button>
//       </section>

//       {/* About */}
//       <section id="about" className="p-10 text-center">
//         <h2 className="text-3xl font-bold mb-4">About Us</h2>
//         <p className="max-w-2xl mx-auto">We build modern websites using React. This section describes your business, skills, or portfolio.</p>
//       </section>

//       {/* Services */}
//       <section id="services" className="p-10 bg-gray-100 text-center">
//         <h2 className="text-3xl font-bold mb-6">Our Services</h2>
//         <div className="grid md:grid-cols-3 gap-6">
//           <div className="p-6 bg-white shadow rounded-2xl">
//             <h3 className="font-bold text-xl mb-2">Web Development</h3>
//             <p>Modern and responsive websites.</p>
//           </div>
//           <div className="p-6 bg-white shadow rounded-2xl">
//             <h3 className="font-bold text-xl mb-2">UI/UX Design</h3>
//             <p>Clean and user-friendly designs.</p>
//           </div>
//           <div className="p-6 bg-white shadow rounded-2xl">
//             <h3 className="font-bold text-xl mb-2">SEO</h3>
//             <p>Improve your website ranking.</p>
//           </div>
//         </div>
//       </section>

//       {/* Contact */}
//       <section id="contact" className="p-10 text-center">
//         <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
//         <form className="max-w-md mx-auto space-y-4">
//           <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
//           <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
//           <textarea placeholder="Your Message" className="w-full p-2 border rounded" />
//           <button className="bg-blue-500 text-white px-6 py-2 rounded-xl">Send</button>
//         </form>
//       </section>

//       {/* Footer */}
//       <footer className="bg-black text-white text-center p-4">
//         <p>© 2026 MyWebsite. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }


import React, { useState } from "react";
import { motion } from "framer-motion";

export default function AdvancedFrontend() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="font-sans bg-white dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen">

        {/* Navbar */}
        <nav className="flex justify-between items-center px-8 py-4 shadow bg-white dark:bg-gray-800 sticky top-0">
          <h1 className="text-2xl font-bold">ZohaibUI</h1>
          <div className="space-x-6 hidden md:block">
            <a href="#" className="hover:text-blue-500">Home</a>
            <a href="#features" className="hover:text-blue-500">Features</a>
            <a href="#projects" className="hover:text-blue-500">Projects</a>
            <a href="#contact" className="hover:text-blue-500">Contact</a>
          </div>
          <button
            onClick={() => setDark(!dark)}
            className="bg-black text-white px-4 py-1 rounded dark:bg-white dark:text-black"
          >
            {dark ? "Light" : "Dark"}
          </button>
        </nav>

        {/* Hero */}
        <section className="h-screen flex flex-col justify-center items-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            Modern Frontend UI 🔥
          </motion.h1>
          <p className="text-lg mb-6 max-w-xl">
            Advanced React + Tailwind frontend template with dark mode & animations.
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-2xl hover:bg-blue-600">
            Explore
          </button>
        </section>

        {/* Features */}
        <section id="features" className="py-16 px-8 text-center">
          <h2 className="text-3xl font-bold mb-10">Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Dark Mode", "Animations", "Responsive"].map((item, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05 }} className="p-6 shadow rounded-2xl bg-gray-100 dark:bg-gray-800">
                <h3 className="text-xl font-semibold mb-2">{item}</h3>
                <p>Clean and modern UI feature.</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-16 px-8 bg-gray-100 dark:bg-gray-800 text-center">
          <h2 className="text-3xl font-bold mb-10">Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((p) => (
              <div key={p} className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow">
                <h3 className="text-xl font-bold mb-2">Project {p}</h3>
                <p>Frontend project showcase UI.</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <form className="max-w-lg mx-auto space-y-4">
            <input className="w-full p-3 border rounded" placeholder="Name" />
            <input className="w-full p-3 border rounded" placeholder="Email" />
            <textarea className="w-full p-3 border rounded" placeholder="Message" />
            <button className="bg-blue-500 text-white px-6 py-2 rounded">
              Send
            </button>
          </form>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white text-center p-4">
          <p>© 2026 ZohaibUI Frontend Template</p>
        </footer>
      </div>
    </div>
  );
}
