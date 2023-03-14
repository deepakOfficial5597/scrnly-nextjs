import useEditor from "@/shared/hooks/useEditor"
import { getMockupBorderRadiusStyles } from "@/shared/utils/helpers"

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
            styles: { ...previousMockup.styles , ...getMockupBorderRadiusStyles(mockup.type, value+"px")}
        }})
    }

    const backgroundSizeValue = (Number(panel.radius) - 0) * 100 / (32 - 0) + '% 100%'
    return <>
        <input type="range" className="radius-range-input" value={panel.radius} max={32} onChange={(e) => changeRadius(e.target.value)} style={{backgroundSize:backgroundSizeValue}}/>
    </>
}

export default RadiusSelection