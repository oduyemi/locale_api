import React from "react";



export const How = () => {
    return(
        <div>
            <div className="p-10 grid grid-cols-2 how">
                <div className="mt-0 ms-5">
                    <h2 className="text-2xl font-medium" id="how">Wondering What to Make of This App? <span><h2 className="text-yel inline">Here You Go!</h2></span></h2>
                    <p className="text-lg mt-3 font-light">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
                <div className="flex items-center justify-center howImg">
                    <img src={require("../assets/images/how.jpg")} alt="how" className="w-[400px] h-[300px] object-cover" />
                </div>
            </div>

        </div>
    )
}