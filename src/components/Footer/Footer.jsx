import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white text-black p-6 md:p-20 text-center">
        <h1 className="text-4xl tracking-widest leading-loose mb-20">WellVibe</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
            <div>
                <h1 className="text-xl mb-10">Location</h1>
                <p className="text-sm">
                    123 Demo Street
                </p>
                <p className="text-sm">
                    A City, Earth 12345
                </p>
            </div>

            <div>
                <h1 className="text-xl mb-10">Contact</h1>
                <p className="text-sm phoneNumber">
                    (555) 555-5555
                </p>
                <p className='text-sm Email'>
                    email@example.com
                </p>
            </div>

            <div>
                <h1 className="text-xl mb-10">Follow</h1>
                <p className="text-sm Follow">
                    <a href='https://www.instagram.com/' className='text-sm text-[#A27943] underline'>Instagram</a>
                </p>
                <p className='text-sm Follow'>
                    <a href='https://www.facebook.com/' className='text-sm text-[#A27943] underline'>Facebook</a>
                </p>
            </div>
        </div>
    </footer>
  )
}
