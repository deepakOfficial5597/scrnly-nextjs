import Image from "next/image"
import Link from "next/link"

const Header = () => {
    return (
        <header className="flex justify-between items-center min-h-[50px] px-10">
            <div className="flex flex-row items-center gap-2">
                <Image src="/assets/logo-light.svg" alt="Scrnly Logo Image" height={20} width={20}/>
                <h1 className="font-bold">Scrnly</h1>
            </div>
            <div className="flex gap-2">
                <Link href="/how-to" className="text-sm mr-2"> How To ? </Link>
            </div>
        </header>
    )
}

export default Header