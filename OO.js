class ShippingLabel {
  constructor(){
    this.methodOne()
    // this.methodTwo()
    // this.methodThree()
  }

  methodOne(){
    // I want to assign the values of the input array to the testObj keys
    const testObj = {
      Shipment: 0,
      Number: 1, 
      OrderNumber: 2, 
      FirstName: 3, 
      LastName: 4 
    };
    
    const resultArr = []
    const result = {}
    const inputResult = input.split('\n')
    
    for(let item in inputResult){
      const itemValues = inputResult[item].trim().split(',');
      
      for(let key in testObj){
        const indexOfItems = itemValues.indexOf(itemValues[testObj[key]])
        if(testObj[key] === indexOfItems){
          result[key] = itemValues[testObj[key]]
          //resultArr.push(result)
        }
      }
      console.log(result);
            
    }
    console.log(resultArr);
  }

  // methodTwo(){
  //   console.log('METHOD TWO');
  // }
  // methodThree(){
  //   console.log('METHOD THREE')
  // }

}

// Shipment #1:
// Number: SH348503, 
// Order Number: O567843, 
// Shipped: 2018-12-10 15:08:58 -0000, 
// First Name: Jane,
// Last Name: Smith, 
// Parent Shipment: N/A

const input = `SH348503,O567843,2018-12-10 15:08:58 -0000,Jane,Smith, 
SH465980,O936726,2018-12-11 06:08:14 -0000,John,Reynolds, 
SH465994,O936726,2018-12-11 06:12:37 -0000,John,Reynolds, 
SH867263,O234934,2018-12-11 18:28:51 -0000,Rebecca,Jones`

const newLabel = new ShippingLabel(input)


// var keys = ['foo', 'bar', 'baz'];
// var values = [11, 22, 33]
// 
// var result = {};
// keys.forEach((key, i) => result[key] = values[i]);
// console.log(result);