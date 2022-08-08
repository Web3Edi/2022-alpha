const videoEl = document.querySelector("#campus-player");

var iW3ECampusContract;
var w3eCampusAddress; 

var playbackId; 
var happeningNowEventContractAddress; 
var iW3EHappeningNowEventContract; 

const happeningNowEventTitleDisplay = ge("happening_now_event_title_display"); 
const happeningNowEventHostDisplay = ge("happening_now_event_host_display"); 
const happeningNowEventLinkDisplay = ge("happening_now_event_link_display"); 

const broadcastPromo = ge("broadcast_promo");
const eventsPromo = ge("events_promo");
const coursesPromo = ge("courses_promo");
const schoolsPromo = ge("schools_promo");
const communitiesPromo = ge("communities_promo");
const featuredPromo = ge("featured_promo");
const popularNewsDisplay = ge("popular_news_display");


function startPlayer(playbackId){

        var src = "https://livepeercdn.com/hls/"+playbackId+"/index.m3u8";

        if (videoEl.canPlayType("application/vnd.apple.mpegurl")) {
        // Some browers (safari and ie edge) support HLS natively
        videoEl.src = src;
        } 
        else if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(src);
            hls.attachMedia(videoEl);
        } 
        else {
            console.error("This is a legacy browser that doesn't support MSE");
        }
}

async function configurePageContracts() {
    console.log("registry contract");
    console.log(openRegistryContract);

    openRegistryContract.methods.getAddress("RESERVED_WEB_3_EDI_CAMPUS").call({ from: account })
        .then(function(response) {
            console.log(response);
            w3eCampusAddress = response;
            iW3ECampusContract = getContract(iW3ECampusAbi, w3eCampusAddress);
        })
        .catch(function(err) {
            console.log(err);
        });
}

async function loadPageData() { 

    buildBroadcastPromo();
        
    buildPromo(promoEvents, eventsPromo);
    buildPromo(promoCourses, coursesPromo);
    buildPromo(promoSchools, schoolsPromo);
    buildPromo(promoCommunities, communitiesPromo);

    buildPopularNews(); 

    var featurePromo = [promoEvents[0], promoCourses[0], promoSchools[0], promoCommunities[0]];

    console.log(featurePromo);

    buildFeaturedPromo(featurePromo);


    iW3ECampusContract.methods.getHappeningNow().call({from : account})
    .then(function(response){
        console.log(response);
        playbackId = response._streamId; 
        happeningNowEventContractAddress = response._eventContract; 
        if(happeningNowEventContractAddress === '0x0000000000000000000000000000000000000000'){
            // get stock reel; 
            var srcNode = ce("source");
            srcNode.setAttribute("src","../21_media/filler.mp4");
            srcNode.setAttribute("type","video/mp4");
            videoEl.append(srcNode);
        }
        else { 

            happeningNowEventLinkDisplay.innerHTML = "<a href='../16_event/event_detail?address="+happeningNowEventContractAddress+"'>Event Details</a>"; 

            
            happeningNowEventContract = getContract(iW3EEventAbi, happeningNowEventContractAddress);
            happeningNowEventContract.methods.getTitle().call({from : account})
            .then(function(response){
                console.log(response);
                happeningNowEventTitleDisplay.innerHTML = response; 
            })
            .catch(function(err) {
                console.log(err);
            });
            happeningNowEventContract.methods.getFeatureSTR("EVENT_HOST").call({from : account})
            .then(function(response){
                console.log(response);
                happeningNowEventHostDisplay.innerHTML = response; 
            })
            .catch(function(err) {
                console.log(err);
            });
            startPlayer(playbackId);
        }

    })
    .catch(function(err){
        console.log(err);
    })
}

async function buildPopularNews() { 
    


    for(var x = 0; x < popularNews.length; x++) {
        var news = popularNews[x];
        var root = ce("div"); 
        root.setAttribute("class","col-lg-6");
        var pos = ce("div");
        pos.setAttribute("class","position-relative mb-3 rounded");
        root.append(pos);
        var img = ce("img");
        img.setAttribute("class", "img-fluid w-100");
        img.setAttribute("style", "object-fit: cover;");
        img.setAttribute("src",news.image);
      
        
        var overlay = ce("div");
        overlay.setAttribute("class","overlay position-relative bg-light");
        pos.append(overlay);

        var info = ce("div");
        info.setAttribute("class", "mb-2");
        info.setAttribute("style", "ont-size: 14px;");

        var a = ce("a");
        a.setAttribute("href",news.categoryLink);
        a.append(news.category);
        info.append(a);

        var span = ce("span");
        span.setAttribute("class", "px-1");
        span.append(text("/"));
        info.append(span);
        overlay.append(info);

        var title = ce("a"); 
        title.setAttribute("class", "h4");
        title.setAttribute("href", news.link);
        title.append(text(news.title));
        overlay.append(title);

        overlay.append(img);

        var p = ce("p");
        p.setAttribute("class", "m-0");
        p.append(text(news.summary));
        overlay.append(p);

        popularNewsDisplay.append(root);

    }


}

