import BrandingButton from "./BrandingButton"
import * as htmlToImage from 'html-to-image';
import useEditor from "@/shared/hooks/useEditor";

const BrandingDownload = () => {

    const { panel, setPanel } = useEditor()

    const downloadCanvas = () =>{
        const file_name_to_download = "scrnly-canvas-" + new Date().getTime() + '.' 
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
                <select className="form-select sm:text-xs md:text-sm rounded-md outline-none cursor-pointer border border-border-light focus:ring-1 focus:ring-primary-default" onChange={(e) => changeSizeSelection(e.target.value) }>
                    <option className="" value="1"> 1x </option>
                    <option className="" value="2"> 2x </option>
                    <option className="" value="3"> 3x </option>
                </select>
                <select className="form-select sm:text-xs md:text-sm rounded-md outline-none cursor-pointer border border-border-light focus:ring-1 focus:ring-primary-default" onChange={(e) => changeDownloadTypeSelection(e.target.value)}>
                    <option value="PNG"> PNG </option>
                    <option value="JPG"> JPG </option>
                </select>
                <button className="panel_download_btn bg-primary-default rounded-md text-text-secondary px-3 text-sm py-[9px]" onClick={downloadCanvas}>Download</button>
            </div>
        </div>
    </>
}

export default BrandingDownload