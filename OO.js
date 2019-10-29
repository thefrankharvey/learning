class ShippingLabel {
  constructor() {
    this.methodOne();
  }

  methodOne() {
    const shipArr = [
      "Number",
      "Order Number",
      "Shipped",
      "First Name",
      "Last Name",
      "Parent Shipment"
    ];
    const resultObj = {};
    const result = [];
    const finalResult = [];
    const sortedValue = input.split("\n");
    for (let i = 0; i < sortedValue.length; i++) {
      result.push(sortedValue[i].split(","));
    }
    for (let item in result) {
      const itemArray = result[item];

      for (let i in itemArray) {
        if (itemArray[i] === "" || itemArray[i] === " ") {
          itemArray[i] = "N/A";
        }
        resultObj[shipArr[i]] = itemArray[i];
        console.log(resultObj);
        // console.log(resultObj);
        //console.log(shipArr[i]);
        // console.log(itemArray[i]);
      }
    }
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
SH927813,,2018-12-15 09:49:35 -0000,Rebecca,Jones,SH907346`;

const newLabel = new ShippingLabel(input);

// var keys = ['foo', 'bar', 'baz'];
// var values = [11, 22, 33]
//
// var result = {};
// keys.forEach((key, i) => result[key] = values[i]);
// console.log(result);
