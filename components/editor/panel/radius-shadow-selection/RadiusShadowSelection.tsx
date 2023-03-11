import RadiusSelection from "./RadiusSelection"
import ShadowSelection from "./ShadowSelection"

const RadiusShadowSelection = () => {
    return (
        <div className="flex flex-row gap-4">
            <div className="flex-1">
                <h1 className="mb-2 font-bold text-sm"> Border Radius </h1>
                <div className="flex flex-row gap-4">
                    <RadiusSelection />
                </div>
            </div>
            <div className="flex-1 px-4">
                <h1 className="mb-2 font-bold text-sm"> Shadow </h1>
                <div className="flex flex-row gap-4">
                    <ShadowSelection />
                </div>
            </div>
        </div>
    )
}
export default RadiusShadowSelection