const { RESTDataSource } = require("apollo-datasource-rest");
const countryList = require("./countries");
const categoryList = require("./categories");
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
                image225: data.image225,
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
    async dealsByCategory(category, country, limit){
        return this.rawDeals( await this.get(`${country}?eBayCatId=${category}&limit=${limit}`))
    }
    async dealsByCategoryByOffset(country, category, limit, offset){
        return this.rawDeals( await this.get(`${country}?eBayCatId=${category}&limit=${limit}&offset=${offset}`))
    }
    async deals(country, limit){
        return this.rawDeals( await this.get(`${country}?limit=${limit}`))
    }
    async dealsByOffset(country, limit, offset){
        return this.rawDeals( await this.get(`${country}?limit=${limit}&offset=${offset}`))
    }
    async countries(){
        return countryList;
    }
    async categories(){
        return categoryList;
    }
}
module.exports = {EbayAPI}