import React from 'react';
import './styles/style.css'

//layouts
import Header from "./components/Layouts/Header";
import Main from "./components/Layouts/Main";
import Footer from "./components/Layouts/Footer";

export default function App(props) {
    return (
        <div>
            <div className={"mt-[24px] ml-[74px] mr-[92px]"}><Header location={"header"}/></div>
            <Main/>
            <Footer/>
        </div>);
}
