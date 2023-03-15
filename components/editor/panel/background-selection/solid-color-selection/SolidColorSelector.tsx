import { Fragment, useState } from 'react'

import { Listbox, Transition } from '@headlessui/react'
import { MdRadioButtonChecked } from "react-icons/md"
import { SketchPicker } from 'react-color'
import rgbHex from "rgb-hex"

import useEditor from '@/shared/hooks/useEditor'
import { BACKGROUND_CONFIG } from '@/shared/constants/config'

const SolidColorSelector = ({active = false}:GradientSelectorProps) => {

    const { canvas, setCanvas, panel, setPanel } = useEditor()
    const [color,setColor] = useState("#B77FCA")

    const changeSolidColorSelection = (value:string) => {
        setCanvas((previousCanvas) => {
            return {
            ...previousCanvas, styles: { ...previousCanvas.styles, background: value }
        }})
        setPanel((previousPanel) => {
            return {
                ...previousPanel, backgroundType: BACKGROUND_CONFIG.SOLID, backgroundValue: value
            }
        })
        setColor(value)
    }

    
    return (
        <Listbox value="" >
            {({ open }) => (
                <div className="relative w-full h-full">
                    <Listbox.Button className="relative h-full w-full border-2 border-background-primary hover:border-primary-default rounded-md " as="div" style={{background: panel.backgroundType === BACKGROUND_CONFIG.SOLID ? canvas?.styles?.background : "#B77FCA" }} >
                        {
                            active && (
                            <span className="absolute top-1 left-1">
                                <MdRadioButtonChecked className="text-text-secondary"/>
                            </span> 
                            )   
                        }
                    </Listbox.Button>
                    {open && (
                        <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0" >
                            <Listbox.Options className="absolute mt-2 p-2 flex flex-row justify-center items-center bg-background-primary rounded-md border border-border-light shadow-md z-20" static>
                                <Listbox.Option className={`cursor-default select-none text-sm h-full w-full hover:cursor-pointer`} value="">
                                    <SketchPicker className="h-full w-full" color={color} onChange={(c) => changeSolidColorSelection("#" + rgbHex(c.rgb.r, c.rgb.g, c.rgb.b, c.rgb.a))}/>
                                </Listbox.Option>
                            </Listbox.Options>
                        </Transition>
                    )}
                </div>
            )}
        </Listbox>
    )
}

type GradientSelectorProps = {
    active: boolean
}

export default SolidColorSelector