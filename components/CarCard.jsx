/* Imports */

import { MdPeopleOutline } from "react-icons/md";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { IoSpeedometerOutline, IoHardwareChipOutline } from "react-icons/io5";

/* Main Component */

const CarCard = ({ data }) => {
    return (
        <div className="w-[360px] border border-white  shadow-shadow-1 rounded-2xl p-3">
            <div className="w-full h-[225px] rounded-2xl">
                <img
                    src={data.image}
                    alt={data.model}
                    className="rounded-2xl"
                />
            </div>
            <div className="w-full mt-4">
                <div className="w-full flex justify-between items-center py-2">
                    <h4 className="capitalize font-semibold text-independence text-xl">
                        <span>{data.brand}</span> <span>{data.model}</span>
                    </h4>

                    <p className="py-1 px-3 border-2 border-dashed border-carolina-blue rounded-xl font-semibold text-independence">
                        {data.year}
                    </p>
                </div>

                <div className="w-full grid grid-cols-2 gap-4 py-3">
                    <p>
                        <span className="text-carolina-blue text-2xl">
                            <MdPeopleOutline className="inline" />
                        </span>{" "}
                        <span>{data.seats}</span> People
                    </p>

                    <p>
                        <span className="text-carolina-blue text-2xl">
                            <HiOutlineLightningBolt className="inline" />
                        </span>{" "}
                        <span>{data.engine}</span>
                    </p>

                    <p>
                        <span className="text-carolina-blue text-2xl">
                            <IoSpeedometerOutline className="inline" />
                        </span>{" "}
                        <span>{data.consomation}km/1-liter</span>
                    </p>

                    <p>
                        <span className="text-carolina-blue text-2xl">
                            <IoHardwareChipOutline className="inline" />
                        </span>{" "}
                        <span>{data.gearbox}</span>
                    </p>
                </div>

                <div className="flex justify-between items-center py-2 border-t border-[hsla(0, 0%, 0%, 0.1)]">
                    <p className="text-independence text-sm">
                        <span className="text-xl font-medium">
                            ${data.rate}
                        </span>
                        /month
                    </p>

                    <button className="bg-carolina-blue text-white rounded-2xl py-2 px-3 font-medium">
                        Rent now
                    </button>
                </div>
            </div>
        </div>
    );
};

/* Exports */

export default CarCard;
