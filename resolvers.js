const Query = {
    deals: async(_source, {countries, limit}, { dataSources }) => {
      return await dataSources.EbayAPI.deals(countries, limit)
    },
    countries: async(_source, { }, { dataSources }) => {
      return await dataSources.EbayAPI.countries()
    }
  }
module.exports = {Query}