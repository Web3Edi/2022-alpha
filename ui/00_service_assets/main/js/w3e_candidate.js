const videoEl = document.querySelector("#candidate-player");

var iW3ECandidateContract;
var w3eCandidateAddress; 

var playbackId; 
var candidateEventContractAddress; 
var iW3ECandidateEventContract; 

const candidateEventTitleDisplay = ge("candidate_event_title_display"); 
const candidateEventHostDisplay = ge("candidate_event_host_display"); 
const candidateEventLinkDisplay = ge("candidate_event_link_display"); 

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

    openRegistryContract.methods.getAddress("WEB_3_EDI_CANDIDATE").call({ from: account })
        .then(function(response) {
            console.log(response);
            w3eCandidateAddress = response;
            iW3ECandidateContract = getContract(iW3ECandidateAbi, w3eCandidateAddress);
        })
        .catch(function(err) {
            console.log(err);
        });
}

async function loadPageData() { 

    iW3ECandidateContract.methods.getHappeningNow().call({from : account})
    .then(function(response){
        console.log(response);
        playbackId = response._playbackId; 
        candidateEventContractAddress = response._eventContract; 
        if(candidateEventContractAddress === '0x0000000000000000000000000000000000000000'){
            // get stock reel; 
            var srcNode = ce("source");
            srcNode.setAttribute("src","../21_media/filler.mp4");
            srcNode.setAttribute("type","video/mp4");
            videoEl.append(srcNode);
        }
        else { 

            candidateEventLinkDisplay.innerHTML = "<a href='../16_event/event_detail?address="+candidateEventContractAddress+"'>Event Details</a>"; 

            
            iW3ECandidateEventContract = getContract(iW3EEventAbi, candidateEventContractAddress);
            iW3ECandidateEventContract.methods.getTitle().call({from : account})
            .then(function(response){
                console.log(response);
                candidateEventTitleDisplay.innerHTML = response; 
            })
            .catch(function(err) {
                console.log(err);
            });
            iW3ECandidateEventContract.methods.getFeatureSTR("EVENT_HOST").call({from : account})
            .then(function(response){
                console.log(response);
                candidateEventHostDisplay.innerHTML = response; 
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