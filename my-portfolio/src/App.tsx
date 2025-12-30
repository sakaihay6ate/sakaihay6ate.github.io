import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Moon, Sun, Menu, X } from "lucide-react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const navItems = ["關於我", "作品集", "聯絡我"];

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Richie
          </h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="block px-6 py-4 hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.nav>
        )}
      </header>

      {/* Hero Section */}
      <section id="首頁" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* 動態背景球 */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            嗨，我是 Richie 👋
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8"
          >
            前端打字猴
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-6 justify-center"
          >
            <a href="https://github.com/sakaihay6ate" target="_blank" className="p-4 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-primary hover:text-white transition-all">
              <Github size={28} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" className="p-4 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-primary hover:text-white transition-all">
              <Linkedin size={28} />
            </a>
            <a href="mailto:your@email.com" className="p-4 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-primary hover:text-white transition-all">
              <Mail size={28} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 其他區塊（關於我、作品集、聯絡我）你可以自己加，結構一樣簡單 */}
      {/* 範例：關於我 */}
      <section id="關於我" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">關於我</h2>
          <p className="text-lg leading-relaxed text-center">
            我是個熱愛前端技術的工程師，專精 React、TypeScript 和現代 CSS。
            平時喜歡研究新技術、寫部落格、喝咖啡 ☕
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500">
        © 2025 Richie. All rights reserved.
      </footer>
    </>
  );
}

export default App;