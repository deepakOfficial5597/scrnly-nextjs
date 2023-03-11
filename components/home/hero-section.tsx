import Image from "next/image"
import Link from "next/link"

const HeroSection = () => {

    return (
        <div className="h-full w-full flex flex-col justify-around items-center gap-16 max-w-[400px] p-10 md:px-0">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide text-center"> Beautify screenshots in just a few clicks</h1>
            <div className="w-full flex flex-col gap-2 items-center bg-gray-200 p-10 rounded-md">
              <input id="image__url" type="text" className="mt-1 w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm" placeholder="Enter tweet URL or any website URL"/>
              <p> OR </p>
              <Link href="/editor?t=ui" className="px-4 py-2 bg-indigo-900 text-white rounded-md text-xs sm:text-sm">Upload a screenshot</Link>
            </div>
            <div className="w-full flex flex-col gap-2 items-center">
              <div className="w-full flex flex-row gap-2 justify-center">
                <Link href="/editor?t=di&v=si1" className="rounded-md overflow-hidden">
                  <Image src="/assets/demo-image-1.png" height={60} width={60} alt="Sample Image 1"/>
                </Link>
                <Link href="/editor?t=di&v=si1" className="rounded-md overflow-hidden">
                  <Image src="/assets/demo-image-2.png" height={60} width={60} alt="Sample Image 2"/>
                </Link>
                <Link href="/editor?t=di&v=si1" className="rounded-md overflow-hidden">
                  <Image src="/assets/demo-image-3.png" height={60} width={60} alt="Sample Image 3"/>
                </Link>
                <Link href="/editor?t=di&v=si1" className="rounded-md overflow-hidden">
                  <Image src="/assets/demo-image-4.png" height={60} width={60} alt="Sample Image 4"/>
                </Link>
              </div>
              <p className="text-sm font-light">Try out with these samples</p>
            </div>
          </div>
    )
}

export default HeroSection