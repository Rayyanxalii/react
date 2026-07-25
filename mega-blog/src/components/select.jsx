import React, { useId } from 'react'

function select({
    options,
    label,
    className,
    ...props
}, ref) {
    const id = useId();
    <div className='w-full'>
        {label && <label htmlFor={id} className=''></label>}
        <select>
            {...props}
            id={id}
            ref={ref}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-300 w-full ${className}`}
        </select>
    </div>
}

export default select