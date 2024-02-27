import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div id="nav">

            <div id='logo'>
                <img className="logo-img" src="https://themeforest.img.customer.envatousercontent.com/files/298661744/02_location.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=e1cde9547670720ae689a7c12db57252"></img>
            </div>

            <div id='links'>
                <a href="#">Home</a>
                <a href="#">Cart</a>
                <a href="#">Contact Us</a>
                <a href="#">About Us</a>
            </div>

        </div>
    )
};

const Rescards = () => {
    return (
        <div id='outer'>
            <div>
                <img className='outer-img' src="https://b.zmtcdn.com/data/pictures/chains/0/18690770/0fada51155b5fff789bf182ea730a0d0_featured_v2.jpg?output-format=webp" />
            </div>
            <div className='info' >
                <h1>Better In Bhilai (BIB's)</h1>
                <h4>Biryani, North-Indian</h4>
                <h4>29 minutes</h4>
                <h4>4.8 Star</h4>
            </div>
        </div>
    )
};
const Rescontainer = () => {
    return (
        <div id='res-grids'>
            <Rescards />
            <Rescards />
            <Rescards />
            <Rescards />
            <Rescards />
            <Rescards />
        </div>
    )
}
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