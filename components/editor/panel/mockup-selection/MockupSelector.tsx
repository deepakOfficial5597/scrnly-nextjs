import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { HiChevronDown, HiChevronUp } from "react-icons/hi"
import { MOCKUP_CONFIG } from '@/shared/constants/config'
import useEditor from '@/shared/hooks/useEditor'
import MockupCard from './MockupCard'
import { getMockupBorderRadiusStyles } from '@/shared/utils/helpers'

const options = MOCKUP_CONFIG
const MockupSelector = () => {

    const { panel, setPanel, setMockup } = useEditor()

    const changeMockupSelection = (value:string) => {
        const selectedMockup = MOCKUP_CONFIG.filter(mockup => mockup.title == value)
        if(selectedMockup.length){
            setPanel((previousPanel) => {
                return {
                    ...previousPanel, mockup: selectedMockup[0].title
                }
            })
            setMockup((previousMockup) => {
                return {
                ...previousMockup,
                type: selectedMockup[0].type,
                styles: {
                    ...previousMockup.styles,
                    ...getMockupBorderRadiusStyles(selectedMockup[0].type,"8px")
                }
            }})
        }
    }

    return (
        <Listbox value={panel.mockup} onChange={changeMockupSelection}>
            {({ open }) => (
                <div className="relative w-full h-full">
                    <Listbox.Button className="flex flex-row justify-between px-2 py-2 bg-background-primary rounded-md border border-border-light focus:border-primary-default hover:shadow hover:cursor-pointer" as="div">
                        <span className="text-sm text-text-default">{panel.mockup}</span>
                        {
                            open ? <span><HiChevronUp className="h-5 w-5 text-text-default" aria-hidden="true" /></span>
                            : <span><HiChevronDown className="h-5 w-5 text-text-default" aria-hidden="true" /></span>
                        }
                        
                    </Listbox.Button>
                    <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0" >
                        <Listbox.Options className="absolute mt-2 min-w-[418px] flex flex-row justify-start p-2 flex-wrap bg-background-primary rounded-md border border-border-light shadow-md z-20">
                            {options.map((option, mockupOptionIdx) => (
                                <Listbox.Option key={mockupOptionIdx} className={`relative cursor-default select-none text-sm py-2 w-[30%] hover:cursor-pointer ml-[2.5%]`} value={option.title}>
                                    {({ selected }) => (
                                        <MockupCard title={option.title} imagePath={option.imagePath} selected={selected} />
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            )}
        </Listbox>
    )
}

export default MockupSelector