import { useState, useEffect } from 'react'
import { useRouter } from "next/router"

import BrandingBanner from "../editor/layout/BrandingBanner"
import EditorMockup from "../editor/mockup/EditorMockup"
import EditorHeader from "./layout/EditorHeader"
import EditorPanel from "../editor/layout/EditorPanel"
import useEditor from "@/shared/hooks/useEditor"
import { getImageSizeStyles } from '@/shared/utils/helpers'
import { HiX, HiCloudUpload } from "react-icons/hi";

const EditorLayout = () => {

    const { canvas, mockup, panel, setMockup } = useEditor()
    const [showPopup, setShowPopup]= useState(false)
    const router = useRouter()
    
    const handleKeyDown = (e: any) => {
        if(e.keyCode != 13) return
        
        const url = e.target.value
        convertUrlToImage(url)
    };
    const convertUrlToImage = async (url:string) => {
        if(url == undefined || !(url.includes("https://") || url.includes("http://"))) return 
        await fetch(url,{method: "GET"}).then((response) => {
            if(response.headers.get('content-type')?.includes("image/")){
                setMockup((previousMockup) => {
                    return {
                    ...previousMockup,
                    imageUrl: url,
                    styles: {...previousMockup.styles, ...getImageSizeStyles("MEDIUM")}
                }})
            }else{

            }
        })
    }
    const uploadLocalImage = (event:any) => {
        setMockup((previousMockup) => {
            return {
            ...previousMockup,
            imageUrl: URL.createObjectURL(event.target.files[0])
        }})
        setShowPopup(false)
    }

    const uploadSampleImage = async (sample:any) => {
        setMockup((previousMockup) => {
            return {
            ...previousMockup,
            imageUrl: ""
        }})
    }

    const initiateLocalUpload = () => {
        const fileSelector = document.createElement('input');
        fileSelector.setAttribute('type', 'file');
        fileSelector.setAttribute('accept', 'image/*');
        fileSelector.addEventListener('change', e => uploadLocalImage(e))
        fileSelector.click()
    }
    const deleteMockupImage = () => {
        setMockup((previousMockup) => {
            return {
            ...previousMockup,
            imageUrl: ""
        }})
        setShowPopup(false)
    }

    useEffect(()=>{
       const {t:type, v:value} = router.query
       if(type == "sample"){
            uploadSampleImage(value as string)
       }else if(type == "url"){
            convertUrlToImage(value as string)
       }else if(type == "upload"){
            initiateLocalUpload()
       }
    },[])   

    
    return (
        <div className="h-screen w-screen flex flex-col relative">
            <EditorHeader />
            <main className="flex-1 flex flex-col md:flex-row bg-background-extra_light">
                <div className="flex-1 p-4">
                    {
                        mockup.imageUrl ? (
                            <div className="w-full h-full relative flex items-center justify-center bg-white p-2 border border-border-lightest bg-canvas-grid rounded"  id="scrnly-canvas-parent">
                                <div className={`relative ${canvas.classNames} transition-all ease-linear`} style={canvas.styles}  id="scrnly-canvas">
                                    <div className={`absolute shadow-current ${mockup.classNames}`} style={mockup.styles}>
                                        <EditorMockup />
                                    </div>
                                    {
                                        panel.branding && <BrandingBanner />
                                    }
                                </div>
                                <button className="absolute left-2 top-2 flex items-center gap-2 text-xs md:text-sm shadow-md py-1 px-2 font-medium cursor-pointer rounded-md border-border-light text-text-primary hover:text-text-customgray" onClick={() => setShowPopup(true)}> <HiCloudUpload />Update Image </button>
                            </div>
                        )
                        : (
                            <div className="w-full h-full flex items-center justify-center bg-background-primary rounded-md p-2">
                                <div className="w-3/4 flex flex-col gap-2 items-center bg-background-light p-10 rounded-md">
                                <input id="image__url" type="text" className="mt-1 w-full border border-border-extra_light px-3 py-2 rounded-lg text-xs md:text-sm shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" placeholder="Enter tweet URL or any website URL" onKeyDown={handleKeyDown}/>
                                <p> OR </p>
                                <button className="px-4 py-2 bg-primary-default text-white rounded-md text-xs md:text-sm relative cursor-pointer" >Upload a screenshot <input type="file" name="user-image"  className="absolute top-0 left-0 right-0 bottom-0 opacity-0 cursor-pointer" id="upload-btn" onChange={uploadLocalImage} /></button>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="w-full md:w-[450px] bg-background-primary border-l border-border-light">
                    <EditorPanel />
                </div>
            </main>
            {
                showPopup && (
                    <div className="absolute w-[75%] h-[75%] top-[10%] sm:h-1/2 sm:w-1/3 sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 bg-background-light rounded-md shadow-xl p-4 flex flex-col gap-2 items-center">
                        <div className="w-full flex flex-row justify-between">
                            <h4 className="font-semibold text-sm">Update Image</h4>
                            <HiX className="cursor-pointer" onClick={()=> setShowPopup(false)}/>
                        </div>
                        <input id="image__url" type="text" className="mt-1 w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm" placeholder="Enter tweet URL or any website URL" onKeyDown={handleKeyDown}/>
                        <p>OR</p>
                        <div className="h-[2000px] w-full rounded-md" style={{backgroundImage: `url(${mockup.imageUrl})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}></div>
                        <div className="w-full flex flex-row justify-center gap-4">
                            <button className="rounded-md bg-primary-default text-text-secondary px-8 py-1 text-sm md:text-md" onClick={initiateLocalUpload}>Upload New</button>
                            <button className="rounded-md bg-primary-pink text-text-secondary px-4 py-1 text-sm md:text-md" onClick={deleteMockupImage}>Delete</button>
                        </div>
                    </div>
                )
            }
        </div>
        
    )
}

export default EditorLayout