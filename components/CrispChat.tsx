'use client'

import { useEffect } from "react"
import { Crisp } from 'crisp-sdk-web'

type Props = {}

const CrispChat = (props: Props) => {
    useEffect(() => {
        Crisp.configure('08d3df73-e221-4ce0-9005-d3b7bb0f62e6')
    }, [])

    return null
}

export default CrispChat