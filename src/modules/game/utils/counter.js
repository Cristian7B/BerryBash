export const counterLess = (setTimer) => {
    const intervalTime = setInterval(() => {
        
        setTimer(prevTimer => {

            if (prevTimer > 0) {
                return prevTimer - 1
            } 
            
            else {
                clearInterval(intervalTime)
                return prevTimer
            }
        })
        
    }, 1000)

    return intervalTime
}