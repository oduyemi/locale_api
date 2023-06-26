import React from "react";
import "animate.css";
import Button from "./elements/Button";



export const Banner = () => {
    return(
        <>
            <div className="banner w-full px-7 relative">
                <div className="banner-content w-full md-1/3 mx-auto">
                <h1 className="pl-4 mt-0 pl-10 ml-10 font-light text-4xl">Dashboard</h1>
                    <div className="bannerparent mt-5 w-1/2">
                        <h1 className="text-4xl mt-5 text-center font-light mx-10 animate__animated animate__fadeIn animated__delay__4">API Key</h1>
                        <div className="bannerBox my-3 text-center mx-auto">
                            <p id="apiKey" className="text-center"></p>
                        </div>
                        
                        <div className="mb-3 text-center">
                            <Button>Generate API Key</Button>   
                        </div>  

                    </div>
                    <div className="text-center mt-1">
                            <form id="searchQuery" className="searchQuery">
                                <label htmlFor="searchQuery" className="me-4 text-xl">Search Query</label>
                                <input type="searchQuery" id="searchQuery" className="me-4" required value="" placeholder="&emsp; Your Query Here"/>
                                <Button>Search</Button>
                            </form>
                    </div>

                    <div className="general mt-5 flex items-center justify-center shadow-lg">
                        <div className="generalChild mx-auto">
                            <h3 className="text-center text-3xl font-semibold">Get All Regions</h3>
                            <p className="text-center">Retrieve all regions in Nigeria</p>
                            <div className="text-center">
                            {/* fetch from db and display in element via id */}
                                <p id="region"></p> 
                                <Button>View API</Button>
                            </div>
                        </div>

                        <div className="generalChild">
                            <h3 className="text-center text-3xl font-semibold">Get All States</h3>
                            <p className="text-center">Retrieve all states in Nigeria</p>
                            <div className="text-center">
                                {/* fetch from db and display in element via id */}
                                <p id="states"></p>
                                <Button>View API</Button>
                            </div>
                        </div>

                        <div className="generalChild">
                            <h3 className="text-center text-3xl font-semibold">Get All LGAs</h3>
                            <p className="text-center">Retrieve all local government areas (LGAs) in Nigeria</p>
                            <div className="text-center">
                                {/* fetch from db and display in element via id */}
                                <p id="lgas"></p>
                                <Button>View API</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    </>
    )
}