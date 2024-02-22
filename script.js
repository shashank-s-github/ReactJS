import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "btn" }, "Clickme from createReact");

// console.log(heading)

// const jsxHeading = <h1 id="heading">Clickme from JSX</h1>

// console.log(jsxHeading)

// const root = ReactDOM.createRoot(document.getElementById("root"));
// const root2 = ReactDOM.createRoot(document.getElementById("root-2"));

// root.render(heading)
// root2.render(jsxHeading)


const YourName = () => {
    return (
        <div id='heirarchy'>
            <h1 className="first">Shashank</h1>
            <h1 className="last">Sharma</h1>
        </div>
    )
}

const YourName2 = () => {
    return (
        <div id='heirarchy'>
           <YourName />
            <h1 className="first">Shashank</h1>
            <h1 className="last">Sharma</h1>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<YourName2 />);