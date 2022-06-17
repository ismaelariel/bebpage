import React, { useContext } from "react";
import {useNavigate} from "react-router-dom";
import { ModelContext } from "./ModelContext";

import HeaderNav from "./HeaderNav";
import Footer from "./Footer";

import "./Home.css";
import infofake from "./infofake";

import { Slide } from 'react-slideshow-image';
import "react-slideshow-image/dist/styles.css";

function Home() {
    const {context, setContext} = useContext(ModelContext);
    const directDetail = useNavigate(); 

    const previewSlide = (id) => {
        setContext(id);
        directDetail("/slideDetail");
    }

    return(
        <div className="container-home">
            <HeaderNav/>
            <div className="container">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <Slide>
                        {
                            infofake.map((elt, idx)=> (
                                <div className="container-slide" key={idx}>
                                    <div className="img-fluid" onClick={()=>{previewSlide(idx)}} style={{'backgroundImage': `url(${elt.img})`,
                                    "width": "100%", "height": "50vh", "backgroundRepeat": "no-repeat", "backgroundPosition": "center",
                                    "backgroundSize": "cover"}}>
                                    </div>
                                </div>
                            ))
                        }
                        </Slide>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;