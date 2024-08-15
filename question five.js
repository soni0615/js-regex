function shippingApplication(courierType) {
    switch (courierType) {
        case "standard":
            return "Estimated time for delivery in standard might take 4 to 5 days "
        case "express":
            return "Estimated time for delivery in express might take 1 to 2 days "
        case "overnight":
            return "Estimated time for delivery in overnight delivery will be delivered next day"
        default: 
        return "Sorry cant find the courier type"
    }
}
console.log(shippingApplication("standard"));
console.log(shippingApplication("express"));
console.log(shippingApplication("overnight"));
console.log(shippingApplication("flipkart"));

