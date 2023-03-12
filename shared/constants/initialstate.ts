import EditorState from "../types/editor.state"
import { Canvas, Mockup, MockupHeaderTypes, Panel } from "../types/shared.types"
import { getCanvasSizeStyles, getDefaultBackgroundType, getDefaultBorderRadius, getDefaultBoxShadow, getDefaultCanvasSize, getDefaultGradient, getDefaultImagePosition, getDefaultImageSize, getDefaultMockup, getPositionStyles } from "../utils/helpers"
import { SHADOW_CONFIG } from "./config"

export const CANVAS_INITIAL_STATE:Canvas = {
    styles: {
        background: getDefaultGradient().gradient,
        ...getCanvasSizeStyles(getDefaultCanvasSize())
    },
    classNames: ""
}
export const MOCKUP_INITIAL_STATE:Mockup = {
    styles: {
        height: "50%",
        width: "50%",
        borderTopLeftRadius: "8px",
        borderTopRightRadius: "8px",
        borderBottomLeftRadius: "8px",
        borderBottomRightRadius: "8px",
        ...getPositionStyles(getDefaultImagePosition())
    },
    classNames:SHADOW_CONFIG[getDefaultBoxShadow()],
    type: MockupHeaderTypes.NO_FRAME,
    imageUrl: "https://th.bing.com/th/id/OIP.QJjN2LrOLtSwHKVUKUzSPAHaEK?pid=ImgDet&rs=1",
    imageStyles:{
        backgroundOrigin:"border-box",
        overflow:"hidden",
        backgroundPosition:"center",
        backgroundSize:"cover"
    }
}
export const PANEL_INITIAL_STATE:Panel = {
    backgroundType: getDefaultBackgroundType(),
    backgroundValue: getDefaultGradient().title,
    branding: true,
    canvasSize: getDefaultCanvasSize(),
    imagePosition: getDefaultImagePosition(),
    imageSize: getDefaultImageSize(),
    mockup: getDefaultMockup().title,
    radius: getDefaultBorderRadius(),
    downloadSize: "1",
    downloadType: "PNG"
}
export const EDITOR_CONTEXT_INITIAL_STATE:EditorState = {
    canvas : CANVAS_INITIAL_STATE,
    mockup: MOCKUP_INITIAL_STATE,
    panel: PANEL_INITIAL_STATE,
    setCanvas: () => {},
    setMockup: () => {},
    setPanel: () => {}
}