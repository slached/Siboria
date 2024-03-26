import React from 'react';

export default function Feedback(props) {
    return (
        <div className={"flex justify-center mt-[135px] mb-[158px]"}>
            <div className={"flex gap-x-[97px]"}>
                <img className={"w-[372px] h-[449px]"} src={require('../static/images/angel-sculp.png')} alt={"sculpt"}/>
                <div className={"flex flex-col"}>
                    <h1 className={"text-[46px] font-[600] mb-[20px]"}>Buyer’s Feedback</h1>
                    <p className={"text-color-inactive leading-[33px] max-w-[488px] text-[18px] font[600] mb-[40px]"}>Whoe front da of piate heard ah ought. His defective
                        nor convinced residense won. Conenction has put
                        impossible own apartments boisterous.</p>
                    <img alt={"feedback"} className={"w-[187px] h-[64px]"} src={require('../static/images/feedback.png')}/>
                </div>
            </div>
        </div>
    );
}

