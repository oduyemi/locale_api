import "animate.css";
import { Link } from "react-router-dom";
import Button from "./elements/Button";



export const ApiPage = () => {
    return(
        <>
            <div className="banner w-full px-7 relative">
                <div className="banner-content w-full md-1/3 mx-auto">
                    <h1 className="pl-4 mt-0 pl-10 ml-10 font-light text-4xl">Dashboard</h1>
                        <div className="bannerparent mt-5 w-1/2 shadow-2xl">
                            <h1 className="text-4xl mt-8 mb-5 text-center font-light mx-10 animate__animated animate__fadeIn animated__delay__2">API Key</h1>
                            <div className="bannerBox my-3 text-center mx-auto">
                                <p id="apiKey" className="text-center"></p>
                            </div>
                            
                            <div className="mb-3 text-center">
                                <Button>Generate API Key</Button>   
                            </div>

                            <div className="apiGen mt-8">
                                <small>Click <Link to="/generate-api" className="font-semibold text-yel">here</Link> to generate API</small>
                            </div>

                        </div>
                        <div className="text-center mt-1">
                                <form id="searchQuery" className="searchQuery">
                                    <label htmlFor="searchQuery" className="me-4 text-xl">Search Query</label>
                                    <input type="searchQuery" id="searchQuery" className="me-4" required value="" placeholder="&emsp; Your Query Here"/>
                                    <Button>Search</Button>
                                </form>
                        </div>

                   
                </div>
            </div>
        
    </>
    )
}