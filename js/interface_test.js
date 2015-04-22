var coverageNum = 1;

function addRowToTable(type){	

if(type == "title"){	
    $("#titleTable").addRow({
    newRow: '<tr><td><select name="titleType" class="idleField"><option>Title</option><option>Alternative Title</option></select></td><td><input type="text" name="titleRow" size="40" class="idleField" /></td></tr>'
    });
}
else if(type == "subject"){	
	$("#subjectTable").addRow({
	newRow: '<tr><td><input type="text" name="subjectRow" size="40" class="idleField" /></td><td><select name="subjectType" class="idleField"><option></option><option>AAT</option><option>AGROVOC</option><option>DDC</option><option>ITIS</option><option>LCC</option><option>LCSH</option><option>MESH</option><option>NLM</option><option>TGM</option><option>TGN</option><option>UDC</option></select></td></tr>'
	});
}
else if(type == "description"){	
	$("#descriptionTable").addRow({
	newRow: '<tr><td valign="top"><select name="descriptionType" class="idleField"><option>Description</option><option>Table of Contents</option><option>Abstract</option></select></td><td><textarea rows="5" cols="50" name="descriptionRow" class="idleField"></textarea></td></tr>'
	});
}
else if(type == "date"){	
	$("#dateTable").addRow({
	newRow: '<tr><td><select name="dateType" class="idleField"><option>Date</option><option>Date Created</option><option>Date Valid</option><option>Date Available</option><option>Date Issued</option><option>Date Modified</option><option>Date Accepted</option><option>Date Copyrighted</option><option>Date Submitted</option></select></td><td><input type="text" name="dateRow" size="40" class="idleField" /></td><td><select name="dateEncoding" class="idleField"><option></option><option>DCMI Period</option><option>W3C-DTF</option></select></td></tr>'
	});

}
else if(type == "type"){	
	$("#typeTable").addRow({
	newRow: '<tr><td><input type="text" name="typeRow" size="40" class="idleField" /></td><td><select name="typeType" class="idleField"><option></option><option>DCMI Type Vocabulary</option></select></td></tr>'
	});
}
else if(type == "format"){	
	$("#formatTable").addRow({
	newRow: '<tr><td><select name="formatType" class="idleField"><option>Format</option><option>Extent</option><option>Medium</option></select></td><td><input type="text" name="formatRow" size="40" class="idleField" /></td><td><select name="formatEncoding" class="idleField"><option></option><option>IMT</option></select></td></tr>'
	});
}
else if(type == "identifier"){	
	$("#identifierTable").addRow({
	newRow: '<tr><td><select name="identifierType" class="idleField"><option>Identifier</option><option>Bibliographic Citation</option></select></td><td><input type="text" name="identifierRow" size="40" class="idleField" /></td><td><select name="identifierEncoding" class="idleField"><option></option><option>URI</option></select></td></tr>'
	});
}
else if(type == "source"){	
	$("#sourceTable").addRow({
	newRow: '<tr><td><input type="text" name="sourceRow" size="40" class="idleField" /></td><td><select name="sourceType" class="idleField"><option></option><option>URI</option></select></td></tr>'
	});
}
else if(type == "language"){	
	$("#languageTable").addRow({
	newRow: '<tr><td><input type="text" name="languageRow" size="40" class="idleField"/></td><td><select name="languageType" class="idleField"><option></option><option>ISO 639-2</option><option>ISO 639-3</option><option>RFC1766</option><option>RFC3066</option><option>RFC4646</option><option>RFC5646</option></select></td></tr>'
	});
}
else if(type == "relation"){	
	$("#relationTable").addRow({
	newRow: '<tr><td><select name="relationType" class="idleField"><option>Relation</option><option>Is Version Of</option><option>Has Version</option><option>Is Replaced By</option><option>Replaces</option><option>Is Required By</option><option>Requires</option><option>Is Part Of</option><option>Has Part</option><option>Is Referenced By</option><option>References</option><option>Is Format Of</option><option>Has Format</option><option>Conforms To</option></select></td><td><input type="text" name="relationRow" size="40" class="idleField" /></td><td><select name="relationEncoding" id="relationEncoding1" class="idleField"><option></option><option>URI</option></select></td></tr>'
	});
}
else if(type == "coverage"){
	coverageNum++;
	$("#coverageTable").addRow({
	newRow: '<tr><td><select name="coverageType" id="coverageType'+coverageNum+'" class="idleField" onblur="showHideCoverage('+coverageNum+');"><option>Coverage</option><option>Spatial</option><option>Temporal</option></select></td><td><input type="text" name="coverageRow" size="40" class="idleField" /></td><td><select name="coverageEncoding" id="coverageEncoding'+coverageNum+'" class="idleField"><option id="blank'+coverageNum+'"></option><option id="box'+coverageNum+'">Box</option><option id="iso3166'+coverageNum+'">ISO3166</option><option id="period'+coverageNum+'">Period</option><option id="point'+coverageNum+'">Point</option><option id="tgn'+coverageNum+'">TGN</option><option id="w3ctdf'+coverageNum+'">W3CTDF</option></select></td></tr>'
	});
}
else if(type == "rights"){	
	$("#rightsTable").addRow({
	newRow: '<tr><td><select name="rightsType" class="idlefield"><option>Rights</option><option>License</option></select></td><td><input type="text" name="rightsRow" size="40" class="idleField" /></td><td><select name="rightsEncoding" class="idleField"><option></option><option>URI</option></select></td></tr>'
	});
}
else if(type == "audience"){	
	$("#audienceTable").addRow({
	newRow: '<tr><td><select name="audienceType" class="idleField"><option>Audience</option><option>Education Level</option><option>Mediator</option></select></td><td><input type="text" name="audienceRow" size="40" class="idleField" /></td></tr>'
	});
}
else{
	$("#"+type+"Table").addRow({
	newRow: '<tr><td colspan="2"><input type="text" name='+type+'Row" size="40" class="idleField"  /></td></tr>'
	});
}
}

