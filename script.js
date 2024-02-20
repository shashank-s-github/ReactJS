let adding = 
React.createElement("h1",
{id:"grandfather"}, "Dadaji",

React.createElement("p", 
{id:'father'}, "papaji",

React.createElement("p",
{id:'betaji'}, "beta"))
);

let adder = ReactDOM.createRoot(document.getElementById("family"));

adder.render(adding);