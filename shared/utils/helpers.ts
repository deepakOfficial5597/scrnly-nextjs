import { BACKGROUND_CONFIG, GRADIENT_CONFIG, IMAGE_POSITION_CONFIG, MOCKUP_CONFIG, SIZE_CONFIG } from "../constants/config";
import { GradientConfig, MockupConfig, MockupHeaderTypes } from "../types/shared.types";

export function getDefaultGradient():GradientConfig{
    return GRADIENT_CONFIG[0];
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
    switch(value){
        case(IMAGE_POSITION_CONFIG.TOP_LEFT):
            return {
                position: "relative",
                top: "8px",
                left: "8px",
                transform: `translate(0px,0px)`
            }
        case(IMAGE_POSITION_CONFIG.TOP_CENTER):
            return {
                top: "8px",
                left: "50%",
                transform: `translate(-50%,0px)`
            }
        case(IMAGE_POSITION_CONFIG.TOP_RIGHT):
            return {
                top: "8px",
                right: "8px",
                transform: `translate(0px,0px)`,
            }
        case(IMAGE_POSITION_CONFIG.CENTER_LEFT):
            return {
                top: "50%",
                left: "8px",
                transform: `translate(0px,-50%)`
            }
        case(IMAGE_POSITION_CONFIG.CENTER_CENTER):
            return {
                top: "50%",
                left: "50%",
                transform: `translate(-50%,-50%)`
            }
        case(IMAGE_POSITION_CONFIG.CENTER_RIGHT):
            return {
                top: "50%",
                right: "8px",
                transform: `translate(-8px,-50%)`
            }
        case(IMAGE_POSITION_CONFIG.BOTTOM_LEFT):
            return {
                bottom: "8px",
                left: "8px",
                transform: `translate(0px,-8px)`
            }
        case(IMAGE_POSITION_CONFIG.BOTTOM_CENTER):
            return {
                bottom: "8px",
                left: "50%",
                transform: `translate(-50%,-8px)`
            }
        case(IMAGE_POSITION_CONFIG.BOTTOM_RIGHT):
            return {
                bottom: "8px",
                right: "8px",
                transform: `translate(-8px,-8px)`
            }
        default:
            return {
                top: "50%",
                left: "50%",
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
                height: "570px",
                width: "570px"
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
                height: "570px",
                width: "305px"
            }
        default:
            return {
                height: "570px",
                width: "570px"
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