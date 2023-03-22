import { useState } from 'react'
import { Tab } from '@headlessui/react'

const categories:string[] = ["screenshot","tweets"]
const UseCases = () =>  {

  return (
    <div className="w-full">
      <Tab.Group>
        <Tab.List className="flex justify-center items-center mb-4">
          {categories.map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>`text-xs md:text-sm px-2 py-2 outline-none border ml-4 rounded-md mb-2 md:mb-0 tracking-normal hover:shadow ${selected ? 'text-primary-default font-bold border-primary-default ' : 'text-gray-900 border-border-light '}` }>
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
            <Tab.Panel
              key={1}
              className="self-center justify-self-center h-[200px] md:h-[250px] lg:h-[400px] w-full">
                <div className="h-full w-full rounded-lg bg-demo-screenshot-1 bg-no-repeat bg-top bg-cover lg:bg-center "></div>
            </Tab.Panel>
            <Tab.Panel
              key={2}
              className="self-center justify-self-center h-[200px] md:h-[250px] lg:h-[400px] w-full">
                <div className="h-full w-full rounded-lg bg-demo-screenshot-2 bg-no-repeat bg-top bg-cover lg:bg-center "></div>
            </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default UseCases