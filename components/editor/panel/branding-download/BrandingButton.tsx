import { useState } from 'react'
import { Switch } from '@headlessui/react'
import useEditor from '@/shared/hooks/useEditor'

const BrandingButton = () => {
    const {panel, setPanel} = useEditor()

    const ChangeBranding = (value:boolean) => {
        setPanel((previousPanel) => {
            return {
                ...previousPanel, branding: value
            }
        })
    }
    return (
    <div className="flex flex-row gap-2">
        <h6 className="font-bold text-sm">Branding</h6>
        <Switch
            checked={panel.branding}
            onChange={ChangeBranding}
            className={`${panel.branding ? 'bg-primary-default' : 'bg-background-secondary'}
            relative inline-flex h-[20px] w-[48px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-background-primary focus-visible:ring-opacity-75`}
        >
            <span aria-hidden="true" className={`${panel.branding ? 'translate-x-7' : 'translate-x-0'}
                pointer-events-none inline-block h-[16px] w-[16px] transform rounded-full bg-background-primary shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
        </Switch>
        </div>
    )
}

export default BrandingButton