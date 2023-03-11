import Image from "next/image"

import { useSession, signIn, signOut } from "next-auth/react"

const getNameInitials = (name:string | undefined | null) => {
    if(!name) return "SU"
   return name.split(" ").reduce((previous,current) => previous.concat(current.charAt(0)),'').toUpperCase()
}
const EditorHeader = () => {
    const { data: session, status } = useSession()

    return (
        <header className="flex justify-between items-center h-[50px] px-10 border-b border-gray-200 shadow-md">
            <div className="flex flex-row items-center gap-2">
                <Image src="/assets/logo-light.svg" alt="Scrnly Logo Image" height={20} width={20}/>
                <h1 className="font-bold">Scrnly</h1>
            </div>
            <div className="flex gap-2">
                {    
                    (session && status === "authenticated") &&
                     (  
                        <>
                            <div className="flex flex-col justify-center">
                                <p>{session?.user?.name}</p>
                                <p className="text-xs self-end">Guest</p>
                            </div>
                            <div className="h-[40px] w-[40px] rounded-full bg-gray-800 relative group flex justify-center items-center hover:cursor-pointer">
                                <span className="text-white">{getNameInitials(session?.user?.name)}</span>
                                <div className="invisible  absolute min-w-[100px] -bottom-[80%] right-[50%] shadow-lg rounded-md border group-hover:visible">
                                    <ul className="">
                                        <li className="text-sm bg-white py-2 px-6 hover:bg-gray-100 hover:cursor-pointer" onClick={() => signOut()}> Logout </li>
                                    </ul>
                                </div>
                            </div>
                        </>
                    )
                }
                {
                    !session && <h6 className="text-sm mr-2 hover:underline hover:cursor-pointer" onClick={() => signIn()}> Login </h6>
                }

            </div>
        </header>
    )
}

export default EditorHeader