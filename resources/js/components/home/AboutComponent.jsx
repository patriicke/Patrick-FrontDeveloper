import React from "react";
const AboutComponent = () => {
    return (
        <section
            className="h-[calc(100vh_-_5rem)] min-h-[calc(100vh_-_5rem)] w-full"
            id="about"
        >
            <div className="w-full h-full flex items-center  justify-center gap-10 z-20 flex-col bg-opacity-40">
                <div className="flex flex-col items-center w-full gap-8">
                    <h1 className="font-bold text-5xl w-[30%] text-center capitalize text-white">
                        {"Rockets from SPACEX".toUpperCase()}
                    </h1>
                    <p className="text-white text-xl max-w-2xl text-center">
                        The train rocketed through the tunnel. The spacecraft
                        rocketed into outer space. Her novel rocketed to the top
                        of the best-seller list. Their album rocketed up the
                        charts.
                    </p>
                    <button className="bg-redish text-white flex items-center justify-center gap-3 px-14 py-4 mt-7 rounded-md font-bold text-xl hover:bg-red-800 duration-300">
                        <span>Explore Now</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AboutComponent;
