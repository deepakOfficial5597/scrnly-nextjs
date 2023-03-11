import { HiCheckCircle } from "react-icons/hi"

const GradientCard = ({title, gradient, selected = false}:GradientCardProps) => {
    return (
        <div className={`flex flex-col justify-center items-center pointer-events-none gap-1`}>
            <div className="relative w-full h-[80px] rounded-md" style={{background: gradient}}>
                {
                    selected &&
                    <div className="absolute top-2 left-2">
                        <HiCheckCircle className="text-primary-default"/>
                    </div>
                }
            </div>
            <span className="text-xs font-medium text-text-customgray tracking-wide">{title}</span>
        </div>
    )
}

type GradientCardProps = {
    title: string,
    gradient: string,
    selected?: boolean
}
export default GradientCard