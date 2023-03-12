import { HiMinusSm, HiOutlineX } from "react-icons/hi"
import { BiCheckbox } from "react-icons/bi";
import { MdCircle } from "react-icons/md";
import useEditor from "@/shared/hooks/useEditor";
import { MOCKUP_CONFIG } from "@/shared/constants/config";

const MockupHeader = () => {
    const { panel } = useEditor()
    return (<>
            {
                (panel.mockup == MOCKUP_CONFIG[1].title) && 
                <div className="flex gap-1 justify-start p-2 bg-white" style={{borderTopLeftRadius: panel.radius + 'px', borderTopRightRadius: panel.radius + 'px'}}>
                    <MdCircle className="text-red-700"/>
                    <MdCircle className="text-yellow-700"/>
                    <MdCircle className="text-green-700"/>
                </div>
            }
            {
                (panel.mockup == MOCKUP_CONFIG[2].title) && 
                <div className="flex gap-1 justify-start p-2 bg-background-dark text-white" style={{borderTopLeftRadius: panel.radius + 'px', borderTopRightRadius: panel.radius + 'px'}}>
                    <MdCircle className="text-red-700"/>
                    <MdCircle className="text-yellow-700"/>
                    <MdCircle className="text-green-700"/>
                </div>
            }
            {
                (panel.mockup == MOCKUP_CONFIG[3].title) && 
                <div className="flex gap-2 justify-end p-2 bg-white" style={{borderTopLeftRadius: panel.radius + 'px', borderTopRightRadius: panel.radius + 'px'}}>
                    <HiMinusSm />
                    <BiCheckbox />
                    <HiOutlineX />
                </div>
            }
            {
                (panel.mockup == MOCKUP_CONFIG[4].title) && 
                <div className="flex gap-2 justify-end p-2 bg-background-dark text-white" style={{borderTopLeftRadius: panel.radius + 'px', borderTopRightRadius: panel.radius + 'px'}}>
                    <HiMinusSm />
                    <BiCheckbox />
                    <HiOutlineX />
                </div>
            }
        </>
    )
}

export default MockupHeader