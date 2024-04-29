export const incNumber = () => {
    return {
        type: 'INCREMENT'
    }
}

export const decNumber = () => {
    return {
        type: 'DECREMENT'
    }
}

export const incNumberVal = (num : number) => {
    return {
        type: 'INCREMENTVAL',
        payload: num
    }
}

export const decNumberVal = (num : number) => {
    return {
        type: 'DECREMENTVAL',
        payload: num
    }
}