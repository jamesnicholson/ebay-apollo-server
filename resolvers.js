const Query = {
    deals: async(_source, { }, { dataSources }) => {
      return await dataSources.EbayAPI.deals()
    }
  }
module.exports = {Query}