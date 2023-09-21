"use client"

import { useEffect } from "react"
import {Crisp} from "crisp-sdk-web"

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("5b90ecc3-d564-42e1-9121-8d4f787ea03e")
    }, [])

    return null
}