function removeRowFromTable(tableID){
var rowCount = $("#"+tableID+" tr").length;
if(rowCount > 2){
$("#"+tableID+"").removeRow({});
}
}

var IMTclicked = 0;
var DCMIclicked = 0;
var boxclicked = 0;
var iso3166clicked = 0;
var iso639clicked = 0;
var perioddateclicked = 0;
var periodcoverageclicked = 0;
var pointclicked = 0;
var subjectclicked = 0;
var coverageclicked = 0;
//Hokey workaround -- basically a check to see if the user has already added a row with the lookup tool (used below)//

function addIMT(){
var IMTval = $('#IMTTypeFinder').val();
var countFormat = $('input[name*="formatRow"]').length;
var formatExists = $('#formatRow1').val();

if((countFormat == 1) && (formatExists = "") && (IMTclicked == 0)){
	$('#formatRow1').val(IMTval);
	$('#formatType1 option:eq(0)').prop('selected', true);
	$('#formatEncoding1 option:eq(1)').prop('selected', true);
	IMTclicked++;
}
else{
	$("#formatTable").addRow({
	newRow: '<tr><td><select name="formatType" class="idleField"><option selected="selected">Format</option><option>Extent</option><option>Medium</option></select></td><td><input type="text" name="formatRow" size="40" class="idleField" value='+IMTval+'></td><td><select name="formatEncoding" class="idleField"><option></option><option selected="selected">IMT</option></select></td></tr>'
	});
}
}

function addDCMI(){
var DCMIval = $('#DCMITypeFinder').val();
var countType = $('input[name*="typeRow"]').length;
var typeExists = $('#typeRow1').val();

if((countType == 1) && (typeExists = "") && (DCMIclicked == 0)){
	$('#typeRow1').val(DCMIval);
	$('#typeType1 option:eq(1)').prop('selected', true);
	DCMIclicked++;
}
else{
	$("#typeTable").addRow({
	newRow: '<tr><td><input type="text" name="typeRow" size="40" class="idleField" value="'+DCMIval+'"></td><td><select name="typeType" class="idleField"><option></option><option selected="selected">DCMI Type Vocabulary</option></select></td></tr>'
	});
}
}

