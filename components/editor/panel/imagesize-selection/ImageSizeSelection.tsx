import Button from "@/components/base/Button"
import useEditor from "@/shared/hooks/useEditor"
import { getImageSizeStyles } from "@/shared/utils/helpers"

const ImageSizeSelection = () => {
    const { panel, setMockup,setPanel } = useEditor()

    const changeSizeSelection = (size:string) => {
        setPanel((previousPanel) => {
            return {
                ...previousPanel, imageSize: size
            }
        })
        setMockup((previousMockup) => {
            return {
            ...previousMockup,
            styles: {
                ...previousMockup.styles,
                ...getImageSizeStyles(size)
            }
        }})
    }
    return <>
        <h1 className="mb-2 font-bold text-sm"> Image Size </h1>
        <div className="flex flex-row gap-2">
            <div onClick={() => changeSizeSelection("SMALL")}>
                <Button title="Small" active={panel.imageSize == "SMALL"}/>
            </div>
            <div onClick={() => changeSizeSelection("MEDIUM")}>
                <Button title="Medium" active={panel.imageSize == "MEDIUM"}/>
            </div>
            <div onClick={() => changeSizeSelection("LARGE")}>
                <Button title="Large" active={panel.imageSize == "LARGE"} />
            </div>
        </div>
    </>
}

export default ImageSizeSelection