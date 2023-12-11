import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Navbar from './Components/Navbar';
import logo from "./assets/email.svg";
import Footer from './Components/Footer';

const App = () => {
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [csvFile, setCsvFile] = useState(null);
  const [message, setMessage] = useState('');
  const [validEmails, setValidEmails] = useState([]);
  const [invalidEmails, setInvalidEmails] = useState([]);

  const handleCsvFileChange = (event) => {
    const file = event.target.files[0];
    setCsvFile(file);

    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (event) => {
      const csv = event.target.result;
      const lines = csv.split('\n');
      const validEmailList = [];
      const invalidEmailList = [];

      for (let i = 0; i < lines.length; i++) {
        const email = lines[i].trim();
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/;
        if (emailRegex.test(email)) {
          validEmailList.push(email);
        } else {
          invalidEmailList.push(email);
        }
      }

      setValidEmails(validEmailList);
      setInvalidEmails(invalidEmailList);
    };
  };

  const sendEmails = () => {
    console.log('Sending emails...');
  };

  return (
    <div className="justify-center bg-slate-200 min-h-screen ">
      <Navbar />
      <div className="container mx-auto p-10  rounded-lg shadow-lg">
        <form className="min-h-screen  flex flex-col justify-center sm:py-12">
          <div className="mb-5 px-[10px] justify-center items-center">

            <div class="bg-white shadow w-full mb-2 rounded-lg  ">
              <div class="font-semibold text-sm  pb-1 block">

                <img src={logo} alt="logo" className="w-11 mb-2 sm:justify-center h-9 object-contain rounded-full" />
                <p className="text-black text-[25px] px-[10px] font-semibold cursor-pointer hidden sm:block">Post Your Details Here!</p>
              </div>
              <div class="px-5 py-7">
                <label htmlFor="senderEmail" className="font-semibold text-sm text-gray-600 pb-1 block">From Address:</label>
                <input
                  type="email"
                  id="senderEmail"
                  name="senderEmail"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  className="bg-white text-black border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  required
                />
                <label htmlFor="subject" className="font-semibold text-sm text-gray-600 pb-1 block">Subject:</label>
                <textarea
                  id="subject"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="bg-white text-black border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  required
                ></textarea>
                <label htmlFor="csvFile" className="font-semibold text-sm text-gray-600 pb-1 block">CSV File Input:</label>
                <input
                  type="file"
                  id="csvFile"
                  name="csvFile"
                  accept=".csv"
                  onChange={handleCsvFileChange}
                  className="bg-white text-black border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  required
                />
                <label htmlFor="message" className="font-semibold text-sm text-gray-600 pb-1 block">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-white text-black border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  required
                ></textarea>

                <button
                  type="button"
                  className="bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer hover:bg-blue-600"
                  onClick={sendEmails}
                >
                  Send Emails
                </button>
              </div>
            </div>

          </div>

          <div className="flex mt-4">
            <div className="mr-8">
              <p className="text-green-500 font-semibold">
                Valid Emails: <span>{`(${validEmails.length})`}</span>
              </p>
              <div className="text-gray-800">
                {validEmails.map((email, index) => (
                  <div key={index}>{email}</div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-red-500 font-semibold">
                Invalid Emails: <span>{`(${invalidEmails.length})`}</span>
              </p>
              <div className="text-gray-800">
                {invalidEmails.map((email, index) => (
                  <div key={index}>{email}</div>
                ))}
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer/>
    </div>

  );
};

export default App;
