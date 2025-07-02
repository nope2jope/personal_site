import React from "react";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import WorksSection from "./WorksSection";
import { writingData } from "../scripts/works-data";
import Modal from "./Modal.jsx"




const Works = () => {


    const [modalVis, setModalVis] = useState({});

    useEffect(() => {
        const initState = {};
        for (let i = 0; i < writingData.length; i++) {
            initState[writingData[i].modal] = false;
        }
        setModalVis(initState);
    }, [writingData]
    )

    function openModal(event) {
        if (event.target.id in modalVis) {
            setModalVis(prevValues => ({
                ...prevValues,
                [event.target.id]: !modalVis[event.target.id]
            }))
        }
    };

    function closeModal(event) {
        let eid = event.target.parentElement.parentElement.parentElement.id;
        if (eid in modalVis) {
            setModalVis(prevValues => ({
                ...prevValues,
                [eid]: !modalVis[eid]
            }))
        }
    }


    return <div>
        <NavBar />
        <div id="WORKS" className="container main-body">
            <div className="row">
                <div className="col-12 ease-in">
                    <h1 className=" ease-in">HOW VERY LIKE KING ARTHUR...</h1>
                </div>

                <div className="col-6 ease-in">
                    <div className="buttons ease-in">
                        <p>Here is a selection of my web development and other creative works.</p>
                        <p>Additional assets, fonts, and code are available on <a className="out-nav" href="https://github.com/nope2jope" target="_blank">my GitHub</a>.</p>
                    </div>
                </div>

                <div className="col-6 ease-in">
                    <WorksSection tag="development" />
                    <WorksSection onClick={openModal} tag="writing" />
                </div>

            </div>

            {writingData.map(item => <Modal key={`m${item.id}`} data={item} onClick={closeModal} isVisible={modalVis[item.modal]} />)}

        </div>

        <Footer />
    </div>
}

export default Works;