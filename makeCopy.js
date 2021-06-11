const {google} = require("googleapis");

const CLIENT_ID = "64080679766-lqssbjjjgi5001n8p6fdvfo98hh421hr.apps.googleusercontent.com";
const CLIENT_SECRET = "D8RvdBWASaIuqGiUQUR929HX";
const REDIRECT_URI = "https://developer.google.com/oauthplayground";

const REFRESH_TOKEN = "1//04oSG-9AqHDYnCgYIARAAGAQSNwF-L9IrjxCgD6lvR2wyGFKrs-2a_Hc1Z8lRX7K70OCUmr-t_oJqSLgNDSXSx2iZS9bfQZ7afjg"
const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
)

const fileID = "1X28NNazgdxOYBiLXQTPdGiRvFJyXzR7PFwOKUgFDj1M";

oauth2Client.setCredentials({refresh_token : REFRESH_TOKEN});

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

async function deleteFile(id = fileID){
    try{
        const res = await drive.files.delete({
            fileId : id
        })
        console.log(res);
        console.lof("SUCCESSFULLY DELETED THE FILE")
    }catch(err){
        console.log(err)
    }
}

module.exports = { makeCopy , deleteFile}


//https://docs.google.com/spreadsheets/d/16W9jfH2j1ZaInfNcYlk85zn30jrtG_JGz3SBvmOc0nc/edit?usp=sharing