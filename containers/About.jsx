/* Imports */

import {
    MdPersonAddAlt,
    MdPersonOutline,
    MdCreditCard,
    MdOutlineDirectionsCarFilled,
} from "react-icons/md";

/* Main Component */

const About = () => {
    return (
        <div className="pt-12 px-8">
            <div>
                <h3 className="text-cadet text-3xl">
                    Get started with 4 simple steps
                </h3>
            </div>

            <div className="grid grid-cols-custom-1 gap-10 justify-center my-12">
                <div className="bg-white border border-white rounded-2xl p-4">
                    <div className="bg-mimi-pink w-fit p-2 rounded-2xl">
                        <MdPersonAddAlt className="text-4xl text-cerise-pink" />
                    </div>

                    <h5 className="text-cadet my-4">Create a profile</h5>

                    <p className="text-independence">
                        If you are going to use a passage of Lorem Ipsum, you
                        need to be sure.
                    </p>
                </div>

                <div className="bg-white border border-white rounded-2xl p-4">
                    <div className="bg-columbia-blue w-fit p-2 rounded-2xl">
                        <MdOutlineDirectionsCarFilled className="text-carolina-blue text-4xl" />
                    </div>

                    <h5 className="text-cadet my-4">
                        Tell us what car you want
                    </h5>

                    <p className="text-independence">
                        Various versions have evolved over the years, sometimes
                        by accident, sometimes on purpose
                    </p>
                </div>

                <div className="bg-white border border-white rounded-2xl p-4">
                    <div className="bg-honey-dew w-fit p-2 rounded-2xl">
                        <MdPersonOutline className="text-sea-green text-4xl" />
                    </div>

                    <h5 className="text-cadet my-4">Match with seller</h5>

                    <p className="text-independence">
                        It to make a type specimen book. It has survived not
                        only five centuries, but also the leap into electronic
                    </p>
                </div>

                <div className="bg-white border border-white rounded-2xl p-4">
                    <div className="bg-purple w-fit p-2 rounded-2xl">
                        <MdCreditCard className="text-slate-blue text-4xl" />
                    </div>

                    <h5 className="text-cadet my-4">Make a deal</h5>

                    <p className="text-independence">
                        There are many variations of passages of Lorem
                        available, but the majority have suffered alteration
                    </p>
                </div>
            </div>
        </div>
    );
};

/* Exports */

export default About;