function addDCMIBox(){
var boxVal = $('#BoxString').val();
var countCoverage = $('input[name*="coverageRow"]').length;
var coverageExists = $('#coverageRow1').val();

if((countCoverage == 1) && (coverageExists == "") && (boxclicked == 0)){
	$('#coverageType1 option:eq(1)').prop('selected', true)
	$('#coverageRow1').val(boxVal);
	$('#coverageEncoding1 option:eq(1)').prop('selected', true)
	boxclicked++;
}
else{
	$("#coverageTable").addRow({
	newRow: '<tr><td><select name="coverageType" id="coverageType'+coverageNum+'" class="idleField" onblur="showHideCoverage('+coverageNum+');"><option>Coverage</option><option selected="selected">Spatial</option><option>Temporal</option></select></td><td><input type="text" name="coverageRow" size="40" class="idleField" value="'+boxVal+'"/></td><td><select name="coverageEncoding" id="coverageEncoding'+coverageNum+'" class="idleField"><option id="blank'+coverageNum+'"></option><option id="box'+coverageNum+'" selected="selected">Box</option><option id="iso3166'+coverageNum+'">ISO3166</option><option id="period'+coverageNum+'">Period</option><option id="point'+coverageNum+'">Point</option><option id="tgn'+coverageNum+'">TGN</option><option id="w3ctdf'+coverageNum+'">W3CTDF</option></select></td></tr>'
	});
}
}

function addISO3166(){
var boxVal = $('#ISO3166Finder').val();
var countCoverage = $('input[name*="coverageRow"]').length;
var coverageExists = $('#coverageRow1').val();

if((countCoverage == 1) && (coverageExists = "") && (iso3166clicked == 0)){
	$('#coverageType1 option:eq(1)').prop('selected', true)
	$('#coverageRow1').val(boxVal);
	$('#coverageEncoding1 option:eq(2)').prop('selected', true)
	iso3166clicked++;
}
else{
	$("#coverageTable").addRow({
	newRow: '<tr><td><select name="coverageType" id="coverageType'+coverageNum+'" class="idleField" onblur="showHideCoverage('+coverageNum+');"><option>Coverage</option><option selected="selected">Spatial</option><option>Temporal</option></select></td><td><input type="text" name="coverageRow" size="40" class="idleField" value="'+boxVal+'"/></td><td><select name="coverageEncoding" id="coverageEncoding'+coverageNum+'" class="idleField"><option id="blank'+coverageNum+'"></option><option id="box'+coverageNum+'">Box</option><option id="iso3166'+coverageNum+'" selected="selected">ISO3166</option><option id="period'+coverageNum+'">Period</option><option id="point'+coverageNum+'">Point</option><option id="tgn'+coverageNum+'">TGN</option><option id="w3ctdf'+coverageNum+'">W3CTDF</option></select></td></tr>'
	});
}
}

function addDCMIPeriodDate(){
var periodVal = $('#PeriodString').val();
var countDate = $('input[name*="dateRow"]').length;
var dateExists = $('#dateRow1').val();

if((countDate == 1) && (dateExists == "") && (perioddateclicked == 0)){
	$('#dateType1 option:eq(0)').prop('selected', true)
	$('#dateRow1').val(periodVal);
	$('#dateEncoding1 option:eq(1)').prop('selected', true)
	perioddateclicked++;
}
else{
	$("#dateTable").addRow({
	newRow: '<tr><td><select name="dateType" class="idleField"><option selected="selected">Date</option><option>Date Created</option><option>Date Valid</option><option>Date Available</option><option>Date Issued</option><option>Date Modified</option><option>Date Accepted</option><option>Date Copyrighted</option><option>Date Submitted</option></select></td><td><input type="text" name="dateRow" size="40" class="idleField" value="'+periodVal+'" /></td><td><select name="dateEncoding" class="idleField"><option></option><option selected="selected">DCMI Period</option><option>W3C-DTF</option></select></td></tr>'
	});
}
}

function addDCMIPeriodCoverage(){
var periodVal = $('#PeriodString').val();
var countCoverage = $('input[name*="coverageRow"]').length;
var coverageExists = $('#coverageRow1').val();

if((countCoverage == 1) && (coverageExists == "") && (periodcoverageclicked == 0)){
	$('#coverageType1 option:eq(2)').prop('selected', true)
	$('#coverageRow1').val(periodVal);
	$('#coverageEncoding1 option:eq(3)').prop('selected', true)
	periodcoverageclicked++;
}
else{
	$("#coverageTable").addRow({
	newRow: '<tr><td><select name="coverageType" id="coverageType'+coverageNum+'" class="idleField" onblur="showHideCoverage('+coverageNum+');"><option>Coverage</option><option>Spatial</option><option selected="selected">Temporal</option></select></td><td><input type="text" name="coverageRow" size="40" class="idleField" value="'+periodVal+'"/></td><td><select name="coverageEncoding" id="coverageEncoding'+coverageNum+'" class="idleField"><option id="blank'+coverageNum+'"></option><option id="box'+coverageNum+'">Box</option><option id="iso3166'+coverageNum+'">ISO3166</option><option id="period'+coverageNum+'" selected="selected">Period</option><option id="point'+coverageNum+'">Point</option><option id="tgn'+coverageNum+'">TGN</option><option id="w3ctdf'+coverageNum+'">W3CTDF</option></select></td></tr>'
	});
}
}

