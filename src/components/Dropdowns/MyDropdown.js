import {useState} from "react";

export default function MyDropdown(prop) {
    const [isActive, setIsActive] = useState([false, false, false, false])
    const activateDropdown = () => {
        let tempArr = isActive.map((value, index) => index === prop.index && !value)
        setIsActive(tempArr)
    }
    return (<div>
        <div className={"flex hover:cursor-pointer w-[185px]"} onClick={activateDropdown}>
            <p className={"mr-[55px] text-color-inactive"}>{prop.type}</p>
            <img className={"w-[12px] h-[12px]"} src={require('../../static/images/arrow-down.png')}
                 alt={"arrow-down"}/>
        </div>

        {isActive[prop.index] &&
            <div
                className={"flex flex-col relative pl-[25px] pt-[13px] text-color-inactive pb-[11px] gap-y-[20px] bg-white rounded-[17px] right-[15px] top-[9px] dropdown"}>
                <p>Ülke 3</p>
                <p>Ülke 2</p>
                <p className={"mb-2"}>Ülke 1</p>
            </div>}

    </div>)
}