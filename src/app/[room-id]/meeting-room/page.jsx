import { Separator } from "@/components/ui/separator";

export default function MeetingRoom() {
    
    return (
        <section>
            <div className="bg-white box-border h-[100vh] w-[100vw]">
                <div className="h-[7vh] bg-primary flex flex-row">
                <div className="h-[100%] w-[100px] bg-slate-500 flex items-center">
                        Logo
                    </div>
                    <div className="text-2xl h-[100%] w-[40vw] bg-secondary flex items-center p-[10px]">
                        Meeting Title 
                    </div>
                    <div className="h-[100%] w-[15vw] flex items-center justify-center bg-gray-500">
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
                <div className="flex flex-row h-[80vh] bg-secondary ">
                    <div className="bg-gray-800 w-[75vw] h-[100%] sm:w-[100%] ">
                        <div className="bg-gray-600 h-[75%] p-[10px]">
                            <div className=" border-2 border-slate-400 rounded-[8px] h-[100%] ">
                                pinned video / currently speaking
                            </div>
                        </div>
                        <div className="bg-gray-700 h-[25%] p-[5px]">
                            <div className="bg-gray-700 h-[100%] border-2 border-slate-400 rounded-[8px] p-[10px] flex flex-row items-center relative">
                                <div className="h-[100%] w-[4vw] absolute left-0 bg-slate-800">-</div>
                                {/* <div className="flex flex-row flex-nowrap">
                                    <div className="w-[25vh] h-[17vh] bg-slate-400 mr-[10px]">
                                        <img src=""></img>
                                    </div>
                                    <div className="w-[25vh] h-[17vh] bg-slate-400 mr-[10px]">
                                        <img src=""></img>
                                    </div>
                                    <div className="w-[25vh] h-[17vh] bg-slate-400 mr-[10px]">
                                        <img src=""></img>
                                    </div>
                                </div> */}
                                <div className="h-[100%] w-[4vw] absolute right-0 bg-slate-800">+</div>
                            </div>
                        </div>
                        <div className="h-[13vh] bg-gray-900 relative">
                            <div className="bg-white h-[100%] w-[35%] absolute left-[32.5%] right-[32.5%]">
                                <div className=""></div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-900 w-[25vw] h-[93vh] p-[5px] hidden md:block lg:block xl:block 2xl:block ">
                        <div className="bg-gray-700 h-[100%]  border-2 border-slate-400 rounded-[8px] p-[5px]">
                            <div className="bg-slate-500 text-3xl">
                                Participants
                            </div>
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
