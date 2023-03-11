import useEditor from "@/shared/hooks/useEditor"
import { getDefaultBorderRadius, getMockupBorderRadiusStyles } from "@/shared/utils/helpers"
import { useState } from "react"

const RadiusSelection = () => {

    const { mockup, setMockup, panel, setPanel } = useEditor()

    const changeRadius = (value:string) => {
        setPanel((previousPanel) => {
            return {
                ...previousPanel, radius: value
            }
        })
        setMockup((previousMockup) => {
            return {
            ...previousMockup,
            styles: { ...previousMockup.styles , ...getMockupBorderRadiusStyles(mockup.type, value+"%")}
        }})
    }

    return <>
        <input type="range" className="range accent-primary-default" value={panel.radius} max={100} onChange={(e) => changeRadius(e.target.value)}/>
    </>
}

export default RadiusSelection