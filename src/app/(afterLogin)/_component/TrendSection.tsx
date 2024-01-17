'use client'

import style from './trendSection.module.css';
import Trend from "@/app/(afterLogin)/_component/Trend";
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';

export default function TrendSection() {
  const pathname = usePathname();
  const {data: session} = useSession();

  console.log(pathname)

  if(pathname === '/explore') return null;

  if(!session?.user) {
    return null;
  }

  return (
    <div className={style.trendBg}>
      <div className={style.trend}>
        <h3>나를 위한 트렌드</h3>
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
      </div>
    </div>
  )
}