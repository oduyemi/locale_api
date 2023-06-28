import React from "react";
import "animate.css";
import Button from "./elements/Button";
import { Link } from "react-router-dom";
import "animate.css"


export const HomePage = () => {
    return(
        <>
            <div className="mx-auto my-auto">
                <h1 className="text-5xl text-center font-light mt-14">Best <span><h1 className="animate__animated animate__flash animated__delay__2 text-yel inline">API Service</h1></span> in Town</h1>
                <p className="mx-auto text-xl font-light text-center mt-8 w-1/2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                </p>
                <div className="mx-auto text-center">
                    <Link to="/login" className="text-xl"><Button>Get Started</Button></Link>
                </div>
            </div>
            
        </>
    )
    }