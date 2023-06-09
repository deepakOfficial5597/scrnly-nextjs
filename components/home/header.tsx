import Image from "next/image"
import Link from "next/link"

const Header = () => {
    return ( 
        <header className="flex justify-between items-center min-h-[55px] px-16 border-b border-gray-200 shadow-sm">
          <div className="flex flex-row items-center gap-2">
              <Image src="/assets/logo.png" alt="Scrnly Logo Image" height={16} width={16}/>
              <h1 className="font-extrabold text-primary-default">Scrnly</h1>
          </div>
          <div className="flex gap-2">
            <Link href="/editor" className="homepage_header_editor_cta text-sm tracking-wide mr-2 text-primary-default font-semibold hover:underline"> Editor </Link>  
          </div>
        </header>
    )
}
export default Header