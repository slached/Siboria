import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

export default function RecentlyAdded(props) {
    const [items] = useState(props.items)
    const [swiper, setSwiper] = useState(null)
    return (
        <div className={"flex justify-center"}>

            <div className={"flex flex-col mt-[100px] gap-y-[20px] max-w-[1200px]"}>

                <div className={"flex justify-between"}>
                    <h1 className={"text-[54px] font-bold "}>Recently Added</h1>
                    <div className={"flex"}>
                        <svg onClick={() => swiper.slidePrev()} width="58" height="58" viewBox="0 0 58 58" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
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
                        <svg onClick={() => swiper.slideNext()} className={"relative top-[3px]"} width="68" height="68"
                             viewBox="0 0 68 68" fill="none"
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

                <Swiper className={"max-w-[1200px]"}
                        spaceBetween={50}
                        slidesPerView={3}
                        loop={true}
                        onSwiper={(swiper) => setSwiper(swiper)}
                >
                    {items.map((value) => {
                        return (
                            <SwiperSlide className={"flex flex-col p-[15px] bg-white rounded-[10px]"}>
                                <div
                                    className={"bg-body-bg h-[178px] rounded-[10px] flex justify-center items-center mb-[20px]"}>
                                    <img className={`w-[${value.imgW}] h-[${value.imgH}]`} src={value.dataImage}
                                         alt={"recently added"}/>
                                </div>
                                <h1 className={"text-[18px] font-bold mb-[10px] "}>{value.dataName}</h1>
                                <div className={"text-color-inactive text-[12px] mb-[24px] flex"}>
                                    <p>Year: {value.productYear}</p>
                                    <hr className={"p-0 mx-[8px] border-0 h-[16px] w-[1px] bg-color-inactive "}/>
                                    <p>{value.type}</p>
                                </div>
                                <div className={"flex justify-between mb-[49px]"}>
                                    <h3 className={"text-[24px] font-bold"}>{value.bid}</h3>
                                    <button
                                        className={"px-[16px] py-[10px] rounded-[10px] border border-[#00B2FF]"}><p
                                        className={"text-[12px] text-[#00B2FF]"}>View Details</p></button>
                                </div>

                                <div className={"flex justify-between mb-[20px]"}>
                                    <p className={"text-[12px] font-[600]"}>{value.bidSoFar} bids do far.</p>
                                    <p className={"text-color-inactive text-[12px] font-[600]"}>Bidding closes
                                        in {value.bidClosesIn} Days</p>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>

            </div>
        </div>
    );
}
