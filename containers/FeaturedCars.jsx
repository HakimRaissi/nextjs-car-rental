/* Imports */

import Link from "next/link";

import { MdArrowForward } from "react-icons/md";

import { CarCard } from "../components";

/* Dummy Data */

const cars = [
    {
        id: "1",
        brand: "toyota",
        model: "RAV 4",
        year: "2021",
        seats: 4,
        engine: "Hybrid",
        gearbox: "automatic",
        consomation: 6.1,
        rate: 440,
        image: "/images/cars/car-1.jpg",
    },

    {
        id: "2",
        brand: "BMW",
        model: "3 Series",
        year: "2019",
        seats: 4,
        engine: "Gasoline",
        gearbox: "automatic",
        consomation: 8.2,
        rate: 350,
        image: "/images/cars/car-2.jpg",
    },

    {
        id: "3",
        brand: "Volkswagen",
        model: "T-Cross",
        year: "2020",
        seats: 4,
        engine: "Gasoline",
        gearbox: "automatic",
        consomation: 5.3,
        rate: 400,
        image: "/images/cars/car-3.jpg",
    },

    {
        id: "4",
        brand: "cadillac",
        model: "Escalade",
        year: "2020",
        seats: 4,
        engine: "Gasoline",
        gearbox: "automatic",
        consomation: 7.1,
        rate: 620,
        image: "/images/cars/car-4.jpg",
    },

    {
        id: "5",
        brand: "BMW",
        model: "M4",
        year: "2021",
        seats: 4,
        engine: "Gasoline",
        gearbox: "automatic",
        consomation: 7.6,
        rate: 530,
        image: "/images/cars/car-5.jpg",
    },

    {
        id: "6",
        brand: "BMW",
        model: "4 Series",
        year: "2019",
        seats: 4,
        engine: "Gasoline",
        gearbox: "automatic",
        consomation: 7.2,
        rate: 490,
        image: "/images/cars/car-6.jpg",
    },
];

/* Main Component */

const FeaturedCars = () => {
    return (
        <div className="pt-12 px-8">
            <div className="flex justify-between items-center py-2">
                <h3 className="text-cadet text-3xl">Featured Cars</h3>

                <Link href="/">
                    <a className="text-independence text-sm duration-300 hover:text-sapphire-blue">
                        View more <MdArrowForward className="inline" />
                    </a>
                </Link>
            </div>

            <div className="py-4 flex flex-wrap justify-center items-center gap-10">
                {cars.map((car) => {
                    return <CarCard key={car.id} data={car} />;
                })}
            </div>
        </div>
    );
};

/* Exports */

export default FeaturedCars;
