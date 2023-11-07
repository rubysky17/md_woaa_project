import React from 'react'
import Image from 'next/image'
import { transLang } from '@/constants/constants';
import { MenuItems } from './components';
import { useRouter } from 'next-intl/client';

interface IProps {
    menu: Array<any>
}
function Menu(props: IProps) {
    const { menu } = props;
    const router = useRouter();

    return (
        <div className="p-10 w-screen flex justify-center items-center h-screen bg-primary flex-col" >
            <div className='flex justify-start items-center flex-col w-full' style={{
                height: "10%",
            }}>
                <Image
                    src="/logo.png"
                    width={40}
                    height={40}
                    alt="Picture of the author"
                    sizes='100%'
                />

                <div className="flex text-white mt-1">
                    {transLang.map((item, idx) => {
                        return <div key={idx} className="flex">
                            <p className="font-medium font-secondary px-2 uppercase cursor-pointer" onClick={() => {
                                router.replace('/', { locale: item.sub });
                            }}>{item.lang}</p>

                            {idx !== transLang.length - 1 && <div>|</div>}
                        </div>
                    })}
                </div>
            </div>


            <div className="h-4/5 flex text-white justify-between w-full">
                <ul className="flex items-center justify-between w-full">
                    {menu.map((item, idx) => {
                        return <li key={idx}>
                            <MenuItems {...item} />
                        </li>
                    })}
                </ul>
            </div>


            <div style={{
                height: "10%",
                width: '100%'
            }}></div>
        </div>

    )
}

export default Menu