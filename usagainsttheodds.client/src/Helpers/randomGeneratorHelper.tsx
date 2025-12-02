export const generate = (min: number, max: number):number => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export const generateFloat = (min: number, max: number, decimals?: number): number => {
    if (decimals) {
        decimals = Math.floor(Math.min(12, Math.max(0, Math.abs(decimals))))
        return Number((Math.random() * (max - min) + min).toFixed(decimals))
    }        
    return Math.random() * (max - min) + min
}

export const pickFromArray = (array: any[]) => {
    return array[Math.floor(Math.random() * array.length)]
}

export const randomService = {
    generate,
    generateFloat,
    pickFromArray
}
export default randomService