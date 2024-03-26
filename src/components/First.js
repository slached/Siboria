import React from 'react';

export default function First(props) {
    return (
        <div className={"flex justify-center mb-[41px]"}>
            <div className={"flex flex-col max-w-xl ml-28 mt-48"}>
                <h1 className={"text-54px font-bold"}>World’s Biggest</h1>
                <h1 className={"text-54px text-color-china-blue font-bold my-3.5"}>Antique Collection</h1>
                <div className={"text-color-inactive flex flex-col gap-y-2 my-3.5"}>
                    <p>From they fine john he give of rich he. They age and draw</p>
                    <p>mrs like. Improving end distruts may instantly was </p>
                    <p>household applauded incommode.</p>
                </div>
                <div className={"flex my-4 items-center"}>
                    <button
                        className={"rounded-lg bg-orange-one text-white py-4 px-8 font-medium mr-9 b-shadow"}>Discover
                        now
                    </button>
                    <div className={"mr-4"}>
                        <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M29.5 52C26.5453 52 23.6194 51.418 20.8896 50.2873C18.1598 49.1566 15.6794 47.4992 13.5901 45.4099C11.5008 43.3206 9.84344 40.8402 8.71271 38.1104C7.58198 35.3805 7 32.4547 7 29.5C7 26.5453 7.58198 23.6194 8.71271 20.8896C9.84344 18.1598 11.5008 15.6794 13.5901 13.5901C15.6794 11.5008 18.1598 9.84344 20.8896 8.71271C23.6194 7.58198 26.5453 7 29.5 7L29.5 10.9563C27.0648 10.9563 24.6535 11.436 22.4036 12.3679C20.1538 13.2998 18.1096 14.6657 16.3876 16.3876C14.6657 18.1096 13.2998 20.1538 12.3679 22.4036C11.436 24.6535 10.9563 27.0648 10.9563 29.5C10.9563 31.9352 11.436 34.3465 12.3679 36.5964C13.2998 38.8462 14.6657 40.8904 16.3876 42.6123C18.1096 44.3343 20.1538 45.7002 22.4036 46.6321C24.6535 47.564 27.0648 48.0437 29.5 48.0437L29.5 52Z"
                                fill="#FF7B29"/>
                            <g filter="url(#filter0_d_206_40)">
                                <circle cx="29.5" cy="29.5" r="18.5" fill="#FAFAFA"/>
                            </g>
                            <path
                                d="M24.3333 29V26.9233C24.3333 24.345 26.1591 23.2892 28.3933 24.5783L30.1958 25.6167L31.9983 26.655C34.2325 27.9442 34.2325 30.0558 31.9983 31.345L30.1958 32.3833L28.3933 33.4217C26.1591 34.7108 24.3333 33.655 24.3333 31.0767V29Z"
                                stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                                stroke-linejoin="round"/>
                            <defs>
                                <filter id="filter0_d_206_40" x="0" y="0" width="59" height="59"
                                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                   result="hardAlpha"/>
                                    <feOffset/>
                                    <feGaussianBlur stdDeviation="5.5"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix"
                                                   values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.160784 0 0 0 0.13 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_206_40"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_206_40"
                                             result="shape"/>
                                </filter>
                            </defs>
                        </svg>
                    </div>
                    <p className={"font-bold"}>Watch Video</p>
                </div>
            </div>

            <div>
                <img className={"w-[409px] h-[529px] min-w-[409px] ml-[35px] min-h-[529px]"}
                     src={require('../static/images/blue-vase.png')} alt="vase"/>
            </div>

            <div className={"flex flex-col justify-center mr-12"}>
                <div className={"flex"}>
                    <img src={require('../static/images/Group 8.png')} alt={"year"}/>
                    <div className={"flex flex-col"}>
                        <p className={"text-[36px] font-bold"}>{props.data[0].year}</p>
                        <p className={"text-color-inactive"}>Year</p>
                    </div>
                </div>

                <div className={"flex"}>
                    <img src={require('../static/images/Group 9.png')} alt={"bids"}/>
                    <div className={"flex flex-col"}>
                        <p className={"text-[36px] font-bold"}>{props.data[0]["bids so far"]}</p>
                        <p className={"text-color-inactive"}>Bids so far.</p>
                    </div>
                </div>

                <div className={"flex"}>
                    <img src={require('../static/images/Group 10.png')} alt={"origin"}/>
                    <div className={"flex flex-col"}>
                        <p className={"text-[36px] font-bold"}>{props.data[0].origin}</p>
                        <p className={"text-color-inactive"}>origin</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
