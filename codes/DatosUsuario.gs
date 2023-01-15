// https://developers.google.com/apps-script/guides/triggers

// https://developers.google.com/apps-script/guides/triggers/events#open

function onOpen(e){
  Logger.log(e.user);
  SpreadsheetApp.getUi().alert(e.user);
  
}
