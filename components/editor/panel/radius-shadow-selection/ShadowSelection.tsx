import { SHADOW_CONFIG } from "@/shared/constants/config"
import useEditor from "@/shared/hooks/useEditor"
import { useState } from "react"

const ShadowSelection = () => {

    const { setMockup, setPanel } = useEditor()
    const [shadow,setShadow] = useState(0)

    const changeShadow = (value:string) => {
        setShadow(Number(value))
        setMockup((previousMockup) => {
            const classes = previousMockup.classNames
            const classesArr = classes?.split(' ').filter(e => !e.includes("shadow"))
            return {
            ...previousMockup,
            classNames: classesArr?.join(' ') +  SHADOW_CONFIG[Number(value)]
        }})
        setPanel((previousPanel) => {
            return {
                ...previousPanel, shadow: value
            }
        })
    }

    return <>
        <input type="range" className="range accent-primary-default" value={shadow} max={SHADOW_CONFIG.length - 1} onChange={(e) => changeShadow(e.target.value)}/>
    </>
}

export default ShadowSelection