import { GradientConfig, MockupConfig, MockupHeaderTypes } from "../types/shared.types";

export const GRADIENT_CONFIG:GradientConfig[] = [
    {
        title:"Standard",
        gradient:"linear-gradient(110.33deg, #1A1160 -5.26%, #793E70 105.96%)"
    },
    {
        title:"Ocean",
        gradient:"linear-gradient(90deg, #7CD8DB 0%, #81B3F8 108.17%)"
    },
    {
        title:"Pinkcess",
        gradient:"linear-gradient(90deg, #DEB8F5 0%, #BA42C0 108.17%)"
    },
    {
        title:"Greenit",
        gradient:"linear-gradient(90deg, #43E97B 0%, #38F9D7 108.17%)"
    },
    {
        title:"Fierry",
        gradient:"linear-gradient(90deg, #FF930F 0%, #FFF95B 108.17%)"
    },
    {
        title:"Creative Mess",
        gradient:"linear-gradient(113.15deg, #7B5EEA 0%, #B7986C 38.54%, #DF5476 100%)"
    }
]

export const MOCKUP_CONFIG:MockupConfig[] = [
    {
        title:"No frame",
        imagePath:"/assets/mockups/no-frame.svg",
        type: MockupHeaderTypes.NO_FRAME
    },
    {
        title:"Macbook light",
        imagePath:"/assets/mockups/mackbook-light.svg",
        type: MockupHeaderTypes.MACKBOOK_LIGHT
    },
    {
        title:"Macbook dark",
        imagePath:"/assets/mockups/mackbook-dark.svg",
        type: MockupHeaderTypes.MACKBOOK_DARK
    },
    {
        title:"Window light",
        imagePath:"/assets/mockups/window-light.svg",
        type: MockupHeaderTypes.WINDOWS_LIGHT
    },
    {
        title:"Window dark",
        imagePath:"/assets/mockups/window-dark.svg",
        type: MockupHeaderTypes.WINDOWS_DARK
    }
]

export const BACKGROUND_CONFIG = {SOLID:"SOLID", GRADIENT:"GRADIENT",NO_BACKGROUND:"NO_BACKGROUND"}
export const IMAGE_POSITION_CONFIG = {TOP_LEFT:"Top-Left", TOP_CENTER:"Top-Center",TOP_RIGHT:"Top-Right",CENTER_LEFT:"Center-Left", CENTER_CENTER:"Center-Center",CENTER_RIGHT:"Center-Right",BOTTOM_LEFT:"Bottom-Left", BOTTOM_CENTER:"Bottom-Center",BOTTOM_RIGHT:"Bottom-Right"}
export const SHADOW_CONFIG= ["shadow-none","shadow","shadow-md","shadow-lg"]
export const SIZE_CONFIG=["1:1","16:9","Twitter Post","Instagram Post"]