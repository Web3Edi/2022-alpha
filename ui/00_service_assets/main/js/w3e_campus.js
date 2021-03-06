const videoEl = document.querySelector("#campus-player");

var iW3ECampusContract;
var w3eCampusAddress; 

var playbackId; 
var happeningNowEventContractAddress; 
var iW3EHappeningNowEventContract; 

const happeningNowEventTitleDisplay = ge("happening_now_event_title_display"); 
const happeningNowEventHostDisplay = ge("happening_now_event_host_display"); 
const happeningNowEventLinkDisplay = ge("happening_now_event_link_display"); 

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

function ce(name) {
    return document.createElement(name);
}

function getContract(abi, address) {
    return new web3.eth.Contract(abi, address);
}