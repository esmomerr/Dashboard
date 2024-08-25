import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SideMenu({ dark, changeMode }) {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Menü açma/kapatma fonksiyonu
   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   return (
      <>
         <div className="my-card col-lg-3 m-0 flex-shrink-0">
         {/* Hamburger menü: Sadece mobil ve tablet versiyonlarında gösterilecek */}
         <div className="d-flex d-lg-none justify-content-between align-items-center p-3">
            <span className="my-text-l fw-bold" style={{ fontWeight: "600" }}>Lookscout Dashboard</span>
            <button onClick={toggleMenu} className="navbar-toggler"  data-bs-toggle="offcanvas" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu">
               {dark ? (
               <Image src="/hamburger_menu_dark.svg" alt="" width={32} height={32} />
               ) : (
               <Image src="/hamburger_menu.svg" alt="" width={32} height={32} />
               )}
            </button>
         </div>

         {/* Mobil Menü: Açılır kapanır menü */}
         <div className={`my-btn-transparent offcanvas offcanvas-end ${isMenuOpen ? "show" : ""}`} tabIndex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel" style={{ visibility: isMenuOpen ? "visible" : "hidden" }}>
            <div className="offcanvas-header">
               <h5 className="offcanvas-title" id="sidebarMenuLabel">Menu</h5>
               <button type="button" className="btn-close" onClick={toggleMenu}></button>
            </div>
            <div className="offcanvas-body">
               <div className="toggle-switch mx-4 mb-3">
               <label className="switch-label">
                  <input type="checkbox" className="checkbox" checked={dark} onChange={changeMode} />
                  <span className="slider"></span>
               </label>
               </div>
               <div className="d-flex flex-column gap-4 px-4 py-2 mb-3">
               <Link href="/" className="my-sidebar-btns d-flex align-items-center gap-3 text-decoration-none">
                  <Image src="/general.svg" alt="" width={22} height={22} />
                  <span>General</span>
               </Link>
               <Link href="/" className="my-sidebar-btns d-flex align-items-center gap-3 text-decoration-none">
                  <Image src="/messages.svg" alt="" width={22} height={22} />
                  <span>Messages</span>
               </Link>
               <Link href="/" className="my-sidebar-btns d-flex align-items-center gap-3 text-decoration-none">
                  <Image src="/notifications.svg" alt="" width={22} height={22} />
                  <span>Notifications</span>
               </Link>
               <Link href="/" className="my-sidebar-btns d-flex align-items-center gap-3 text-decoration-none">
                  <Image src="/users.svg" alt="" width={22} height={22} />
                  <span>Users</span>
               </Link>
               <Link href="/" className="my-sidebar-btns d-flex align-items-center gap-3 text-decoration-none">
                  <Image src="/event&logs.svg" alt="" width={22} height={22} />
                  <span>Events & Logs</span>
               </Link>
               <Link href="/" className="my-sidebar-btns d-flex align-items-center gap-3 text-decoration-none">
                  <Image src="/organization.svg" alt="" width={22} height={22} />
                  <span>Organization</span>
               </Link>
               <Link href="/" className="my-sidebar-btns d-flex align-items-center gap-3 text-decoration-none">
                  <Image src="/teams.svg" alt="" width={22} height={22} />
                  <span>Teams</span>
               </Link>
               </div>
            </div>
         </div>

         {/* Sol menü: Sadece masaüstü versiyonunda gösterilecek */}
         <div className="row my-3 d-none d-lg-flex" style={{ height: "100%" }}>
            <div className="col-2 d-flex flex-column justify-content-between align-items-center">
               <div className="d-flex flex-column align-items-center gap-3">
               <Link href="/"><Image src="/dashboard_icon.svg" alt="" width={32} height={32} className="mb-3" /></Link>
               <Link href="/"><Image src="/search.svg" alt="" width={26} height={26} /></Link>
               <Link href="/"><Image src="/general.svg" alt="" width={26} height={26} /></Link>
               <Link href="/"><Image src="/calendar.svg" alt="" width={26} height={26} /></Link>
               <Link href="/"><Image src="/graphic_icon.svg" alt="" width={26} height={26} /></Link>
               </div>
               <div className="d-flex flex-column align-items-center gap-3 mb-5">
               <Link href="/"><Image src="/settings.svg" alt="" width={32} height={32} /></Link>
               <Link href="/"><Image src="/exit.svg" alt="" width={32} height={32} /></Link>
               </div>
            </div>
            <div className="col d-flex flex-column justify-content-between align-items-center">
               <div>
               <Link href="/" className="my-sidebar-btns d-flex align-items-center gap-2 text-decoration-none">
                  <Image src="/left.svg" alt="" width={22} height={22} />Lookscout Dashboard
               </Link>
               <div className="position-relative mt-4">
                  <Image src="/search.svg" alt="" width={18} height={18} className="position-absolute" style={{ top: "50%", left: "10px", transform: "translateY(-50%)" }} />
                  <input type="text" className="my-input form-control ps-5" placeholder="Search here.." />
               </div>
               <div className="d-flex flex-column gap-3 mt-5">
                  <Link href="/" className="my-sidebar-btns d-flex align-items-center gap-3 text-decoration-none">
                     <Image src="/general.svg" alt="" width={22} height={22} />
                     <span>General</span>
                  </Link>
                  <Link href="/" className="my-sidebar-btns d-flex align-items-center gap-3 text-decoration-none">
                     <Image src="/messages.svg" alt="" width={22} height={22} />
                     <span>Messages</span>
                  </Link>
                  <Link href="/" className="my-sidebar-btns d-flex align-items-center gap-3 text-decoration-none">
                     <Image src="/notifications.svg" alt="" width={22} height={22} />
                     <span>Notifications</span>
                  </Link>
                  <Link href="/" className="my-sidebar-btns d-flex align-items-center gap-3 text-decoration-none">
                     <Image src="/users.svg" alt="" width={22} height={22} />
                     <span>Users</span>
                  </Link>
                  <Link href="/" className="my-sidebar-btns d-flex align-items-center gap-3 text-decoration-none">
                     <Image src="/event&logs.svg" alt="" width={22} height={22} />
                     <span>Events & Logs</span>
                  </Link>
                  <Link href="/" className="my-sidebar-btns d-flex align-items-center gap-3 text-decoration-none">
                     <Image src="/organization.svg" alt="" width={22} height={22} />
                     <span>Organization</span>
                  </Link>
                  <Link href="/" className="my-sidebar-btns d-flex align-items-center gap-3 text-decoration-none">
                     <Image src="/teams.svg" alt="" width={22} height={22} />
                     <span>Teams</span>
                  </Link>
               </div>
               </div>
               <div style={{ marginBottom: "25px" }}>
               <div className="d-flex align-items-center gap-3 mb-4">
                  <Image src="/ErickChamplin_Avatar.png" alt="" width={42} height={42} />
                  <div className="d-flex gap-5">
                     <p className="my-text-l m-0" style={{ fontSize: "15px" }}>Brain Ford</p>
                     <span className="my-text-l m-0">...</span>
                  </div>
               </div>
               <div className="my-card p-4 rounded">
                  <Image src="/mail_icon.svg" alt="" width={22} height={22} />
               </div>
               </div>
            </div>
         </div>
         </div>
      </>
   );
}
