import React from 'react';

export default function Newsletter(props) {
    return (
        <div className={"flex justify-center mb-[123px] min-w-[800px]"}>
            <div
                className={"flex pl-[70px] pt-[75px] bg-[#132742] rounded-[30px] text-white w-[1200px] h-[400px] justify-between"}>
                <div className={"flex flex-col"}>
                    <h1 className={"text-[39px] font-bold mb-[14px]"}>Subscribe our newsletter</h1>
                    <p className={"mb-[60px] leading-[29px] text-[16px] max-w-[420px] font-[500]"}>Recieve latest news,
                        update, and many other things
                        every week.</p>
                    <div className={"flex bg-white rounded-[10px] items-center mb-[75px]"}>
                        <input className={"grow outline-0 text-black pt-[22px] pb-[19px] rounded-[10px] pl-[32px]"}
                               placeholder={"Enter your email adress"} type={"text"}/>
                        <button
                            className={"bg-orange-one rounded-[8px] h-[50px] w-[50px] mt-[10px] mb-[10px] mr-[10px] flex justify-center items-center b-shadow"}>
                            <img alt={"send"} src={require('../static/images/send-2.png')}/></button>
                    </div>
                </div>
                <img className={"w-[207px] h-[578px] mr-[114px]  relative bottom-[290px]"} alt={"gramophone"}
                     src={require('../static/images/gramophone.png')}/>
            </div>
        </div>
    );
}

