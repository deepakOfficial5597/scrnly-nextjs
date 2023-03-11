import { Dispatch, SetStateAction } from "react";
import { Canvas, Mockup, Panel } from "./shared.types";

export default interface EditorState {
    canvas : Canvas,
    mockup: Mockup,
    panel: Panel,
    setCanvas: Dispatch<SetStateAction<Canvas>>,
    setMockup: Dispatch<SetStateAction<Mockup>>,
    setPanel: Dispatch<SetStateAction<Panel>>
}