const videoEl = document.querySelector("#candidate-player");

var iW3ECandidateRostrumContract;
var w3eCandidateRostrumAddress; 

var playbackId; 

var eventAddress; 
var iW3EEventContract; 

var promotionManagerAddress; 
var iPromotionManagerContract; 


const candidateEventTitleDisplay = ge("candidate_event_title_display"); 
const candidateEventHostDisplay = ge("candidate_event_host_display"); 
const candidateEventLinkDisplay = ge("candidate_event_link_display"); 

const upcomingEventsDisplay = ge("upcoming_events_display");

const featuredSchoolsDisplay = ge("featured_schools_display");

const topCoursesDisplay = ge("top_courses_display");
const previewCoursesDisplay = ge("preview_courses_display");
const sponseredStudentShipCoursesDisplay = ge("sponsored_student_ship_courses_display");


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

    openRegistryContract.methods.getAddress("RESERVED_WEB_3_EDI_CANDIDATE_ROSTRUM").call({ from: account })
    .then(function(response) {
        console.log(response);
        w3eCandidateRostrumAddress = response;
        iW3ECandidateRostrumContract = getContract(iW3ECandidateRostrumAbi, w3eCandidateRostrumAddress);
    })
    .catch(function(err) {
        console.log(err);
    });

    openRegistryContract.methods.getAddress("RESERVED_WEB_3_EDI_PROMOTION_MANAGER_CORE").call({ from: account })
    .then(function(response) {
        console.log(response);
        promotionManagerAddress = response;
        iPromotionManagerContract = getContract(iPromotionManagerAbi, promotionManagerAddress);
    })
    .catch(function(err) {
        console.log(err);
    });
}

