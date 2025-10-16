import React from "react";
import { motion } from "framer-motion";
const InfoSection = ({ title, data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm">
        <h2 className="font-semibold text-green-800 mb-4 border-b-2 border-green-200 pb-2">
          {title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {data.map((item, index) => (
            <div key={index}>
              <p className="text-gray-500 text-sm sm:text-base">{item.label}</p>
              <p className="font-semibold break-words">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default InfoSection;
