/**
 * 
 * school.name = ""; 
 * school.crest = ""; 
 * school.logo = ""; 
 * school.summary = ""; 
 * school.motto = ""; 
 */

var schoolsRoot = "../00_service_assets/test/images/schools/";

var yogaSchool = {};
yogaSchool.name = "Ashram Ashram"; 
yogaSchool.crest = schoolsRoot + "ashramashram/crest.png"; 
yogaSchool.logo = schoolsRoot + "ashramashram/logo.png"; 
yogaSchool.summary = "Ashram Ashram is the calmest place to learn to connec with your inner higher self"; 
yogaSchool.motto = "Yoga a way of life in mindefulness"; 
yogaSchool.title = yogaSchool.name; 
yogaSchool.image = yogaSchool.crest; 
yogaSchool.category = "yoga"; 
yogaSchool.categoryLink = "../17_school/school_search.html?category=yoga"; 
yogaSchool.date = ""; 
yogaSchool.studentCount = 170000;


var salesSchool = {};
salesSchool.name = "N 21 Sales"; 
salesSchool.crest = schoolsRoot + "n21sales/crest.png"; 
salesSchool.logo = schoolsRoot + "n21sales/logo.png"; 
salesSchool.summary = "N 21 Sales is the best place to learn how to secure high ticket sales fast"; 
salesSchool.motto = "21 sales in 21 days"; 
salesSchool.title = salesSchool.name; 
salesSchool.image = salesSchool.crest; 
salesSchool.category = "sales"; 
salesSchool.categoryLink = "../17_school/school_search.html?category=sales"; 
salesSchool.date = ""; 
salesSchool.studentCount = 60000;


var nftSchool	= {};
nftSchool.name = "W 3 NFT"; 
nftSchool.crest = schoolsRoot + "w3nft/crest.png"; 
nftSchool.logo = schoolsRoot + "w3nft/logo.png"; 
nftSchool.summary = "W 3 NFT is the newest most exciting place to learn about running your NFT project"; 
nftSchool.motto = "Beyond NFTs in Web 3"; 
nftSchool.title = nftSchool.name; 
nftSchool.image = nftSchool.crest; 
nftSchool.category = "nft"; 
nftSchool.categoryLink = "../17_school/school_search.html?category=nft"; 
nftSchool.date = ""; 
nftSchool.studentCount = 150000;

var programmerSchool	= {};
programmerSchool.name = "ML Python"; 
programmerSchool.crest = schoolsRoot + "mlPython/crest.png"; 
programmerSchool.logo = schoolsRoot + "mlPython/logo.png"; 
programmerSchool.summary = "ML Python is the fastest place to learn how to use Python for Machine Learning"; 
programmerSchool.motto = "Machine Learning without the Fangs"; 
programmerSchool.studentCount = 75000;


var footballSchool = {};
footballSchool.name = "Focus Football"; 
footballSchool.crest = schoolsRoot + "focusFootball/crest.png"; 
footballSchool.logo = schoolsRoot + "focusFootball/logo.png"; 
footballSchool.summary = "Focus Football is where you will learn to play 1st league ball with first league focus"; 
footballSchool.motto = "Football with Focus"; 
footballSchool.studentCount = 15000;


var marketingSchool = {};
marketingSchool.name = "Frontier Markets"; 
marketingSchool.crest = schoolsRoot + "frontierMarkets/crest.png"; 
marketingSchool.logo = schoolsRoot + "frontierMarkets/logo.png"; 
marketingSchool.summary = "Frontier Markets is where you will learn how to market in the newest and hotest markets"; 
marketingSchool.motto = "Marketing in the Wilder West"; 
marketingSchool.studentCount = 20000;

var defiSchool	= {};
defiSchool.name = "DeFi Champions"; 
defiSchool.crest = schoolsRoot + "defiChampions/crest.png"; 
defiSchool.logo = schoolsRoot + "defiChampions/logo.png"; 
defiSchool.summary = "DeFi Champions is where you can learn how to make DeFi work for you every second"; 
defiSchool.motto = "Champions of future Finance"; 
defiSchool.category = "defi";
defiSchool.studentCount = 50000;

var cookingSchool	= {};
cookingSchool.name = "Decentralized Cookery"; 
cookingSchool.crest = schoolsRoot + "decentralizedCookery/crest.png"; 
cookingSchool.logo = schoolsRoot + "decentralizedCookery/logo.png"; 
cookingSchool.summary = "Decentralized Cookery is the most exciting place to learn how to cook gourmet as a Web 3 Nomad"; 
cookingSchool.motto = "Cooking where ever you are"; 
cookingSchool.category = "cooking"; 
cookingSchool.studentCount = 15000;



const schools = [yogaSchool, salesSchool, nftSchool, programmerSchool, cookingSchool, defiSchool, marketingSchool, footballSchool]; // campus

const promoSchools = [yogaSchool, salesSchool, nftSchool]; // campus

const featuredSchools = [yogaSchool, defiSchool, cookingSchool]; // candidate dashboard