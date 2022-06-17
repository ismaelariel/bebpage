import React, { useContext } from "react";
import { ModelContext } from "./ModelContext";
import {Link} from "react-router-dom";

import HeaderNav from "./HeaderNav";
import Footer from "./Footer";

import "./SlideDetail.css";
import infofake from "./infofake";

function SlideDetail() {
    const {context, setContext} = useContext(ModelContext);

    return(
        <div className="container-slide-preview">
            <HeaderNav/>
            <div className="container">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div class="card col-md-8">
                        <img src={infofake[context].img} className="card-img-top img-preview-custom" alt="Image"/>
                        <div class="card-body">
                            <h5 class="card-title">{infofake[context].nomemarca}</h5>
                            <p class="card-text">{infofake[context].descbreve}</p>
                            <p class="card-text"><small class="text-muted">{infofake[context].desclong}</small></p>
                        </div>
                        <Link className="btn btn-primary btn-retun-slide" to="/">Retornar</Link>
                        <Link className="btn btn-primary btn-retun-slide" to="/">Ver Produtos</Link>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default SlideDetail;