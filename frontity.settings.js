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
          "api": "https://frontity-assignment-8bb451.ingress-erytho.easywp.com/wp-json",
          "postTypes": [
            {
              type: "product",
              endpoint: "products",
              archive: "/products"
            }
          ],
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
