import Button from "@/components/base/Button"
import useEditor from "@/shared/hooks/useEditor"
import { SIZE_CONFIG } from "@/shared/constants/config"
import { getCanvasSizeStyles } from "@/shared/utils/helpers"

const CanvasSizeSelection = () => {
    
    const {panel,setCanvas,setPanel} = useEditor()

    const changeSizeSelection = (size:string) => {
        setPanel((previousPanel) => {
            return {
                ...previousPanel, canvasSize: size
            }
        })
        setCanvas((previousCanvas) => {
            return {
            ...previousCanvas, styles: { ...previousCanvas.styles, ...getCanvasSizeStyles(size) }
            }
        })
    }
    return <>
        <h1 className="mb-2 font-bold text-sm"> Canvas Size </h1>
        <div className="flex flex-row gap-2">
            {
                SIZE_CONFIG.map((individual_size,sizeIndex)=>{
                    return (
                        <div onClick={() => changeSizeSelection(individual_size)} key={sizeIndex}>
                            <Button title={individual_size} active={panel.canvasSize == individual_size}/>
                        </div>
                    )
                })
            }
        </div>
    </>
}

export default CanvasSizeSelection