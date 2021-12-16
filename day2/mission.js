let isMomHappy = true;
let phone={
    brand: 'Samsung',
    color: 'black'
};

var willGetNetPhone = new Promise(
    function (resolve, reject){
        if(isMomHappy){
            resolve(console.log(phone));
        }else{
            var message = new Error('mom is not happy');
            reject(console.log(message));
        }
    }    
);