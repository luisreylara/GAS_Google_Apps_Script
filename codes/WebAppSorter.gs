//https://docs.google.com/spreadsheets/d/1d_hg_ZqfWDKxWfw-khuI4KHyI7wu5HRvT--oQIvSims/edit#gid=0

function doGet(e) {
  return HtmlService.createTemplateFromFile('WebAppSorter').evaluate();
}

function getRecords()
{
  var ss= SpreadsheetApp.getActiveSpreadsheet();
  var recordsSheet = ss.getSheetByName("Registros");
  var recordsRange = recordsSheet.getDataRange();
  var recordsValues = recordsRange.getValues();  
  Logger.log(recordsValues);
  return recordsValues;

}

// webAppSorter.html

<!DOCTYPE html>
<html>

<head>
  <base target="_top">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.tablesorter/2.31.3/js/jquery.tablesorter.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.tablesorter/2.31.3/js/jquery.tablesorter.widgets.min.js">
  </script>
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/jquery.tablesorter/2.31.3/js/extras/jquery.tablesorter.pager.min.js">
  </script>
  <link rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/jquery.tablesorter/2.31.3/css/jquery.tablesorter.pager.min.css" />
  <link rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/jquery.tablesorter/2.31.3/css/theme.metro-dark.min.css" />
  <script>
    $( document ).ready(function() {
      getData();      
    });

    function getData() 
    {
      google.script.run.withSuccessHandler(function(ar) 
      {
        console.log(ar);
        var displayfooter = "<tfoot>";
        displayfooter += "<tr class=\"dark-row\">";
        displayfooter += "<th colspan=\""+ar[0].length+"\">";
          displayfooter += "<div class=\"pager\">";
            displayfooter += "<button type=\"button\" class=\"first\" ><<</button>";
            displayfooter += "<button type=\"button\" class=\"prev\"><</button>";
            displayfooter += "<span class=\"pagedisplay\"></span>";
            displayfooter += "<button type=\"button\" class=\"next\">></button>";
            displayfooter += "<button type=\"button\" class=\"last\">>></button>";
            displayfooter += "<select class=\"pagesize\" title=\"Select page size\">";
              displayfooter += "<option value=\"10\">10</option>";
              displayfooter += "<option value=\"20\">20</option>";
              displayfooter += "<option value=\"30\">30</option>";
              displayfooter += "<option value=\"40\">40</option>";
            displayfooter += "</select>";
            displayfooter += "<select class=\"gotoPage\" title=\"Select page number\"></select>";
          displayfooter += "</div>";
        displayfooter += "</th>";
        displayfooter += "</tr>";
        displayfooter += "</tfoot>";

        var displayheader = ""; 
        var displaybody = "<tbody>";
        ar.forEach(function(item, index) 
        {
          if(index == 0)
          {
            displayheader = "<thead>";
            displayheader += "<tr>";
            displayheader += "<th>"+item[0]+"</th>";
            displayheader += "<th>"+item[1]+"</th>";
            displayheader += "<th>"+item[2]+"</th>";
            displayheader += "<th>"+item[3]+"</th>";
            displayheader += "</tr>";
            displayheader += "</thead>";
          }
          else if(index > 0)
          {
            displaybody += "<tr>";
            displaybody += "<td>"+item[0]+"</td>";
            displaybody += "<td>"+item[1]+"</td>";
            displaybody += "<td>"+item[2]+"</td>";
            displaybody += "<td>"+item[3]+"</td>";
            displaybody += "</tr>";
          }    
        });
        displaybody += "</tbody>";

        var displayTable = '';
        displayTable += "<table id=\"mainTable\" class=\"tablesorter\" >";
        displayTable += displayheader;
        displayTable += displayfooter;
        displayTable += displaybody;
        displayTable += '</table>';     
        document.getElementById("rowdata").innerHTML = displayTable;

        $("#mainTable").tablesorter({
          theme: 'metro-dark',
          sortList: [[0,0]],
          widthFixed: true,
          widgets: ['zebra', 'columns', 'filter']
        })
        .tablesorterPager({
        // target the pager markup - see the HTML block below
        container: $(".pager"),
        output: '{startRow} to {endRow} ({totalRows})'
        });

      }).getRecords();
    }
  </script>
</head>

<body>
  <h1>JQuery Table Sorter</hr><br>
    <div id="rowdata"></div>
</body>

</html>
