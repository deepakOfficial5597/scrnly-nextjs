import BrandingBanner from "../editor/layout/BrandingBanner"
import EditorMockup from "../editor/mockup/EditorMockup"
import EditorHeader from "./layout/EditorHeader"
import useEditor from "@/shared/hooks/useEditor"
import EditorPanel from "../editor/layout/EditorPanel"
import MockupForm from "./mockup/MockupForm"

const EditorLayout = () => {
    const { canvas, mockup, panel } = useEditor()
    return (
        <div className="h-screen w-screen flex flex-col">
            <EditorHeader />
            <main className="flex-1 flex flex-row gap-2 bg-background-secondary p-2">
                {
                    mockup.imageUrl ? (
                        <div className="relative flex-1 flex items-center justify-center bg-white rounded-md p-2"  id="scrnly-canvas-parent" style={{"background":"url('/assets/grid.jpeg')"}}>
                            <div className={`rounded-md relative ${canvas.classNames} transition-all ease-linear`} style={canvas.styles}  id="scrnly-canvas">
                                <div className={`absolute shadow-current ${mockup.classNames}`} style={mockup.styles}>
                                    <EditorMockup />
                                </div>
                                {
                                    panel.branding && <BrandingBanner />
                                }
                            </div>
                            <button className="absolute left-2 top-2 border shadow-md py-1 px-2 font-medium cursor-pointer rounded-md bg-indigo-900 text-white hover:bg-indigo-700"> Update Image </button>
                        </div>
                    )
                    : (
                        <MockupForm />
                    )
                }
                
                <div className="w-[450px] bg-background-primary rounded-md">
                    <EditorPanel />
                </div>
            </main>
        </div>
    )
}

export default EditorLayout