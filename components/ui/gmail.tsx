// pages/contact.js (or your preferred page filename)

"use client";


import { motion } from "framer-motion";

export default function Gmail() {


  return (
    <div className="container mx-auto px-4 py-16 text-center">

      <p className="text-lg mb-4">
        {"If you'd like to get in touch, you can reach me at: "}
      </p>



        <motion.p 
          className="text-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <a href="mailto:mrrajeshreddy1@gmail.com" className="underline">mrrajeshreddy1@gmail.com</a> {/* Replace with your actual email */}
        </motion.p>

    </div>
  );
}