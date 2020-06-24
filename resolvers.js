const Query = {
    deals: async(_source, {countries, limit}, { dataSources }) => {
      return await dataSources.EbayAPI.deals(countries, limit)
    },
    countries: async(_source, { }, { dataSources }) => {
      return await dataSources.EbayAPI.countries()
    },
    categories: async(_source,{},{dataSources}) => {
      return await dataSources.EbayAPI.categories()
    },
    dealsByCategory: async(_source, {category, countries, limit}, { dataSources }) => {
      return await dataSources.EbayAPI.dealsByCategory(category, countries, limit)
    }
  }
module.exports = {Query}