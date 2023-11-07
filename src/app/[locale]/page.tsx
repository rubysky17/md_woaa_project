"use client"

import { useEffect, useState } from "react";
import { Metadata } from "next"

import { LoadingPage, Menu } from "@/components";
import { MENU_CONSTANT } from "@/constants/constants";


const metadata: Metadata = {
  title: 'WOAA Architects - Trang Admin',
  description: 'Mô tả website',
}

export default function Home() {
  const [isLoadingScreen, setIsLoadingScreen] = useState(true);


  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoadingScreen(false)
  //   }, 2000)
  // }, []);

  return (
    <>
      {/* <LoadingPage isActive={isLoadingScreen} /> */}

      <Menu menu={MENU_CONSTANT} />

    </>
  )
}

