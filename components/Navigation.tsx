"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu, Volume2, VolumeX, X } from "lucide-react";
import { useEffect, useState } from "react";
export function Navigation({muted,onSound}:{muted:boolean;onSound:()=>void}){
 const [scrolled,setScrolled]=useState(false); const [open,setOpen]=useState(false);
 useEffect(()=>{const f=()=>setScrolled(scrollY>35);f();addEventListener("scroll",f,{passive:true});return()=>removeEventListener("scroll",f)},[]);
 return <header className={`nav ${scrolled?"scrolled":""}`}>
  <Link href="#top" className="brand"><Image src="/images/adhvan-logo.png" alt="Adhvan Game Studios" width={176} height={44} priority/></Link>
  <nav className="desktopNav"><Link href="#about">About</Link><Link href="#world">World</Link><Link href="#media">Media</Link><Link href="/press-kit">Press Kit</Link><Link href="#studio">Studio</Link></nav>
  <div className="navTools"><button className="sound" onClick={onSound}>{muted?<VolumeX size={16}/>:<Volume2 size={16}/>}<span>{muted?"Enable sound":"Sound on"}</span></button><button className="menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div>
  {open&&<nav className="mobileNav"><Link onClick={()=>setOpen(false)} href="#about">About</Link><Link onClick={()=>setOpen(false)} href="#world">World</Link><Link onClick={()=>setOpen(false)} href="#media">Media</Link><Link onClick={()=>setOpen(false)} href="/press-kit">Press Kit</Link><Link onClick={()=>setOpen(false)} href="#studio">Studio</Link></nav>}
 </header>
}
