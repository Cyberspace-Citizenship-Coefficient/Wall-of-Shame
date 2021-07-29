
        async function fetchShames() {
            // return fetch("https://439r656kxf.execute-api.us-east-2.amazonaws.com/dev/reports/wall-of-shame", {
            //     mode: "no-cors"
            // }).then(res => res.text())
            return new Promise((respond, reject) => {
                respond({ "period": { "start": "1969-12-31T23:58:35.429Z", "end": "2021-07-29T02:48:14.747Z" }, "sites": [{ "site": "en.wikipedia.org", "score": 1134 }, { "site": "youtube.com", "score": 935 }, { "site": "amazon.com", "score": 585 }, { "site": "facebook.com", "score": 467 }, { "site": "twitter.com", "score": 285 }, { "site": "fandom.com", "score": 228 }, { "site": "pinterest.com", "score": 203 }, { "site": "imdb.com", "score": 168 }, { "site": "reddit.com", "score": 166 }, { "site": "yelp.com", "score": 139 }, { "site": "instagram.com", "score": 115 }, { "site": "ebay.com", "score": 115 }, { "site": "walmart.com", "score": 87 }, { "site": "craigslist.org", "score": 83 }, { "site": "healthline.com", "score": 80 }, { "site": "tripadvisor.com", "score": 79 }, { "site": "linkedin.com", "score": 69 }, { "site": "webmd.com", "score": 64 }, { "site": "netflix.com", "score": 61 }, { "site": "apple.com", "score": 60 }] })
            })
        }

        function makeShameRow(entry) {
            return `
            <tr>
                <td>${entry.site}</td>
                <td>${entry.score}</td>
            </tr>
            `
        }

        async function load() {
            let json_shames = await fetchShames();
            let html_shames = json_shames.sites.map(makeShameRow)
            let tbody = document.querySelector("tbody")

            if (!!tbody) {
                tbody.innerHTML = html_shames.join("")
            }


        }

        load()