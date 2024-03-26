import React, {useState} from 'react';

import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/css'

export default function TopCategories(props) {
    const [swiper, setSwiper] = useState(null)

    return (
        <div className={"flex justify-center"}>
            <div className={"flex flex-col mt-[92px]"}>
                <div className={"flex justify-between mb-[15px]"}>
                    <h1 className={"text-[54px] font-bold "}>Top Categories</h1>
                    <div className={"flex"}>
                        <svg onClick={()=> swiper.slidePrev()} width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_206_163)">
                                <circle cx="29" cy="29" r="25" fill="white"/>
                            </g>
                            <path d="M27.38 33.0467L23.3333 29L27.38 24.9534" stroke="black" stroke-width="1.5"
                                  stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M34.6667 29L23.4467 29" stroke="black" stroke-width="1.5" stroke-miterlimit="10"
                                  stroke-linecap="round" stroke-linejoin="round"/>
                            <defs>
                                <filter id="filter0_d_206_163" x="0" y="0" width="58" height="58"
                                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                   result="hardAlpha"/>
                                    <feOffset/>
                                    <feGaussianBlur stdDeviation="2"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix"
                                             result="effect1_dropShadow_206_163"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_206_163"
                                             result="shape"/>
                                </filter>
                            </defs>
                        </svg>
                        <svg onClick={()=> swiper.slideNext()} className={"relative top-[3px]"} width="68" height="68" viewBox="0 0 68 68" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_206_164)">
                                <g filter="url(#filter1_d_206_164)">
                                    <circle cx="34" cy="25" r="25" fill="#FF7B29"/>
                                </g>
                                <path d="M35.62 20.9533L39.6667 25L35.62 29.0466" stroke="white" stroke-width="1.5"
                                      stroke-miterlimit="10"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M28.3333 25H39.5533" stroke="white" stroke-width="1.5" stroke-miterlimit="10"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"/>
                            </g>
                            <defs>

                                <filter id="filter1_d_206_164" x="0" y="0" width="68" height="68"
                                        filterUnits="userSpaceOnUse"
                                        color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                   result="hardAlpha"/>
                                    <feMorphology radius="3" operator="erode" in="SourceAlpha"
                                                  result="effect1_dropShadow_206_164"/>
                                    <feOffset dy="9"/>
                                    <feGaussianBlur stdDeviation="6"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix"
                                                   values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.160784 0 0 0 0.35 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix"
                                             result="effect1_dropShadow_206_164"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_206_164"
                                             result="shape"/>
                                </filter>
                            </defs>
                        </svg>
                    </div>
                </div>

                <p className={"text-color-inactive text-[16px] mb-[20px]"}>Party we years to order allow asked of. We so
                    opiniıo
                    firends me message as delight. </p>
                <Swiper className={"max-w-[1200px]"}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        onSwiper={(swiper) => setSwiper(swiper)}>
                    {props.items.map(item => {
                        return (<SwiperSlide>
                            <div className={"flex gap-x-[30px]"}>
                                <div className={"flex flex-col justify-between"}>
                                    <div
                                        className={"gradient rounded-[20px] pl-[14px] pb-[20px] flex min-w-[278px] justify-between"}>
                                        <div className={"flex flex-col justify-between"}>
                                            <div
                                                className={"my-[15px] px-[10px] py-[3px] bg-white rounded-[44px] drop-shadow-lg max-w-[46px]"}>
                                                <p className={"text-[16px] font-[700] text-orange-one text-center"}>{item.sellAmount1}</p>
                                            </div>
                                            <div className={"flex flex-col gap-y-[5px] text-white"}>
                                                <h2 className={"text-[18px] font-[700]"}>{item.type1}</h2>
                                                <p className={"text-[12px] font-[600] text-[#D6D6D6]"}>{item.place1}</p>
                                            </div>
                                        </div>
                                        <img className={"w-[144px] h-[184px] mr-[13px] opacity-70"} alt={"skull"}
                                             src={item.imgSrc1}/>
                                    </div>

                                    <div
                                        className={"gradient rounded-[20px] pl-[14px] pb-[20px] flex min-w-[278px] justify-between"}>
                                        <div className={"flex flex-col justify-between"}>
                                            <div
                                                className={"my-[15px] px-[10px] py-[3px] bg-white rounded-[44px] drop-shadow-lg max-w-[46px]"}>
                                                <p className={"text-[16px] font-[700] text-orange-one text-center"}>{item.sellAmount2}</p>
                                            </div>
                                            <div className={"flex flex-col gap-y-[5px] text-white"}>
                                                <h2 className={"text-[18px] font-[700]"}>{item.type2}</h2>
                                                <p className={"text-[12px] font-[600] text-[#D6D6D6]"}>{item.place2}</p>
                                            </div>
                                        </div>
                                        <img className={"w-[144px] h-[184px] mr-[13px] opacity-70"} alt={"skull"}
                                             src={item.imgSrc2}/>
                                    </div>
                                </div>

                                <div
                                    className={"gradient rounded-[20px] pl-[14px] pb-[20px] flex min-w-[380px] justify-between"}>
                                    <div className={"flex flex-col justify-between"}>
                                        <div
                                            className={"my-[15px] px-[10px] py-[3px] bg-white rounded-[44px] drop-shadow-lg max-w-[46px]"}>
                                            <p className={"text-[16px] font-[700] text-orange-one text-center"}>{item.sellAmount3}</p>
                                        </div>
                                        <div className={"flex flex-col gap-y-[5px] text-white"}>
                                            <h2 className={"text-[18px] font-[700]"}>{item.type3}</h2>
                                            <p className={"text-[12px] font-[600] text-[#D6D6D6]"}>{item.place3}</p>
                                        </div>
                                    </div>
                                    <img className={"w-[150px] h-[411px] mt-[25px] mr-[55px] opacity-70"} alt={"skull"}
                                         src={item.imgSrc3}/>
                                </div>

                                <div className={"flex flex-col justify-between"}>

                                    <div
                                        className={"gradient rounded-[20px] pl-[14px] pb-[20px] flex min-w-[482px] justify-between"}>
                                        <div className={"flex flex-col justify-between"}>
                                            <div
                                                className={"my-[15px] px-[10px] py-[3px] bg-white rounded-[44px] drop-shadow-lg max-w-[46px]"}>
                                                <p className={"text-[16px] font-[700] text-orange-one text-center"}>{item.sellAmount4}</p>
                                            </div>
                                            <div className={"flex flex-col gap-y-[5px] text-white"}>
                                                <h2 className={"text-[18px] font-[700]"}>{item.type4}</h2>
                                                <p className={"text-[12px] font-[600] text-[#D6D6D6]"}>{item.place4}</p>
                                            </div>
                                        </div>
                                        <img className={"w-[116px] h-[175px] mt-[25px] mr-[55px] opacity-70"}
                                             alt={"skull"}
                                             src={item.imgSrc4}/>
                                    </div>

                                    <div className={"flex gap-x-[30px]"}>
                                        <div
                                            className={"gradient rounded-[20px] pl-[14px] pb-[20px] flex justify-between max-w-[175px]"}>
                                            <div className={"flex flex-col justify-between"}>
                                                <div
                                                    className={"my-[15px] px-[10px] py-[3px] bg-white rounded-[44px] drop-shadow-lg max-w-[46px]"}>
                                                    <p className={"text-[16px] font-[700] text-orange-one text-center"}>{item.sellAmount5}</p>
                                                </div>
                                                <div className={"flex flex-col gap-y-[5px] text-white"}>
                                                    <h2 className={"text-[18px] font-[700] z-50"}>{item.type5}</h2>
                                                    <p className={"text-[12px] font-[600] text-[#D6D6D6]"}>{item.place5}</p>
                                                </div>
                                            </div>
                                            <img
                                                className={"w-[102px] h-[157px] mt-[25px] mr-[55px] opacity-70 relative top-[23px] right-[33px] "}
                                                alt={"skull"}
                                                src={item.imgSrc5}/>
                                        </div>
                                        <div
                                            className={"gradient rounded-[20px] pl-[14px] pb-[20px] flex justify-between grow"}>
                                            <div className={"flex flex-col justify-between"}>
                                                <div
                                                    className={"my-[15px] px-[10px] py-[3px] bg-white rounded-[44px] drop-shadow-lg max-w-[46px]"}>
                                                    <p className={"text-[16px] font-[700] text-orange-one text-center"}>{item.sellAmount6}</p>
                                                </div>
                                                <div className={"flex flex-col gap-y-[5px] text-white"}>
                                                    <h2 className={"text-[18px] font-[700]"}>{item.type6}</h2>
                                                    <p className={"text-[12px] font-[600] text-[#D6D6D6]"}>{item.place6}</p>
                                                </div>
                                            </div>
                                            <img className={"w-[116px] h-[175px] mt-[25px] mr-[55px] opacity-70"}
                                                 alt={"skull"}
                                                 src={item.imgSrc6}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    })}
                </Swiper>
            </div>
        </div>
    );
}

