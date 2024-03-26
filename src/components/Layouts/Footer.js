import React from 'react';
import Header from "./Header";

export default function Footer(props) {
    return (
        <footer className={"flex flex-col ml-[74px] mr-[100px]"}>
            <div className={"flex justify-center "}>
                <div
                    className={"flex grow justify-between text-color-inactive text-[14px] font[600] min-w-[800px] max-w-[1300px] mb-[40px]"}>
                    <div className={"flex flex-col gap-y-[10px]"}>
                        <h1 className={"text-black font-bold text-[18px] mb-[10px]"}>Resources</h1>
                        <p className={"cursor-pointer"}>Download</p>
                        <p className={"cursor-pointer"}>Help Center</p>
                        <p className={"cursor-pointer"}>Guide Book</p>
                        <p className={"cursor-pointer"}>App Directory</p>
                    </div>
                    <div className={"flex flex-col gap-y-[10px]"}>
                        <h1 className={"text-black font-bold text-[18px] mb-[10px]"}>Seboria</h1>
                        <p className={"cursor-pointer"}>Why Seboria</p>
                        <p className={"cursor-pointer"}>Our Collection Process</p>
                        <p className={"cursor-pointer"}>Customer Stories</p>
                        <p className={"cursor-pointer"}>Instagram Post</p>
                    </div>
                    <div className={"flex flex-col gap-y-[10px]"}>
                        <h1 className={"text-black font-bold text-[18px] mb-[10px]"}>Company</h1>
                        <p className={"cursor-pointer"}>Antiques</p>
                        <p className={"cursor-pointer"}>About Seboria</p>
                        <p className={"cursor-pointer"}>Success</p>
                        <p className={"cursor-pointer"}>Information</p>
                    </div>
                    <div className={"flex flex-col gap-y-[20px]"}>
                        <h1 className={"text-black font-bold text-[18px]"}>Get in Touch</h1>
                        <p className={"max-w-[277px] leading-[30px] text-[16px] font-[600] mb-[3px]"}>Feel free to get
                            in
                            touch with
                            us via email</p>
                        <p className={"font-bold text-[18px] text-[#00B2FF] cursor-pointer"}>shakir@gmail.com</p>
                    </div>
                </div>
            </div>

            <hr className={"p-0 m-0 border-0 bg-[#F3F3F3] h-[0.5px] min-w-[800px]"}/>

            <div className={"my-[47px]"}><Header location={"footer"}/></div>

        </footer>
    );
}