async function loadPageData() { 


    buildUpcomingEvents();
    buildFeaturedSchools();
    buildCourses(topCourses, topCoursesDisplay);
    buildCourses(previewCourses, previewCoursesDisplay);
    buildCourses(sponseredStudentShipCourses, sponseredStudentShipCoursesDisplay);


    iW3ECandidateRostrumContract.methods.getHappeningNow().call({from : account})
    .then(function(response){
        console.log("checking broadcast");
        console.log(response);
        playbackId = response._playbackId; 
        eventAddress = response._eventContract; 
        if(eventAddress === '0x0000000000000000000000000000000000000000'){
            // get stock reel; 
            var srcNode = ce("source");
            srcNode.setAttribute("src","../21_media/filler.mp4");
            srcNode.setAttribute("type","video/mp4");
            videoEl.append(srcNode);
        }
        else { 

            candidateEventLinkDisplay.innerHTML = "<a href='../16_event/event_detail?address="+eventAddress+"'>Event Details</a>"; 
            
            iW3EEventContract = getContract(iW3EEventAbi, eventAddress);
            
            // title 
            iW3EEventContract.methods.getTitle().call({from : account})
            .then(function(response){
                console.log(response);
                candidateEventTitleDisplay.innerHTML = response; 
            })
            .catch(function(err) {
                console.log(err);
            });
            
            // host
            iW3EEventContract.methods.getFeatureSTR("EVENT_HOST").call({from : account})
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

function buildFeaturedSchools() { 
    featuredSchoolsDisplay.innerHTML = ""; 

    for(var x = 0; x < featuredSchools.length; x++) {
        var featuredSchool = featuredSchools[x];
        var fedisplay = ce("div");
        var a = ce("a");
        a.setAttribute("href", featuredSchool.joinLink);
        a.append(text(featuredSchool.name));
        fedisplay.append(a);
        fedisplay.append(text(" |" + featuredSchool.category +" | " ));
        var b = ce("b");
        b.append( text((featuredSchool.studentCount/1000) + "k students"));
        fedisplay.append(b);

        featuredSchoolsDisplay.append(fedisplay);
    }

}

function buildUpcomingEvents() {
    upcomingEventsDisplay.innerHTML = "";
    iPromotionManagerContract.methods.getPromotedAddresses( "CANDIDATE", "EVENT").call({from : account})
    .then(function(response){
        console.log(response);
        var uEvents = response; 
        for(var x = 0; x < uEvents.length; x++){
            var uEvent = uEvents[x];        
            buildUpcomingEvent( uEvent);    
        }
    })
    .catch(function(err){
        console.log(err);
    });
}

function buildUpcomingEvent(upcomingEvent){
    
    var eventContract = getContract(iW3EEventAbi, upcomingEvent);

    var startTime = ce("span");
    var endTime = ce("span");

    var uedisplay = ce("div");
    uedisplay.setAttribute("style", "justify-content:center;")
    var small = ce("small");
    small.append(startTime);
    small.append(text(" - "));
    small.append(endTime);
    uedisplay.append(small);

    eventContract.methods.getFeatureUINT("START_TIME_KEY").call({from : account})
    .then(function(response){
        console.log(response);
        startTime.append(text(getTime(response)));
    })
    .catch(function(err){
        console.log(err);
    });


    eventContract.methods.getFeatureUINT("END_TIME_KEY").call({from : account})
    .then(function(response){
        console.log(response);
        endTime.append(text(getTime(response)));
    })
    .catch(function(err){
        console.log(err);
    });

    var title = ce("span");
    uedisplay.append(text(" > "));
    uedisplay.append(title);

    eventContract.methods.getTitle().call({from : account})
    .then(function(response){
        console.log(response);
        title.append(text(response));        
    })
    .catch(function(err){
        console.log(err);
    });        
    
    uedisplay.append(text(" > "));
    var a = ce("a");
    a.setAttribute("href", "../16_event/event_detail.html?address="+upcomingEvent);
    a.setAttribute("class", "btn btn-outline-light btn-sm");
    a.append(text("Register"));

    uedisplay.append(a);

    upcomingEventsDisplay.append(uedisplay);
}


function buildCourses( courses, display ){
    display.innerHTML = ""; 
    for(var x = 0; x < courses.length; x++) {
        var course = courses[x];
        /*
            <li class="d-flex align-items-center justify-content-between">
                <div class="name-avatar d-flex align-items-center pr-2">
                    <div class="avatar mr-2 flex-shrink-0">
                        <img src="../00_service_assets/main/images/photo1.jpg" class="border-radius-100 box-shadow" width="50" height="50" alt="">
                    </div>
                    <div class="txt">
                        <span class="badge badge-pill badge-sm" data-bgcolor="#e7ebf5" data-color="#265ed7">4.9</span>
                        <div class="font-14 weight-600">Dr. Neil Wagner</div>
                        <div class="font-12 weight-500" data-color="#b2b1b6">Pediatrician</div>
                    </div>
                </div>
                <div class="cta flex-shrink-0">
                    <a href="#" class="btn btn-sm btn-outline-primary">Join</a>
                </div>
            </li>
        */

        var li = ce("li");
        li.setAttribute("class", "d-flex align-items-center justify-content-between");
        display.append(li);
         var avatar = ce("div");
         avatar.setAttribute("class", "name-avatar d-flex align-items-center pr-2");
         li.append(avatar);
         var avatarSub = ce("div");
         avatarSub.setAttribute("class", "avatar mr-2 flex-shrink-0");
         avatar.append(avatarSub);
         var img = ce("img");
         img.setAttribute("src", course.image);
         img.setAttribute("class", "border-radius-100 box-shadow");
         img.setAttribute("width","50");
         img.setAttribute("height","50");
         img.setAttribute("alt",course.title);
         avatarSub.append(img);

         var description = ce("div");
         description.setAttribute("class", "txt");
         avatar.append(description);
         
         var span = ce("span");
         span.setAttribute("class", "badge badge-pill badge-sm");
         span.setAttribute("data-bgcolor","#e7ebf5");
         span.setAttribute("data-color","#265ed7");
         span.append(text(course.studentCount + " students"));
         description.append(span);

         var courseTitle = ce("div");
         courseTitle.setAttribute("class","font-14 weight-600");
         courseTitle.append(text(course.title));
         description.append(courseTitle);

         var school = ce("div");
         school.setAttribute("class","font-12 weight-500");
         school.setAttribute("data-color","#b2b1b6");
         school.append(text(course.school));
         description.append(school);

         var join = ce("div");
         join.setAttribute("class","cta flex-shrink-0");
         li.append(join);

         var a = ce("a");
         a.setAttribute("href",course.joinLink);
         a.setAttribute("class","btn btn-sm btn-outline-success");

         a.append(text("Join"));

         join.append(a);    
    }
}

function getTime(numeric) {
    var d = new Date(numeric*1000);
    return formatDate(d);
}

function formatDate(date) {
    return date.toLocaleString('en-UK', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', hour12: false, minute: '2-digit', second: '2-digit' })
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