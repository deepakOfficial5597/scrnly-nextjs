import useEditor from "@/shared/hooks/useEditor"
import BackgroundSelection from "../panel/background-selection/BackgroundSelection"
import BrandingDownload from "../panel/branding-download/BrandingDownload"
import CanvasSizeSelection from "../panel/canvassize-selection/CanvasSizeSelection"
import ImageSizeSelection from "../panel/imagesize-selection/ImageSizeSelection"
import MockupSelection from "../panel/mockup-selection/MockupSelection"
import ImagePositionSelection from "../panel/position-selection/ImagePositionSelection"
import RadiusShadowSelection from "../panel/radius-shadow-selection/RadiusShadowSelection"

const EditorPanel = () => {
    const {mockup} = useEditor()
    return (
        <div className="relative h-full flex flex-col gap-4 py-4">
            <div className="flex-1 flex flex-col gap-4">
                <div className="w-full px-4">
                    <BackgroundSelection />
                </div>
                <div className="w-full px-4">
                    <MockupSelection />
                </div>
                <div className="w-full px-4">
                    <ImagePositionSelection />
                </div>
                <div className="w-full px-4">
                    <ImageSizeSelection />
                </div>
                <div className="w-full px-4">
                    <RadiusShadowSelection />
                </div>
                <div className="w-full px-4">
                    <CanvasSizeSelection />
                </div>
            </div>
            <div className="border-t border-border-light py-2">
                <div className="w-full px-4">
                    <BrandingDownload />
                </div>
            </div>
            {
                (mockup.imageUrl == undefined  || mockup.imageUrl == "") && <div className="absolute inset-0 bg-transparent cursor-not-allowed"></div>
            }
        </div>
    )
}

export default EditorPanel