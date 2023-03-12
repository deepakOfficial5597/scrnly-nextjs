import useEditor from "@/shared/hooks/useEditor"
import RadiusSelection from "./RadiusSelection"
import ShadowSelection from "./ShadowSelection"

const RadiusShadowSelection = () => {
    const { panel } = useEditor()
    return (
        <div className="flex flex-row gap-4">
            <div className="flex-1">
                <h1 className="mb-2 font-bold text-sm"> Border Radius <span className="text-[12px] bg-background-light text-text-customgray px-1">{panel.radius}</span></h1>
                <div className="flex flex-row gap-4">
                    <RadiusSelection />
                </div>
            </div>
            <div className="flex-1 px-4">
                <h1 className="mb-2 font-bold text-sm"> Shadow <span className="text-[12px] bg-background-light text-text-customgray px-1">{panel.shadow}</span></h1>
                <div className="flex flex-row gap-4">
                    <ShadowSelection />
                </div>
            </div>
        </div>
    )
}
export default RadiusShadowSelection