import { BACKGROUND_CONFIG } from "@/shared/constants/config"
import useEditor from "@/shared/hooks/useEditor"

const BrandingBanner = () => {
    const {panel} = useEditor()
    return (
        <div className={`absolute bottom-[10px] left-[50%] rounded-md bg-gray-100 py-1 px-2 text-sm font-normal flex items-center justify-center translate-x-[-50%] text-center ${panel.backgroundType === BACKGROUND_CONFIG.NO_BACKGROUND ? "border border-border-light" : "border-none"}`}>
            <p>Made with <strong>scrnly.com</strong></p>
        </div>
    )
}

export default BrandingBanner