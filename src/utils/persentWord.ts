const func = () => {
    const word = 'Сверло'
    let count = 0
    for(let i = 0; i<word.length; i++){
        if(str.charAt(i) === word.charAt(i)){
            count++
        }
    }
    if((count/word.length)*100 >= 50){
        return true
    } else{
        return false
    }
    
}