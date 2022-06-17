import React, { useContext } from "react";
import {useNavigate} from "react-router-dom";
import { ModelContext } from "./ModelContext";

import HeaderMain from "./HeaderMain";
import Footer from "./Footer";

import "./FiltroPage.css"
import infofake from "./infofake";
import logo from "./imgs/logo-mini.jpeg";

function FiltroPage() {
    const {context, setContext} = useContext(ModelContext);
    const directDetail = useNavigate(); 

    const handlerDetail = (id) => {
        setContext(id);
        directDetail("/detailpage");
    }

    return(
        <div className="container-filter">
            <HeaderMain/>
            
            <div className="container-inputs">
                <div className="input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping">Região de desenvolvimento</span>
                    <select className="form-select">
                        {
                            infofake.map((elt, idx) =>(
                                <option selected>{elt.regiao}</option>
                            ))
                        }
                    </select>
                </div>

                <div className="input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping">Municipio</span>
                    <select className="form-select">
                        {
                            infofake.map((elt, idx) =>(
                                <option selected>{elt.municipio}</option>
                            ))
                        }
                    </select>
                </div>

                <div className="input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping">Tipo</span>
                    <select className="form-select">
                        {
                            infofake.map((elt, idx) =>(
                                <option selected>{elt.tipo}</option>
                            ))
                        }
                    </select>
                </div>

                <div className="input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping">Descrição</span>
                    <input type="text" class="form-control" placeholder="Descrição" aria-label="Description" aria-describedby="addon-wrapping"></input>
                </div>

                <div className="input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping">Ingredientes</span>
                    <select className="form-select">
                        {
                            infofake.map((elt, idx) =>(
                                <option selected>{elt.ingrediente}</option>
                            ))
                        }
                    </select>
                </div>

                <div className="input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping">Marcas</span>
                    <select className="form-select">
                        {
                            infofake.map((elt, idx) =>(
                                <option selected>{elt.nomemarca}</option>
                            ))
                        }
                    </select>
                </div>

                <div className='container-button'>
                    <a className='btn btn-primary button-search' href='/filterpage'>Pesquisar</a>
                </div>
            </div>

            <div className="container-table">
                <h4>Listagem/Resultados</h4>
                <table class="table table-thead">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Marca</th>
                            <th scope="col">Produto</th>
                            <th scope="col">Municipio</th>
                            <th scope="col">Imagem</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            infofake.map((elt, idx) =>(
                                <tr onClick={()=>{handlerDetail(idx)}}>
                                    <th className="item-table item-table-id">{elt.id}</th>
                                    <td className="item-table item-table-marca">{elt.nomemarca}</td>
                                    <td className="item-table item-table-produto">{elt.nomeprod}</td>
                                    <td className="item-table item-table-municipio">{elt.municipio}</td>
                                    <td className="item-table item-table-image"><img src={logo} alt="Imagem"/></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <Footer/>
        </div>
    );
}

export default FiltroPage;
