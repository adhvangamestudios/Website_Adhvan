import type { Metadata } from "next"; import "./globals.css";
export const metadata:Metadata={title:"Adhvan — Journey of Consciousness",description:"A premium action-adventure set in an original world inspired by Indian philosophical thought.",openGraph:{title:"Adhvan — Journey of Consciousness",description:"A premium action-adventure set in an original world inspired by Indian philosophical thought.",images:["/images/hero-poster.jpg"]}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
