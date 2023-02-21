// https://docs.google.com/spreadsheets/d/14r-iLCNbzPCG-jAkt7M-i9MGs5Q-aJpm6jfiV60wy6A/edit#gid=0

// Code.gs
function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('WebApp');
}

function getResultsSQL(type, color, height1, height2){

  var ID = '14r-iLCNbzPCG-jAkt7M-i9MGs5Q-aJpm6jfiV60wy6A';  //Paste ID of GOOGLE SHEET
  var ss= SpreadsheetApp.openById(ID);
  var webAppSheet2 = ss.getSheetByName("Datos2");
  var webAppSheet1 = ss.getSheetByName("Datos1");
  var sqlStatement = 'select A, B, C where 1 = 1 ';
  
  if(type != '')
  {
    sqlStatement += " and A = '"+type+"' ";
  }

  if(color != '')
  {
    sqlStatement += " and B = '"+color+"' ";
  }

  if(height1 != '')
  {
    if(height2 == '')
    {
      height2 = height1;
    }
    
    sqlStatement += " and C >= "+height1+" and C <=  "+height2+" ";
  }
  
  var getLastRow = webAppSheet1.getLastRow(); 
  var tableRange = 'Datos1!A1:C'+getLastRow;  
  var query = '=QUERY('+tableRange+',\"'+sqlStatement+'\")';
  Logger.log(tableRange);
  Logger.log(sqlStatement);
  var setResults = webAppSheet2.getRange(1, 1).setFormula(query); 
  var getResults = webAppSheet2.getDataRange().getValues();

  return getResults;

}

// WebApp.html
<!DOCTYPE html>
<html>
  <head>
    <base target="_top">
    <script>
    function GetReport()
    {
      var type = document.getElementById("type").value;
      var color = document.getElementById("color").value;
      var height1 = document.getElementById("height1").value;
      var height2 = document.getElementById("height2").value;
      
      google.script.run.withSuccessHandler(function(ar) 
      {
      
      console.log(ar);
      
      var displayTable = '';
      displayTable = '<table border="1" cellpadding="5px" >';
      
      ar.forEach(function(item, index) 
      {   
        if(index == 0)
        {
          displayTable += "<tr>";
          displayTable += "<th>"+item[0]+"</th>";
          displayTable += "<th>"+item[1]+"</th>";
          displayTable += "<th>"+item[2]+"</th>";
          displayTable += "</tr>";          
        } 
        else
        {
          displayTable += "<tr>";
          displayTable += "<td>"+item[0]+"</td>";
          displayTable += "<td>"+item[1]+"</td>";
          displayTable += "<td>"+item[2]+"</td>";
          displayTable += "</tr>";    
        }
      });
      
      displayTable += '</table>';
      
      document.getElementById("dispalyTableHere").innerHTML = displayTable;
      
      }).getResultsSQL(type, color, height1, height2);
    
    }
    </script>
  </head>
  <body>
    Type:<input type="text" id="type" />
    Color:<input type="text" id="color" />
    Height:<input type="text" id="height1" size="5" />-<input type="text" id="height2" size="5" />
    <input type="button" value="Submit" onclick="GetReport()" /><br><br>
    <div id="dispalyTableHere" ></div>
  </body>
</html>
