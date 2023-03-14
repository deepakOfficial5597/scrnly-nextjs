import { MdRadioButtonChecked } from "react-icons/md"
const NoBackgroundSelector = ({active = false}:NoBackgroundSelectionProps) => {
    return <>
        <div className="relative flex-1 hover:border-primary-default rounded-md border-2 border-background-primary bg-no-background bg-left-top">
            {
                active && (
                    <span className="absolute top-1 left-1">
                        <MdRadioButtonChecked className="text-primary-default"/>
                    </span> 
                ) 
            }
        </div>
    </>
}

type NoBackgroundSelectionProps = {
    active: boolean
}
export default NoBackgroundSelector