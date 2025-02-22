import React, { useState } from "react";
import Mammoth from "mammoth";
import { motion } from "framer-motion";

const Counter = () => {
  const [text, setText] = useState("");

  const countWords = (str) => (str.trim() ? str.trim().split(/\s+/).length : 0);
  const countCharacters = (str) => str.length;
  const countPunctuation = (str) => (str.match(/[.,!?;:'"()-]/g) || []).length;
  const countVowels = (str) => (str.match(/[aeiouAEIOU]/g) || []).length;
  const countSentences = (str) => (str.match(/[.!?]+/g) || []).length;

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.name.endsWith(".docx")) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const arrayBuffer = e.target.result;
        const result = await Mammoth.extractRawText({ arrayBuffer });
        setText(result.value);
      };
      reader.readAsArrayBuffer(file);
    } else {
      alert("Please upload a valid .docx file");
    }
  };

  return (
    <motion.div 
      className=" p-4 max-w-lg mx-auto bg-gray-200 border border-gray-400 rounded-lg shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-xl font-bold mb-4 text-center text-yellow-500">Word Counter & Text Analyzer</h1>
      <motion.textarea
        className="w-full p-3 border rounded shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all bg-[#E3F2FD] text-blue border-yellow-500 placeholder-gray-500"
        rows="5"
        placeholder="Enter Your Text Here"
        value={text}
        onChange={(e) => setText(e.target.value)}
        whileFocus={{ scale: 1.05 }}
      />
      <motion.input 
        type="file" 
        accept=".docx" 
        onChange={handleFileUpload} 
        className="mt-3 p-2 border rounded w-full cursor-pointer transition-all hover:bg-gray-300"
        whileHover={{ scale: 1.02 }}
      />
      <motion.div 
        className="mt-4 p-4 border rounded bg-[#16213E] shadow-lg text-white"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between">
          <p className="text-lg text-yellow-500"><strong>WORDS:</strong> {countWords(text)}</p>
          <p className="text-lg text-yellow-500"><strong>CHARACTERS:</strong> {countCharacters(text)}</p>
        </div>
        <div className="flex justify-between mt-2">
          <p className="text-lg text-green-500"><strong>VOWELS:</strong> {countVowels(text)}</p>
          <p className="text-lg text-green-500"><strong>PUNCTUATION:</strong> {countPunctuation(text)}</p>
        </div>
        <p className="text-lg text-center text-blue-400 mt-2"><strong>SENTENCES:</strong> {countSentences(text)}</p>
      </motion.div>
    </motion.div>
  );
};

export default Counter;
