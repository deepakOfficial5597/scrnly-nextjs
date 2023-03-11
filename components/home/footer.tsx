import Link from "next/link"

const Footer = () => {
    return <footer className="py-2 flex flex-col justify-between items-center px-10 border-t border-gray-200 sm:flex-row">
        <p className="text-xs"> All copyrights reserved </p>
        <div className="flex gap-2">
        <Link href="/about"><span className="text-xs hover:underline hover:text-indigo-900"> About </span></Link>
        <Link href="/privacy-policy"><span className="text-xs hover:underline hover:text-indigo-900"> Privacy Policy </span></Link>
        <Link href="/contact-us"><span className="text-xs hover:underline hover:text-indigo-900"> Contact us </span></Link>
        </div>
  </footer>
}

export default Footer