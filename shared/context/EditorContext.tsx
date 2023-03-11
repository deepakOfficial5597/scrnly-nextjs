import { createContext, PropsWithChildren, useState } from "react";
import { CANVAS_INITIAL_STATE, EDITOR_CONTEXT_INITIAL_STATE, MOCKUP_INITIAL_STATE, PANEL_INITIAL_STATE } from "../constants/initialstate";
import { Canvas, Mockup, Panel } from "../types/shared.types";

export const EditorContext = createContext(EDITOR_CONTEXT_INITIAL_STATE)

const EditorContextProvider = ({ children }: PropsWithChildren) => {

    const [canvas, setCanvas] = useState<Canvas>(CANVAS_INITIAL_STATE)
    const [mockup, setMockup] = useState<Mockup>(MOCKUP_INITIAL_STATE)
    const [panel, setPanel] = useState<Panel>(PANEL_INITIAL_STATE)
    return (
        <EditorContext.Provider value={{ canvas, setCanvas, mockup , setMockup, panel, setPanel }}>
            {children }
        </EditorContext.Provider>
    )
}
export default EditorContextProvider