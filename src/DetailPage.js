import React, { useContext } from "react";
import { ModelContext } from "./ModelContext";
import {Link} from "react-router-dom";

import HeaderMain from "./HeaderMain";
import Footer from "./Footer";

import "./DetailPage.css";
import infofake from "./infofake";

function DetailPage() {
    const {context, setContext} = useContext(ModelContext);

    return(
        <div className="container-detail">
            <HeaderMain/>
            <div className="container">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">{infofake[context].nomeprod}</h5>
                                <p class="card-text">{infofake[context].detailprod}</p>
                                <p class="card-text">{infofake[context].descbreve}</p>
                                <p class="card-text">{infofake[context].desclong}</p>
                                <Link className="btn btn-primary btn-detail-page" to="/">Início</Link>
                                <Link className="btn btn-primary btn-detail-page" to="/filterpage">Retornar</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <img src={infofake[context].img} className="image-fluid img-detail-page" alt="Image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default DetailPage;