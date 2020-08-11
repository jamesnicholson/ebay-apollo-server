# Ebay Apollo Server
 Apollo Server running on express and consuming ebays deals feed
 
Demo: http://159.203.110.164:9002/graphql

## New Features!
  - Deals can have offsets, this will start the deal list at particular index
  - Ebay Apollo Server has been dockerized

```sh
    $ docker run -p 9002:9002 jam3snicholson/ebay-apollo-server
```

### GraphQL query

Fetch a group of deals via country with a limit.

```sh
{
    deals(countries : "EBAY-AU", limit:2) {
    	itemId,
    	title,
			price,
    }
}
```
 Fetch a group of deals by category with a limit
 ```sh
{
  dealsByCategory(category:"260010" countries : "EBAY-AU", limit:3) {
    itemId,
    title,
    price,
  }
}
```
Fetch a group of deals  with a limit and a offset for 1, this will be used for pagination 
 ```sh
{
    dealsByOffset( countries : "EBAY-AU", limit:3, offset: 1) {
    		itemId,
    		title,
				price
      	image225
    }
}
```


Fetch a group of deals by category with a limit and a offset for 1, this will be used for pagination 
 ```sh
{
    dealsByCategoryByOffset( countries : "EBAY-AU", category:"260010" , limit: 3, offset: 1 {
    		itemId,
    		title,
				price
      	image225
    }
}
```

A list of categories
 ```sh
{
  categories{
    id
    name
  }
}
```  

A list of countries
 ```sh
{
  countries{
    id
    name
  }
}
```  


Enjoy :)
