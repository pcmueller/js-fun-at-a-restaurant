function takeOrder(newOrder, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    deliveryOrders.push(newOrder);
    return deliveryOrders;
  }
}

function refundOrder(orderNum, deliveryOrders) {
  deliveryOrders.splice(orderNum -1, 1);
}

function listItems(deliveryOrders) {
  var orderString = "";
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (i < deliveryOrders.length - 1) {
      orderString += `${deliveryOrders[i].item}, `;
    } else {
      orderString += deliveryOrders[i].item;
    }
  }
  return orderString;
}

function searchOrder(deliveryOrders, item) {
  var orderArray = [];
    for (var i = 0; i < deliveryOrders.length; i++) {
      orderArray.push(deliveryOrders[i].item);
    }
  return orderArray.includes(item);
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
