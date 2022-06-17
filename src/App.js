import React, {Suspense, useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./Home";
import SlideDetail from "./SlideDetail";
import Login from './Login';
import FiltroPage from "./FiltroPage";
import DetailPage from "./DetailPage";
import {ModelContext} from "./ModelContext";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    const [context, setContext] = useState(null);

    return(
        <div className="container-app">
            <ModelContext.Provider value={{context, setContext}}>
                <Suspense fallback={<div>Loading page...</div>}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/slideDetail" element={<SlideDetail/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/filterpage" element={<FiltroPage/>}/>
                            <Route path="/detailpage" element={<DetailPage/>}/>
                        </Routes>
                    </BrowserRouter>
                </Suspense>
            </ModelContext.Provider>
        </div>
    );
}

export default App;
