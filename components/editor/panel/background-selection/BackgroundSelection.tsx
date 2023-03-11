import GradientSelector from "./gradient-selection/GradientSelector"
import SolidColorSelector from "./solid-color-selection/SolidColorSelector"
import { BACKGROUND_CONFIG } from "@/shared/constants/config"
import useEditor from "@/shared/hooks/useEditor"
import NoBackgroundSelection from "./no-background-setter/NoBackgroundSelector"

const BACKGROUND_OPTIONS = BACKGROUND_CONFIG

const BackgroundSelection = () => {
    const { panel, setCanvas, setPanel } = useEditor()

    const setBlankCanvasBackgroound = () => {
        setCanvas((previousCanvas) => {
            return {
            ...previousCanvas, styles: { ...previousCanvas.styles, background: "#fff" }
            }
        })
        setPanel((previousPanel) => {
            return {
                ...previousPanel, backgroundType: BACKGROUND_CONFIG.NO_BACKGROUND
            }
        })
    }
    return <>
        <h1 className="mb-2 font-bold text-sm"> Backgrounds</h1>
        <div className="w-full h-[90px] flex flex-row gap-2 justify-between">
            <div className="flex-1 flex flex-col gap-2 h-full cursor-pointer">
                <GradientSelector active={panel.backgroundType === BACKGROUND_OPTIONS.GRADIENT}/>
                <p className="text-xs text-center">Gradient Template</p>
            </div>
            <div className="flex-1 flex flex-col gap-2 h-full cursor-pointer">
                <SolidColorSelector active={panel.backgroundType === BACKGROUND_OPTIONS.SOLID}/>
                <p className="text-xs text-center">Solid Color</p>
            </div>
            <div className="flex-1 flex flex-col gap-2 h-full cursor-pointer" onClick={setBlankCanvasBackgroound}>
                <NoBackgroundSelection active={panel.backgroundType === BACKGROUND_OPTIONS.NO_BACKGROUND}/>
                <p className="text-xs text-center">No Background</p>
            </div>
        </div>
    </>
}

export default BackgroundSelection