import Image from "next/image"
import Link from "next/link"
import { useSession, signIn, signOut } from "next-auth/react"

const Header = () => {
    const { data: session, status } = useSession()
    return (
        <header className="flex justify-between items-center min-h-[50px] px-10">
            <div className="flex flex-row items-center gap-2">
                <Image src="/assets/logo-light.svg" alt="Scrnly Logo Image" height={20} width={20}/>
                <h1 className="font-bold">Scrnly</h1>
            </div>
            <div className="flex gap-2">
                {
                    (status === "authenticated") && <p className="text-sm">Welcome {session?.user?.name}</p>
                }
                {
                    session ? <Link href="logout" className="text-sm mr-2" onClick={() => signOut()}> Logout </Link> : <Link href="login" className="text-sm mr-2" onClick={() => signIn()}> Login </Link>
                }
                
            </div>
        </header>
    )
}

export default Header