import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'WOAA Architects - Trang Admin',
  description: 'Mô tả website',
}

export default function Home() {
  const menu = [
    {
      name: "Trang chủ",
      path: '/'
    },
    {
      name: "Project",
      path: '/project'
    },
    {
      name: "Explore",
      path: '/explore'
    },
    {
      name: "Contact",
      path: '/contact'
    }
  ];

  return (
    <div>
      <ul>
        {menu.map((item, idx) => {
          return <li key={idx}>
            <Link href={item.path} >{item.name}</Link>
          </li>
        })}
      </ul>
    </div>
  )
}
