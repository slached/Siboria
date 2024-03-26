import React from 'react';
import MyDropdown from "./Dropdowns/MyDropdown";

export default function Second(props) {
    return (
        <div className={"flex justify-center"}>
            <div
                className={"flex gap-x-[40px] justify-between p-[28px] h-[120px] mt-[84px] bg-white rounded-[10px] min-w-[1200px]"}>
                <div className={"flex flex-col"}>
                    <p className={"mb-[20px] text-[16px] font-bold"}>Location</p>
                    <MyDropdown index={0} type={"Norway"}/>
                </div>
                <div className={"flex flex-col"}>
                    <p className={"mb-[20px] text-[16px] font-bold"}>Religion</p>
                    <MyDropdown index={1} type={"Asatro"}/>
                </div>
                <div className={"flex flex-col"}>
                    <p className={"mb-[20px] text-[16px] font-bold"}>Year</p>
                    <MyDropdown index={1} type={"793 AD"}/>
                </div>
                <div className={"flex flex-col"}>
                    <p className={"mb-[20px] text-[16px] font-bold"}>Type</p>
                    <MyDropdown index={1} type={"Weapons"}/>
                </div>
                <button
                    className={"flex gap-x-[10px] rounded-[10px] items-center bg-button-dark-blue text-white py-[18px] px-[30px] font-medium"}>
                    <img src={require('../static/images/search-normal.png')} alt={"search-img"}/>
                    <p className={"text-[16px]"}>Search</p>
                </button>
            </div>
        </div>
    );
}