function addISO6392(){
var languageVal = $('#ISO6392Finder').val();
var countLanguage = $('input[name*="languageRow"]').length;
var languageExists = $('#languageRow1').val();

if((countLanguage == 1) && (languageExists == "") && (iso639clicked == 0)){
	$('#languageRow1').val(languageVal);
	$('#languageType1 option:eq(1)').prop('selected', true)
	iso639clicked++;
}
else{
	$("#languageTable").addRow({
	newRow: '<tr><td><input type="text" name="languageRow" size="40" class="idleField" value="'+languageVal+'"/></td><td><select name="languageType" class="idleField"><option></option><option selected="selected">ISO 639-2</option><option>ISO 639-3</option><option>RFC1766</option><option>RFC3066</option><option>RFC4646</option><option>RFC5646</option></select></td></tr>'
	});
}
}

function addISO6393(){
var languageVal = $('#ISO6393Finder').val();
var countLanguage = $('input[name*="languageRow"]').length;
var languageExists = $('#languageRow1').val();

if((countLanguage == 1) && (languageExists == "") && (iso639clicked == 0)){
	$('#languageRow1').val(languageVal);
	$('#languageType1 option:eq(2)').prop('selected', true)
	iso639clicked++;
}
else{
	$("#languageTable").addRow({
	newRow: '<tr><td><input type="text" name="languageRow" size="40" class="idleField" value="'+languageVal+'"/></td><td><select name="languageType" class="idleField"><option></option><option>ISO 639-2</option><option selected="selected">ISO 639-3</option><option>RFC1766</option><option>RFC3066</option><option>RFC4646</option><option>RFC5646</option></select></td></tr>'
	});
}
}

function addDCMIPoint(){
var pointVal = $('#PointString').val();
var countCoverage = $('input[name*="coverageRow"]').length;
var coverageExists = $('#coverageRow1').val();

if((countCoverage == 1) && (coverageExists == "") && (pointclicked == 0)){
	$('#coverageType1 option:eq(1)').prop('selected', true)
	$('#coverageRow1').val(pointVal);
	$('#coverageEncoding1 option:eq(4)').prop('selected', true)
	pointclicked++;
}
else{
	$("#coverageTable").addRow({
	newRow: '<tr><td><select name="coverageType" id="coverageType'+coverageNum+'" class="idleField" onblur="showHideCoverage('+coverageNum+');"><option>Coverage</option><option selected="selected">Spatial</option><option>Temporal</option></select></td><td><input type="text" name="coverageRow" size="40" class="idleField" value="'+pointVal+'"/></td><td><select name="coverageEncoding" id="coverageEncoding'+coverageNum+'" class="idleField"><option id="blank'+coverageNum+'"></option><option id="box'+coverageNum+'">Box</option><option id="iso3166'+coverageNum+'">ISO3166</option><option id="period'+coverageNum+'">Period</option><option id="point'+coverageNum+'" selected="selected">Point</option><option id="tgn'+coverageNum+'">TGN</option><option id="w3ctdf'+coverageNum+'">W3CTDF</option></select></td></tr>'
	});
}
}

function addAGROVOC(){
var agrovocVal = $('#AGROVOCfinder').val();
var countSubject = $('input[name*="subjectRow"]').length;
var subjectExists = $('#subjectRow1').val();

if((countSubject == 1) && (subjectExists == "") && (subjectclicked == 0)){
	$('#subjectRow1').val(agrovocVal);
	$('#subjectType1 option:eq(2)').prop('selected', true)
	subjectclicked++;
}
else{
	$("#subjectTable").addRow({
	newRow: '<tr><td><input type="text" name="subjectRow" size="40" class="idleField" value="'+agrovocVal+'"/></td><td><select name="subjectType" class="idleField"><option></option><option>AAT</option><option selected="selected">AGROVOC</option><option>DDC</option><option>ITIS</option><option>LCC</option><option>LCSH</option><option>MESH</option><option>NLM</option><option>TGM</option><option>TGN</option><option>UDC</option></select></td></tr>'
	});
}
}

