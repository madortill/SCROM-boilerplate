/* 
Source code created by Rustici Software, LLC is licensed under a 
Creative Commons Attribution 3.0 United States License
(http://creativecommons.org/licenses/by/3.0/us/)

adaptions to SCROM 1.2 made by Tamar Stupp

more info on how SCROM is built in https://scorm.com/scorm-explained/technical-scorm/run-time/

*/

///////////////////////////////////////////
//ADL-provided API discovery algorithm
///////////////////////////////////////////
var findAPITries = 0;
var API = null;
 
// The findAPI() function searches for an object named API_1484_11
// in the window that is passed into the function.  If the object is
// found a reference to the object is returned to the calling function.
function findAPI(win)
{
   while ( (win.API == null) && (win.parent != null) && (win.parent != win) )
   {
      // increment the number of findAPITries
      findAPITries++;
 
      // Note: 7 is an arbitrary number, but should be more than sufficient
      if (findAPITries > 7)
      {
        //  alert("Error finding API -- too deeply nested.");
         return null;
      }
 
      // set the variable that represents the window being
      // being searched to be the parent of the current window
      // then search for the API again
      win = win.parent;
   }
   return win.API;
}
 
function getAPI()
{
   // start by looking for the API in the current window
   var theAPI = findAPI(window);
 
   // if the API is null (could not be found in the current window)
   // and the current window has an opener window
   if ( (theAPI == null) && (window.opener != null) && (typeof(window.opener) != "undefined") )
   {
      // try to find the API in the current window’s opener
      theAPI = findAPI(window.opener);
   }
   // if the API has not been found
   if (theAPI == null)
   {
      // Alert the user that the API Adapter could not be found
      alert("Unable to find an API adapter");
   }
   return theAPI;
}

////////////////////////////////////////////
// wrap SCROM functions with error handlers
///////////////////////////////////////////

//Constants
var SCORM_TRUE = "true";
var SCORM_FALSE = "false";
var SCORM_NO_ERROR = "0";

//Since the Unload handler will be called twice, from both the onunload
//and onbeforeunload events, ensure that we only call LMSFinish once.
var terminateCalled = false;

//Track whether or not we successfully initialized.
var initialized = false;

function ScormProcessInitialize(){
    var result;
    API = getAPI(window);

    if (API == null){
        alert("שגיאה: לא נוצר קשר עם הקמפוס הדיגיטלי. יכול להיות שהתוצאות שלך לא יישמרו");
        return;
    }
    result = API.LMSInitialize("");
    if (result == SCORM_FALSE){
        logError();
        return;
    }
    initialized = true;
}

function ScormProcessTerminate(){ 
    var result;
    //Don't terminate if we haven't initialized or if we've already terminated
    if (initialized == false || terminateCalled == true){return;}
    result = API.LMSFinish("");
    terminateCalled = true;
    if (result == SCORM_FALSE){
        logError();
        return;
    }
}

function logError (msg) {
    var errorNumber = API.LMSGetLastError();
    var errorString = API.LMSGetErrorString(errorNumber);
    var diagnostic = API.LMSGetDiagnostic(errorNumber);
    
    var errorDescription = "Number: " + errorNumber + "\nDescription: " + errorString + "\nDiagnostic: " + diagnostic;
    
    alert(msg || "שגיאה: לא נוצר קשר עם הקמפוס הדיגיטלי. יכול להיות שהתוצאות שלך לא יישמרו");
    console.log("Error description: " + errorDescription)
    return;
}

//There are situations where a LMSGetValue call is expected to have an error
//and should not alert the user.
function ScormProcessGetValue(element, checkError){
    var result;
    if (initialized == false || terminateCalled == true){return;}
    result = API.LMSGetValue(element);
    if (checkError == true && result == ""){
        var errorNumber = API.LMSGetLastError();
        if (errorNumber != SCORM_NO_ERROR){
            logError('הערך לא נמצא בקמפוס');
            return null;
        }
    }
    
    return result;
}

function ScormProcessSetValue(element, value){
    var result;
    if (initialized == false || terminateCalled == true){return;}
    result = API.LMSSetValue(element, value);
    if (result == SCORM_FALSE){
        logError('הערך לא נשמר בקמפוס')
        return;
    }
    
}

function ScormProcessCommit(){
    var result;
    result = API.LMSCommit("");
    if (result == SCORM_FALSE){
    logError('Error - could not invoke commit')
    return;
    }
}

///////////////////////////////////////////
//Functions for outsize users
///////////////////////////////////////////
//called from the the JS of the lomda to record the results of a test
//passes in score as a percentage
function finishTestSCROM (score, passThreshold = 50) {
    ScormProcessSetValue("cmi.core.lesson_status", "completed");
    ScormProcessSetValue("cmi.core.score.min", "0");
    ScormProcessSetValue("cmi.core.score.max", "100");
    ScormProcessSetValue("cmi.core.score.raw", score);
    if (score >= passThreshold) {
        ScormProcessSetValue("cmi.core.lesson_status", "passed");
    } else {
        ScormProcessSetValue("cmi.core.lesson_status", "failed");
    }
    
    ScormProcessCommit()
}

function reportComplete() {
    ScormProcessSetValue("cmi.core.lesson_status", "completed");
    ScormProcessCommit();
}

///////////////////////////////////////////
//onLoad, onUnload and related functions
///////////////////////////////////////////
var currentPage = null;
var startTimeStamp = null;
var processedUnload = false;
var reachedEnd = false;

function doStart(){
    //get the iFrame sized correctly and set up
    // SetupIFrame();
    
    //record the time that the learner started the SCO so that we can report the total time
    startTimeStamp = new Date();
    
    //initialize communication with the LMS
    ScormProcessInitialize();
    
    //it's a best practice to set the completion status to incomplete when
    //first launching the course (if the course is not already completed)
    var completionStatus =  ScormProcessGetValue("cmi.core.lesson_status", true);
    if (completionStatus == "unknown" || !completionStatus){
        ScormProcessSetValue("cmi.core.lesson_status", "incomplete");
    }
}


function doUnload(pressedExit){
    //don't call this function twice
    if (processedUnload == true){return;}
    processedUnload = true;
    //record the session time
    var endTimeStamp = new Date();
    var totalMilliseconds = (endTimeStamp.getTime() - startTimeStamp.getTime());
    // var scormTime = ConvertMilliSecondsIntoSCORM2004Time(totalMilliseconds);
    console.log(API.LMSGetValue("cmi.core.session_time"));
    // ScormProcessSetValue("cmi.core.session_time", scormTime);
    ScormProcessSetValue("cmi.core.exit", "");
    ScormProcessTerminate();
}


window.addEventListener('load', doStart);
window.addEventListener('beforeunload', doUnload);
window.addEventListener('unload', doUnload);