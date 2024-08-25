"use client";
import "@/scss/input.scss";
// import AdvancedGraphic from "@/components/advancedGraphic";
// import Cards from "@/components/cards";
// import Section from "@/components/section";
// import SideMenu from "@/components/sideMenu";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { DarkContext } from "@/store/context";
import dynamic from "next/dynamic";

const AdvancedGraphic = dynamic(() => import('@/components/advancedGraphic'), { ssr: false });
const Cards = dynamic(() => import('@/components/cards'), { ssr: false });
const Section = dynamic(() => import('@/components/section'), { ssr: false });
const SideMenu = dynamic(() => import('@/components/sideMenu'), { ssr: false });

export default function Home() {
    const { dark, changeMode } = useContext(DarkContext);

    useEffect(() => {
        if (typeof window !== "undefined") {
          if (dark) {
            document.body.classList.add("darkMode");
          } else {
            document.body.classList.remove("darkMode");
          }
        }
      }, [dark]);
    

    return (
    <div className={`${dark ? "darkMode" : ""}`}>
        <div className="d-flex flex-column flex-lg-row gap-4 mx-1">
            <SideMenu dark={dark}/>
            <div className="col p-3">
                <div className="container">
                    <div className="d-flex justify-content-between flex-row">
                    {/* Masaüstü için breadcrumb, mobilde gizlenir */}
                        <p className="my-text-xs mb-4 d-none d-md-block"> Home <Image src="/buyuktur_iconu.svg" width={12} height={12} alt="" /> Settings <Image src="/buyuktur_iconu.svg" width={12} height={12} alt="" /> <span className="text-primary">General</span> </p>
                        <div className="toggle-switch mx-4">
                            <label className="switch-label">
                                <input type="checkbox" className="checkbox" checked={dark} onChange={changeMode} />
                                <span className="slider"></span>
                            </label>
                        </div>
                        {/* Mobil için breadcrumb, ortalanmış şekilde */}
                        <p className="my-text-xs mb-4 d-md-none d-flex align-items-center gap-1"><Image src="/kucuktur_isareti.svg" width={12} height={12} alt="" /> Back </p>
                    </div>

                    <div className="row justify-content-between">
                        <div className="col-12 col-lg-6">
                            <h3 className="my-text-xl m-0">Hey there, Brian Ford!</h3>
                            <p className="my-text-s">Welcome back, we are happy to have you here!</p>
                        </div>

                        {/* Tablet modunda butonlar yazının altına düşer */}
                        <div className="col-12 col-lg-3 mt-3 mt-lg-0">
                            <div className="d-flex justify-content-between">
                                <p className="my-btn-transparent flex-grow-1 py-2 rounded text-center me-2"> Edit section</p>
                                <p className="my-btn flex-grow-1 py-2 rounded text-light text-center"> Add item</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Cards />
                <AdvancedGraphic />
                <Section dark={dark}/>
            </div>
        </div>
    </div>
    );
}
