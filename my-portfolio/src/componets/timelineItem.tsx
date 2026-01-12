import { motion } from "framer-motion";
function TimelineItem({ children, isLeft = false }: { children: React.ReactNode; isLeft?: boolean; }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center"
        >
            {/* 卡片 */}
            <div className={`w-full md:w-7/12 ${isLeft ? 'md:pr-16' : 'md:pl-16'} order-2 md:order-none`}>
                {children}
            </div>

            {/* 中間圓點（大螢幕才顯示） */}
            {/* <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-primary rounded-full ring-8 ring-white dark:ring-gray-900 shadow-lg hidden md:block z-10"></div> */}
        </motion.div>
    );
}

export default TimelineItem;
