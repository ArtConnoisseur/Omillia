"use client";

import { BsRecordCircleFill } from "react-icons/bs";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function MeetingRoom() {
    const [currentTime, setCurrentTime] = useState("");
    const [microphoneEnabled, setMicrophoneEnabled] = useState(false);
    const [videoEnabled, setVideoEnabled] = useState(false);
    const [screenShared, setScreenShared] = useState(false);
    const [checkmark, showCheckMark] = useState();
    const [modaltext, setModalText] = useState("");
    const [meetingID, setMeetingID] = useState("abc-def-ghi");

    function getCurrentTime() {
        //gpt
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");
        return `${hours}:${minutes}:${seconds}`;
    }

    const handleCopyMeetingID = () => {
        navigator.clipboard.writeText(meetingID);
        showCheckMark(true);
        setTimeout(() => {
            showCheckMark(false);
        }, 3000);
    }
    return (
        <section>
            <div className="bg-blue-100 text-black box-border h-[100vh] w-[100vw]">
                <div className="h-[7vh] flex flex-row">
                    <div className="h-[100%] w-[100px] text-black flex items-center justify-center">
                        Logo
                    </div>
                    <div className="text-2xl h-[100%] w-[40vw]  flex flex-col items-start  justify-center">
                        <div className="text-[1.3em] text-black font-bold">
                            [Internal] Weekly Report Marketing + Sales
                        </div>
                        <div className="text-[0.8em] text-slate-800 flex flex-row ">
                            <div className="pr-[5px]">July 20th, 2024</div>|
                            <div className="pl-[5px]">11:00 AM</div>
                        </div>
                    </div>
                    <div className="h-[100%] w-[15vw] flex items-center justify-center">
                        people thingy
                    </div>
                    <div
                        className="h-[70%] min-w-[11vw] max-w-[15vw] flex flex-row items-center justify-center bg-secondary rounded-[50px] mt-[13.5px] ml-[10px] text-2xl cursor-pointer"
                        onClick={() => handleCopyMeetingID()}
                    >
                        
                        {/* <div className="h-[100%] flex flex-row items-center justify-end mr-[10px]">
                            <i className="fa-solid fa-link"></i>
                        </div>
                        <div className="flex flex-row items-center justify-center">
                            {meetingID}
                        </div> */}
                        {checkmark ? (
                            <div className="h-[100%] flex flex-row items-center justify-center">
                                <i class="fa-solid fa-check"></i>
                                <span className="ml-5">Copied!</span>
                            </div>
                        ) : (
                            <div className="flex flex-row items-center justify-center">
                                <div className="h-[100%] flex flex-row items-center justify-end mr-[10px]">
                                    <i className="fa-solid fa-link"></i>
                                </div>
                                <div className="flex flex-row items-center justify-center">
                                    {meetingID}
                                </div>
                            </div>
                        )}
                    </div>
                    <div></div>
                </div>
                <Separator />
                <div className="flex flex-row h-[77vh]  ">
                    <div className=" w-[70vw] h-[100%] sm:w-[100%] ">
                        <div className=" h-[75%] px-[10px]">
                            <div className=" border-2 border-slate-400 rounded-[8px] h-[100%] ">
                                pinned video / currently speaking
                                <BsRecordCircleFill />
                            </div>
                        </div>
                        <div className=" h-[25%] p-[10px]">
                            <div className=" h-[100%] border-2 border-slate-900 rounded-[8px] flex flex-row items-center relative">
                                <div className="h-[100%] w-[4vw] float-left left-1 flex items-center justify-center border-[1px] rounded-[8px] bg-slate-300 text-2xl">
                                    <i className="fa-solid fa-chevron-left"></i>
                                </div>
                                <div className="flex flex-row flex-nowrap overflow-clip float-left w-[90%]">
                                    <div className="w-[25vh] h-[17vh] bg-slate-400 mr-[10px] rounded-[8px] relative">
                                        <img src=""></img>
                                        {videoEnabled ? (
                                            <i className="fa-solid fa-video absolute right-[5%] bottom-[10%] text-[1.2rem]"></i>
                                        ) : microphoneEnabled ? (
                                            <i className="fa-solid fa-microphone absolute right-[5%] bottom-[10%] text-[1.2rem]"></i>
                                        ) : (
                                            <i className="fa-solid fa-microphone-slash absolute right-[5%] bottom-[10%] text-[1.2rem]"></i>
                                        )}
                                    </div>
                                </div>
                                <div className="h-[100%] w-[4vw] float-left right-1 flex items-center justify-center border-[1px] rounded-[8px] bg-slate-300 text-2xl">
                                    <i class="fa-solid fa-chevron-right"></i>
                                </div>
                            </div>
                        </div>
                        <div className="h-[13vh] relative">
                            <div className="h-[100%] absolute flex">
                                {() => setCurrentTime(getCurrentTime())}
                            </div>
                            <div className="bg-slate-300 h-[100%] w-[40%] absolute left-[30%] right-[30%] flex flex-row items-center justify-between">
                                <div className="">
                                    <div
                                        onClick={() => {
                                            setMicrophoneEnabled(
                                                !microphoneEnabled
                                            );
                                        }}
                                    >
                                        {microphoneEnabled ? (
                                            <div className="h-[70px] w-[70px] rounded-full bg-black relative flex justify-center items-center text-3xl cursor-pointer">
                                                <i className="fa-solid fa-microphone text-[white]"></i>
                                            </div>
                                        ) : (
                                            <div className="h-[70px] w-[70px] rounded-full bg-red-600 relative flex justify-center items-center text-3xl cursor-pointer">
                                                <i className="fa-solid fa-microphone-slash text-[black]"></i>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="">
                                    <div
                                        onClick={() => {
                                            setVideoEnabled(!videoEnabled);
                                        }}
                                    >
                                        {videoEnabled ? (
                                            <div className="h-[70px] w-[70px] rounded-full bg-black relative flex justify-center items-center text-3xl cursor-pointer">
                                                <i className="fa-solid fa-video text-[white]"></i>
                                            </div>
                                        ) : (
                                            <div className="h-[70px] w-[70px] rounded-full bg-red-600 relative flex justify-center items-center text-3xl cursor-pointer">
                                                <i className="fa-solid fa-video-slash text-[black]"></i>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div
                                    className=""
                                    onClick={() => {
                                        setScreenShared(!screenShared);
                                    }}
                                >
                                    <div className="h-[70px] w-[70px] rounded-full bg-black relative flex justify-center items-center text-3xl cursor-pointer">
                                        {screenShared ? (
                                            <i className="fa-solid fa-arrow-up-from-bracket text-primary"></i>
                                        ) : (
                                            <i className="fa-solid fa-arrow-up-from-bracket text-[white]"></i>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" w-[30vw] h-[90vh]  hidden md:block lg:block xl:block 2xl:block ">
                        <div className=" h-[100%]  border-2 border-slate-400 rounded-[8px]">
                            <div className=" text-3xl">Participants</div>
                            <div className="mx-[5px]">
                                <div className="h-[7vh] mx-[10px] my-[20px] flex flex-row items-center relative justify-between bg-slate-400 rounded-[70px] ">
                                    <img
                                        className="h-[70px] w-[70px] ml-[5px]"
                                        src="https://avatar.iran.liara.run/public"
                                    />
                                    <span className="px-[10px]">Name</span>
                                    <div className="my-[10px]">
                                        <span className="mx-[5px]">
                                            {microphoneEnabled ? (
                                                <i className="fa-solid fa-microphone mx-[5px]"></i>
                                            ) : (
                                                <i className="fa-solid fa-microphone-slash mx-[5px]"></i>
                                            )}
                                        </span>
                                        <span className="mr-[20px]">
                                            {videoEnabled ? (
                                                <i className="fa-solid fa-video"></i>
                                            ) : (
                                                <i className="fa-solid fa-video-slash"></i>
                                            )}
                                        </span>
                                    </div>
                                </div>
                                <div className="h-[7vh] mx-[10px] my-[20px] flex flex-row items-center relative justify-between bg-slate-400 rounded-[70px] ">
                                    <img
                                        className="h-[70px] w-[70px] ml-[5px]"
                                        src="https://avatar.iran.liara.run/public"
                                    />
                                    <span className="px-[10px]">Name</span>
                                    <div className="my-[10px]">
                                        <span className="mx-[5px]">
                                            {microphoneEnabled ? (
                                                <i className="fa-solid fa-microphone mx-[5px]"></i>
                                            ) : (
                                                <i className="fa-solid fa-microphone-slash mx-[5px]"></i>
                                            )}
                                        </span>
                                        <span className="mr-[20px]">
                                            {videoEnabled ? (
                                                <i className="fa-solid fa-video"></i>
                                            ) : (
                                                <i className="fa-solid fa-video-slash"></i>
                                            )}
                                        </span>
                                    </div>
                                </div>
                                <div className="h-[7vh] mx-[10px] my-[20px] flex flex-row items-center relative justify-between bg-slate-400 rounded-[70px] ">
                                    <img
                                        className="h-[70px] w-[70px] ml-[5px]"
                                        src="https://avatar.iran.liara.run/public"
                                    />
                                    <span className="px-[10px]">Name</span>
                                    <div className="my-[10px]">
                                        <span className="mx-[5px]">
                                            {microphoneEnabled ? (
                                                <i className="fa-solid fa-microphone mx-[5px]"></i>
                                            ) : (
                                                <i className="fa-solid fa-microphone-slash mx-[5px]"></i>
                                            )}
                                        </span>
                                        <span className="mr-[20px]">
                                            {videoEnabled ? (
                                                <i className="fa-solid fa-video"></i>
                                            ) : (
                                                <i className="fa-solid fa-video-slash"></i>
                                            )}
                                        </span>
                                    </div>
                                </div>
                                <div className="h-[7vh] mx-[10px] my-[20px] flex flex-row items-center relative justify-between bg-slate-400 rounded-[70px] ">
                                    <img
                                        className="h-[70px] w-[70px] ml-[5px]"
                                        src="https://avatar.iran.liara.run/public"
                                    />
                                    <span className="px-[10px]">Name</span>
                                    <div className="my-[10px]">
                                        <span className="mx-[5px]">
                                            {microphoneEnabled ? (
                                                <i className="fa-solid fa-microphone mx-[5px]"></i>
                                            ) : (
                                                <i className="fa-solid fa-microphone-slash mx-[5px]"></i>
                                            )}
                                        </span>
                                        <span className="mr-[20px]">
                                            {videoEnabled ? (
                                                <i className="fa-solid fa-video"></i>
                                            ) : (
                                                <i className="fa-solid fa-video-slash"></i>
                                            )}
                                        </span>
                                    </div>
                                </div>
                                <div className="h-[7vh] mx-[10px] my-[20px] flex flex-row items-center relative justify-between bg-slate-400 rounded-[70px] ">
                                    <img
                                        className="h-[70px] w-[70px] ml-[5px]"
                                        src="https://avatar.iran.liara.run/public"
                                    />
                                    <span className="px-[10px]">Name</span>
                                    <div className="my-[10px]">
                                        <span className="mx-[5px]">
                                            {microphoneEnabled ? (
                                                <i className="fa-solid fa-microphone mx-[5px]"></i>
                                            ) : (
                                                <i className="fa-solid fa-microphone-slash mx-[5px]"></i>
                                            )}
                                        </span>
                                        <span className="mr-[20px]">
                                            {videoEnabled ? (
                                                <i className="fa-solid fa-video"></i>
                                            ) : (
                                                <i className="fa-solid fa-video-slash"></i>
                                            )}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
