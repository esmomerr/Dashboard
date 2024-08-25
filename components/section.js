import Image from "next/image";
import Link from "next/link";
import '@/scss/cards.scss'

export default function Section({dark}){
    return (
        <>
        <div className="row gap-3">
            <div className="row justify-content-between mt-5">
                <div className="col-6">
                    <h3 className="my-text-m m-0">Brain Ford</h3>
                </div>

                <div className="col-12 col-lg-3 mt-3 mt-lg-0">
                    <div className="d-flex justify-content-between">
                        <p className="my-btn-transparent flex-grow-1 py-2 rounded text-center me-2">Edit section</p>
                        <p className="my-btn flex-grow-1 py-2 rounded text-light text-center">Add item</p>
                    </div>
                </div>
            </div>

            <div className="my-cards">
                <div className="my-card col rounded d-flex flex-column p-3">
                    <div className="d-flex align-items-center justify-content-between">
                        <p className="my-text-l m-0">Lookscout Team</p>
                        <span className="my-text-l fs-4">...</span>
                    </div>

                    <div className="mt-4 px-2">
                        <div className="d-flex align-items-center justify-content-between border-bottom pb-3">
                        <div className="d-flex gap-3 align-items-center">
                            <Image src="/LatoyaLangosh_Avatar.png" alt="" width={42} height={42} />
                            <div className="">
                                <p className="my-text-l m-0" style={{fontSize: "15px"}}>Latoya Langosh</p>
                                <p className="my-text-xs m-0">Dynamic</p>
                            </div>
                        </div>
                        <p className="my-text-xs-online py-1 px-2 rounded m-0">Online <Image src="/buyuktur_iconu.svg" alt="" width={12} height={12}/></p>
                        </div>
                    </div>

                    <div className="mt-4 px-2">
                        <div className="d-flex align-items-center justify-content-between border-bottom pb-3">
                        <div className="d-flex gap-3 align-items-center">
                            <Image src="/AbelMohr_Avatar.png" alt="" width={42} height={42} />
                            <div className="">
                                <p className="my-text-l m-0" style={{fontSize: "15px"}}>Abel Mohr</p>
                                <p className="my-text-xs m-0">Dynamic</p>
                            </div>
                        </div>
                        <p className="my-text-xs-online py-1 px-2 rounded m-0">Online <Image src="/buyuktur_iconu.svg" alt="" width={12} height={12}/></p>
                        </div>
                    </div>

                    <div className="mt-4 px-2">
                        <div className="d-flex align-items-center justify-content-between border-bottom pb-3">
                        <div className="d-flex gap-3 align-items-center">
                            <Image src="/ShariStamm_Avatar.png" alt="" width={42} height={42} />
                            <div className="">
                                <p className="my-text-l m-0" style={{fontSize: "15px"}}>Shari Stamm</p>
                                <p className="my-text-xs m-0">Cheif</p>
                            </div>
                        </div>
                        <p className="my-text-xs-online py-1 px-2 rounded m-0">Offline <Image src="/buyuktur_iconu.svg" alt="" width={12} height={12}/></p>
                        </div>
                    </div>

                    <div className="mt-4 px-2">
                        <div className="d-flex align-items-center justify-content-between border-bottom pb-3">
                        <div className="d-flex gap-3 align-items-center">
                            <Image src="/EarlJohnson_Avatar.png" alt="" width={42} height={42} />
                            <div className="">
                                <p className="my-text-l m-0" style={{fontSize: "15px"}}>Earl Johnson</p>
                                <p className="my-text-xs m-0">National</p>
                            </div>
                        </div>
                        <p className="my-text-xs-online py-1 px-2 rounded m-0">Offlin <Image src="/buyuktur_iconu.svg" alt="" width={12} height={12}/></p>
                        </div>
                    </div>

                    <div className="mt-4 px-2">
                        <div className="d-flex align-items-center justify-content-between border-bottom pb-3">
                        <div className="d-flex gap-3 align-items-center">
                            <Image src="/ErickChamplin_Avatar.png" alt="" width={42} height={42} />
                            <div className="">
                                <p className="my-text-l m-0" style={{fontSize: "15px"}}>Erick Champlin</p>
                                <p className="my-text-xs m-0">Central</p>
                            </div>
                        </div>
                        <p className="my-text-xs-online py-1 px-2 rounded m-0">Online <Image src="/buyuktur_iconu.svg" alt="" width={12} height={12}/></p>
                        </div>
                    </div>
                    
                    <Link href="/" className="my-btn text-decoration-none text-center rounded p-2 my-5">View all</Link>
                </div>
                
                <div className="my-card col rounded d-flex flex-column p-3">
                    <div className="d-flex align-items-center justify-content-between">
                        <p className="my-text-l m-0">Updated Materials</p>
                        <span className="my-text-l fs-4">...</span>
                    </div>

                    <div className="mt-4 px-2">
                        <div className="d-flex align-items-center justify-content-between border-bottom pb-3">
                        <div className="d-flex gap-3 align-items-center">
                            <Image src="/pdf_icon.svg" alt="" width={42} height={42} />
                            <div className="">
                                <p className="my-text-l m-0" style={{fontSize: "15px"}}>Lookscout Resources</p>
                                <p className="my-text-xs m-0">80.69 mb</p>
                            </div>
                        </div>
                        {dark ? (
                            <Image src="/download_dark.svg" alt="" width={32} height={32} />
                        ) : (
                            <Image src="/download.svg" alt="" width={32} height={32} />
                        )}
                        </div>
                    </div>

                    <div className="mt-4 px-2">
                        <div className="d-flex align-items-center justify-content-between border-bottom pb-3">
                        <div className="d-flex gap-3 align-items-center">
                            <Image src="/MP4_icon.svg" alt="" width={42} height={42} />
                            <div className="">
                                <p className="my-text-l m-0" style={{fontSize: "15px"}}>Lookscout Updates</p>
                                <p className="my-text-xs m-0">320.32 mb</p>
                            </div>
                        </div>
                        {dark ? (
                            <Image src="/download_dark.svg" alt="" width={32} height={32} />
                        ) : (
                            <Image src="/download.svg" alt="" width={32} height={32} />
                        )}
                        </div>
                    </div>

                    <div className="mt-4 px-2">
                        <div className="d-flex align-items-center justify-content-between border-bottom pb-3">
                        <div className="d-flex gap-3 align-items-center">
                            <Image src="/pdf_icon.svg" alt="" width={42} height={42} />
                            <div className="">
                                <p className="my-text-l m-0" style={{fontSize: "15px"}}>Lookscout Guides</p>
                                <p className="my-text-xs m-0">320.32 mb</p>
                            </div>
                        </div>
                        {dark ? (
                            <Image src="/download_dark.svg" alt="" width={32} height={32} />
                        ) : (
                            <Image src="/download.svg" alt="" width={32} height={32} />
                        )}
                        </div>
                    </div>

                    <div className="mt-4 px-2">
                        <div className="d-flex align-items-center justify-content-between border-bottom pb-3">
                        <div className="d-flex gap-3 align-items-center">
                            <Image src="/zip_icon.svg" alt="" width={42} height={42} />
                            <div className="">
                                <p className="my-text-l m-0" style={{fontSize: "15px"}}>Lookscout Design System</p>
                                <p className="my-text-xs m-0">320.32 mb</p>
                            </div>
                        </div>
                        {dark ? (
                            <Image src="/download_dark.svg" alt="" width={32} height={32} />
                        ) : (
                            <Image src="/download.svg" alt="" width={32} height={32} />
                        )}
                        </div>
                    </div>

                    <div className="mt-4 px-2">
                        <div className="d-flex align-items-center justify-content-between border-bottom pb-3">
                        <div className="d-flex gap-3 align-items-center">
                            <Image src="/MP4_icon.svg" alt="" width={42} height={42} />
                            <div className="">
                                <p className="my-text-l m-0" style={{fontSize: "15px"}}>Lookscout Guides</p>
                                <p className="my-text-xs m-0">125.05 mb</p>
                            </div>
                        </div>
                        {dark ? (
                            <Image src="/download_dark.svg" alt="" width={32} height={32} />
                        ) : (
                            <Image src="/download.svg" alt="" width={32} height={32} />
                        )}
                        </div>
                    </div>
                    
                    <div className="row px-3 gap-2 my-4">
                        <Link href="/" className="my-btn-transparent col text-decoration-none text-center rounded p-2">Cancel</Link>
                        <Link href="/" className="my-btn col text-decoration-none text-center rounded p-2">View all</Link>
                    </div>
                </div>

                <div className="my-card col rounded d-flex flex-column p-3">
                    <div className="d-flex align-items-center justify-content-between">
                        <p className="my-text-l m-0">Recent Transactions</p>
                        <span className="my-text-l fs-4">...</span>
                    </div>

                    <div className="mt-4 px-2">
                        <div className="d-flex align-items-center justify-content-between border-bottom pb-3">
                        <div className="d-flex gap-3 align-items-center">
                            <Image src="/pinterest.svg" alt="" width={42} height={42} />
                            <div className="">
                                <p className="my-text-l m-0" style={{fontSize: "15px"}}>Pinterest Team</p>
                                <p className="my-text-xs m-0">Jan 23 2022</p>
                            </div>
                        </div>
                        <p className="my-green-btn m-0 p-1 rounded">Done</p>
                        </div>
                    </div>

                    <div className="mt-4 px-2">
                        <div className="d-flex align-items-center justify-content-between border-bottom pb-3">
                        <div className="d-flex gap-3 align-items-center">
                            <Image src="/sketch.svg" alt="" width={42} height={42} />
                            <div className="">
                                <p className="my-text-l m-0" style={{fontSize: "15px"}}>Sketch Team</p>
                                <p className="my-text-xs m-0">Jun 15 2022</p>
                            </div>
                        </div>
                        <p className="my-red-btn m-0 p-1 rounded">Failed</p>
                        </div>
                    </div>

                    <div className="mt-4 px-2">
                        <div className="d-flex align-items-center justify-content-between border-bottom pb-3">
                        <div className="d-flex gap-3 align-items-center">
                            <Image src="/gitlab.svg" alt="" width={42} height={42} />
                            <div className="">
                                <p className="my-text-l m-0" style={{fontSize: "15px"}}>Gitlab Team</p>
                                <p className="my-text-xs m-0">Jan 15 2022</p>
                            </div>
                        </div>
                        <p className="my-green-btn m-0 p-1 rounded">Done</p>
                        </div>
                    </div>

                    <div className="mt-4 px-2">
                        <div className="d-flex align-items-center justify-content-between border-bottom pb-3">
                        <div className="d-flex gap-3 align-items-center">
                            <Image src="/clickup.svg" alt="" width={42} height={42} />
                            <div className="">
                                <p className="my-text-l m-0" style={{fontSize: "15px"}}>Clickup</p>
                                <p className="my-text-xs m-0">Jan 15 2022</p>
                            </div>
                        </div>
                        <p className="my-red-btn m-0 p-1 rounded">Failed</p>
                        </div>
                    </div>

                    <div className="mt-4 px-2">
                        <div className="d-flex align-items-center justify-content-between border-bottom pb-3">
                        <div className="d-flex gap-3 align-items-center">
                            <Image src="/deliverooo.svg" alt="" width={42} height={42} />
                            <div className="">
                                <p className="my-text-l m-0" style={{fontSize: "15px"}}>Deliverooo</p>
                                <p className="my-text-xs m-0">Jan 15 2022</p>
                            </div>
                        </div>
                        <p className="my-green-btn m-0 p-1 rounded">Done</p>
                        </div>
                    </div>
                    
                    <Link href="/" className="my-open-btn text-decoration-none mt-4" >Open <Image src="/open_icon.svg" alt="" width={12} height={12}/></Link>
                </div>
            </div>
        </div>
        </>
    )
}