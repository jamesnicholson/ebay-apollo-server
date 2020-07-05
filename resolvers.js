const Query = {
    deals: async(_source, {country, limit}, { dataSources }) => {
      return await dataSources.EbayAPI.deals(country, limit)
    },
    countries: async(_source, { }, { dataSources }) => {
      return await dataSources.EbayAPI.countries()
    },
    categories: async(_source,{},{dataSources}) => {
      return await dataSources.EbayAPI.categories()
    },
    dealsByCategory: async(_source, {category, country, limit}, { dataSources }) => {
      return await dataSources.EbayAPI.dealsByCategory(category, country, limit)
    }
  }
module.exports = {Query}