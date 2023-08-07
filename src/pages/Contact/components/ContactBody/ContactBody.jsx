import React from 'react';
import { BsFacebook, BsTwitter, BsLinkedin } from 'react-icons/bs';

export default function ContactBody() {
  const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5", "Option 6", "Option 7", "Option 8", "Option 9"];
  
  return (
    <div className="flex flex-col md:flex-row justify-center items-start mt-10 mb-10 md:mx-auto px-4 md:px-0" style={{ maxWidth: '1200px' }}>
      <div className="flex flex-col items-start w-full md:w-2/5 md:mr-4 p-6 space-y-5">
        <h2 className="text-3xl font-bold mb-6">Company Name</h2>
        <p>1234 Street Name, City, State</p>
        <p>(123) 456-7890</p>
        <p>email@company.com</p>
        <div className="flex mt-6 space-x-2">
          {/* Replace "#" with your actual social media links */}
          <a href="#!" className="text-2xl"><BsFacebook /></a>
          <a href="#!" className="text-2xl"><BsTwitter /></a>
          <a href="#!" className="text-2xl"><BsLinkedin /></a>
        </div>
      </div>

      <div className="flex flex-col items-start w-full md:w-3/5 md:ml-4 p-6">
        <form>
          <div>
            <label>Name (required)</label>
            <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 mt-2">
              <input className="w-full py-2 px-3 rounded bg-gray-200 border-gray-400 mb-2 md:mb-0" type="text" placeholder="First Name" required/>
              <input className="w-full py-2 px-3 rounded bg-gray-200 border-gray-400" type="text" placeholder="Last Name" required/>
            </div>
          </div>

          <div className="mt-4">
            <label>Email (required)</label>
            <input className="w-full py-2 px-3 rounded bg-gray-200 border-gray-400 mt-2" type="email" placeholder="Your Email" required/>
          </div>

          <div className="mt-4">
            <label>I'm interested in help with... (required)</label>
            <div className="flex flex-col mt-2 space-y-2">
              {/* Replace "Option" with your actual options */}
              {options.map((option, i) => (
                <label key={i}>
                  <input type="checkbox" className="mr-2" required/>{option}
                </label>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <label>Additional Message (optional)</label>
            <textarea className="w-full py-2 px-3 rounded bg-gray-200 border-gray-400 mt-2" rows="3"></textarea>
          </div>

          <button type="submit" className="mt-6 py-2 px-4 rounded bg-[#C38F4B] hover:bg-[#A27943] text-white">Submit</button>
        </form>
      </div>
    </div>
  );
}
