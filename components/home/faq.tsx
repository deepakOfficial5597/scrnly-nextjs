import { Disclosure } from '@headlessui/react'
import { HiChevronUp } from "react-icons/hi";

export default function FAQ() {
  return (
    <div className="flex flex-col gap-4">
        <Disclosure as="div" className="bg-gray-50 px-4 hover:cursor-pointer border rounded-md">
          {({ open }) => (
            <>
              <Disclosure.Button className="w-full flex flex-row justify-between items-center py-2 hover:cursor-pointer">
                <p className="font-semibold text-lg">Do we store your images ?</p>
                <HiChevronUp
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  }`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="py-2 text-sm md:text-lg text-gray-500">
              We do not store these images on our servers or any other storage medium. Once the image has been analyzed and processed, it is deleted from our system
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="bg-gray-50 px-4 hover:cursor-pointer border rounded-md">
          {({ open }) => (
            <>
              <Disclosure.Button className="w-full flex flex-row justify-between items-center py-2 hover:cursor-pointer">
                <p className="font-semibold text-lg">Is this website free ?</p>
                <HiChevronUp
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  }`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="py-2 text-lg text-gray-500">
              Yes, as of now it’s completely free. But we will add some paid features in the coming times.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
    </div>
  )
}
