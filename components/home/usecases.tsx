import { useState } from 'react'
import { Tab } from '@headlessui/react'

const categories:string[] = ["screenshot","tweet","websiteurls"]
const UseCases = () =>  {

  return (
    <div className="w-full">
      <Tab.Group>
        <Tab.List className="flex justify-center items-center mb-4">
          {categories.map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>`text-xs md:text-sm px-2 py-1 outline-none border  ml-4 rounded-md  hover:text-indigo-900 mb-2 md:mb-0 ${selected ? 'text-indigo-900 border-indigo-900 hover:border-indigo-900' : 'text-gray-900 border-gray-900 hover:border-gray-900'}` }>
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className="self-center justify-self-center h-[200px] md:h-[250px] lg:h-[400px] w-full">
                <div className="h-full w-full rounded-md bg-demo-screenshot bg-no-repeat bg-top bg-contain lg:bg-center "></div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default UseCases