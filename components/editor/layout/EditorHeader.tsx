import Image from "next/image"
import Link from "next/link"

const EditorHeader = () => {

    return (
        <header className="flex justify-between items-center min-h-[50px] px-10 border-b border-gray-200 shadow-md">
            <Link className="flex flex-row items-center gap-2" href="/">
                <Image src="/assets/logo.png" alt="Scrnly Logo Image" height={16} width={16}/>
                <h1 className="font-extrabold text-primary-default">Scrnly</h1>
            </Link>
            <div className="flex gap-2">
                {/* <Link href="/how-to" className="text-sm mr-2"> How To ? </Link> */}
            </div>
        </header>
    )
}

export default EditorHeader