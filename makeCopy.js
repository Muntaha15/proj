const {google} = require("googleapis");

const CLIENT_ID = "64080679766-lqssbjjjgi5001n8p6fdvfo98hh421hr.apps.googleusercontent.com";
const CLIENT_SECRET = "D8RvdBWASaIuqGiUQUR929HX";
const REDIRECT_URI = "https://developer.google.com/oauthplayground";

const REFRESH_TOKEN = "1//04whOaKBU30qfCgYIARAAGAQSNwF-L9IrSdUO9edKEq3V1H65y5qTHfAk72t5cUqd0DQi0MyOzyy49sDeGlwpJRg4NtTkpyPRKxQ"
const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
)
const AUTH_CODE  = "4/0AY0e-g61vVoIMND6S7TPRADQAposd12XLnQKSbBdHA-wP-3ISj0SDo1-N_aoewgMjMflBg";
const code = "4%2F0AY0e-g4GxKqiq3rOCUynrv38_FVjJvR5qgAWGTkYcRKlzg-yWdAg3w03m5yjiEYE0fMJVg&redirect_uri=https%3A%2F%2Fdevelopers.google.com%2Foauthplayground&client_id=64080679766-lqssbjjjgi5001n8p6fdvfo98hh421hr.apps.googleusercontent.com&client_secret=D8RvdBWASaIuqGiUQUR929HX&scope=&grant_type=authorization_code"
async function getToken(){
    try{
        const {tokens} = await oauth2Client.getToken(code)
        oauth2Client.setCredentials(tokens);
    }catch(err){
        console.log(err);
    }

    setTimeout(getToken , 3400*1000)
}



const fileID = "11jz-d60WZxy1hxrcGAoulM0k5888UHCmViYYNqH4jiQ";

oauth2Client.setCredentials({refresh_token : REFRESH_TOKEN});


oauth2Client.refreshAccessToken( function(err , tokens){
    if(err){
        console.log("can not refresh the acces token")
        console.log(err)
    }else(console.log(tokens.access_token))
})


async function refreshTimer(){
    await setTimeout(()=>{
        oauth2Client.refreshAccessToken(function(err , token){});
        console.log("access_token refrshed");
        refreshTimer()
    } , 3400*1000);
}

refreshTimer()

const drive = google.drive({
    version : "v3",
    auth : oauth2Client
}) 

async function makeCopy(id = fileID){
    try{

        const response = await drive.files.copy({
            fileId : id
        })
        console.log("made the API request")
        const url  = ("https://docs.google.com/spreadsheets/d/" + response.data.id);
        console.log(url);

        return url;
    }catch(err){

        console.log(err);
    }
}

async function deleteFile(id){
    try{
        const res = await drive.files.delete({
            fileId : id
        })
        console.log(res);
        console.log("SUCCESSFULLY DELETED THE FILE")
    }catch(err){
        console.log(err)
    }
}

module.exports = { makeCopy , deleteFile}


//https://docs.google.com/spreadsheets/d/16W9jfH2j1ZaInfNcYlk85zn30jrtG_JGz3SBvmOc0nc/edit?usp=sharing