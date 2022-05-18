const vueInstance = new Vue({
    el: '#app',
    data: {
        tabSelected: 'login',

        listApi: [
            {
                "id": "business-insider",
                "name": "Business Insider",
                "author": "insider@insider.com (Isobel Asher Hamilton)",
                "title": "Twitter lost three more top executives amid Elon Musk takeover drama",
                "description": "The new departures come less than a week after two senior execs announced they were leaving Twitter — and one said the CEO asked him to go.",
                "url": "https://www.businessinsider.com/twitter-lost-three-more-executives-amid-elon-musk-takeover-2022-5",
                "urlToImage": "https://i.insider.com/62826e12e7446d0018cca863?width=1200&format=jpeg",
                "publishedAt": "2022-05-18T10:05:04Z",
                "content": "Three senior Twitter execs have left the company, meaning it has lost a total of five top execs since Elon Musk began his proposed $44 billion takeover of the company.\r\nThe departing execs as first r… [+1652 chars]"
            },
            {

                "id": null,
                "name": "Independent.ie",
                "author": "Gino Spocchio",
                "title": "Elon Musk compares US president to Anchorman, says he plans to vote Republican for the first time",
                "description": "Elon Musk has compared US President Joe Biden to Anchorman and said he will vote Republican in &ldquo;this election&rdquo; despite historically being a Democrat voter.",
                "url": "https://www.independent.ie/world-news/north-america/elon-musk-compares-us-president-to-anchorman-says-he-plans-to-vote-republican-for-the-first-time-41662041.html",
                "urlToImage": "https://www.independent.ie/world-news/north-america/41905/41662040.ece/AUTOCROP/w1240h700/ITTER-MUSK-CEO%2082737437",
                "publishedAt": "2022-05-18T09:39:48Z",
                "content": "Elon Musk has compared US President Joe Biden to Anchorman and said he will vote Republican in this election despite historically being a Democrat voter.\r\nThe billionaire tech founder said Mr Biden w… [+2173 chars]"
            },
            {

                "id": null,
                "name": "TechNode",
                "author": "TechNode Feed",
                "title": "Zero cars sold in Shanghai in April as city went into Covid-19 lockdown",
                "description": "A new wave of covid-19 infections slammed the brakes on new-car sales in Shanghai in April, as figures from the Shanghai Automobile Sales Trade Association showed that zero new cars were sold during the month, Chinese media reported Tuesday. Shanghai accounte…",
                "url": "http://technode.com/2022/05/18/zero-cars-sold-in-shanghai-in-april-as-city-went-into-covid-19-lockdown/",
                "urlToImage": "https://i0.wp.com/technode.com/wp-content/uploads/2021/08/technode-news-feed-1-1.png?fit=540%2C540&ssl=1",
                "publishedAt": "2022-05-18T09:34:02Z",
                "content": "A new wave of covid-19 infections slammed the brakes on new-car sales in Shanghai in April, as figures from the Shanghai Automobile Sales Trade Association showed that zero new cars were sold during … [+463 chars]"
            },
            {
                "id": "business-insider",
                "name": "Business Insider",
                "author": "insider@insider.com (Isobel Asher Hamilton)",
                "title": "Twitter lost three more top executives amid Elon Musk takeover drama",
                "description": "The new departures come less than a week after two senior execs announced they were leaving Twitter — and one said the CEO asked him to go.",
                "url": "https://www.businessinsider.com/twitter-lost-three-more-executives-amid-elon-musk-takeover-2022-5",
                "urlToImage": "https://i.insider.com/62826e12e7446d0018cca863?width=1200&format=jpeg",
                "publishedAt": "2022-05-18T10:05:04Z",
                "content": "Three senior Twitter execs have left the company, meaning it has lost a total of five top execs since Elon Musk began his proposed $44 billion takeover of the company.\r\nThe departing execs as first r… [+1652 chars]"
            },
            {

                "id": null,
                "name": "Independent.ie",
                "author": "Gino Spocchio",
                "title": "Elon Musk compares US president to Anchorman, says he plans to vote Republican for the first time",
                "description": "Elon Musk has compared US President Joe Biden to Anchorman and said he will vote Republican in &ldquo;this election&rdquo; despite historically being a Democrat voter.",
                "url": "https://www.independent.ie/world-news/north-america/elon-musk-compares-us-president-to-anchorman-says-he-plans-to-vote-republican-for-the-first-time-41662041.html",
                "urlToImage": "https://www.independent.ie/world-news/north-america/41905/41662040.ece/AUTOCROP/w1240h700/ITTER-MUSK-CEO%2082737437",
                "publishedAt": "2022-05-18T09:39:48Z",
                "content": "Elon Musk has compared US President Joe Biden to Anchorman and said he will vote Republican in this election despite historically being a Democrat voter.\r\nThe billionaire tech founder said Mr Biden w… [+2173 chars]"
            },
            {

                "id": null,
                "name": "TechNode",
                "author": "TechNode Feed",
                "title": "Zero cars sold in Shanghai in April as city went into Covid-19 lockdown",
                "description": "A new wave of covid-19 infections slammed the brakes on new-car sales in Shanghai in April, as figures from the Shanghai Automobile Sales Trade Association showed that zero new cars were sold during the month, Chinese media reported Tuesday. Shanghai accounte…",
                "url": "http://technode.com/2022/05/18/zero-cars-sold-in-shanghai-in-april-as-city-went-into-covid-19-lockdown/",
                "urlToImage": "https://i0.wp.com/technode.com/wp-content/uploads/2021/08/technode-news-feed-1-1.png?fit=540%2C540&ssl=1",
                "publishedAt": "2022-05-18T09:34:02Z",
                "content": "A new wave of covid-19 infections slammed the brakes on new-car sales in Shanghai in April, as figures from the Shanghai Automobile Sales Trade Association showed that zero new cars were sold during … [+463 chars]"
            },
            {
                "id": "business-insider",
                "name": "Business Insider",
                "author": "insider@insider.com (Isobel Asher Hamilton)",
                "title": "Twitter lost three more top executives amid Elon Musk takeover drama",
                "description": "The new departures come less than a week after two senior execs announced they were leaving Twitter — and one said the CEO asked him to go.",
                "url": "https://www.businessinsider.com/twitter-lost-three-more-executives-amid-elon-musk-takeover-2022-5",
                "urlToImage": "https://i.insider.com/62826e12e7446d0018cca863?width=1200&format=jpeg",
                "publishedAt": "2022-05-18T10:05:04Z",
                "content": "Three senior Twitter execs have left the company, meaning it has lost a total of five top execs since Elon Musk began his proposed $44 billion takeover of the company.\r\nThe departing execs as first r… [+1652 chars]"
            },
            {

                "id": null,
                "name": "Independent.ie",
                "author": "Gino Spocchio",
                "title": "Elon Musk compares US president to Anchorman, says he plans to vote Republican for the first time",
                "description": "Elon Musk has compared US President Joe Biden to Anchorman and said he will vote Republican in &ldquo;this election&rdquo; despite historically being a Democrat voter.",
                "url": "https://www.independent.ie/world-news/north-america/elon-musk-compares-us-president-to-anchorman-says-he-plans-to-vote-republican-for-the-first-time-41662041.html",
                "urlToImage": "https://www.independent.ie/world-news/north-america/41905/41662040.ece/AUTOCROP/w1240h700/ITTER-MUSK-CEO%2082737437",
                "publishedAt": "2022-05-18T09:39:48Z",
                "content": "Elon Musk has compared US President Joe Biden to Anchorman and said he will vote Republican in this election despite historically being a Democrat voter.\r\nThe billionaire tech founder said Mr Biden w… [+2173 chars]"
            },
            {

                "id": null,
                "name": "TechNode",
                "author": "TechNode Feed",
                "title": "Zero cars sold in Shanghai in April as city went into Covid-19 lockdown",
                "description": "A new wave of covid-19 infections slammed the brakes on new-car sales in Shanghai in April, as figures from the Shanghai Automobile Sales Trade Association showed that zero new cars were sold during the month, Chinese media reported Tuesday. Shanghai accounte…",
                "url": "http://technode.com/2022/05/18/zero-cars-sold-in-shanghai-in-april-as-city-went-into-covid-19-lockdown/",
                "urlToImage": "https://i0.wp.com/technode.com/wp-content/uploads/2021/08/technode-news-feed-1-1.png?fit=540%2C540&ssl=1",
                "publishedAt": "2022-05-18T09:34:02Z",
                "content": "A new wave of covid-19 infections slammed the brakes on new-car sales in Shanghai in April, as figures from the Shanghai Automobile Sales Trade Association showed that zero new cars were sold during … [+463 chars]"
            },
            
        ]
    },
    methods: {
        changTabs(tab) {
            this.tabSelected = tab;
        },


    },
    computed: {},
})