function addITIS(){
var itisVal = $('#ITISfinder').val();
var countSubject = $('input[name*="subjectRow"]').length;
var subjectExists = $('#subjectRow1').val();

if((countSubject == 1) && (subjectExists == "") && (subjectclicked == 0)){
	$('#subjectRow1').val(itisVal);
	$('#subjectType1 option:eq(4)').prop('selected', true)
	subjectclicked++;
}
else{
	$("#subjectTable").addRow({
	newRow: '<tr><td><input type="text" name="subjectRow" size="40" class="idleField" value="'+itisVal+'"/></td><td><select name="subjectType" class="idleField"><option></option><option>AAT</option><option>AGROVOC</option><option>DDC</option><option selected="selected">ITIS</option><option>LCC</option><option>LCSH</option><option>MESH</option><option>NLM</option><option>TGM</option><option>TGN</option><option>UDC</option></select></td></tr>'
	});
}
}

function addLCSH(){
var lcshVal = $('#LCSHfinder').val();
var countSubject = $('input[name*="subjectRow"]').length;
var subjectExists = $('#subjectRow1').val();

if((countSubject == 1) && (subjectExists == "") && (subjectclicked == 0)){
	$('#subjectRow1').val(lcshVal);
	$('#subjectType1 option:eq(6)').prop('selected', true)
	subjectclicked++;
}
else{
	$("#subjectTable").addRow({
	newRow: '<tr><td><input type="text" name="subjectRow" size="40" class="idleField" value="'+lcshVal+'"/></td><td><select name="subjectType" class="idleField"><option></option><option>AAT</option><option>AGROVOC</option><option>DDC</option><option>ITIS</option><option>LCC</option><option selected="selected">LCSH</option><option>MESH</option><option>NLM</option><option>TGM</option><option>TGN</option><option>UDC</option></select></td></tr>'
	});
}
}

function addMESH(){
var meshVal = $('#MESHfinder').val();
var countSubject = $('input[name*="subjectRow"]').length;
var subjectExists = $('#subjectRow1').val();

if((countSubject == 1) && (subjectExists == "") && (subjectclicked == 0)){
	$('#subjectRow1').val(meshVal);
	$('#subjectType1 option:eq(7)').prop('selected', true)
	subjectclicked++;
}
else{
	$("#subjectTable").addRow({
	newRow: '<tr><td><input type="text" name="subjectRow" size="40" class="idleField" value="'+meshVal+'"/></td><td><select name="subjectType" class="idleField"><option></option><option>AAT</option><option>AGROVOC</option><option>DDC</option><option>ITIS</option><option>LCC</option><option>LCSH</option><option selected="selected">MESH</option><option>NLM</option><option>TGM</option><option>TGN</option><option>UDC</option></select></td></tr>'
	});
}
}

function addTGNSubject(){
var tgnVal = $('#TGNfinder').val();
var countSubject = $('input[name*="subjectRow"]').length;
var subjectExists = $('#subjectRow1').val();

if((countSubject == 1) && (subjectExists == "") && (subjectclicked == 0)){
	$('#subjectRow1').val(tgnVal);
	$('#subjectType1 option:eq(10)').prop('selected', true)
	subjectclicked++;
}
else{
	$("#subjectTable").addRow({
	newRow: '<tr><td><input type="text" name="subjectRow" size="40" class="idleField" value="'+tgnVal+'"/></td><td><select name="subjectType" class="idleField"><option></option><option>AAT</option><option>AGROVOC</option><option>DDC</option><option>ITIS</option><option>LCC</option><option>LCSH</option><option>MESH</option><option>NLM</option><option>TGM</option><option selected="selected">TGN</option><option>UDC</option></select></td></tr>'
	});
}
}

