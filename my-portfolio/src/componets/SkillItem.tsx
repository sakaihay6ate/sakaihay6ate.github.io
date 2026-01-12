import { motion } from "framer-motion";
// 小組件：單一技能 + 進度條
function SkillItem({ name, level }: { name: string; level: number; }) {
    return (
        <div className="flex items-center gap-6">
            <div className="flex-1">
                <div className="flex justify-between mb-2">
                    <span className="font-medium">{name}</span>
                    <span className="text-primary">{level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="bg-primary h-3 rounded-full"
                    />
                </div>
            </div>
        </div>
    );
}
export default SkillItem;
