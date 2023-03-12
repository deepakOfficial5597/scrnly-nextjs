import BrandingButton from "./BrandingButton"
import * as htmlToImage from 'html-to-image';
import useEditor from "@/shared/hooks/useEditor";

const BrandingDownload = () => {

    const { panel, setPanel } = useEditor()

    const downloadCanvas = () =>{
        const file_name_to_download = "scrnly-canvas" + new Date().getTime() + '.' 
        var node:HTMLElement = document.getElementById('scrnly-canvas')!
        const extension = panel.downloadType.toLowerCase()
        const canvas_size = Number(panel.downloadSize)
        if(extension === "png"){
            htmlToImage.toPng(node,{canvasHeight: node.clientHeight * canvas_size,canvasWidth: node.clientWidth * canvas_size})
            .then(function (dataUrl) {
              var link = document.createElement('a');
              link.download = file_name_to_download + extension;
              link.href = dataUrl;
              link.click();
            });
        }else if(extension === "jpg"){
            htmlToImage.toJpeg(node,{canvasHeight: node.clientHeight * canvas_size,canvasWidth: node.clientWidth * canvas_size})
            .then(function (dataUrl) {
              var link = document.createElement('a');
              link.download = file_name_to_download + extension;
              link.href = dataUrl;
              link.click();
            });
        }
    }

    
    const changeSizeSelection = (size:string) => {
        setPanel((previousPanel) => {
            return {
                ...previousPanel, downloadSize: size
            }
        })
    }
    const changeDownloadTypeSelection = (type:string) => {
        setPanel((previousPanel) => {
            return {
                ...previousPanel, downloadType: type
            }
        })
    }
    return <>
        <div className="flex flex-row items-center justify-between">
            <div className="flex-1">
                <BrandingButton />
            </div>
            <div className="flex flex-row items-center gap-1">
                <select className="rounded-md py-2 text-xs outline-none cursor-pointer" onChange={(e) => changeSizeSelection(e.target.value) }>
                    <option value="1"> 1X </option>
                    <option value="2"> 2X </option>
                    <option value="3"> 3X </option>
                </select>
                <select className="rounded-md py-2 text-xs cursor-pointer" onChange={(e) => changeDownloadTypeSelection(e.target.value)}>
                    <option value="PNG"> PNG </option>
                    <option value="JPG"> JPG </option>
                </select>
                <button className="bg-primary-default rounded-md text-text-secondary px-3 text-xs py-2" onClick={downloadCanvas}>Download</button>
            </div>
        </div>
    </>
}

export default BrandingDownload