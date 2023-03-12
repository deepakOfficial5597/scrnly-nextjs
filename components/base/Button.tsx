const Button = ({ title, active = false }:ButtonProps) => {
    return (
        <button className={`px-3 py-1.5 sm:text-xs md:text-sm rounded-md border ${active ? 'border-primary-default hover:shadow text-primary-default bg-background-primary_active' : 'border-border-light hover:shadow text-text-default'}`}> { title } </button>
    )
}

type ButtonProps = {
    title: string,
    active:boolean
}

export default Button