function addTGNCoverage(){
var tgnVal = $('#TGNfinder').val();
var countCoverage = $('input[name*="coverageRow"]').length;
var coverageExists = $('#coverageRow1').val();

if((countCoverage == 1) && (coverageExists == "") && (coverageclicked == 0)){
	$('#coverageType1 option:eq(1)').prop('selected', true)
	$('#coverageRow1').val(tgnVal);
	$('#coverageEncoding1 option:eq(5)').prop('selected', true)
	coverageclicked++;
}
else{
	$("#coverageTable").addRow({
	newRow: '<tr><td><select name="coverageType" id="coverageType'+coverageNum+'" class="idleField" onblur="showHideCoverage('+coverageNum+');"><option>Coverage</option><option selected="selected">Spatial</option><option>Temporal</option></select></td><td><input type="text" name="coverageRow" size="40" class="idleField" value="'+tgnVal+'"/></td><td><select name="coverageEncoding" id="coverageEncoding'+coverageNum+'" class="idleField"><option id="blank'+coverageNum+'"></option><option id="box'+coverageNum+'">Box</option><option id="iso3166'+coverageNum+'">ISO3166</option><option id="period'+coverageNum+'">Period</option><option id="point'+coverageNum+'">Point</option><option id="tgn'+coverageNum+'" selected="selected">TGN</option><option id="w3ctdf'+coverageNum+'">W3CTDF</option></select></td></tr>'
	});
}
}

function buildDCMIPeriod(){
var periodName = $("#PeriodName").val();
var periodStart = $("#PeriodStart").val();
var periodEnd = $("#PeriodEnd").val();
var periodScheme = $("#PeriodScheme").val();

$("#PeriodString").val( function() {

var string = "";

if(periodName != ""){
string += "name="+periodName+";";
}

if(periodStart != ""){
string +=  "start="+periodStart+";";
}

if(periodEnd != ""){
string +=  "end="+periodEnd+";";
}

if(periodScheme != ""){
string +=  "scheme="+periodScheme+";";
}
return string;
});
}

function buildDCMIPoint(){
var pointName = $("#PointName").val();
var pointEast = $("#PointEast").val();
var pointNorth = $("#PointNorth").val();
var pointElevation = $("#PointElev").val();
var point2D = $("#Point2DUnits").val();
var point3D = $("#Point3DUnits").val();
var pointMap = $("#PointMap").val();

$("#PointString").val( function() {

var string = "";

if(pointName != ""){
string += "name="+pointName+";";
}

if(pointEast != ""){
string +=  "eastlimit="+pointEast+";";
}

if(pointNorth != ""){
string +=  "northlimit="+pointEast+";";
}

if(pointElevation != ""){
string +=  "elevation="+pointElevation+";";
}

if(point2D != ""){
string +=  "units="+point2D+";";
}

if(point3D != ""){
string +=  "zunits="+point3D+";";
}

if(pointMap != ""){
string +=  "projection="+pointMap+";";
}
return string;
});
}

function buildDCMIPeriod(){
var periodName = $("#PeriodName").val();
var periodStart = $("#PeriodStart").val();
var periodEnd = $("#PeriodEnd").val();
var periodScheme = $("#PeriodScheme").val();

$("#PeriodString").val( function() {

var string = "";

if(periodName != ""){
string += "name="+periodName+";";
}

if(periodStart != ""){
string +=  "start="+periodStart+";";
}

if(periodEnd != ""){
string +=  "end="+periodEnd+";";
}

if(periodScheme != ""){
string +=  "scheme="+periodScheme+";";
}
return string;
});
}

function buildDCMIBox(){
var boxName = $("#BoxName").val();
var boxNorth = $("#BoxNorth").val();
var boxEast = $("#BoxEast").val();
var boxSouth = $("#BoxSouth").val();
var boxWest = $("#BoxWest").val();
var boxUpper = $("#BoxUpper").val();
var boxLower = $("#BoxLower").val();
var box2D = $("#Box2DUnits").val();
var box3D = $("#Box3DUnits").val();
var boxMap = $("#BoxMap").val();

$("#BoxString").val( function() {

var string = "";

if(boxName != ""){
string += "name="+boxName+";";
}

if(boxNorth != ""){
string +=  "northlimit="+boxNorth+";";
}

if(boxEast != ""){
string +=  "eastlimit="+boxEast+";";
}

if(boxSouth != ""){
string +=  "southlimit="+boxSouth+";";
}

if(boxWest != ""){
string += "westlimit="+boxWest+";";
}

if(boxUpper != ""){
string +=  "uplimit="+boxUpper+";";
}

if(boxLower != ""){
string +=  "downlimit="+boxLower+";";
}

if(box2D != ""){
string +=  "units="+box2D+";";
}

if(box3D != ""){
string +=  "zunits="+box3D+";";
}

if(boxMap != ""){
string +=  "projection="+boxMap+";";
}
return string;
});
}