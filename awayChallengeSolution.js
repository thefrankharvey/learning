class ShippingLabel {
  constructor(input) {
    this.input = input;
    this.shipments = this.getShipmentsFromInput(input);
  }

  prettyPrintShipments() {
    this.shipments.map((shipment, i) => {
      console.log(
        `Shipment #${i + 1}:\nNumber: ${shipment.number}, Order Number: ${
          shipment.orderNumber
        }, Shipped: ${shipment.shipped}, First Name: ${
          shipment.firstName
        }, Last Name: ${shipment.lastName}, Parent Shipment: ${
          shipment.parentShipment
        }`
      );
    });
  }

  // takes a string and returns an array of shipment objects
  getShipmentsFromInput(input) {
    return input.split("\n").map(line => {
      const valOrPlaceholder = val => (val.trim() === "" ? "N/A" : val);
      const [
        number,
        orderNumber,
        shipped,
        firstName,
        lastName,
        parentShipment
      ] = line.split(",").map(val => valOrPlaceholder(val));

      return {
        number,
        orderNumber,
        shipped,
        firstName,
        lastName,
        parentShipment
      };
    });
  }
  
  findShipment(shipmentNumber){
    return this.shipments.find((shipmentObj) => shipmentObj.number.trim() === shipmentNumber)
  }
  
  getShipmentTimeline(today, dateShipped){
      const todayMill = Date.parse(today)
      const dateShippedMill = Date.parse(dateShipped)
      const numberOfDays = (todayMill - dateShippedMill) / (1000 * 3600 * 24)
      return numberOfDays.toFixed(0)
  }
  
  addFullNameAndTime(shipmentNumber, filteredShipments){
    const todaysDate = new Date;
    const foundShipment = filteredShipments ? filteredShipments : this.findShipment(shipmentNumber)
    const shipmentTimline = this.getShipmentTimeline(todaysDate, foundShipment.shipped)
    foundShipment.fullName = `${foundShipment.firstName} ${foundShipment.lastName}`
    foundShipment.daysAgoShipped = shipmentTimline
    return foundShipment;
  }
  
  getOrdersByOrderNumber(orderNumber){
    const filteredShipments = this.shipments.filter(shipmentObj => shipmentObj.orderNumber == orderNumber)
    const ordersResult = filteredShipments.map(x => this.addFullNameAndTime(null, x))    
    return ordersResult
  }
}

function run() {
  const input = `SH348503,O567843,2018-12-10 15:08:58 -0000,Jane,Smith,
  SH465980,O936726,2018-12-11 06:08:14 -0000,John,Reynolds,
  SH465994,O936726,2018-12-11 06:12:37 -0000,John,Reynolds,
  SH867263,O234934,2018-12-11 18:28:51 -0000,Rebecca,Jones,
  SH907346,,2018-12-12 21:12:28 -0000,Rebecca,Jones,SH867263
  SH927813,,2018-12-15 09:49:35 -0000,Rebecca,Jones,SH907346`;

  const label = new ShippingLabel(input);
  console.log(label.getOrdersByOrderNumber('O936726'));
}

run();
