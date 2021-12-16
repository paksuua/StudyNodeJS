// '함수명 : 인자 '를 반환하는 함수
let asyncFunc1 = (msg) =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(`func1 : ${msg}`)
        }, 1000)
    })
let asyncFunc2 = (msg) =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(`func2 : ${msg}`)
        }, 1000)
    })

// 선택1: Promise
function promiseMain() {
    asyncFunc1('Hello').then((result) => {
        console.log(result)
        return asyncFunc2('world')
    }).then((result) => {
        console.log(result)
    })
}

// 선택2: async & await
async function asyncMain(){
    let result = await asyncFunc1('Hello') // Promise의 성공 실패 여부 기다린 후 result에 저장
    console.log(result)                     //  17~19 -> 27~28
    result = await asyncFunc2('world')
    console.log(result)
}

//promiseMain();
asyncMain();