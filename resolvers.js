const Query = {
    deals: async(_source, { }, { dataSources }) => {
    //console.log(await dataSources.EbayAPI.deals())
      return await dataSources.EbayAPI.deals()
    }
  }
module.exports = {Query}