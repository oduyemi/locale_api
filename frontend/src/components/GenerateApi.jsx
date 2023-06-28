import Button from "./elements/Button"



export const GenerateApi = () => {
    return(
        <div className="general mt-14 flex items-center justify-between shadow-2xl mx-auto">
            <div className="generalChild">
                <h3 className="text-center text-3xl font-semibold">Get All Regions</h3>
                <p className="text-center">Retrieve all regions in Nigeria</p>
                <div className="text-center">
                {/* fetch from db and display in element via id */}
                    <p id="region"></p> 
                    <Button>View API</Button>
                </div>
            </div>

            <div className="generalChild states">
                <h3 className="text-center text-3xl font-semibold">Get All States</h3>
                <p className="my-3">Retrieve all states in Nigeria</p>
                <div className="text-center">
                    {/* fetch from db and display in element via id */}
                    <p id="states"></p>
                    <Button className="mr-10">View API</Button>
                </div>
            </div>

            <div className="generalChild">
                <h3 className="text-center text-3xl font-semibold">Get All LGAs</h3>
                <p className="my-3">Retrieve all local government areas (LGAs) in Nigeria</p>
                <div className="text-center">
                    {/* fetch from db and display in element via id */}
                    <p id="lgas"></p>
                    <Button>View API</Button>
                </div>
            </div>
        </div>
    )
}