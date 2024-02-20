//creating parent//
const parent = React.createElement("div", { id: "parent" }, [

    //creating child 1//
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "I am an h1 tag"),
        React.createElement("h2", {}, "I am an h2 tag"),
    ]),
    //creating child 2//
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "I am an h1 tag again"),
        React.createElement("h2", {}, "I am an h2 tag again"),
    ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);