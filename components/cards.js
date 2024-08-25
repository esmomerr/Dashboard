import '@/scss/cards.scss'
import Image from 'next/image'
import NewGraphic from './newGraphic'
import GlobalGraphic from './globalGraphic'
import IntuitiveGraphic from './intuitiveGraphic'

export default function Cards(){
   return (
      <>
         <div className="my-cards row gap-2 mt-5">
            <div className="my-card col rounded py-3 px-4">
               <div className="d-flex align-items-center justify-content-between">
                  <p className="my-text-l m-0">Revenue</p>
                  <span className="my-text-l fs-4">...</span>
               </div>

               <div className="d-flex align-items-center justify-content-between">
                  <div>
                     <p className="my-text-xl mb-2 fs-4">$390</p>
                     <div className="d-flex align-items-center gap-2">
                        <p className="my-blue-btn py-1 px-2 rounded">New</p>
                        <p className="my-text-xs">monthly growth</p>
                     </div>
                  </div>
                  {/* <Image src="/nexGraphic.svg" alt='' width={88} height={88}/> */}
                  <NewGraphic />
               </div>
            </div>

            <div className="my-card col rounded py-3 px-4">
               <div className="d-flex align-items-center justify-content-between">
                  <p className="my-text-l m-0">Expenses</p>
                  <span className="my-text-l fs-4">...</span>
               </div>

               <div className="d-flex align-items-center justify-content-between">
                  <div>
                     <p className="my-text-xl mb-2 fs-4">$680</p>
                     <div className="d-flex align-items-center gap-2">
                        <p className="my-red-btn py-1 px-2 rounded">global</p>
                        <p className="my-text-xs">monthly growth</p>
                     </div>
                  </div>
                  {/* <Image src="/globalGraphic.svg" alt='' width={88} height={88} /> */}
                  <GlobalGraphic />
               </div>
            </div>

            <div className="my-card col rounded py-3 px-4">
               <div className="d-flex align-items-center justify-content-between">
                  <p className="my-text-l m-0">Expenses</p>
                  <span className="my-text-l fs-4">...</span>
               </div>

               <div className="d-flex align-items-center justify-content-between">
                  <div>
                     <p className="my-text-xl mb-2 fs-4">$680</p>
                     <div className="d-flex align-items-center gap-2">
                        <p className="my-green-btn py-1 px-2 rounded">intuitive</p>
                        <p className="my-text-xs">monthly growth</p>
                     </div>
                  </div>
                  {/* <Image src="/intuitiveGraphic.svg" alt='' width={88} height={88} /> */}
                  <IntuitiveGraphic />
               </div>
            </div>
         </div>
      </>
   )
}