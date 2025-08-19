import { useState } from "react"

enum Colors {
    Yellow = 'yellow',
    Blue = 'blue',
    Green = 'green'
}

type Person = {
    age: number
    name: string
    color: 'yellow' | 'red' | 'blue' | number
    alive?: boolean
}

type ActiveUser = {
    name: string
    isActive: boolean
    id: string
} | null

interface Car {
    model: string | 66
    year: 1999
    price: 2008
}

export type event = React.ChangeEvent<HTMLInputElement>