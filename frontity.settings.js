const settings = {
  "name": "smchallenge",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Tindog"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Products",
              "/products/"
            ],
            [
              "Blog", 
              "/blog/"
            ],
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          // using ngrok to set up tunnel to localhost
          "api": "https://9d59-2001-14ba-4c6f-5c00-7053-3760-8b97-cb98.ngrok.io/wordpress/wp-json",
          "postTypes": [
            {
              type: "product",
              endpoint: "products",
              archive: "/products"
            }
          ],
          // taxonomies: [
          //   {
          //     taxonomy: "products",
          //     endpoint: "products"
          //   }
          // ],
          "homepage": "/home",
          "postsPage": "/blog"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
