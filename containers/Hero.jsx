/* Imports */

import { useState } from "react";

/* Main Component */

const Hero = () => {
    const [data, setData] = useState({
        type: "",
        budget: "",
        motorization: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <section className="relative h-[85vh] flex items-center px-4">
            <div className="w-full max-w-[540px] mx-auto md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1170px]">
                <div
                    id="hero-banner"
                    className="hidden absolute top-0 right-0 -z-10 w-5/12 h-full rounded-tl-3xl rounded-bl-3xl md:block xl:rounded-3xl xl:right-10 lg:w-6/12"
                ></div>
                <h2 className="max-w-[20ch] text-4xl text-cadet uppercase mb-2">
                    THE EASY WAY TO TAKEOVER A LEASE
                </h2>

                <p className="text-independence mb-8">
                    Live in New York, New Jerset and Connecticut!
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="w-full xl:max-w-[900px] flex flex-col justify-center items-center border border-white shadow-shadow-1 rounded-3xl bg-alice-blue-1 md:flex-row"
                >
                    <div className="w-full p-4 border-b border-[hsla(0, 0%, 0%, 0.08)] md:border-b-0 md:border-r">
                        <label
                            htmlFor="type"
                            className="block mb-2 text-manatee text-sm"
                        >
                            Type
                        </label>

                        <input
                            id="type"
                            name="type"
                            type="text"
                            placeholder="What type of car you want ?"
                            value={data.type}
                            onChange={handleChange}
                            className="w-full p-2 border-none bg-transparent outline-carolina-blue text-cadet placeholder:text-cadet"
                        />
                    </div>

                    <div className="w-full p-4 border-b border-[hsla(0, 0%, 0%, 0.08)] md:border-b-0 md:border-r">
                        <label
                            htmlFor="motorization"
                            className="block mb-2 text-manatee text-sm"
                        >
                            Motorization
                        </label>
                        <input
                            id="motorization"
                            name="motorization"
                            type="text"
                            placeholder="Tell us if you have a prefered motorization"
                            value={data.motorization}
                            onChange={handleChange}
                            className="w-full p-2 border-none bg-transparent outline-carolina-blue text-cadet placeholder:text-cadet"
                        />
                    </div>

                    <div className="w-full p-4">
                        <label
                            htmlFor="budget"
                            className="block mb-2 text-manatee text-sm"
                        >
                            Budget
                        </label>
                        <input
                            id="budget"
                            name="budget"
                            type="number"
                            placeholder="Add your budget"
                            value={data.budget}
                            onChange={handleChange}
                            className="w-full p-2 border-none bg-transparent outline-carolina-blue text-cadet placeholder:text-cadet"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-carolina-blue w-11/12 flex justify-center items-center py-3 my-4 text-white uppercase rounded-xl md:mx-4"
                    >
                        Search
                    </button>
                </form>
            </div>
        </section>
    );
};

/* Export */

export default Hero;
