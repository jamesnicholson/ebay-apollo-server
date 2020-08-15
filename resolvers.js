
const Query = {
    deals: async(_source, { country, category, limit, offset}, { dataSources }) => {
      if(category){
        return await dataSources.EbayAPI.deals({country, category, limit, offset})
      }
      return await dataSources.EbayAPI.deals({country, limit, offset})
    },
    countries: async(_source, { }, { dataSources }) => {
      return await dataSources.EbayAPI.countries()
    },
    categories: async(_source,{},{dataSources}) => {
      return await dataSources.EbayAPI.categories()
    },
  }
module.exports = {Query}