import Graphic from "@/components/graphic";
import Link from "next/link";
import Image from "next/image";

export default function AdvancedGraphic(){
    return(
        <div className="my-card rounded row mt-5 p-3">
            <div className="d-flex justify-content-between">
                <p className="my-text-l">Advanced Graphic</p>
                <span className="fs-4">...</span>
            </div>
            <div>
                <Graphic />
            </div>

            <div className="d-flex justify-content-between mt-5 ">
                <p className="my-text-xs" style={{fontWeight: 600}}>Data graph</p>
                <Link href="/" className="my-open-btn text-decoration-none" >Open <Image src="/open_icon.svg" alt="" width={12} height={12}/></Link>
            </div>
        </div>
    )
}