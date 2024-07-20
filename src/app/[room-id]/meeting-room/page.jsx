import { Separator } from "@/components/ui/separator";

export default function MeetingRoom() {
    function getCurrentTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");
        return `${hours}:${minutes}:${seconds}`;
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
                    <div className="h-[70%] w-[11vw] flex flex-row items-center justify-center bg-secondary rounded-[50px] mt-[13.5px] ml-[10px]">
                        <div className="h-[100%] flex flex-row items-center justify-end mr-[10px]">
                            c-ↄ
                        </div>
                        <div className="flex flex-row items-center justify-center">
                            mmm-mmm-mmm
                        </div>
                    </div>
                    <div></div>
                </div>
                <Separator />
                <div className="flex flex-row h-[77vh]  ">
                    <div className=" w-[70vw] h-[100%] sm:w-[100%] ">
                        <div className=" h-[75%] px-[10px]">
                            <div className=" border-2 border-slate-400 rounded-[8px] h-[100%] ">
                                pinned video / currently speaking
                            </div>
                        </div>
                        <div className=" h-[25%] p-[10px]">
                            <div className=" h-[100%] border-2 border-slate-900 rounded-[8px] flex flex-row items-center relative">
                                <div className="h-[100%] w-[4vw] float-left left-1 flex items-center justify-center border-[1px] rounded-[8px] bg-slate-700">
                                    &lt;
                                </div>
                                <div className="flex flex-row flex-nowrap overflow-clip float-left w-[90%]">
                                    <div className="w-[25vh] h-[17vh] bg-slate-400 mr-[10px] rounded-[8px] relative">
                                        <img src=""></img>
                                    </div>
                                    <div className="w-[25vh] h-[17vh] bg-slate-400 mr-[10px] rounded-[8px] relative">
                                        <img src=""></img>
                                    </div>
                                    <div className="w-[25vh] h-[17vh] bg-slate-400 mr-[10px] rounded-[8px] relative">
                                        <img src=""></img>
                                    </div>
                                    <div className="w-[25vh] h-[17vh] bg-slate-400 mr-[10px] rounded-[8px] relative">
                                        <img src=""></img>
                                    </div>
                                </div>
                                <div className="h-[100%] w-[4vw] float-left right-1 flex items-center justify-center border-[1px] rounded-[8px] bg-slate-700">
                                    &gt;
                                </div>
                            </div>
                        </div>
                        <div className="h-[13vh] relative">
                            <div className="h-[100%] absolute flex">
                                {getCurrentTime()}
                            </div>
                            <div className="bg-black h-[100%] w-[40%] absolute left-[30%] right-[30%] flex flex-row">
                                <div className="">buttons</div>
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
                                        <span className="mx-[5px]">icon</span>
                                        <span className="mr-[20px]">icon</span>
                                    </div>
                                </div>
                                <div className="h-[7vh] mx-[10px] my-[20px] flex flex-row items-center relative justify-between bg-slate-400 rounded-[70px] ">
                                    <img
                                        className="h-[70px] w-[70px] ml-[5px]"
                                        src="https://avatar.iran.liara.run/public"
                                    />
                                    <span className="px-[10px]">Name</span>
                                    <div className="my-[10px]">
                                        <span className="mx-[5px]">icon</span>
                                        <span className="mr-[20px]">icon</span>
                                    </div>
                                </div>
                                <div className="h-[7vh] mx-[10px] my-[20px] flex flex-row items-center relative justify-between bg-slate-400 rounded-[70px] ">
                                    <img
                                        className="h-[70px] w-[70px] ml-[5px]"
                                        src="https://avatar.iran.liara.run/public"
                                    />
                                    <span className="px-[10px]">Name</span>
                                    <div className="my-[10px]">
                                        <span className="mx-[5px]">icon</span>
                                        <span className="mr-[20px]">icon</span>
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
