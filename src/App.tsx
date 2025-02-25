import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Terminal, Code2, Cpu, Bitcoin, Database, Lock, ChevronDown, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeContext';

function NavDropdown({ title, items }: { title: string; items: string[] }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative group">
      <button 
        className="flex items-center space-x-1 text-text-light dark:text-text-dark hover:text-accent-light dark:hover:text-accent-dark retro-text"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <ChevronDown className="w-4 h-4" />
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-primary-light dark:bg-secondary-dark ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {items.map((item, index) => (
              <a
                key={index}
                href="#"
                className="block px-4 py-2 text-sm text-text-light dark:text-text-dark hover:bg-accent-light dark:hover:bg-accent-dark retro-text"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function FeatureSection({ icon: Icon, title, description, index }: any) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="flex flex-col items-center p-6 bg-secondary-light dark:bg-secondary-dark rounded-lg border border-accent-light dark:border-accent-dark hover:border-primary-dark dark:hover:border-primary-dark retro-shadow"
    >
      <Icon className="w-12 h-12 text-primary-dark dark:text-primary-dark mb-4" />
      <h3 className="text-xl font-semibold mb-2 text-text-light dark:text-text-dark retro-text tracking-wider">{title}</h3>
      <p className="text-text-light dark:text-text-dark retro-text">{description}</p>
    </motion.div>
  );
}

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-primary-light dark:bg-secondary-dark text-text-light dark:text-text-dark transition-colors duration-200">
      {/* Navigation */}
      <nav className="bg-secondary-light dark:bg-secondary-dark border-b border-accent-light dark:border-accent-dark p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Github className="w-8 h-8" />
            <NavDropdown 
              title="Product" 
              items={['Features', 'Enterprise', 'Copilot', 'Security']} 
            />
            <NavDropdown 
              title="Solutions" 
              items={['Web3', 'DeFi', 'Enterprise', 'Startups']} 
            />
            <NavDropdown 
              title="Open Source" 
              items={['Topics', 'Trending', 'Collections']} 
            />
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button className="px-4 py-2 text-text-dark bg-primary-dark rounded-md hover:bg-accent-dark retro-text">
              Sign up
            </button>
            <button className="px-4 py-2 text-text-light dark:text-text-dark border border-accent-light dark:border-accent-dark rounded-md hover:border-primary-dark dark:hover:border-primary-dark retro-text">
              Sign in
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary-dark via-accent-dark to-primary-dark text-transparent bg-clip-text tracking-wider">
            Where Web3 meets Code
          </h1>
          <p className="text-xl mb-8 retro-text tracking-wide">
            Millions of developers and companies build, ship, and maintain their software on our platform.
            The future of decentralized development starts here.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-8 py-4 bg-primary-dark text-text-dark rounded-md hover:bg-accent-dark font-semibold retro-text tracking-wide retro-shadow">
              Trishir
            </button>
            <button className="px-8 py-4 border border-accent-light dark:border-accent-dark rounded-md hover:border-primary-dark dark:hover:border-primary-dark font-semibold retro-text tracking-wide retro-shadow">
              Enterprise trial
            </button>
          </div>
        </motion.div>

        {/* Terminal Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-secondary-light dark:bg-secondary-dark p-6 rounded-lg border border-accent-light dark:border-accent-dark mb-20 retro-shadow"
        >
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="font-mono text-sm retro-text">
            <p className="text-primary-dark">$ git clone https://github.com/your-crypto-project.git</p>
            <p className="text-text-light dark:text-text-dark">Cloning into 'your-crypto-project'...</p>
            <p className="text-text-light dark:text-text-dark">Successfully cloned repository</p>
            <p className="text-primary-dark">$ npm install</p>
            <p className="text-text-light dark:text-text-dark">Installing dependencies...</p>
            <div className="animate-pulse">▋</div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <FeatureSection
            icon={Code2}
            title="Smart Contract Ready"
            description="Build and deploy smart contracts with integrated testing and security features."
            index={0}
          />
          <FeatureSection
            icon={Bitcoin}
            title="Crypto Native"
            description="First-class support for cryptocurrency and blockchain development tools."
            index={1}
          />
          <FeatureSection
            icon={Terminal}
            title="Command Line Tools"
            description="Powerful CLI tools for managing your crypto development workflow."
            index={2}
          />
          <FeatureSection
            icon={Cpu}
            title="Web3 Integration"
            description="Seamless integration with popular Web3 frameworks and libraries."
            index={3}
          />
          <FeatureSection
            icon={Database}
            title="Decentralized Storage"
            description="Built-in support for IPFS and other decentralized storage solutions."
            index={4}
          />
          <FeatureSection
            icon={Lock}
            title="Security First"
            description="Advanced security features to protect your crypto assets and code."
            index={5}
          />
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-secondary-light dark:bg-secondary-dark rounded-lg border border-accent-light dark:border-accent-dark retro-shadow">
              <h3 className="text-4xl font-bold text-primary-dark mb-2 retro-text">100M+</h3>
              <p className="text-text-light dark:text-text-dark retro-text">Repositories</p>
            </div>
            <div className="p-6 bg-secondary-light dark:bg-secondary-dark rounded-lg border border-accent-light dark:border-accent-dark retro-shadow">
              <h3 className="text-4xl font-bold text-primary-dark mb-2 retro-text">50M+</h3>
              <p className="text-text-light dark:text-text-dark retro-text">Developers</p>
            </div>
            <div className="p-6 bg-secondary-light dark:bg-secondary-dark rounded-lg border border-accent-light dark:border-accent-dark retro-shadow">
              <h3 className="text-4xl font-bold text-primary-dark mb-2 retro-text">500K+</h3>
              <p className="text-text-light dark:text-text-dark retro-text">Smart Contracts</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="bg-secondary-light dark:bg-secondary-dark border-t border-accent-light dark:border-accent-dark py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Github className="w-8 h-8 mb-4" />
              <p className="text-text-light dark:text-text-dark retro-text">© 2025 CryptoHub, Inc.</p>
            </div>
            {['Product', 'Resources', 'Company', 'Legal'].map((title) => (
              <div key={title}>
                <h4 className="text-text-light dark:text-text-dark font-semibold mb-4 retro-text">{title}</h4>
                <ul className="space-y-2">
                  {[1, 2, 3, 4].map((i) => (
                    <li key={i}>
                      <a href="#" className="text-text-light dark:text-text-dark hover:text-primary-dark dark:hover:text-primary-dark retro-text">
                        {title} Link {i}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;