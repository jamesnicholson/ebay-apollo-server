const { RESTDataSource } = require("apollo-datasource-rest");
var parser = require('xml2js').Parser({explicitArray:false});
class EbayAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = "https://www.ebay.com/rps/feed/v1.1/"
    }


    rawDeals(data){

      const deal = (data) => {
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
        
        parser.parseString(data, function (err, result) {
            const cleaned = Array.isArray(result.eBayDealsAndEventsItems.item) ? result.eBayDealsAndEventsItems.item.map((item) => deal(item)) : []
            return cleaned
        });
        
    }
    async deals(){
        return this.rawDeals( await this.get("ebay-ca?limit=200"))
    }
   
}
module.exports = {EbayAPI}