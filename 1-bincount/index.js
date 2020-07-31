function binCount(n) {

    if (!n) {return null}

    if (isNaN(n)) {
        console.log('parameter shall be number');
        return;
        };
    if (n > 99) {
        console.log('number shall be less than 100' );
        return;
    };

    if (n < 0) {
        console.log('number shall be greater than or equal 0' );
        return;
       } 
       
    let finalBinary = '';
    while(n >= 0) {
        let binary = '';
        let counter= n;
       
        while(counter > 0){
            binary = counter % 2 == 0 ? "0" + binary : "1" + binary
            counter = Math.floor(counter / 2);
        }

        if(n == 1) {binary = "01";}
        if(n == 0) {binary = "00";}
       
        finalBinary += binary + ' ';
        n--;
    }
    return finalBinary.trim();

}

module.exports = binCount;

console.log(binCount(47));

