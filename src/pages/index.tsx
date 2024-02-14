import { BasciConnect } from "components/ConnectWallet";
import type { NextPage } from "next";
import Image from "next/image";
import { RiTwitterXFill } from "react-icons/ri";
import { FaDiscord } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";
import logobig from "../images/logobig.png"
import lineActive from "../images/line-active.png"
import line from "../images/line.png"
import Ten from "../images/ten.png"
import Logo from "../Logo.svg"
import longbg from "../images/long-bg.png"
import longbg2 from "../images/longbg2.png"
import bgmax from "../images/bgmax.png"
import Script from 'next/script'
import decoratepng from "../images/decorate.jpg"
import { BsPersonCircle } from "react-icons/bs";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import {
    useConnectModal,
    useAccountModal,
    useChainModal,
} from '@rainbow-me/rainbowkit';

import Head from "next/head";
import { useAccount } from 'wagmi'
import { useState } from "react";

const Home: NextPage = () => {
    const { address, isConnected, isDisconnected, isConnecting } = useAccount();
    const { openConnectModal } = useConnectModal();
    const [openUserDetails, setOpenUserDetails] = useState(false)

    return (
        <div>
            <Head>
                <title>龍城 Loong City</title>
                <meta name="description" content="Generated by create next wagmi dapp" />
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="viewport"
                    content="width=720, initial-scale=1, maximum-scale=1, user-scalable=no"
                />

            </Head>
            <Script src="https://cdn.tailwindcss.com"></Script>
            <div className="h-screen p-16" style={{
                minWidth: "1200px"
            }}>
                <div className="flex h-full gap-8">
                    {/* left */}
                    <div className="flex flex-col items-center justify-between">
                        <div className="flex flex-col items-center gap-2">
                            <Image width={60} height={60} src={Logo.src} alt="" />
                            <div className=" ordinal gold" style={{
                                writingMode: "vertical-rl",
                            }}>Loong City</div>
                        </div>
                        <div className="text-xl flex flex-col gap-8 justify-center items-center">
                            <div className=" flex flex-col gap-4 ">
                                <div className=" hover:opacity-60">
                                    <a href="">  <RiTwitterXFill /></a>

                                </div>
                                <div className=" hover:opacity-60">
                                    <a href=""><FaDiscord /></a>
                                </div>
                                <div className=" hover:opacity-60">
                                    <a href=""><FaTelegram /></a>
                                </div></div>
                            <div className="rounded-full hover:text-[#e8b23e] cursor-pointer relative flex items-center">
                                <BasciConnect></BasciConnect>
                                {/* { isDisconnected && <FaWallet className="m-4"  onClick={() => openConnectModal()}/>}
                               { isConnecting && <AiOutlineLoading3Quarters className="animate-spin p-4"/>}
                               { isConnected && !openUserDetails && <BsPersonCircle className="m-4" onMouseMove={()=>setOpenUserDetails(true)}/>}
                               { openUserDetails && <div className="p-4 rounded-sm absolute text-sm z-50 bg-red-500 h-[32px] flex justify-center gap-2 items-center" onMouseLeave={()=>setOpenUserDetails(false)}>
                                {`${address.slice(0,5)}...${address.slice(address.length-5,address.length)}`} 
                                <div><BsPersonCircle></BsPersonCircle></div>
                               </div> } */}

                            </div>
                        </div>
                    </div>
                    {/* right */}

                    <div className=" w-full flex flex-col justify-between relative"
                        style={{
                            borderTopRightRadius:"3rem",
                            backgroundSize: "100% 100%",
                            overflow: "hidden"
                            // maskImage: "image(url(mask.png), skyblue)"
                        }}
                    >
                        <video className="absolute top-0 right-0 left-0 bottom-0 -z-1 h-full w-screen objectfit opacity-50" autoPlay loop muted src="https://vpn.4everland.store/loongcity-webvideo2.mp4" style={{
                            borderTopRightRadius: "3rem",
                        }}>
                        </video>
                        <div className="pr-2 pb-2 bg-black absolute top-0" style={{
                            borderEndEndRadius: "3rem"
                        }}>
                            <div className=" absolute bottom-[-57px] left-[-1px]">
                                <Image src={decoratepng.src} width={50} height={50}></Image>
                            </div>
                            <div className=" absolute right-[-50px] top-[3px]">
                                <Image src={decoratepng.src} width={50} height={50}></Image>
                            </div>
                            <div className=" w-[420px] flex gap-4  pr-4 pb-4 " style={{
                                backgroundImage: `url(${longbg.src})`,
                                backgroundSize: "50% 100%",
                                backgroundPosition: "right",
                                backgroundRepeat: "no-repeat",
                                backgroundColor: "rgb(0,0,0)",
                                borderEndEndRadius: "3rem",
                                overflow: "hidden"
                            }}>

                                <Image width={700} height={100} src={Ten.src} alt="" />

                                <div className=" flex flex-col justify-between gap-4">
                                    <div className=" text-xs gold">
                                        <span className=" text-lg">龍城</span>（Loong City）是一座架空的中国城市。传统与未来的各种元素在这里交织和碰撞，由此产生了许许多多未知的可能。蒸汽朋克与传统中国构成了龍城的核心元素。每个龍城PFP都是这个架空世界的入场券。
                                    </div>
                                    <div className="flex justify-between gap-2 items-center">
                                        <div className=" px-8 py-1 bg-white text-black text-center rounded-3xl w-full cursor-pointer hover:text-[#e8b23e] font-bold">More</div>
                                        <a href="">
                                            <div className="p-2 bg-white rounded-full text-black justify-center flex items-center">
                                                <FaBook />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pr-2 pt-2 absolute bottom-0 bg-black" style={{
                            borderTopRightRadius: "3rem",
                        }}>
                            <div className=" absolute right-[-53px] bottom-[-1px]" style={{
                                transform: "rotate(270deg)",
                            }}>
                                <Image src={decoratepng.src} width={50} height={50}></Image>
                            </div>
                            <div className=" absolute top-[-53px] left-[3px]" style={{
                                transform: "rotate(270deg)"
                            }}>
                                <Image src={decoratepng.src} width={50} height={50}></Image>
                            </div>
                            <div className="flex justify-between " style={{
                                 borderTopRightRadius: "3rem",
                                 overflow: "hidden"
                            }}>
                                <div className="flex gap-4 pr-4 pt-4  outline-8" style={{
                                    backgroundImage: `url(${longbg2.src})`,
                                    backgroundSize: "50% 100%",
                                    backgroundPosition: "right",
                                    backgroundRepeat: "no-repeat",
                                    backgroundColor: "rgb(0,0,0)"
                                }}>
                                    <div>
                                        <div className="flex gap-4">
                                            <div>
                                                <Image src={lineActive.src} width={10} height={70} alt="" />
                                            </div>
                                            <div>
                                                <div className=" text-sm text-[rgba(255,255,255,.4)]">01-Status</div>
                                                <div className="gold">White List Mint</div>
                                                <div className=" text-xs flex gap-2 gold">
                                                    <div>0.05ETH</div>
                                                    <div>February 16, 2024</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div>
                                                <Image src={line.src} width={10} height={70} alt="" />
                                            </div>
                                            <div>
                                                <div className=" text-sm text-[rgba(255,255,255,.4)]">02-Status</div>
                                                <div className="gold">Public Mint</div>
                                                <div className=" text-xs flex gap-2 gold">
                                                    <div>0.05ETH</div>
                                                    <div>February 16, 2024</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" flex flex-col gap-2">
                                        <div className="flex gap-8 justify-between">
                                            <div>
                                                <div className=" text-gray-400 text-xs">Minted</div>
                                                <div>100/1000</div>
                                            </div>
                                            <div>
                                                <div className=" text-gray-400 text-xs">Price</div>
                                                <div className=" flex justify-center items-center">0.01

                                                    <FaEthereum />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className=" text-gray-400 text-xs">Amount</div>
                                            <div className="flex justify-between gap-1">
                                                <div className=""><input className="w-10 bg-transparent outline-none border text-center rounded-lg border-[rgba(255,255,255,.1)] text-[#DFD1B3]" type="nunmber" defaultValue={10} /></div>
                                                <div className=" bg-[rgba(255,255,255,.1)] px-4 rounded-2xl cursor-pointer hover:text-black hover:bg-[#DFD1B3]">1</div>
                                                <div className=" bg-[rgba(255,255,255,.1)] px-4 rounded-2xl cursor-pointer hover:text-black hover:bg-[#DFD1B3]">5</div>
                                                <div className=" bg-[rgba(255,255,255,.1)] px-4 rounded-2xl cursor-pointer hover:text-black hover:bg-[#DFD1B3]">10</div>
                                            </div>
                                        </div>
                                        <div className=" px-8 py-1 bg-white text-black text-center rounded-3xl w-full cursor-pointer mt-4 font-bold hover:text-[#e8b23e]">
                                            Mint
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="pl-2 pt-2 rounded-tl-3xl absolute right-0 bottom-0 bg-black" style={{
                            borderTopLeftRadius: "3rem",
                        }}>
                            <div className=" absolute top-[-57px] right-0 rotate-180">
                                <Image src={decoratepng.src} width={50} height={50}></Image>
                            </div>
                            <div className=" absolute left-[-50px] bottom-[3px] rotate-180">
                                <Image src={decoratepng.src} width={50} height={50}></Image>
                            </div>
                            <div className="pt-4 pl-4 " style={{
                                backgroundColor: "rgb(0,0,0)",
                                borderTopLeftRadius: "3rem",
                                overflow: "hidden"
                            }}>
                                <Image width={150} height={100} src={logobig.src} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
