import React from "react";



export const AboutPage = () => {
    return(
        <div>
            <div className="p-14 grid grid-cols-2 mt-0">
                <div className="mt-0 ms-14">
                    <h2 className="text-2xl font-medium" id="about">About <span><h2 className="text-yel inline">Locale API</h2></span></h2>
                    <p className="text-lg font-light mt-3">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div className="abtImg flex items-center justify-center">
                    <img src={require("../assets/images/about.jpg")} alt="about" className="w-[300px] h-[240px] object-cover mr-6" />
                </div>
            </div>

        </div>
    )
}