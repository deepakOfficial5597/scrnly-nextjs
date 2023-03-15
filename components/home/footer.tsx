import Link from "next/link"

const Footer = () => {
    return <footer className="py-4 flex justify-between items-center px-16 border-t border-gray-200 sm:flex-row">
        <p className="text-[16px]"> All copyrights reserved </p>
        <div className="flex gap-2">
        <Link href="/about"><span className="text-xs md:text-sm hover:underline hover:text-primary-default font-medium"> About </span></Link>
        <Link href="/privacy-policy"><span className="text-xs md:text-sm hover:underline hover:text-primary-default font-medium"> Privacy Policy </span></Link>
        <Link href="/contact-us"><span className="text-xs md:text-sm hover:underline text-primary-default font-semibold"> Contact us </span></Link>
        </div>
  </footer>
}

export default Footer