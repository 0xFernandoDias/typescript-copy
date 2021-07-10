// import React, {useState} from 'react'

interface Props {
    text: string
}

export const Component: React.FC<Props> = ({text}: Props) => { // <Component text='' />
    const [count, setCount] = useState<number | null>(0)

    return(
        <>

        </>
    )
}