import { useState } from "react"
import { Button } from "@mui/material";

export function useAttPassComplete() {
    const [buttoncount1, setbuttoncount] = useState(0)

    const buttonClicked1 = () => setbuttoncount(value => value + 1)
    return {
        buttoncount1,
        buttonClicked1
    }
}

export function useAttPassIncomplete() {
    const [buttoncount2, setbuttoncount] = useState(0)

    const buttonClicked2 = () => setbuttoncount(value => value + 1)
    return {
        buttoncount2,
        buttonClicked2
    }
}

export function useDefPassComplete() {
    const [buttoncount3, setbuttoncount] = useState(0)

    const buttonClicked3 = () => setbuttoncount(value => value + 1)
    return {
        buttoncount3,
        buttonClicked3
    }
}

export function useDefPassIncomplete() {
    const [buttoncount4, setbuttoncount] = useState(0)

    const buttonClicked4 = () => setbuttoncount(value => value + 1)
    return {
        buttoncount4,
        buttonClicked4
    }
}

export function useShotOnTarget() {
    const [buttoncount5, setbuttoncount] = useState(0)

    const buttonClicked5 = () => setbuttoncount(value => value + 1)
    return {
        buttoncount5,
        buttonClicked5
    }
}

export function useShotOffTarget() {
    const [buttoncount6, setbuttoncount] = useState(0)

    const buttonClicked6 = () => setbuttoncount(value => value + 1)
    return {
        buttoncount6,
        buttonClicked6
    }
}

export function useBigChance() {
    const [buttoncount7, setbuttoncount] = useState(0)

    const buttonClicked7 = () => setbuttoncount(value => value + 1)
    return {
        buttoncount7,
        buttonClicked7
    }
}

export function useCross() {
    const [buttoncount8, setbuttoncount] = useState(0)

    const buttonClicked8 = () => setbuttoncount(value => value + 1)
    return {
        buttoncount8,
        buttonClicked8
    }
}

export function useTackle() {
    const [buttoncount9, setbuttoncount] = useState(0)

    const buttonClicked9 = () => setbuttoncount(value => value + 1)
    return {
        buttoncount9,
        buttonClicked9
    }
}