import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router";

const HeroSection = () => {
  const router = useRouter()

  const handleKeyDown = (e: any) => {
    if(e.keyCode != 13) return
    
    const url = e.target.value
    router.push("/editor?t=url&v=" + url)
  };
    return (
        <div className="h-full w-full flex flex-col justify-center items-center gap-8 px-10 md:px-0">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold tracking-wide text-center md:max-w-[60%]" style={{"lineHeight": "65px"}}> Beautify screenshots in just few clicks</h1>
            <div className="w-full flex flex-col justify-center items-center gap-6">
              {/* <div className="w-[50%] flex flex-col gap-3 items-center bg-gray-100 p-5 rounded-lg border border-dotted border-spacing-3 border-gray-400 shadow">
                <input id="image__url" type="text" className="mt-1 w-full border border-gray-300 px-3 py-3 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm placeholder:text-gray-600" placeholder="Enter tweet URL or any website URL" onKeyDown={handleKeyDown}/>
                <p className="text-primary-default font-bold"> OR </p>
              </div> */}
                <Link href="/editor?t=upload" className="homepage_upload_cta px-8 py-3 bg-primary-default text-white rounded-md text-xs sm:text-sm">Upload a screenshot</Link>
              <div className="w-full flex flex-col gap-2 items-center">
                <div className="w-full flex flex-row gap-4 justify-center">
                  <Link href="/editor?t=sample&v=1" className="homepage_sample_cta rounded-md overflow-hidden">
                    <Image src="/assets/demo-image/demo-image-1.png" height={70} width={70} alt="Sample Image 1"/>
                  </Link>
                  <Link href="/editor?t=sample&v=2" className="homepage_sample_cta rounded-md overflow-hidden">
                    <Image src="/assets/demo-image/demo-image-2.png" height={70} width={70} alt="Sample Image 2"/>
                  </Link>
                </div>
                <p className="text-lg font-light text-center">or try out with these samples ☝️</p>
              </div>
            </div>
            
          </div>
    )
}

export default HeroSection