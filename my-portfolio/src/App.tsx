import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Moon, Sun, Menu, X, Cake } from "lucide-react";
import './index.css';
import leetcode_icon from './assets/svgviewer-output.svg';

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
            <a href="https://linkedin.com/in/xxx" target="_blank" className="p-4 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-primary hover:text-white transition-all">
              <Linkedin size={28} />
            </a>
            <a href="https://leetcode.com/u/user4635/" target="_blank" className="p-4 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-primary hover:text-white transition-all">
              <img
                src={leetcode_icon}
                alt="LeetCode" className="w-7 h-7 transition-transform hover:scale-110"
              />
            </a>
            <a href="" target="_blank" className="p-4 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-primary hover:text-white transition-all">
              <Cake size={28} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 其他區塊（關於我、作品集、聯絡我）你可以自己加，結構一樣簡單 */}
      <section id="關於我" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16"
          >
            關於我
          </motion.h2>

          {/* 簡短自我介紹 */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-center text-gray-600 dark:text-gray-400 mb-20 max-w-2xl mx-auto"
          >
            我是 Richie，前端工程師，熱愛 React、TypeScript 和現代網頁設計。
            平時喜歡喝咖啡、研究新技術、做小專案 ☕
          </motion.p>

          {/* 學歷與經歷時間軸 */}
          <div className="relative">
            {/* 中間垂直線 */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-primary h-full opacity-30"></div>

            {/* 學歷 */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-center mb-12">學歷</h3>
              <div className="space-y-12">
                {/* 每筆資料 */}
                <TimelineItem isLeft={true}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
                    <h4 className="text-2xl font-bold mb-2">國立臺灣大學</h4>
                    <p className="text-primary mb-4">資訊工程學系 ⋅ 學士</p>
                    <p className="text-gray-600 dark:text-gray-400">2018 – 2022</p>
                    <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                      <li>主修前端開發、資料結構與演算法</li>
                      <li>GPA 4.0 / 4.3，年級前 5%</li>
                      <li>校內程式設計比賽金牌</li>
                    </ul>
                  </div>
                </TimelineItem>

                <TimelineItem >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
                    <h4 className="text-2xl font-bold mb-2">臺北市立和平高中</h4>
                    <p className="text-primary mb-4">高中</p>
                    <p className="text-gray-600 dark:text-gray-400">2015 – 2018</p>
                  </div>
                </TimelineItem>
              </div>
            </div>

            {/* 經歷 */}
            <h3 className="text-3xl font-bold text-center mb-12">經歷</h3>
            <div className="space-y-12">
              <TimelineItem isLeft={true}>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
                  <h4 className="text-2xl font-bold mb-2">程式設計師 ⋅ 泰偉電子</h4>
                  <p className="text-primary mb-4">全職</p>
                  <p className="text-gray-600 dark:text-gray-400">2016/9/19 – 2020/10/22</p>
                  <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                    <li>使用技術:Pixi.js, ES6</li>
                    <li>在公司內部框架內使用ES6撰寫HTML5遊戲client</li>
                    <li>使用CocosCreator將原本HTML5遊戲移植</li>
                    <li>使用tangular製作遊戲網頁注單基本格式</li>
                  </ul>
                </div>
              </TimelineItem>
              <div className="space-y-12">
                <TimelineItem isLeft={true}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
                    <h4 className="text-2xl font-bold mb-2">前端工程師 ⋅ 某科技公司</h4>
                    <p className="text-primary mb-4">全職</p>
                    <p className="text-gray-600 dark:text-gray-400">2023 – 現在</p>
                    <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                      <li>負責公司主產品 React 重構，提升效能 40%</li>
                      <li>帶領 3 人小組開發新功能</li>
                      <li>導入 Tailwind CSS + TypeScript 標準</li>
                    </ul>
                  </div>
                </TimelineItem>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 範例：關於我 */}
      {/* <section id="關於我" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">關於我</h2>
          <p className="text-lg leading-relaxed text-center">
            我是個熱愛前端技術的工程師，專精 React、TypeScript 和現代 CSS。
            平時喜歡研究新技術、寫部落格、喝咖啡 ☕
          </p>
        </div>
      </section> */}
      {/* Iframe 嵌入區塊（例如 YouTube 影片） */}
      <section id="作品集" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-12">我的作品 Demo</h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full h-[540px] max-w-[960px] mx-auto rounded-2xl overflow-hidden shadow-2xl relative"  // 你的固定大小容器
          >
            <iframe
              src="https://sakaihay6ate.github.io/nyancat/"  // 你的正確網址
              title="Nyan Cat Demo"
              allowFullScreen
              className="absolute inset-0 w-[960px] h-[540px] border-0 origin-top-left"
              style={{ transform: `scale(0.85)` }}  // ← 關鍵！縮小 75%（可調 0.5~1）
            ></iframe>
          </motion.div>

          <p className="text-center mt-8 text-gray-600 dark:text-gray-400">
            pixi小遊戲；iframe執行有問題尚未修復，請<a href="https://sakaihay6ate.github.io/nyancat/" target="_blank" className="text-primary hover:underline">按此開新網頁遊玩</a>。
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
{/* ===== TimelineItem 組件定義（一定要放在這裡！） ===== */ }
function TimelineItem({ children, isLeft = false }: { children: React.ReactNode; isLeft?: boolean; }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="relative flex items-center justify-center"
    >
      {/* 卡片 */}
      <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-16' : 'md:pl-16'} order-2 md:order-none`}>
        {children}
      </div>

      {/* 中間圓點（大螢幕才顯示） */}
      {/* <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-primary rounded-full ring-8 ring-white dark:ring-gray-900 shadow-lg hidden md:block z-10"></div> */}
    </motion.div>
  );
}
export default App;