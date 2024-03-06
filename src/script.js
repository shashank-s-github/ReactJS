import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Rescontainer from "./components/Rescontainer"


//Creating components using Reactjs//


//STEP-1 :- Get the api data of restaurants about name, cuisines, avgrating and many more... from swiggy and stored in in a const 


//STEP-2 :- Created props and passed the resData property and accessed the needed values accordingly.


//STEP-3 :- passed the const data in a js property called "resData" for rendering in cards and get the values from index values or use Map().


const Mainapp = () => {
    return (
        <div>
            <Header />
            <Rescontainer />
        </div>
    )
}

const app = ReactDOM.createRoot(document.getElementById('root'));

app.render(<Mainapp />);