import { Select } from '@chakra-ui/react'
import { BrowserOption } from '../main/store/types'

type TBrowserOption = {label: string, value: BrowserOption, defaultValue?: boolean}
const browserOptions:TBrowserOption[] = [
    {label:"Chrome", value:"chrome"}, 
    {label:"Safari", value:"safari"}, 
    {label:"Firefox", value:"firefox"},
    {label: "Other", value:"firefox"},
]

type IBrowserSelect = {
    setBrowser: React.Dispatch<React.SetStateAction<BrowserOption>>
    disabled: boolean
}

export function BrowserSelect({setBrowser, disabled}: IBrowserSelect) {
    const selectOptions = browserOptions.map((option)=>(<option value={option.value}>{option.label}</option>))
    return (
            <Select
                bg="transparent" 
                fontWeight="normal"              
                borderRadius="12px"
                border="1px solid"
                borderColor="blackAlpha.200"
                placeholder='Browser Preference'
                disabled={disabled}
                onChange={(e)=>{setBrowser((e.target.value || "firefox") as BrowserOption)}}
            >
                {selectOptions}
            </Select> 
    )
} 