function greet(){
    console.log('Hello');
}

function timer(){
    return setTimeout(()=> {
        console.log('End!'); // 3초 뒤 메세지 출력
    }, 3000);
}

greet();
timer();
