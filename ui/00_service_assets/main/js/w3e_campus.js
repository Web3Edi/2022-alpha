var iW3ECampusContract;
var w3eCampusAddress; 


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



}