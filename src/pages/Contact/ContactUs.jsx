import React, { useState } from "react";

const ContactUs = () => {
    const [form, setForm] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
    });

    // Submission handler for backend integration
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Backend integration example:
        /*
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    */
        alert("Form ready for backend! See console for submitted data.");
        console.log(form);
    };

    // Input change handler
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div className="bg-white">
            <div className="w-full h-10 md:h-12 lg:h-20 bg-gray-900"></div>
            <div className="bg-[#AD1E1E] md:py-20 py-10">
                <h1 className="lg:text-6xl md:text-4xl text-3xl font-light italic tracking-tight text-white text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Contact Us
                </h1>
            </div>

            <div className="md:w-[90%] w-full md:px-20 mx-auto flex flex-col md:flex-row gap-8 px-4 md:py-16 py-10">
                <div className="md:w-[40%] text-gray-700 font-light">
                    <h2 
                        className="lg:text-5xl md:text-3xl text-2xl font-light italic tracking-tight text-gray-800 mb-6"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Contact us
                    </h2>
                    <h3 className="font-semibold text-2xl text-gray-900 mb-3 md:mt-10 mt-5 font-outfit">
                        Panorama Exports
                    </h3>
                    <p className="mb-4 leading-relaxed">
                        Headquarters: Panorama Exports Pvt Ltd<br />
                        I 20, Sector 32, Block A, DLF Industrial Area, Faridabad, Haryana 121003
                    </p>
                    <p className="mb-2">
                        <span className="font-semibold text-gray-900">Phone No:</span> I-20 - 0129-4962400
                    </p>
                    <p className="mb-2">
                        <span className="font-semibold text-gray-900">Email:</span> info@panoramaexports.com
                    </p>
                </div>
                <form
                    className="md:w-[60%] bg-white rounded-sm p-6 text-gray-800"
                    onSubmit={handleSubmit}
                >
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                        <div className="mb-4">
                            <label className="block mb-2 font-medium text-sm tracking-wider uppercase text-gray-600">
                                Name *
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                className="w-full bg-[#f6f6f6] rounded px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#AD1E1E]/20 focus:border-[#AD1E1E] border border-transparent transition"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 font-medium text-sm tracking-wider uppercase text-gray-600">
                                Company *
                            </label>
                            <input
                                type="text"
                                name="company"
                                value={form.company}
                                onChange={handleChange}
                                placeholder="Your company name"
                                className="w-full bg-[#f6f6f6] rounded px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#AD1E1E]/20 focus:border-[#AD1E1E] border border-transparent transition"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 font-medium text-sm tracking-wider uppercase text-gray-600">
                                Email *
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Your working email"
                                className="w-full bg-[#f6f6f6] rounded px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#AD1E1E]/20 focus:border-[#AD1E1E] border border-transparent transition"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 font-medium text-sm tracking-wider uppercase text-gray-600">
                                Phone *
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="Your phone number"
                                className="w-full bg-[#f6f6f6] rounded px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#AD1E1E]/20 focus:border-[#AD1E1E] border border-transparent transition"
                                required
                            />
                        </div>
                        <div className="mb-6 lg:col-span-2">
                            <label className="block mb-2 font-medium text-sm tracking-wider uppercase text-gray-600">
                                Write a Message *
                            </label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Choose a subject"
                                rows="4"
                                className="w-full bg-[#f6f6f6] rounded px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#AD1E1E]/20 focus:border-[#AD1E1E] border border-transparent transition resize-none"
                                required
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="px-8 bg-[#AD1E1E] text-white py-3.5 rounded font-bold tracking-wider uppercase text-sm hover:bg-[#1a1a1a] transition duration-300 shadow-md"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
