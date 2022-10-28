console.log("loading core js");
/** standard elements  */
const onboardButton = document.getElementById("connect_web_3");
const showWallet = document.getElementById("show_wallet");

const jcstorage = window.sessionStorage;

var account;
web3 = new Web3(window.ethereum);
var connected = false; 
console.log(web3);
if(web3 === 'undefined' || web3 == null){
    jcstorage.setItem("WEB_3_KEY", web3); 
}
else { 
    connected = true;
}

 

console.log("web 3 " + web3.currentProvider);

const openRegisterAddress = "0x05489F551AF62BA9Ba5A0978e9D780d87f803c5b"; // register address arbitrum test
const openRegistryContract = new web3.eth.Contract(iOpenRegisterAbi, openRegisterAddress);

var w3eAccessManagerAddress; 
var w3eAccessManagerContract; 

//Created check function to see if the MetaMask extension is installed
const isMetaMaskInstalled = () => {

    const {
        ethereum
    } = window;
    return Boolean(ethereum && ethereum.isMetaMask);
};

const MetaMaskClientCheck = () => {
    //Now we check to see if Metmask is installed
    if (!isMetaMaskInstalled()) {
        console.log("metamask not installed");
        //If it isn't installed we ask the user to click to install it
        onboardButton.innerText = 'Click here to install MetaMask!';
        //When the button is clicked we call this function
        onboardButton.onclick = onClickInstall;
        //The button is now disabled
        onboardButton.disabled = false;
    } else {
        //If it is installed we change our button text
        onboardButton.innerText = 'Click to Connect Metamask';

        console.log("metamask installed");
        onboardButton.addEventListener('click', () => {
            getAccount();
            onboardButton.innerText = "Web 3 Connected";
        });
    }
};
const initialize = () => {
    if(!connected){ 
        MetaMaskClientCheck();
    }
    else { 
        getAccount(); 
        onboardButton.innerText = "Web 3 Connected";
    }
};

window.addEventListener('DOMContentLoaded', initialize);

async function getAccount() {
    const accounts = await ethereum.request({
        method: 'eth_requestAccounts'
    });
    account = accounts[0];
    showWallet.innerHTML = "<b>Connected Wallet :: " + account + "</b>";
    configureCoreContracts()
    .then(function(response){
        loadWait();    
    })
    .catch(function(err){
        console.log(err);
    })
}

//We create a new MetaMask onboarding object to use in our app
//const onboarding = new MetaMaskOnboarding({ forwarderOrigin });

//This will start the onboarding proccess
const onClickInstall = () => {
    onboardButton.innerText = 'Onboarding in progress';
    onboardButton.disabled = true;
    //On this object we have startOnboarding which will start the onboarding process for our end user
    onboarding.startOnboarding();
};

const onClickConnect = async() => {
    try {
        // Will open the MetaMask UI
        // You should disable this button while the request is pending!
        await ethereum.request({
            method: 'eth_requestAccounts'
        });
    } catch (error) {
        console.error(error);
    }
};



async function configureCoreContracts()  { 
/** 
    openRegistryContract.methods.getAddress("RESERVED_WEB_3_EDI_ACCESS_MANAGER").call({ from: account })
    .then(function(response) {
        console.log(response);
        w3eAccessManagerAddress = response;
        iW3EAccessManagerContract = getContract(iW3EAccessManagerAbi, w3eAccessManagerAddress);
    })
    .catch(function(err) {
        console.log(err);
    });
*/
    configurePageContracts();
}


function loadWait() { 
    setTimeout(loadPageData, 3000);
}   

function ge(element){
    return document.getElementById(element);
}



function formatCurrency(number) {
    return number / 1e18; 
}

function getContract(abi, address) {
    return new web3.eth.Contract(abi, address);
}


function formatDate(date) {
    return date.toLocaleString('en-UK', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', hour12: false, minute: '2-digit', second: '2-digit' })
}


function encryptJSON(data) {
    // Encrypt
    var encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), 'secret key 123').toString();
    return encrypted;
}

function decryptJSON(data) {
    // Decrypt
    var bytes = CryptoJS.AES.decrypt(data, 'secret key 123');
    var decrypted = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decrypted;
}


function getSeparatedList(list) {
    var separatedValues = "";
    var split = list.split(" ");
    for (var x = 0; x < split.length; x++) {
        separatedValues += split[x] + " | ";
    }
    return separatedValues;
}

function getTimeSincePosting(dateSeconds) {
    return "6 hours";
}

function createTextButton(functionDestination, buttonText) {
    var link = document.createElement("a");
    link.setAttribute("onclick", functionDestination);
    link.setAttribute("style", "color: rgb(18, 22, 236);");
    var bt = document.createTextNode(buttonText);
    link.appendChild(bt);
    return link
}

function createLink(linkDestination, linkText) {
    var link = document.createElement("a");
    link.setAttribute("href", linkDestination);
    linkText = document.createTextNode(linkText);
    link.appendChild(linkText);
    return link;
}

function getTextNode(str) {
    return document.createTextNode(str);
}

function clearSelect(select) {
    var len = select.childNodes.length;
    for (var x = 0; x < len; x++) {
        select.remove(0);
    }
}

function clearTableNoHeader(table) {
    var len = table.childNodes.length;
    for (var x = 0; x < len; x++) {
        table.remove(0);
    }

}