import MockupHeader from "./MockupHeader"
import useEditor from "@/shared/hooks/useEditor"
import { getMockupBorderRadiusStyles } from "@/shared/utils/helpers"

const EditorMockup = () => {
    const {mockup, panel} = useEditor()
    return (
        <div className="relative w-full h-full flex flex-col">
            <MockupHeader />
            <div className={`flex-1`}
                style={{ background : `url(${mockup.imageUrl})`, ...getMockupBorderRadiusStyles(mockup.type, panel.radius + "%"),backgroundRepeat:"no-repeat",backgroundOrigin:"border-box",overflow:"hidden",backgroundPosition:"center",backgroundSize:"contain" }}
            ></div>      
        </div>
        
    )
}

export default EditorMockup