
async function fetchShames() {

    let url = "./fake.json"
    // let url = "https://439r656kxf.execute-api.us-east-2.amazonaws.com/dev/reports/wall-of-shame"
   
    return fetch(url, {
        // mode: "no-cors"
    })
    .then(function (res) {
        return res.json()
    })


    // return new Promise((res,rej)=>{
    //     setTimeout(()=>{
    //         let iframe = document.querySelector('iframe');
    //         var iframeDocument =  iframe.contentWindow.document;
    //         console.log(iframeDocument)
            
    //         res( iframeDocument.querySelector("pre").innerText)
    //     },5000)    
    // })
    
}

function makeShameRow(entry) {
    return `
            <tr>
                <td>${entry.site}</td>
                <td>${entry.score}</td>
                <td>${entry.infraction_type ?? "not set"}</td>
                <td>${entry.time_range ?? "not set"}</td>
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