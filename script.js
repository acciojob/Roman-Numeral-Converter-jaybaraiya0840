function convertToRoman(num) {
  	const obj = {
      ['M',1000], 
		      ['CM',900], 
       ['D', 500],
		['CD', 400],
      ['C', 100], 
		      ['XC', 100], 
      ['L', 50], 
		      ['XL', 50], 
    ['X', 10],
            ['IX', 9],
      ['V', 5], 
		      ['IV', 4], 
    ['I', 1]
    };

  //your code here

	 let rnumber = '';

    for (let i = 0; i < obj.length; i++) {
        let symbol = obj[i][0];
        let value = obj[i][1];

        while (num >= value) {
           rnumber =rnumber + symbol;
            num =  num -value;
        }
    }

    return rnumber;
}

}
	

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
