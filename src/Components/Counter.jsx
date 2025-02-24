import React, { useState } from "react";
import { ImCloudUpload } from "react-icons/im";
import Mammoth from "mammoth";

const Counter = () => {
  const [text, setText] = useState('');
  const [fileName, setFileName] = useState('');
  const countWords = (str) => (str.trim() ? str.trim().split(/\s+/).length : 0);
  const countCharacters = (str) => str.length;
  const countPunctuation = (str) => (str.match(/[.,!?;:'"()-]/g) || []).length;
  const countVowels = (str) => (str.match(/[aeiouAEIOU]/g) || []).length;
  const countSentences = (str) => (str.match(/[.!?]+/g) || []).length;

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.name.endsWith(".docx")) {
      setFileName(file.name);  // Set the file name
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
    <div className="border-2 border-blue-950 bg-slate-100 rounded-xl p-4 mx-auto mt-14 max-w-lg">
      <h1 className="text-blue-950 text-3xl text-center font-bold mb-4">Word Counter & Text Analyzer</h1>
      <textarea rows="4" className="w-full text-blue-900 text-2xl border-2 border-blue-950 p-3 rounded-lg outline-none bg-slate-200 placeholder-gray-500 placeholder:text-xl hover:scale-105 duration-500 focus:ring-1 focus:ring-blue-950" placeholder="Enter Your Text Here" onChange={(e) => setText(e.target.value)}></textarea>
      <div className="flex rounded-md bg-slate-200 mt-2">
        <input type="file" id="upload" className="hidden" accept=".docx" onChange={handleFileUpload} />
        <label htmlFor="upload" className="cursor-pointer border-2 border-blue-950  text-blue-950 py-2 px-4 rounded-md bg-slate-200 text-xl hover:bg-slate-300 hover:scale-105 duration-300" accept=".docx" onChange={handleFileUpload}>
          <div className="flex"><ImCloudUpload className="pt-1 text-2xl pr-1" />Choose File</div>
        </label>
        {fileName && <p className="mt-2 text-blue-950">{fileName}</p>}
        {/* {fileName && <p className="mt-2">{fileName}</p>} */}
      </div>
      <div className="bg-blue-950 mt-4 p-4 rounded-lg">
        <div className="flex justify-between">
          <p className="text-2xl text-blue-200 tracking-wider">Words : {countWords(text)}</p>
          <p className="text-2xl text-blue-200 tracking-wider">Characters : {countCharacters(text)}</p>
        </div>
        <div className="flex justify-between mt-2">
          <p className="text-2xl text-blue-200 tracking-wider">Vowels : {countVowels(text)}</p>
          <p className="text-2xl text-blue-200 tracking-wider">Punctuations : {countPunctuation(text)}</p>
        </div>
        <p className="text-2xl text-blue-200 text-center tracking-wider mt-2">Sentences : {countSentences(text)}
        </p>
      </div>
    </div>
  );
};

export default Counter;
