const { RESTDataSource } = require("apollo-datasource-rest");
var parser = require('xml2js').Parser({explicitArray:false});
class EbayAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = "https://www.ebay.com/rps/feed/v1.1/"
    }
    rawDeals(data){
        console.log("dddd")
        parser.parseString(data, function (err, result) {
            console.log(result.eBayDealsAndEventsItems.item[0]);
            return result.eBayDealsAndEventsItems.item
        });
    }
    deal(data){
        return{
            itemId: data.itemId,
            title: data.title,
            url: data.url,
            endsAt: data.endsAt,
            currency: data.currency,
            price: data.price,
            originalPrice: data.originalPrice,
            discountPercentage: data.discountPercentage,
            quantity: data.quantity,
            shippingCost:data.shippingCost,
            dealUrl: data.dealUrl
        }
    }
    async deals(){
        console.log("dddd")
        return this.rawDeals( await this.get("ebay-ca?limit=200") )
    }
   
}
module.exports = {EbayAPI}