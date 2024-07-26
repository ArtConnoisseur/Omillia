"use client";

import { BsRecordCircleFill } from "react-icons/bs";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";
import chatMessages from "./chatMessages";
import chatMembers from "./ChatMembers";
import "./switch.css";

export default function MeetingRoom() {
    const [meetingTitle, setMeetingTitle] = useState(
        "[Internal] Weekly Report Marketing + Sales"
    );
    const [meetingID, setMeetingID] = useState("abc-def-ghi");
    const [lightMode, setLightMode] = useState(true);
    const [currentTime, setCurrentTime] = useState("");
    const [microphoneEnabled, setMicrophoneEnabled] = useState(false);
    const [videoEnabled, setVideoEnabled] = useState(false);
    const [screenShared, setScreenShared] = useState(false);
    const [checkmark, showCheckMark] = useState();
    const [modaltext, setModalText] = useState("");
    const [recordTime, setRecordTime] = useState("1:54:43");
    const [chatGroupMode, setChatGroupMode] = useState(true);
    const [chatMessage, setChatMessage] = useState(
        "Today, we are here to discuss last week's sales."
    );

    const [themeLight, setThemeLight] = useState(true);

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
    };
    return (
        <section>
            <div className="bg-background-primary-light text-primary-light box-border h-[100vh] w-[100vw]">
                <div className="h-[10vh] flex flex-row">
                    <div className="h-[100%] w-[100px] text-black flex items-center justify-center border-r-[2px] border-background-secondary-light"></div>
                    <div className="text-xl h-[100%] w-[40vw] pl-[20px]  flex flex-col items-start  justify-center">
                        <div className=" text-text-light ">{meetingTitle}</div>
                        <div className="text-[0.7em] text-text-secondary-light flex flex-row ">
                            <div className="pr-[5px]">July 20th, 2024</div>
                            <span className="text-[1.3em] font-thin">|</span>
                            <div className="pl-[5px]">11:00 AM</div>
                        </div>
                    </div>
                    <div className="h-[100%] w-[15vw] flex items-center justify-center">
                        people thingy
                    </div>
                    <div className="h-[100%] flex items-center justify-center">
                        <div
                            className="h-[60%] min-w-[13vw] max-w-[15vw] flex flex-row items-center justify-center rounded-[50px] text-xl text-primary-light bg-button-background-light cursor-pointer"
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
                                    <span className="ml-5 text-[1.1rem]">
                                        Copied!
                                    </span>
                                </div>
                            ) : (
                                <div className="flex flex-row items-center justify-center">
                                    <div className="h-[100%] flex flex-row items-center justify-end mr-[7px] text-[1.1rem]">
                                        <i className="fa-solid fa-link "></i>
                                    </div>
                                    <div className="flex flex-row text-[1.1rem] items-center justify-center border-l-[2px] border-primary-light pl-[5px] ">
                                        {meetingID}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <Switch />
                    <button
                        onClick={() => {
                            setLightMode(!lightMode);
                        }}
                    >
                        {lightMode ? "Dark Mode" : "Light Mode"}
                    </button>
                </div>
                {/* END TOPBAR */}
                {/* START MAIN SECTION */}
                <div className="flex flex-row h-[90vh]">
                    <div className=" w-[70vw] h-[79vh] sm:w-[100%] ">
                        <div className=" h-[75%] px-[10px] pt-[10px] bg-background-tertiary-light">
                            <div className=" border-2 border-slate-400 rounded-[10px] h-[100%] relative">
                                pinned video / currently speaking
                                <div className=" max-w-[8vw] min-w-[7vw] bg-gray-500 h-[4vh] flex flex-row items-center justify-center rounded-[50px] absolute top-3 left-3">
                                    <BsRecordCircleFill className="text-text-secondary-light bg-red-600 text-[1.2em] left-2 absolute rounded-[100%]" />
                                    <div className="pl-7 text-text-dark">
                                        {recordTime}
                                    </div>
                                </div>
                                <div className=" max-w-[8vw] min-w-[3vw] bg-gray-500 h-[4vh] rounded-[50px] px-[20px] absolute bottom-3 left-3 flex items-center justify-center text-text-dark">
                                    Name
                                </div>
                            </div>
                        </div>
                        <div className=" h-[25%] p-[10px] bg-background-tertiary-light">
                            <div className=" h-[100%] rounded-[8px] flex flex-row items-center relative">
                                {/* <div className="h-[100%] w-[4vw] float-left left-1 flex items-center justify-center border-[1px] rounded-[8px] bg-slate-300 text-2xl">
                                    <i className="fa-solid fa-chevron-left"></i>
                                </div>
                                <div className="flex flex-row flex-nowrap overflow-clip float-left w-[90%]">
                                    <div className="w-[25vh] h-[17vh] bg-slate-400 mr-[10px] rounded-[8px] relative overflow-x-auto">
                                        <img src=""></img>
                                        <div className="absolute right-[5%] bottom-[10%] text-[1.2rem] w-[2vw] flex items-center justify-center">
                                            {microphoneEnabled ? (
                                                <i className="fa-solid fa-microphone"></i>
                                            ) : (
                                                <i className="fa-solid fa-microphone-slash"></i>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="h-[100%] w-[4vw] float-left right-1 flex items-center justify-center border-[1px] rounded-[8px] bg-slate-300 text-2xl">
                                    <i class="fa-solid fa-chevron-right"></i>
                                </div> */}
                                <div className="flex flex-row ">
                                    {/* <div className="h-[100%] w-[4vw] float-left left-1 flex items-center justify-center border-[1px] rounded-[8px] bg-slate-300 text-2xl">
                                        <i className="fa-solid fa-chevron-left"></i>
                                    </div> */}
                                    <div className="flex flex-row overflow-x-auto w-[70vw] space-x-2 h-[19vh]">
                                        {chatMembers.map((member, index) => (
                                            <div
                                                key={index}
                                                className="w-[25vw] h-[17vh] bg-slate-400 rounded-[8px] relative flex-nowrap"
                                            >
                                                {member.videoEnabled ? (
                                                    <div className="h-[17vh] w-[25vh]">
                                                        video enabled
                                                    </div>
                                                ) : (
                                                    <div className="h-[17vh] w-[25vh]">
                                                        <img
                                                            className="h-[30px] w-[30px] rounded-full absolute top-[40%] left-[40%]"
                                                            src={
                                                                member.imageSrc
                                                            }
                                                            alt={`${member.name}'s avatar`}
                                                        ></img>
                                                    </div>
                                                )}
                                                <div className="absolute right-[5%] bottom-[10%] text-[1.2rem] w-[2vw] flex items-center justify-center">
                                                    {member.microphoneEnabled ? (
                                                        <i className="fa-solid fa-microphone"></i>
                                                    ) : (
                                                        <i className="fa-solid fa-microphone-slash"></i>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    {/* <div className="h-[100%] w-[4vw] float-left right-1 flex items-center justify-center border-[1px] rounded-[8px] bg-slate-300 text-2xl">
                                        <i class="fa-solid fa-chevron-right"></i>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="h-[11vh] relative">
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
                                            <div className="h-[60px] w-[60px] rounded-full bg-black relative flex justify-center items-center text-2xl cursor-pointer">
                                                <i className="fa-solid fa-microphone text-[white]"></i>
                                            </div>
                                        ) : (
                                            <div className="h-[60px] w-[60px] rounded-full bg-red-600 relative flex justify-center items-center text-2xl cursor-pointer">
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
                                            <div className="h-[60px] w-[60px] rounded-full bg-black relative flex justify-center items-center text-2xl cursor-pointer">
                                                <i className="fa-solid fa-video text-[white]"></i>
                                            </div>
                                        ) : (
                                            <div className="h-[60px] w-[60px] rounded-full bg-red-600 relative flex justify-center items-center text-2xl cursor-pointer">
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
                                    <div className="h-[60px] w-[60px] rounded-full bg-black relative flex justify-center items-center text-2xl cursor-pointer">
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
                    <div className=" w-[33vw] h-[90vh]  hidden md:block lg:block xl:block 2xl:block ">
                        <div className=" h-[40vh]  border-2 border-background-tertiary-light bg-background-secondary-light">
                            {/* Participants Title and Add Candidate */}
                            <div className="bg-background-primary-light">
                                <div className="h-[7vh] bg-background-primary-light flex items-center justify-between ml-[20px] mr-[10px]">
                                    <div className="text-text-light">
                                        Participants
                                    </div>
                                    <div className="flex flex-row justify-center items-center">
                                        <button className="w-[11vw] h-[4vh] bg-button-background-light rounded-full ">
                                            <span className="mr-[10px] text-[0.8rem]">
                                                Add Participant
                                            </span>
                                            <i className="fa-solid fa-user-plus"></i>
                                        </button>
                                        <button className="ml-[10px]">
                                            <i class="fa-solid fa-chevron-up"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* END Participants Title and Add Candidate */}
                            {/* Participants List with Avatar mic and video icons */}
                            <div className="mx-[3px] h-[31.5vh]">
                                <div className="h-[30vh] bg-background-secondary-light flex flex-col overflow-y-auto mt-[10px]">
                                    <div className="h-[7vh] mx-[10px] mt-[15px] flex flex-row items-center relative bg-background-primary-light rounded-[70px]">
                                        <img
                                            className="h-[50px] w-[50px] ml-[5px] my-[5px]"
                                            src="https://avatar.iran.liara.run/public/boy"
                                            alt={`Your avatar`}
                                        />
                                        <span className="px-[10px] text-[0.8rem] text-text-light">
                                            Maverick Mac
                                        </span>
                                        <div className="m-[10px] absolute right-[5px]">
                                            <div
                                                className="float-left flex justify-center items-center w-[2vw]"
                                                onClick={() => {
                                                    setMicrophoneEnabled(
                                                        !microphoneEnabled
                                                    );
                                                }}
                                            >
                                                {microphoneEnabled ? (
                                                    <i className="fa-solid fa-microphone mx-[5px]"></i>
                                                ) : (
                                                    <i className="fa-solid fa-microphone-slash mx-[5px] text-red-700"></i>
                                                )}
                                            </div>
                                            <div
                                                className="float-left flex justify-center items-center w-[2vw]"
                                                onClick={() => {
                                                    setVideoEnabled(
                                                        !videoEnabled
                                                    );
                                                }}
                                            >
                                                {videoEnabled ? (
                                                    <i className="fa-solid fa-video mx-[5px]"></i>
                                                ) : (
                                                    <i className="fa-solid fa-video-slash mx-[5px] text-red-700"></i>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    {chatMembers.map((member, index) => (
                                        <div
                                            key={index}
                                            className="h-[7vh] mx-[10px] mt-[15px] flex flex-row items-center relative bg-background-primary-light rounded-[70px]"
                                        >
                                            <img
                                                className="h-[50px] w-[50px] ml-[5px] my-[5px]"
                                                src={member.imageSrc}
                                                alt={`${member.name}'s avatar`}
                                            />
                                            <span className="px-[10px] text-[0.8rem] text-text-light">
                                                {member.name}
                                            </span>
                                            <div className="m-[10px] absolute right-[5px]">
                                                <div className="float-left flex justify-center items-center w-[2vw]">
                                                    {member.microphoneEnabled ? (
                                                        <i className="fa-solid fa-microphone mx-[5px]"></i>
                                                    ) : (
                                                        <i className="fa-solid fa-microphone-slash mx-[5px] text-red-700"></i>
                                                    )}
                                                </div>
                                                <div className="float-left flex justify-center items-center w-[2vw]">
                                                    {member.videoEnabled ? (
                                                        <i className="fa-solid fa-video mx-[5px]"></i>
                                                    ) : (
                                                        <i className="fa-solid fa-video-slash mx-[5px] text-red-700"></i>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* END Participants List with Avatar mic and video icons */}
                        </div>
                        <div className="border-x-2 border-background-tertiary-light h-[50vh]">
                            <div className="bg-background-primary-light">
                                <div className="h-[39vh] ">
                                    {/* Chat Title and Setting Change */}
                                    <div className="h-[7vh] flex flex-row items-center justify-between mx-[10px]">
                                        <div className="text-text-light ml-3">
                                            Chats
                                        </div>
                                        <div className="flex flex-row justify-center items-center">
                                            <div className="w-[16vw] h-[4vh] bg-button-background-light rounded-full flex flex-row items-center text-[0.9rem]">
                                                <div className="w-[7vw] h-[100%] flex items-center justify-center rounded-full bg-primary-light text-text-dark ">
                                                    <button
                                                        onClick={() => {
                                                            setChatGroupMode(
                                                                true
                                                            );
                                                        }}
                                                    >
                                                        Group
                                                    </button>
                                                </div>
                                                <div className="w-[9vw] flex items-center justify-center rounded-full">
                                                    <button
                                                        onClick={() => {
                                                            setChatGroupMode(
                                                                false
                                                            );
                                                        }}
                                                    >
                                                        Personal
                                                    </button>
                                                </div>
                                            </div>
                                            <button className="ml-[10px]">
                                                <i class="fa-solid fa-chevron-up"></i>
                                            </button>
                                            {/* END Chat Title and Setting Change */}
                                        </div>
                                    </div>
                                    <div className="h-[32vh] bg-background-secondary-light text-text-light py-[1vh]">
                                        <div className="ml-[10px] text-[0.8rem] h-[30vh] overflow-y-auto ">
                                            {chatMessages.map((msg) => {
                                                const {
                                                    name,
                                                    gender,
                                                    message,
                                                    time,
                                                } = msg;
                                                return (
                                                    <div className="ml-[10px] flex flex-row items-center space-y-4">
                                                        <img
                                                            src={`https://avatar.iran.liara.run/public/${gender}`}
                                                            className="w-[50px] h-[50px] rounded-full"
                                                        ></img>
                                                        <div className="flex flex-col justify-start ml-3 bg-background-primary-light p-[5px] rounded-[8px]">
                                                            <div className="text-[0.6rem] text-text-secondary-light">
                                                                {name}
                                                            </div>
                                                            <div className="w-[13vw] flex flex-wrap ">
                                                                {message}
                                                            </div>
                                                        </div>
                                                        <div className="w-[4vw] h-max ml-[7px] text-[0.6rem] text-text-secondary-light">
                                                            {time}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-background-primary-light h-[11vh] flex flex-row items-center justify-center">
                                    <div className="bg-background-secondary-light h-[70%] w-[85%] rounded-full flex flex-row items-center">
                                        <i className="fa-solid fa-paperclip ml-4 text-[1.3rem]"></i>
                                        <input
                                            type="text"
                                            className="bg-background-secondary-light text-[0.8rem] w-[65%] ml-3"
                                            placeholder="Type Something..."
                                        ></input>
                                        <button className="w-[50px] h-[50px] rounded-full">
                                            <i className="fa-solid fa-paper-plane text-primary-light text-[1.5rem] "></i>
                                        </button>
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
