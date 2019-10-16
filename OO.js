class ShippingLabel {
  constructor(){
    this.methodOne()
    this.methodTwo()
    this.methodThree()
  }
  
  methodOne(){
    // I want to assign the values of the input array to the testObj keys
    const testObj = {
      Shipment: "",
      Number: "",
      OrderNumebr: "",
      Shipped: "",
      FirstName: "",
      LastName: "",
      ParentShipment: "N/A",
    };
    const test = input.split('\n');
    for(let i = 0;i < test.length; i++){
      console.log(test[i].split(','));
    }
    
    for(let key in testObj){
      console.log(key);
    }  
  }
  
  methodTwo(){
    console.log('METHOD TWO');
  }
  methodThree(){
    console.log('METHOD THREE')
  }
  
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
SH867263,O234934,2018-12-11 18:28:51 -0000,Rebecca,Jones,
SH907346,,2018-12-12 21:12:28 -0000,Rebecca,Jones,SH867263
SH927813,,2018-12-15 09:49:35 -0000,Rebecca,Jones,SH907346`

const newLabel = new ShippingLabel(input)

