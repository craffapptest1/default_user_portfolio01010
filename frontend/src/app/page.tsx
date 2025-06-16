import Link from "next/link";
import Image from "next/image";
import { FiCode, FiDesign, FiSmartphone, FiGithub, FiLinkedin, FiMail, FiArrowRight, FiStar } from "react-icons/fi";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 text-center relative bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-6 text-center">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Image 
                src="https://images.unsplash.com/photo-1498843053639-170ff2122f35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzAxMzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTAwNjQwMjZ8&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Professional headshot" 
                width={128} 
                height={128} 
                className="w-full h-full object-cover" 
                priority 
              />
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Creative Developer
              </h1>
              <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl leading-relaxed">
                Crafting beautiful digital experiences through code and design. 
                Passionate about turning ideas into reality.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#portfolio"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-blue-600 px-8 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                View My Work
                <FiArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-300 bg-white px-8 text-sm font-medium text-gray-700 shadow-md transition-all duration-300 hover:bg-gray-50 hover:shadow-lg hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                About Me
              </h2>
              <p className="text-gray-600 md:text-lg">
                Passionate about creating meaningful digital experiences
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  I'm a creative developer with a passion for building beautiful, functional, and user-friendly applications. 
                  With expertise in modern web technologies, I bring ideas to life through clean code and thoughtful design.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                  or sharing knowledge with the developer community.
                </p>
                <Link
                  href="/resume"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                >
                  Download Resume
                  <FiArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="relative">
                <Image 
                  src="https://images.unsplash.com/photo-1721420372338-470b666fe14d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzAxMzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTAwNjQwMjh8&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="Developer workspace" 
                  width={500} 
                  height={400} 
                  className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Skills & Expertise
              </h2>
              <p className="text-gray-600 md:text-lg">
                Technologies and tools I work with
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="p-3 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors duration-300">
                  <FiCode className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">Frontend Development</h3>
                <p className="text-gray-600 text-center text-sm">
                  React, Next.js, TypeScript, Tailwind CSS, and modern JavaScript frameworks
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="p-3 rounded-full bg-green-100">
                  <FiDesign className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold">UI/UX Design</h3>
                <p className="text-gray-600 text-center text-sm">
                  Figma, Adobe Creative Suite, user-centered design, and prototyping
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="p-3 rounded-full bg-purple-100">
                  <FiSmartphone className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold">Mobile Development</h3>
                <p className="text-gray-600 text-center text-sm">
                  React Native, responsive design, and progressive web applications
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Featured Work
              </h2>
              <p className="text-gray-600 md:text-lg">
                A showcase of my recent projects and achievements
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <Image 
                  src="https://images.unsplash.com/photo-1581079288371-ea1d68ec6105?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzAxMzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTAwNjQwMzB8&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="Project showcase" 
                  width={400} 
                  height={300} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-semibold mb-2">E-Commerce Platform</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Modern online store with seamless user experience and secure payments
                  </p>
                  <Link
                    href="/portfolio/project-1"
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
                  >
                    View Project →
                  </Link>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <Image 
                  src="https://picsum.photos/seed/portfolio01010/800/600" 
                  alt="Project showcase" 
                  width={400} 
                  height={300} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-semibold mb-2">Task Management App</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Collaborative workspace for teams with real-time updates
                  </p>
                  <Link
                    href="/portfolio/project-2"
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
                  >
                    View Project →
                  </Link>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <Image 
                  src="https://images.unsplash.com/photo-1500099817043-86d46000d58f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzAxMzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTAwNjQwMzV8&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="Project showcase" 
                  width={400} 
                  height={300} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-semibold mb-2">Weather Dashboard</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Beautiful weather app with location-based forecasts
                  </p>
                  <Link
                    href="/portfolio/project-3"
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
                  >
                    View Project →
                  </Link>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link
                href="/portfolio"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-300 bg-white px-8 text-sm font-medium text-gray-700 shadow-md transition-all duration-300 hover:bg-gray-50 hover:shadow-lg hover:-translate-y-1"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                What People Say
              </h2>
              <p className="text-gray-600 md:text-lg">
                Testimonials from clients and colleagues
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Exceptional work quality and attention to detail. The project was delivered 
                  on time and exceeded our expectations."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold text-sm">Sarah Johnson</p>
                    <p className="text-gray-600 text-xs">Product Manager, TechCorp</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Professional, reliable, and incredibly talented. I would definitely 
                  recommend for any web development project."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold text-sm">Michael Chen</p>
                    <p className="text-gray-600 text-xs">Founder, StartupXYZ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Let's Work Together
              </h2>
              <p className="text-gray-600 md:text-lg">
                Ready to bring your ideas to life? Let's connect!
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Get in touch</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Whether you have a project in mind or just want to say hello, 
                    I'd love to hear from you. Let's create something amazing together.
                  </p>
                </div>
                <div className="flex space-x-4">
                  <Link
                    href="mailto:hello@portfolio01010.com"
                    className="p-3 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors duration-300"
                  >
                    <FiMail className="h-6 w-6" />
                  </Link>
                  <Link
                    href="https://github.com"
                    className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors duration-300"
                  >
                    <FiGithub className="h-6 w-6" />
                  </Link>
                  <Link
                    href="https://linkedin.com"
                    className="p-3 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors duration-300"
                  >
                    <FiLinkedin className="h-6 w-6" />
                  </Link>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 font-medium"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}