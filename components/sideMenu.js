import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SideMenu({dark}){
   const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Menü açma/kapatma fonksiyonu
   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   }; 
   return(
      <>
         <div className="my-card col-lg-3 m-0 flex-shrink-0">
            {/* Hamburger menü: Sadece mobil ve tablet versiyonlarında gösterilecek */}
            <div className="d-flex d-lg-none justify-content-between align-items-center p-3">
               <span className="my-text-l fw-bold" style={{fontWeight: "600"}}>Lookscout Dashboard</span>
               <button onClick={toggleMenu} className="navbar-toggler">
               {dark ? (
                  <Image src="/hamburger_menu_dark.svg" width={32} height={32} alt="Menu" />
               ) : (
                  <Image src="/hamburger_menu.svg" width={32} height={32} alt="Menu" />
               )}
               </button>
            </div>

            {/* Mobil Menü: Açılır kapanır menü */}
            {isMenuOpen && (
               <div className="d-flex flex-column gap-3 mt-1 p-5">
               <Link href="/" className="my-sidebar-btns d-flex align-items-center gap-3 text-decoration-none">
                  <Image src="/general.svg" width={22} height={22}/>
                  <span>General</span>
               </Link>
               <Link href="/" className="my-sidebar-btns d-flex align-items-center gap-3 text-decoration-none">
                  <Image src="/messages.svg" width={22} height={22}/>
                  <span>Messages</span>
               </Link>
               <Link href="/" className="my-sidebar-btns d-flex align-items-center gap-3 text-decoration-none">
                  <Image src="/notifications.svg" width={22} height={22}/>
                  <span>Notifications</span>
               </Link>
               <Link href="/" className="my-sidebar-btns d-flex align-items-center gap-3 text-decoration-none">
                  <Image src="/users.svg" width={22} height={22}/>
                  <span>Users</span>
               </Link>
               <Link href="/" className="my-sidebar-btns d-flex align-items-center gap-3 text-decoration-none">
                  <Image src="/event&logs.svg" width={22} height={22}/>
                  <span>Events & Logs</span>
               </Link>
               <Link href="/" className="my-sidebar-btns d-flex align-items-center gap-3 text-decoration-none">
                  <Image src="/organization.svg" width={22} height={22}/>
                  <span>Organization</span>
               </Link>
               <Link href="/" className="my-sidebar-btns d-flex align-items-center gap-3 text-decoration-none">
                  <Image src="/teams.svg" width={22} height={22}/>
                  <span>Teams</span>
               </Link>
            </div>
            )}

            {/* Sol menü: Sadece masaüstü versiyonunda gösterilecek */}
            <div className="row my-3 d-none d-lg-flex" style={{ height: "100%" }}>
               <div className="col-2 d-flex flex-column justify-content-between align-items-center">
                  <div className="d-flex flex-column align-items-center gap-3">
                     <Link href="/"><Image src="/dashboard_icon.svg" width={32} height={32} className="mb-3"/></Link>
                     <Link href="/"><Image src="/search.svg" width={26} height={26} /></Link>
                     <Link href="/"><Image src="/general.svg" width={26} height={26} /></Link>
                     <Link href="/"><Image src="/calendar.svg" width={26} height={26} /></Link>
                     <Link href="/"><Image src="/graphic_icon.svg" width={26} height={26} /></Link>
                  </div>
                  <div className="d-flex flex-column align-items-center gap-3 mb-5">
                     <Link href="/"><Image src="/settings.svg" width={32} height={32} /></Link>
                     <Link href="/"><Image src="/exit.svg" width={32} height={32} /></Link>
                  </div>
               </div>
               <div className="col d-flex flex-column justify-content-between align-items-center">
                  <div className="">
                     <Link href="/" className="my-sidebar-btns d-flex align-items-center gap-2 text-decoration-none"><Image src="/left.svg" width={22} height={22} />Lookscout Dashboard</Link>
                     <div className="position-relative mt-4">
                        <Image src="/search.svg" width={18} height={18} className="position-absolute" style={{ top: "50%", left: "10px", transform: "translateY(-50%)" }}/>
                        <input type="text" className="my-input form-control ps-5" placeholder="Search here.."/>
                     </div>
                     <div className="d-flex flex-column gap-3 mt-5">
                        <Link href="/" className="my-sidebar-btns d-flex align-items-center gap-3 text-decoration-none">
                           <Image src="/general.svg" width={22} height={22}/>
                           <span>General</span>
                        </Link>
                        <Link href="/" className="my-sidebar-btns d-flex align-items-center gap-3 text-decoration-none">
                           <Image src="/messages.svg" width={22} height={22}/>
                           <span>Messages</span>
                        </Link>
                        <Link href="/" className="my-sidebar-btns d-flex align-items-center gap-3 text-decoration-none">
                           <Image src="/notifications.svg" width={22} height={22}/>
                           <span>Notifications</span>
                        </Link>
                        <Link href="/" className="my-sidebar-btns d-flex align-items-center gap-3 text-decoration-none">
                           <Image src="/users.svg" width={22} height={22}/>
                           <span>Users</span>
                        </Link>
                        <Link href="/" className="my-sidebar-btns d-flex align-items-center gap-3 text-decoration-none">
                           <Image src="/event&logs.svg" width={22} height={22}/>
                           <span>Events & Logs</span>
                        </Link>
                        <Link href="/" className="my-sidebar-btns d-flex align-items-center gap-3 text-decoration-none">
                           <Image src="/organization.svg" width={22} height={22}/>
                           <span>Organization</span>
                        </Link>
                        <Link href="/" className="my-sidebar-btns d-flex align-items-center gap-3 text-decoration-none">
                           <Image src="/teams.svg" width={22} height={22}/>
                           <span>Teams</span>
                        </Link>
                     </div>
                  </div>
                  <div className=""  style={{marginBottom: "25px"}}>
                     <div className="d-flex align-items-center gap-3 mb-4">
                        <Image src="/ErickChamplin_Avatar.png" width={42} height={42} />
                        <div className="d-flex gap-5">
                           <p className="my-text-l m-0" style={{fontSize: "15px"}}>Brain Ford</p>
                           <span className="my-text-l m-0">...</span>
                        </div>
                     </div>
                     <div className="my-card p-4 rounded">
                        <Image src="/Progress circle.png" alt="" width={64} height={64} className="mb-3"/>
                        <p className="my-text-m m-0">Subscription Plan</p>
                        <p className="my-text-s">Your Subscription plan will wxpire soon please upgrade!</p>
                        <Link href="/" className="my-open-btn text-decoration-none">Upgrade</Link>
                     </div>
                  </div>
               </div>
            </div>
               <div className=""></div>
         </div>
      </>
   )
}