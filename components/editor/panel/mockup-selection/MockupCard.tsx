import { HiCheckCircle } from "react-icons/hi"
const MockupCard = ({ title, imagePath, selected=false }:MockupCardProps) => {
    return (
        <div className={`flex flex-col justify-center items-center pointer-events-none`}>
            <div className="relative w-full">
                <img src={imagePath} alt="no-frame.svg" className="w-full h-full object-center"/>
                {
                    selected &&
                    <div className="absolute top-2 left-2">
                        <HiCheckCircle className="text-indigo-900 text-lg"/>
                    </div>
                }
            </div>
            <span className="text-xs font-medium text-gray-600 tracking-wide">{title}</span>
        </div>
    )
}

type MockupCardProps = {
    title: string,
    imagePath: string,
    selected ?: boolean
}

export default MockupCard