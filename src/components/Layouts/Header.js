import React, {useState} from 'react';

export default function Header(props) {
    const [selectedOrNot, setSelectedOrNot] = useState([true, false, false, false, false])

    return (
        <div className={"flex justify-center"}>
            <header
                className={`flex grow justify-between items-center max-w-[1300px]`}>

                <img className={"hover:cursor-pointer min-w-[107px] min-h-[26px]"} alt={"logo"}
                     src={require('../../static/images/siboria logo.png')}></img>

                <nav className={"flex gap-x-4 justify-center"}>
                    <div>
                        {selectedOrNot[0] ? <p className={"hover:cursor-pointer"} onClick={() => {
                            setSelectedOrNot([true, false, false, false, false])
                        }}>Home</p> : <p className={"hover:cursor-pointer text-color-inactive"} onClick={() => {
                            setSelectedOrNot([true, false, false, false, false])
                        }}>Home</p>}

                        {selectedOrNot[0] &&
                            <hr className={"border-0 p-0 m-0 bg-orange-one h-0.5 w-4 rounded-sm"}/>}
                    </div>

                    <div>
                        {selectedOrNot[1] ? <p className={"hover:cursor-pointer shadow-2xl"} onClick={() => {
                                setSelectedOrNot([false, true, false, false, false])
                            }}>Collections</p> :
                            <p className={"hover:cursor-pointer shadow-2xl text-color-inactive"} onClick={() => {
                                setSelectedOrNot([false, true, false, false, false])
                            }}>Collections</p>}

                        {selectedOrNot[1] &&
                            <hr className={"border-0 p-0 m-0 bg-orange-one h-0.5 w-4 rounded-sm"}/>}
                    </div>

                    <div>
                        {selectedOrNot[2] ? <p className={"hover:cursor-pointer"} onClick={() => {
                                setSelectedOrNot([false, false, true, false, false])
                            }}>How We Collect</p> :
                            <p className={"hover:cursor-pointer text-color-inactive"} onClick={() => {
                                setSelectedOrNot([false, false, true, false, false])
                            }}>How We Collect</p>}

                        {selectedOrNot[2] &&
                            <hr className={"border-0 p-0 m-0 bg-orange-one h-0.5 w-4 rounded-sm"}/>}
                    </div>

                    <div>
                        {selectedOrNot[3] ? <p className={"hover:cursor-pointer"} onClick={() => {
                                setSelectedOrNot([false, false, false, true, false])
                            }}>Sell An Antique</p> :
                            <p className={"hover:cursor-pointer text-color-inactive"} onClick={() => {
                                setSelectedOrNot([false, false, false, true, false])
                            }}>Sell An Antique</p>}
                        {selectedOrNot[3] &&
                            <hr className={"border-0 p-0 m-0 bg-orange-one h-0.5 w-4 rounded-sm"}/>}
                    </div>

                    <div>
                        {selectedOrNot[4] ? <p className={"hover:cursor-pointer"} onClick={() => {
                            setSelectedOrNot([false, false, false, false, true])
                        }}>Blog</p> : <p className={"hover:cursor-pointer text-color-inactive"} onClick={() => {
                            setSelectedOrNot([false, false, false, false, true])
                        }}>Blog</p>}

                        {selectedOrNot[4] &&
                            <hr className={"border-0 p-0 m-0 bg-orange-one h-0.5 w-4 rounded-sm"}/>}
                    </div>
                </nav>

                {props.location === "header" ? <div className={"flex"}>
                    <button className={"rounded-lg bg-orange-one text-white py-5 px-7 font-medium"}>Our
                        Collections
                    </button>
                </div> : <img alt={"social"} src={require('../../static/images/social.png')}/>}
            </header>
        </div>

    );
}
