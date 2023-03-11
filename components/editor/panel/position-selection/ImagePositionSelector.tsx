import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { HiOutlineSwitchVertical } from "react-icons/hi"
import { IMAGE_POSITION_CONFIG } from '@/shared/constants/config'
import { getPositionStyles, removeProperty } from '@/shared/utils/helpers'
import useEditor from '@/shared/hooks/useEditor'
import ImagePositionCard from './ImagePositionCard'

const options = [IMAGE_POSITION_CONFIG.TOP_LEFT,IMAGE_POSITION_CONFIG.TOP_CENTER,IMAGE_POSITION_CONFIG.TOP_RIGHT,IMAGE_POSITION_CONFIG.CENTER_LEFT,IMAGE_POSITION_CONFIG.CENTER_CENTER,IMAGE_POSITION_CONFIG.CENTER_RIGHT,IMAGE_POSITION_CONFIG.BOTTOM_LEFT,IMAGE_POSITION_CONFIG.BOTTOM_CENTER,IMAGE_POSITION_CONFIG.BOTTOM_RIGHT]
const ImagePositionSelector = () => {

    const { panel, setMockup, setPanel } = useEditor()

    const changeImagePositionSelection = (value:string) => {
        setPanel((previousPanel) => {
            return {
                ...previousPanel, imagePosition: value
            }
        })
        setMockup((previousMockup) => {
            let styles = previousMockup.styles
            styles = removeProperty(styles, "top");
            styles = removeProperty(styles, "right");
            styles = removeProperty(styles, "bottom");
            styles = removeProperty(styles, "left");
            return {
            ...previousMockup,
            styles:{
                ...styles,
                ...getPositionStyles(value)
            }
        }})
    }

    return (
        <Listbox value={panel.imagePosition} onChange={changeImagePositionSelection}>
            <div className="relative mt-1">
                <Listbox.Button className="flex flex-row justify-between px-2 py-2 bg-background-primary rounded-md border border-border-light focus:border-border-primary hover:shadow hover:cursor-pointer z-10" as="div">
                    <span className="text-sm">{panel.imagePosition}</span>
                    <span><HiOutlineSwitchVertical className="h-5 w-5 text-text-customgray" aria-hidden="true" /></span>
                </Listbox.Button>
                <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0" >
                    <Listbox.Options className="absolute mt-2 w-full flex flex-row flex-wrap justify-between bg-background-primary py-2 rounded-md border border-border-light shadow-md">
                        {options.map((option, ipOptionIdx) => (
                            <Listbox.Option key={ipOptionIdx} className={`relative cursor-default select-none text-sm py-2`} value={option}>
                                {({ selected }) => (
                                    <ImagePositionCard title={option} selected={selected} />
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    )
}

export default ImagePositionSelector