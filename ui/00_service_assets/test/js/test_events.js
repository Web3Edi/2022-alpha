/**
 * 
 * event.name = ""; 
 * event.crest = ""; 
 * event.logo = ""; 
 * event.summary = ""; 
 * event.motto = ""; 
 */

const eventBroadcastRoot = "../00_service_assets/test/images/event/broadcast/"; 

var liveYogaEvent 	= {};
liveYogaEvent.image = eventBroadcastRoot + "00_live_meditation_class/event_pic.jpg";
liveYogaEvent.link 	= "../16_event/event_detail.html?event=00";
liveYogaEvent.title = "Live Meditation";
liveYogaEvent.host	= "Ashram Ashram";
liveYogaEvent.date = "15/08/2022"; 
liveYogaEvent.startTime = "09:15"; 
liveYogaEvent.endTime = "10:00"; 
liveYogaEvent.category = "yoga";
liveYogaEvent.categoryLink = "../16_event/event_detail.html?category=yoga";
liveYogaEvent.price = 10;
liveYogaEvent.currency = "USDC";
liveYogaEvent.summary = "This is an exclusive yoga meditation and release class only on Web 3 Edi";

var livePhotographyEvent = {};
livePhotographyEvent.image = eventBroadcastRoot + "01_live_exotic_photography/event_pic.jpg";
livePhotographyEvent.link 	= "../16_event/event_detail.html?event=01";
livePhotographyEvent.title = "Live Exotic Photography";
livePhotographyEvent.host	= "W 3 NFT";
livePhotographyEvent.date = "15/08/2022"; 
livePhotographyEvent.startTime = "09:15"; 
livePhotographyEvent.endTime = "10:00"; 
livePhotographyEvent.category = "photography";
livePhotographyEvent.categoryLink = "../16_event/event_detail.html?category=photography";
livePhotographyEvent.price = 50;
livePhotographyEvent.currency = "USDC";
livePhotographyEvent.summary = "Learn the basics of exotic photography and transform your decentralized social media";

var liveSpeakersWorkshop = {};
liveSpeakersWorkshop.image = eventBroadcastRoot + "02_live_speaking_with_emphasis_workshop/event_pic.jpg";
liveSpeakersWorkshop.link 	= "../16_event/event_detail.html?event=02";;
liveSpeakersWorkshop.title = "Live Speaking with Emphasis";
liveSpeakersWorkshop.host	= "N 21 Sales";
liveSpeakersWorkshop.date = "15/08/2022"; 
liveSpeakersWorkshop.startTime = "09:15"; 
liveSpeakersWorkshop.endTime = "10:00"; 
liveSpeakersWorkshop.category = "personal improvement";
liveSpeakersWorkshop.categoryLink = "../16_event/event_detail.html?category=personal_improvement";
liveSpeakersWorkshop.price = 100;
liveSpeakersWorkshop.currency = "USDT";
liveSpeakersWorkshop.summary = "Challenge and inspire your audience with Gary Tonks only on Web 3 Edi";

var liveDefiWorkshop	 = {};
liveDefiWorkshop.image = eventBroadcastRoot + "03_live_defi_workshop/event_pic.jpg";
liveDefiWorkshop.link = "../16_event/event_detail.html?event=03";;
liveDefiWorkshop.title = "Live DeFi Workshop";
liveDefiWorkshop.host	= "ML Python";
liveDefiWorkshop.date = "15/08/2022"; 
liveDefiWorkshop.startTime = "09:15"; 
liveDefiWorkshop.endTime = "10:00";
liveDefiWorkshop.category = "defi";
liveDefiWorkshop.categoryLink = "../16_event/event_detail.html?category=defi"; 
liveDefiWorkshop.price = 100;
liveDefiWorkshop.currency = "DAI";
liveDefiWorkshop.summary = "See DeFi in action and earn while you learn only on Web 3 Edi";

const liveEvents = [liveYogaEvent, livePhotographyEvent, liveSpeakersWorkshop, liveDefiWorkshop];

const eventPromoRoot = "../00_service_assets/test/images/event/promo/"; 

var defiForAllWorkshop	 = {};
defiForAllWorkshop.image = eventPromoRoot + "02_defi_for_all_workshop.jpg";
defiForAllWorkshop.link = "../16_event/event_detail.html?event=04";
defiForAllWorkshop.title = "DeFi For All";
defiForAllWorkshop.host	= "DeFi Champions";
defiForAllWorkshop.date = "15/08/2022"; 
defiForAllWorkshop.startTime = "09:15"; 
defiForAllWorkshop.endTime = "10:00"; 
defiForAllWorkshop.spaces = "20"; 
defiForAllWorkshop.summary = "A beginners workshop on DeFi and how to earn in your first hours trading";
defiForAllWorkshop.category = "finance";
defiForAllWorkshop.categoryLink = "../16_event/event_detail.html?category=finance";
defiForAllWorkshop.price = 10;
defiForAllWorkshop.currency = "USDC";

var jungleGroumetWorkshop	 = {};
jungleGroumetWorkshop.image = eventPromoRoot +  "01_jungle_gourmet_workshop.jpg";
jungleGroumetWorkshop.link = "../16_event/event_detail.html?event=05";
jungleGroumetWorkshop.title = "Jungle Gourmet";
jungleGroumetWorkshop.host	= "Decentralized Cookery";
jungleGroumetWorkshop.date = "15/08/2022"; 
jungleGroumetWorkshop.startTime = "20:30"; 
jungleGroumetWorkshop.endTime = "21:30"; 
jungleGroumetWorkshop.spaces = "50"; 
jungleGroumetWorkshop.summary = "Learn how to cook gourmet using jungle based ingredients";
jungleGroumetWorkshop.category = "cookery";
jungleGroumetWorkshop.categoryLink = "../16_event/event_detail.html?category=cookery";
jungleGroumetWorkshop.price = 75;
jungleGroumetWorkshop.currency = "USDC";


var focusStrategyWorkshop	 = {};
focusStrategyWorkshop.image = eventPromoRoot + "03_focus_strategy_workshop.jpg";
focusStrategyWorkshop.link = "../16_event/event_detail.html?event=06";
focusStrategyWorkshop.title = "Focus Strategy";
focusStrategyWorkshop.host	= "Focus Football";
focusStrategyWorkshop.date = "15/08/2022"; 
focusStrategyWorkshop.startTime = "12:30"; 
focusStrategyWorkshop.endTime = "13:30"; 
focusStrategyWorkshop.spaces = "15"; 
focusStrategyWorkshop.summary = "This workshop will teach you the advanced elements of Focused Football Strategy";
focusStrategyWorkshop.category = "american football";
focusStrategyWorkshop.categoryLink = "../16_event/event_detail.html?category=american_football";
focusStrategyWorkshop.price = 100;
focusStrategyWorkshop.currency = "USDC";


const promoEvents = [defiForAllWorkshop, jungleGroumetWorkshop, focusStrategyWorkshop];

const upcomingEvents = [defiForAllWorkshop, focusStrategyWorkshop, jungleGroumetWorkshop];

const w3eEventListings = [ liveSpeakersWorkshop, liveDefiWorkshop,  defiForAllWorkshop, jungleGroumetWorkshop, focusStrategyWorkshop  ];

const happeningNowEventListings = [liveYogaEvent,livePhotographyEvent];
