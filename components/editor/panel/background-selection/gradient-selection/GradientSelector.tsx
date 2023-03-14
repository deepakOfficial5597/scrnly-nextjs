import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { MdRadioButtonChecked } from "react-icons/md"
import { BACKGROUND_CONFIG, GRADIENT_CONFIG } from '@/shared/constants/config'
import { getDefaultGradient } from '@/shared/utils/helpers'
import useEditor from '@/shared/hooks/useEditor'
import GradientCard from './GradientCard'

const options = GRADIENT_CONFIG
const GradientSelector = ({active = false}:GradientSelectorProps) => {

    const { canvas, setCanvas, panel, setPanel } = useEditor()

    const changeGradientSelection = (value:string) => {
        const selectedGradient = GRADIENT_CONFIG.filter(gradient => gradient.title == value)
        if(selectedGradient.length){
            setCanvas((previousCanvas) => {
                return {
                ...previousCanvas, styles: { ...previousCanvas.styles, background: selectedGradient[0].gradient }
            }})
            setPanel((previousPanel) => {
                return {
                    ...previousPanel, backgroundType: BACKGROUND_CONFIG.GRADIENT, backgroundValue: selectedGradient[0].title
                }
            })
        }
    }

    const reInitializeState = () => {
        if(panel.backgroundType === BACKGROUND_CONFIG.GRADIENT) return
        setPanel((previousPanel) => {
            return {
                ...previousPanel, backgroundValue: ""
            }
        })
    }
    return (
        <Listbox value={panel.backgroundValue} onChange={changeGradientSelection}>
            <div className="relative w-full h-full">
                <Listbox.Button className="relative h-full w-full border-2 border-background-primary hover:border-primary-default rounded-md" as="div" style={{background: panel.backgroundType === BACKGROUND_CONFIG.GRADIENT ? canvas?.styles?.background : getDefaultGradient().gradient }} onClick={ reInitializeState }>
                    {
                        active && (
                           <span className="absolute top-1 left-1">
                                <MdRadioButtonChecked className="text-text-secondary"/>
                           </span> 
                        )   
                    }
                </Listbox.Button>
                <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0" >
                    <Listbox.Options className="absolute mt-2 min-w-[418px] flex flex-row justify-start p-2 flex-wrap bg-background-primary rounded-md border border-border-light shadow-md z-20">
                        {options.map((option, gradientOptionIdx) => (
                            <Listbox.Option key={gradientOptionIdx} className={`relative cursor-default select-none text-sm py-2 w-[30%] hover:cursor-pointer ml-[2.5%]`} value={option.title}>
                                {({ selected }) => (
                                    <GradientCard title={option.title} gradient= {option.gradient} selected= {selected}/>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    )
}

type GradientSelectorProps = {
    active: boolean
}

export default GradientSelector