import { HiCheckCircle } from "react-icons/hi"
const NoBackgroundSelector = ({active = false}:NoBackgroundSelectionProps) => {
    return <>
        <div className="relative flex-1 bg-gradient-to-tr hover:border-2 hover:border-primary-default rounded-md border-2 border-border-dark">
            {
                active && (
                    <span className="absolute top-1 left-1">
                        <HiCheckCircle className="text-primary-default"/>
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