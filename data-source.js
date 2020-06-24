const { RESTDataSource } = require("apollo-datasource-rest");
const countryList  = require("./countries");
const categoryList  = require("./categories");
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
        let cleaned = [];
        parser.parseString(data, function (err, result) {
            cleaned = Array.isArray(result.eBayDealsAndEventsItems.item) ? result.eBayDealsAndEventsItems.item.map((item) => deal(item)) : []
        });
        return cleaned
    }
    async dealsByCategory(category, countries, limit){
        return this.rawDeals( await this.get(`${countries}?eBayCatId=${category}&limit=${limit}`))
    }
    async deals(countries, limit){
        return this.rawDeals( await this.get(`${countries}?limit=${limit}`))
    }
    async countries(){
        return countryList;
    }
    async categories(){
        return categoryList;
    }
}
module.exports = {EbayAPI}