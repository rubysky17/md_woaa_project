import Link from 'next/link'
import Image from 'next/image'

import useWindowDimension from '@/hooks/useWindowDimension';

import "./styles.scss"
import { useTranslations } from 'next-intl';

interface IProps {
    path: string,
    name: string,
    image: string,
    type?: string,
}

function MenuItems(props: IProps) {
    const { path, name, image } = props;
    const { width } = useWindowDimension();
    const t = useTranslations('homepage');

    return (
        <div className="p-10 wrapper-menu-item">
            <Link href={path}>
                <Image
                    src={image}
                    width={width / 3}
                    height={width / 3}
                    alt="Picture of menu items"
                    className="wrapper-menu-item-image"
                />

                <p className="font-primary font-semibold uppercase wrapper-menu-item-text">{t(name)}</p>
            </Link>
        </div>
    )
}

export default MenuItems