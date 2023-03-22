import { BACKGROUND_CONFIG, GRADIENT_CONFIG, IMAGE_POSITION_CONFIG, MOCKUP_CONFIG, SIZE_CONFIG } from "../constants/config";
import { GradientConfig, MockupConfig, MockupHeaderTypes } from "../types/shared.types";

export function getDefaultGradient():GradientConfig{
    return GRADIENT_CONFIG[1];
}

export function getDefaultMockup():MockupConfig{
    return MOCKUP_CONFIG[0];
}

export function getDefaultBackgroundType():string{
    return BACKGROUND_CONFIG.GRADIENT;
}

export function getDefaultImagePosition():string{
    return IMAGE_POSITION_CONFIG.CENTER_CENTER;
}
export function getDefaultBorderRadius():string{
    return "8";
}
export function getDefaultBoxShadow():number{
    return 0;
}
export function getDefaultImageSize():string{
    return "MEDIUM";
}
export function getDefaultCanvasSize():string{
    return SIZE_CONFIG[0];
}

export function getPositionStyles(value:string){
    const INSET_PADDING = "8px"
    switch(value){
        case(IMAGE_POSITION_CONFIG.TOP_LEFT):
            return {
                inset: `${INSET_PADDING} auto auto ${INSET_PADDING}`,
                transform: "unset"
            }
        case(IMAGE_POSITION_CONFIG.TOP_CENTER):
            return {
                inset: `${INSET_PADDING} auto auto 50%`,
                transform: "translate(-50%,0px)"
            }
        case(IMAGE_POSITION_CONFIG.TOP_RIGHT):
            return {
                inset: `${INSET_PADDING} ${INSET_PADDING} auto auto`,
                transform: "unset",
            }
        case(IMAGE_POSITION_CONFIG.CENTER_LEFT):
            return {
                inset: `50% auto auto ${INSET_PADDING}`,
                transform: "translate(0px,-50%)"
            }
        case(IMAGE_POSITION_CONFIG.CENTER_CENTER):
            return {
                inset: `50% auto auto 50%`,
                transform: `translate(-50%,-50%)`
            }
        case(IMAGE_POSITION_CONFIG.CENTER_RIGHT):
            return {
                inset: `50% ${INSET_PADDING} auto auto`,
                transform: "translate(0px,-50%)"
            }
        case(IMAGE_POSITION_CONFIG.BOTTOM_LEFT):
            return {
                inset: `auto auto ${INSET_PADDING} ${INSET_PADDING}`,
                transform: "unset"
            }
        case(IMAGE_POSITION_CONFIG.BOTTOM_CENTER):
            return {
                inset: `auto auto ${INSET_PADDING} 50%`,
                transform: `translate(-50%,0px)`
            }
        case(IMAGE_POSITION_CONFIG.BOTTOM_RIGHT):
            return {
                inset: `auto ${INSET_PADDING} ${INSET_PADDING} auto`,
                transform: "unset"
            }
        default:
            return {
                inset: "50% auto auto 50%",
                transform: `translate(-50%,-50%)`
            }
    }
}

export function getMockupBorderRadiusStyles(mockupHeader:MockupHeaderTypes,borderRadius:string = "8px"):any{
    if(mockupHeader === MockupHeaderTypes.NO_FRAME)
        return {
            borderTopLeftRadius: borderRadius,
            borderTopRightRadius: borderRadius,
            borderBottomLeftRadius: borderRadius,
            borderBottomRightRadius: borderRadius
        }
    return {
        borderTopLeftRadius: "0px",
        borderTopRightRadius: "0px",
        borderBottomLeftRadius: borderRadius,
        borderBottomRightRadius: borderRadius
    }
}

export function getCanvasSizeStyles(size:string){
    switch(size){
        case("1:1"):
            return {
                height: "500px",
                width: "500px"
            }
        case("16:9"):
            return {
                height: "385px",
                width: "680px"
            }
        case("Twitter Post"):
            return {
                height: "50%",
                width: "60%"
            }
        case("Instagram Post"):
            return {
                height: "500px",
                width: "300px"
            }
        default:
            return {
                height: "500px",
                width: "500px"
            }
    }
}

export function getImageSizeStyles(size:string){
    const tmpSize = size === "SMALL" ? "25%" : (size === "MEDIUM" ? "50%" : "75%")
    return {
        height: tmpSize,
        width: tmpSize,
        objectFit: "cover",
        backgroundRepeat: "no-repeat"
    }
}

export function removeProperty(obj:any, property:string) {  
    const { [property]: unused, ...rest } = obj

  return rest
}