async function buildFeaturedPromo(featurePromo) { 

    console.log("feature promo")
    console.log(featurePromo);


    for(var x = 0; x < featurePromo.length; x++) {

            var promo = featurePromo[x];

            console.log(promo);

            var root = ce("div");
            root.setAttribute("class", "col-lg-3 py-3");
            var holder = ce("div"); 
            holder.setAttribute("class","bg-light py-2 px-2 mb-3 rounded");
            root.append(holder);
            var info = ce("div");
            info.setAttribute("class","mb-2");
            info.setAttribute("style","font-size: 13px;");
            holder.append(info);

            var a = ce("a"); 
            a.setAttribute("href",promo.categoryLink);
            a.append(text(promo.category));
            info.append(a);

            var span = ce("span");
            span.setAttribute("class", "px-1");
            span.append(text("/"));
            info.append(span);

            var img = ce("img"); 
            img.setAttribute("class","img-fluid w-100");
            img.setAttribute("src", promo.image);
            img.setAttribute("style","object-fit: cover;");
            holder.append(img);

            var title = ce("a");
            title.setAttribute("class","h4 m-0");
            title.setAttribute("href", promo.link);
            title.append(text(promo.title));
            holder.append(title);
            featuredPromo.append(root);
    }
}

async function buildPromo(promoItems, promo ) { 

    console.log(promoItems);

    for(var x = 0; x < promoItems.length; x++){
        
        var promoItem = promoItems[x];

        var root= ce("div");
        root.setAttribute("class","position-relative");
        
        var img = ce("img");
        img.setAttribute("class", "img-fluid w-100");
        img.setAttribute("src", promoItem.image);
        img.setAttribute("style", "object-fit: cover;");
        root.append(img);
        
        var overlay = ce("div");
        overlay.setAttribute("class", "overlay position-relative bg-light");
        root.append(overlay);
        
        var card = ce("div");
        card.setAttribute("class","mb-2");
        card.setAttribute("style","font-size: 13px;");
        overlay.append(card);

        var a = ce("a");
        a.setAttribute("href", promoItem.categoryLink);
        a.append(text(promoItem.category));
        card.append(a);

        var span = ce("span");
        span.setAttribute("class","px-1");
        span.append(text("/")); 
        card.append(span);

        var eventDate = ce("span");
        
        eventDate.append(text(promoItem.date));
        card.append(eventDate);

        var link = ce("a");
        link.setAttribute("class","h4 m-0");
        link.setAttribute("href",promoItem.link);
        link.append(text(promoItem.title));
        overlay.append(link);

        promo.append(root);

    }
}

async function buildBroadcastPromo(){
    console.log("preping owl");
    var owl = ce("div");
    owl.setAttribute("class", "position-relative");

    var table = ce("table");
    owl.append(table);

    var row = table.insertRow(); 

    for(var x = 0; x < liveEvents.length; x++){ 
        var liveEvent = liveEvents[x];
        var cell = row.insertCell(); 
        
        var flex = ce("div");
        flex.setAttribute("class","d-flex");
        var img = ce("img");
        img.setAttribute("src", liveEvent.image);
        img.setAttribute("style", "width: 80px; height: 80px; object-fit: cover;");
        flex.append(img);

        var eventTitle = ce("div");
        eventTitle.setAttribute("class","d-flex align-items-center bg-light px-3");
        eventTitle.setAttribute("style", "height: 80px;");
        var a = ce("a");
        a.setAttribute("class","text-secondary font-weight-semi-bold");
        a.setAttribute("href", liveEvent.link);
        a.append(text(liveEvent.title));
        eventTitle.append(a);
        flex.append(eventTitle);

        cell.append(flex);
        
    }
    broadcastPromo.appendChild(owl);
    console.log(broadcastPromo);

}

function ge(id) {
    return document.getElementById(id);
}

function text(txt) {
    return document.createTextNode(txt);
}

function ce(name) {
    return document.createElement(name);
}

function getContract(abi, address) {
    return new web3.eth.Contract(abi, address);
}