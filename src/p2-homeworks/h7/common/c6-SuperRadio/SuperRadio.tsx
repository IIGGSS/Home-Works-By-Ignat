import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps, useState} from 'react'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {


    const mappedOptions: any[] = options ? options.map((o, i) => {
        const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
            // onChange, onChangeOption
            onChangeOption && onChangeOption(e.currentTarget.value)
        }
        let check = value === o;
        return ( // map options with key
            <label key={name + '-' + i}>
                <input
                    type={'radio'}
                    // name, checked, value, onChange
                    value={o}
                    onChange={onChangeCallback}
                    name={name}
                    checked={check}
                />
                {o}
            </label>
        )
    }) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
