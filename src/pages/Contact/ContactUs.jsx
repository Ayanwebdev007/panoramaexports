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
            <div className="bg-blue-900 md:py-20 py-10">
                <h1 className="lg:text-6xl md:text-4xl text-3xl font-bold text-white text-center">
                    CONTACT US
                </h1>
            </div>

            <div className="md:w-[90%] w-full md:px-20 mx-auto flex flex-col md:flex-row gap-8 px-4 md:py-10 py-5">
                <div className="md:w-[40%] text-blue-950">
                    <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold mb-4">
                        Contact us
                    </h2>
                    <h3 className="font-semibold text-2xl mb-2 md:mt-10 mt-5">
                        Panorama Exports
                    </h3>
                    <p className="mb-2 text-wrap">
                        Headquarters: Panorama Exports Pvt Ltd<br />
                        I 20, Sector 32, Block A, DLF Industrial Area, Faridabad, Haryana 121003
                    </p>
                    <p className="mb-1">
                        <span className="font-semibold">Phone No:</span> I-20 -
                        0129-4962400
                    </p>
                    <p className="mb-1">
                        <span className="font-semibold"></span>{" "}
                        info@panoramaexports.com
                    </p>
                </div>
                <form
                    className="md:w-[60%] bg-white rounded-sm p-6 text-blue-950"
                    onSubmit={handleSubmit}
                >
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                        <div className="mb-4">
                            <label className="block mb-1 font-medium">
                                Name *
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                className="w-full bg-[#f6f6f6] rounded px-3 py-3 focus:outline-none focus:ring focus:border-blue-400"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1 font-medium">
                                Company *
                            </label>
                            <input
                                type="text"
                                name="company"
                                value={form.company}
                                onChange={handleChange}
                                placeholder="Your company name"
                                className="w-full bg-[#f6f6f6] rounded px-3 py-3 focus:outline-none focus:ring focus:border-blue-400"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1 font-medium">
                                Email *
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Your working email"
                                className="w-full bg-[#f6f6f6] rounded px-3 py-3 focus:outline-none focus:ring focus:border-blue-400"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1 font-medium">
                                Phone *
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="Your phone number"
                                className="w-full bg-[#f6f6f6] rounded px-3 py-3 focus:outline-none focus:ring focus:border-blue-400"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block mb-1 font-medium">
                                Write a Message *
                            </label>
                            <input
                                type="text"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Choose a subject"
                                className="w-full bg-[#f6f6f6] rounded px-3 py-3 focus:outline-none focus:ring focus:border-blue-400"
                                required
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-24 bg-blue-950 text-white py-3 rounded font-bold hover:bg-[#f6f6f6] hover:text-blue-950 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
