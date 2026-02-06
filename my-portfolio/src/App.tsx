import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Moon, Sun, Menu, X, Cake } from "lucide-react";
import './index.css';
import leetcode_icon from './assets/svgviewer-output.svg';
import nyancat_demo from './assets/nyancatdemo2.gif';
import TimelineItem from "./componets/timelineItem";
import SkillItem from "./componets/SkillItem";
import FAQSection from "./componets/FAQ";

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

  const navItems = ["關於我", "技能", "作品集","問與答"];

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
            <a href="https://www.linkedin.com/in/ruei-chi-lin-2344a81b6" target="_blank" className="p-4 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-primary hover:text-white transition-all">
              <Linkedin size={28} />
            </a>
            <a href="https://leetcode.com/u/user4635/" target="_blank" className="p-4 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-primary hover:text-white transition-all">
              <img
                src={leetcode_icon} alt="LeetCode" className="w-7 h-7 transition-transform hover:scale-110"
              />
            </a>
            <a href="https://www.cake.me/me/ruei-chi-lin" target="_blank" className="p-4 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-primary hover:text-white transition-all">
              <Cake size={28} />
            </a>
          </motion.div>
        </div>
      </section>

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
            我是 Richie，一隻對著鍵盤亂敲的打字猴。
          </motion.p>

          {/* 學歷與經歷時間軸 */}
          <div className="relative">
            {/* 中間垂直線 */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-primary h-full opacity-30"></div>
            {/* 經歷 */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-center mb-12">經歷</h3>
              <div className="space-y-12">
                <TimelineItem isLeft={true}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
                    <h4 className="text-2xl font-bold mb-2">H5遊戲前端工程師  ⋅ 某科技公司</h4>
                    <p className="text-primary mb-4">全職</p>
                    <p className="text-gray-600 dark:text-gray-400">2020/11 - 2025/11・5年1個月</p>
                    <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                      <li>H5遊戲製作與維護(使用PIXI與typescript)</li>
                      <li>H5遊戲共用元件模組製作與維護</li>
                      <li>使用vue與nodeJs,grunt,typescript製作元件可視化工具以及功能擴充與維護</li>
                      <li>使用docker與verdaccio架設部門內部私有npm</li>
                      <li>撰寫架設私有npm/如何製作nodeModule/如何下載私有npm上的module說明文件</li>
                      <li>利用typescript與shell製作圖片壓縮模組供部門內部使用</li>
                      <li>使用nginx與pm2架設與管理線上版可視化工具</li>
                      <li>使用cypress/selenium/appium/webdriverio實現遊戲自動化測試</li>
                      <li>使用react native製作android/ios殼包</li>
                      <li>基底大廳功能維護</li>
                    </ul>
                  </div>
                </TimelineItem>
                <TimelineItem isLeft={true}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
                    <h4 className="text-2xl font-bold mb-2">程式設計師 ⋅ 泰偉電子</h4>
                    <p className="text-primary mb-4">全職</p>
                    <p className="text-gray-600 dark:text-gray-400">2016/9/19 – 2020/10/22・4年2個月</p>
                    <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                      <li>使用技術:Pixi.js, ES6</li>
                      <li>在公司內部框架內使用ES6撰寫HTML5遊戲client</li>
                      <li>使用CocosCreator將原本HTML5遊戲移植</li>
                      <li>使用tangular製作遊戲網頁注單基本格式</li>
                    </ul>
                  </div>
                </TimelineItem>
              </div>
            </div>
            {/* 學歷 */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-center mb-12">學歷</h3>
              <div className="space-y-12">
                {/* 每筆資料 */}
                <TimelineItem isLeft={true}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
                    <h4 className="text-2xl font-bold mb-2">國立臺北科技大學</h4>
                    <p className="text-primary mb-4">電機工程所 ⋅ 碩士</p>
                    <p className="text-gray-600 dark:text-gray-400">2013/9 - 2015/6</p>
                    <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                      <li>碩論:以資料發掘技術分析與預測社群網路中書本之評價與人氣</li>
                      <li>主要做網路爬蟲、資料探勘等相關研究。</li>
                    </ul>
                  </div>
                </TimelineItem>
                <TimelineItem >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
                    <h4 className="text-2xl font-bold mb-2">國立高雄大學</h4>
                    <p className="text-primary mb-4">電機工程系 ⋅ 學士</p>
                    <p className="text-gray-600 dark:text-gray-400">2009/7 - 2013/6</p>
                    <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                      <li>大學專題:利用模糊理論控制四輪撿球機器人之輪轉速</li>
                    </ul>
                  </div>
                </TimelineItem>

                <TimelineItem isLeft={true}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
                    <h4 className="text-2xl font-bold mb-2">臺北市立和平高級中學</h4>
                    <p className="text-primary mb-4">高中</p>
                    <p className="text-gray-600 dark:text-gray-400">2006 – 2009</p>
                    <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                      <li>第三類組</li>
                    </ul>
                  </div>
                </TimelineItem>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="技能" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Skills
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <SkillItem name="React" level={60} />
              <SkillItem name="Vue.js" level={60} />
              <SkillItem name="Tangular" level={80} />
              <SkillItem name="Tailwind CSS" level={60} />
              <SkillItem name="TypeScript" level={85} />
              <SkillItem name="JavaScript" level={95} />
              <SkillItem name="PIXIJS" level={85} />
              <SkillItem name="Cocos Creator" level={70} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <SkillItem name="Git / GitHub" level={85} />
              <SkillItem name="React Native" level={70} />
              <SkillItem name="Docker" level={70} />
              <SkillItem name="Node.js" level={85} />
              <SkillItem name="nginx" level={60} />
              <SkillItem name="PM2" level={80} />
              <SkillItem name="Verdaccio" level={65} />
              <SkillItem name="Electron" level={80} />
              <SkillItem name="Python" level={70} />
              <SkillItem name="Perl" level={75} />
              <SkillItem name="Grunt" level={85} />
            </motion.div>
          </div>
        </div>
      </section>


      {/* 作品集 Section */}
      <section id="作品集" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-12">我的作品 Demo</h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }} className="relative w-full max-w-[540px] mx-auto h-[300px] rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://sakaihay6ate.github.io/reactPractice/staticpractice/tictactoe.html"
              title="React Tic Tac Toe Demo"
              allowFullScreen
              className="absolute inset-0 w-[960px] h-[540px] border-0 origin-top-left"
            ></iframe>
          </motion.div>
          <div className="mt-6 flex items-center justify-center min-h-[60px]">
            <p className="text-center text-gray-600 dark:text-gray-400 text-lg font-medium">
              React的圈圈叉叉小遊戲
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full h-[270px] max-w-[480px] mx-auto rounded-2xl overflow-hidden shadow-2xl relative"  // 你的固定大小容器
          >
            <img src={nyancat_demo} alt="Nyan Cat Demo" className="absolute inset-0 w-[480px] h-[270px] border-0 origin-top-left" />
          </motion.div>
          <div className="mt-6 flex items-center justify-center min-h-[60px]">
            <p className="text-center text-gray-600 dark:text-gray-400 text-lg font-medium">
              pixi小遊戲；尚未支持手機上遊玩，請<a href="https://sakaihay6ate.github.io/nyancat/" target="_blank" className="text-primary hover:underline">按此開新網頁遊玩</a>。
            </p>
          </div>
        </div>
      </section>
      <FAQSection />
      {/* Footer */}
      <footer className="py-8 text-center text-gray-500">
        © 2025 Richie. All rights reserved.
      </footer>
    </>
  );
}


export default App;