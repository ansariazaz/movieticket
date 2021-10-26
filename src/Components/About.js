import React from "react";
import { Link } from "react-router-dom"

const About = () => {
    return (
        <div className="container6">
            <h1>About Our services</h1>
            <p>
                Professional services and consultancy for the cinema exhibition and
                theatrical distribution companies. The company is successor of Film
                Service Ltd, established in 2000. After it was dully reorganized in 2011
                now it operates on the European market with the present legal entity
                CINEMA SERVICES.
            </p>
            <p>
                The company’s team is capable to provide design, supply, installation
                and maintenance of all cinema equipment. We may also offer consultancy
                services for cinema projects and theatrical distribution.
            </p>
            <div className="company">
                <h2>website:</h2>
                <p><Link className="btn">click here</Link></p>
                <h3>Industry:</h3>
                <p>Entertainment</p>
                <h3>Company size:</h3>
                <p>2-10 employees</p>
                <h3>Headquater:</h3>
                <p>New delhi,India</p>
                <h3>Founded:</h3>
                <p>2002</p>
            </div>
        </div>
    );
};

export default About;
