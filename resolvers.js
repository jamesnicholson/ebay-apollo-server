const Query = {
    deals: async(_source, { }, { dataSources }) => {
      return await dataSources.EbayAPI.deals()
    },
    countries: async(_source, { }, { dataSources }) => {
      return await dataSources.EbayAPI.countries()
    }
  }
module.exports = {Query}