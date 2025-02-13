import React from "react";
//Importing components
import NavBar from "./navBar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

const Home = () => {
    return (
        <>
            <NavBar />
            <div className="container-fluid">
                <Jumbotron
                    title="A Warm Welcome!"
                    description="Lorem ipsum dolor sit amet consectetur adipiscing elit tortor pulvinar vestibulum, dictum magnis tristique erat et malesuada nec platea dis tincidunt, condimentum varius fames urna phasellus ac hendrerit euismod fringilla."
                    buttonLabel="Call to action!"
                />
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center">
                        <Card 
                            title="Card Title 1"
                            description="This is a description for card 1."
                            buttonLabel="Find Out More!"
                        />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center">
                        <Card 
                            title="Card Title 2"
                            description="This is a description for card 2."
                            buttonLabel="Find Out More!"
                        />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center">
                        <Card 
                            title="Card Title 3"
                            description="This is a description for card 3."
                            buttonLabel="Find Out More!"
                        />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center">
                        <Card 
                            title="Card Title 4"
                            description="This is a description for card 4."
                            buttonLabel="Find Out More!"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;