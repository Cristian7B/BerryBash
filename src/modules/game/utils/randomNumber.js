import random from "random"
export const randomNumberFood = () => {
    return random.int(0, 49)
}

export const randomNumber = (max) => {
    return random.int(0, max)
}