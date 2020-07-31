function ChangeCase(anyString) {
    if(!anyString) return null;
    let result = '';
    const vowels = ['a', 'e', 'i', 'u' , 'o'];
    const arr = anyString.split('');
    for (let alphapet of arr) {
        console.log(alphapet);  
        if (vowels.includes(alphapet.toLowerCase())) {
            alphapet = alphapet.toLowerCase();
        } else if (isNaN(alphapet)) {
            alphapet = alphapet.toUpperCase();
        } else if (!isNaN(alphapet) && alphapet % 2 === 0) {
            alphapet = '';
        }

        result += alphapet;
    }

    return result;

}

module.exports = ChangeCase;

ChangeCase('alphabet0123');