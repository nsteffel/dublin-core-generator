function generateCode()
{
//Each block of generated code is a string which starts out empty.

	var generatedXMLCode = String("");
	var generatedHTMLCode = String("");
	var generatedXHTMLCode = String("");
		
	var results = $("#results");
	
//Each element is an array, we use JQuery to find every input row starting with the right name (titleRow, creatorRow, etc.)
//For qualified we're also checking the "type" and "encoding" select menus to check for qualified terms and encoding schemes.

	var title = [];
	title = $('input[name="titleRow"]');
	
	var titleType = [];
	titleType = $('select[name="titleType"]');
	
	var creator = [];
	creator = $('input[name="creatorRow"]');
	
	var subject = [];
	subject = $('input[name="subjectRow"]');
	
	var subjectType = [];
	subjectType = $('select[name="subjectType"]');
	
	var description = [];
	description = $('textarea[name="descriptionRow"]');
	
	var descriptionType = [];
	descriptionType = $('select[name="descriptionType"]');
	
	var publisher = [];
	publisher = $('input[name="publisherRow"]');
	
	var contributor = [];
	contributor = $('input[name="contributorRow"]');
	
	var date = [];
	date = $('input[name="dateRow"]');
	
	var dateType = [];
	dateType = $('select[name="dateType"]');
	
	var dateEncoding = [];
	dateEncoding = $('select[name="dateEncoding"]');
	
	var type = [];
	type = $('input[name="typeRow"]');
	
	var typeType = [];
	typeType = $('select[name="typeType"]');
	
	var format = [];
	format = $('input[name="formatRow"]');
	
	var formatType = [];
	formatType = $('select[name="formatType"]');
	
	var formatEncoding = [];
	formatEncoding = $('select[name="formatEncoding"]');
	
	var identifier = [];
	identifier = $('input[name="identifierRow"]');
	
	var identifierType = [];
	identifierType = $('select[name="identifierType"]');
	
	var identifierEncoding = [];
	identifierEncoding = $('select[name="identifierEncoding"]');
	
	var source = [];
	source = $('input[name="sourceRow"]');
	
	var sourceType = [];
	sourceType = $('select[name="sourceType"]');
	
	var language = [];
	language = $('input[name="languageRow"]');
	
	var languageType = [];
	languageType = $('select[name="languageType"]');
	
	var relation = [];
	relation = $('input[name="relationRow"]');
	
	var relationType = [];
	relationType = $('select[name="relationType"]');
	
	var relationEncoding = [];
	relationEncoding = $('select[name="relationEncoding"]');
	
	var coverage = [];
	coverage = $('input[name="coverageRow"]');
	
	var coverageType = [];
	coverageType = $('select[name="coverageType"]');
	
	var coverageEncoding = [];
	coverageEncoding = $('select[name="coverageEncoding"]');
	
	var rights = [];
	rights = $('input[name="rightsRow"]');
	
	var rightsType = [];
	rightsType = $('select[name="rightsType"]');
	
	var rightsEncoding = [];
	rightsEncoding = $('select[name="rightsEncoding"]');
	
	var audience = [];
	audience = $('input[name="audienceRow"]');
	
	var audienceType = [];
	audienceType = $('select[name="audienceType"]');
	
	var provenance = [];
	provenance = $('input[name="provenanceRow"]');
	
	var rightsholder = [];
	rightsholder = $('input[name="rightsholderRow"]');
	
	var instructionalmethod = [];
	instructionalmethod = $('input[name="instructionalmethodRow"]');
	
	var accrualmethod = [];
	accrualmethod = $('input[name="accrualmethodRow"]');
	
	var accrualperiodicity = [];
	accrualperiodicity = $('input[name="accrualperiodicityRow"]');
	
	var accrualpolicy = [];
	accrualpolicy = $('input[name="accrualpolicyRow"]');

//Additional output options
	var adddeclaration = $("#adddeclaration");
	var addroot = $("#addroot");
	var adddc = $("#adddc");
	var addqualified = $("#addqualified");
	var addhead = $("#addhead");
	var addtitle = $("#addtitle");
	var addlink = $("#addlink");
	var addlinkqualified = $("#addlinkqualified");
	var adddeclarationhtml = $("#adddeclarationhtml");
	var adddeclarationxhtml = $("#adddeclarationxhtml");
	var addheadx = $("#addheadx");
	var addtitlex = $("#addtitlex");
	var addlinkx = $("#addlinkx");
	var addlinkxqualified = $("#addlinkxqualified");
	
//XML options//
if(adddeclaration.attr('checked')){
	generatedXMLCode +="<?xml version=\"1.0\" encoding=\"UTF-8\"?>"  + '\n' + '\n';
}

if(addroot.attr('checked')){
	var rootname = $("#rootname").val();
	generatedXMLCode +="<" + rootname + '\n' + "xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"";
	}

if((addroot.attr('checked')) !== (adddc.attr('checked'))){
	generatedXMLCode +=">" + '\n';
	}

if(adddc.attr('checked')){
	generatedXMLCode += '\n' + "xmlns:dc=\"http://purl.org/dc/elements/1.1/\"";
	}

if((adddc.attr('checked')) !== (addqualified.attr('checked'))){
	generatedXMLCode +=">" + '\n';
}

if(addqualified.attr('checked')){
	generatedXMLCode += '\n' + "xmlns:dcterms=\"http://purl.org/dc/terms/\""  + ">" + '\n';
}

if((adddeclaration.attr('checked')) | (addroot.attr('checked')) | (adddc.attr('checked')) | (addqualified.attr('checked'))){
	generatedXMLCode +='\n';
}

//HTML options//
if(adddeclarationhtml.attr('checked')){
	generatedHTMLCode +="<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01//EN\""  + '\n' + "\"http://www.w3.org/TR/html4/strict.dtd\">" + '\n' + "<html>" + '\n';
}

if(addhead.attr('checked')){
	generatedHTMLCode +="<head profile=\"http://dublincore.org/documents/2008/08/04/dc-html/\">"  + '\n';
}

if(addtitle.attr('checked')){
	var titlename = $("#titlename").val();
	generatedHTMLCode +="<title>" + titlename + "</title>" + '\n';
}

if(addlink.attr('checked')){
	generatedHTMLCode +="<link rel=\"schema.DC\" href=\"http://purl.org/dc/elements/1.1/\">"  + '\n';
}

if(addlinkqualified.attr('checked')){
	generatedHTMLCode +="<link rel=\"schema.DCTERMS\" href=\"http://purl.org/dc/terms/\">"  + '\n';
}

//XHTML options//
if(adddeclarationxhtml.attr('checked')){
	generatedXHTMLCode +="<?xml version=\"1.0\" encoding=\"UTF-8\" ?>"  + '\n' + "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\"" + '\n' + "\"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">" + '\n' + "<html xmlns=\"http://www.w3.org/1999/xhtml\">" + '\n';
}

if(addheadx.attr('checked')){
	generatedXHTMLCode +="<head profile=\"http://dublincore.org/documents/2008/08/04/dc-html/\">"  + '\n';
}

if(addtitlex.attr('checked')){
	var titlenamex = $("#titlenamex").val();
	generatedXHTMLCode +="<title>" + titlenamex + "</title>" + '\n';
}

if(addlinkx.attr('checked')){
	generatedXHTMLCode +="<link rel=\"schema.DC\" href=\"http://purl.org/dc/elements/1.1/\" />"  + '\n';
}

if(addlinkxqualified.attr('checked')){
	generatedXHTMLCode +="<link rel=\"schema.DCTERMS\" href=\"http://purl.org/dc/terms/\" />"  + '\n';
}
	
	for(i=0; i<=title.length-1; i++) {
	if((title[i].value.indexOf("http://") > -1) || (title[i].value.indexOf("www.") > -1) && (titleType[i].selectedIndex == "0")){
	generatedXMLCode += "<dc:title>" + title[i].value + "</dc:title>" + '\n';
	generatedHTMLCode +="<link rel=\"DC.Title\" href=\"" + title[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DC.Title\" href=\"" + title[i].value + "\" />" + '\n';
	}
	else if((title[i].value != "") && (titleType[i].selectedIndex == "0")){
	generatedXMLCode += "<dc:title>" + title[i].value + "</dc:title>" + '\n';
	generatedHTMLCode +="<meta name=\"DC.Title\" content=\"" + title[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DC.Title\" content=\"" + title[i].value + "\" />" + '\n';
	}
	else if((title[i].value.indexOf("http://") > -1) || (title[i].value.indexOf("www.") > -1) && (titleType[i].selectedIndex == "1")){
	generatedXMLCode += "<dcterms:alternative>" + title[i].value + "</dcterms:alternative>" + '\n';
	generatedHTMLCode +="<link rel=\"DCTERMS.Alternative\" href=\"" + title[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.Alternative\" href=\"" + title[i].value + "\" />" + '\n';
	}
	else if((title[i].value != "") && (titleType[i].selectedIndex == "1")){
	generatedXMLCode += "<dcterms:alternative>" + title[i].value + "</dcterms:alternative>" + '\n';
	generatedHTMLCode +="<meta name=\"DCTERMS.Alternative\" content=\"" + title[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.Alternative\" content=\"" + title[i].value + "\" />" + '\n';
	}
}

	for(i=0; i<=creator.length-1; i++) {
	if((creator[i].value.indexOf("http://") > -1) || (creator[i].value.indexOf("www.") > -1)){	
	generatedXMLCode += "<dc:creator>" + creator[i].value + "</dc:creator>" + '\n'; 
	generatedHTMLCode += "<link rel=\"DC.Creator\" href=\"" + creator[i].value + "\">" + '\n';
	generatedXHTMLCode += "<link rel=\"DC.Creator\" href=\"" + creator[i].value + "\" />" + '\n';
	}
	else if(creator[i].value != ""){	
	generatedXMLCode += "<dc:creator>" + creator[i].value + "</dc:creator>" + '\n'; 
	generatedHTMLCode += "<meta name=\"DC.Creator\" content=\"" + creator[i].value + "\">" + '\n';
	generatedXHTMLCode += "<meta name=\"DC.Creator\" content=\"" + creator[i].value + "\" />" + '\n';
	}
}

	for(i=0; i<=subject.length-1; i++) {
	if((subject[i].value.indexOf("http://") > -1) || (subject[i].value.indexOf("www.") > -1)){	
	generatedXMLCode += "<dc:subject>" + subject[i].value + "</dc:subject>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DC.Subject\" href=\"" + subject[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DC.Subject\" href=\"" + subject[i].value + "\" />" + '\n';
	}
	else if((subject[i].value != "") && (subjectType[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:subject>" + subject[i].value + "</dc:subject>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DC.Subject\" content=\"" + subject[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DC.Subject\" content=\"" + subject[i].value + "\" />" + '\n';
	}
	else if((subject[i].value != "") && (subjectType[i].selectedIndex == "1")){	
	generatedXMLCode += "<dc:subject xsi:type=\"dcterms:AAT\">" + subject[i].value + "</dc:subject>" + '\n';          
	generatedHTMLCode += "<meta name=\"DC.Subject\" scheme=\"DCTERMS.AAT\" content=\"" + subject[i].value + "\">" + '\n';
	generatedXHTMLCode += "<meta name=\"DC.Subject\" scheme=\"DCTERMS.AAT\" content=\"" + subject[i].value + "\" />" + '\n';
	}
	else if((subject[i].value != "") && (subjectType[i].selectedIndex == "2")){	
	generatedXMLCode += "<dc:subject xsi:type=\"dcterms:AGROVOC\">" + subject[i].value + "</dc:subject>" + '\n';          
	generatedHTMLCode += "<meta name=\"DC.Subject\" scheme=\"DCTERMS.AGROVOC\" content=\"" + subject[i].value + "\">" + '\n';
	generatedXHTMLCode += "<meta name=\"DC.Subject\" scheme=\"DCTERMS.AGROVOC\" content=\"" + subject[i].value + "\" />" + '\n';
	}
	else if((subject[i].value != "") && (subjectType[i].selectedIndex == "3")){	
	generatedXMLCode += "<dc:subject xsi:type=\"dcterms:DDC\">" + subject[i].value + "</dc:subject>" + '\n';          
	generatedHTMLCode += "<meta name=\"DC.Subject\" scheme=\"DCTERMS.DDC\" content=\"" + subject[i].value + "\">" + '\n';
	generatedXHTMLCode += "<meta name=\"DC.Subject\" scheme=\"DCTERMS.DDC\" content=\"" + subject[i].value + "\" />" + '\n';
	}
	else if((subject[i].value != "") && (subjectType[i].selectedIndex == "4")){	
	generatedXMLCode += "<dc:subject xsi:type=\"dcterms:ITIS\">" + subject[i].value + "</dc:subject>" + '\n';          
	generatedHTMLCode += "<meta name=\"DC.Subject\" scheme=\"DCTERMS.ITIS\" content=\"" + subject[i].value + "\">" + '\n';
	generatedXHTMLCode += "<meta name=\"DC.Subject\" scheme=\"DCTERMS.ITIS\" content=\"" + subject[i].value + "\" />" + '\n';
	}
	else if((subject[i].value != "") && (subjectType[i].selectedIndex == "5")){	
	generatedXMLCode += "<dc:subject xsi:type=\"dcterms:LCC\">" + subject[i].value + "</dc:subject>" + '\n';          
	generatedHTMLCode += "<meta name=\"DC.Subject\" scheme=\"DCTERMS.LCC\" content=\"" + subject[i].value + "\">" + '\n';
	generatedXHTMLCode += "<meta name=\"DC.Subject\" scheme=\"DCTERMS.LCC\" content=\"" + subject[i].value + "\" />" + '\n';
	}
	else if((subject[i].value != "") && (subjectType[i].selectedIndex == "6")){	
	generatedXMLCode += "<dc:subject xsi:type=\"dcterms:LCSH\">" + subject[i].value + "</dc:subject>" + '\n';          
	generatedHTMLCode += "<meta name=\"DC.Subject\" scheme=\"DCTERMS.LCSH\" content=\"" + subject[i].value + "\">" + '\n';
	generatedXHTMLCode += "<meta name=\"DC.Subject\" scheme=\"DCTERMS.LCSH\" content=\"" + subject[i].value + "\" />" + '\n';
	}
	else if((subject[i].value != "") && (subjectType[i].selectedIndex == "7")){	
	generatedXMLCode += "<dc:subject xsi:type=\"dcterms:MESH\">" + subject[i].value + "</dc:subject>" + '\n';          
	generatedHTMLCode += "<meta name=\"DC.Subject\" scheme=\"DCTERMS.MESH\" content=\"" + subject[i].value + "\">" + '\n';
	generatedXHTMLCode += "<meta name=\"DC.Subject\" scheme=\"DCTERMS.MESH\" content=\"" + subject[i].value + "\" />" + '\n';
	}
	else if((subject[i].value != "") && (subjectType[i].selectedIndex == "8")){	
	generatedXMLCode += "<dc:subject xsi:type=\"dcterms:NLM\">" + subject[i].value + "</dc:subject>" + '\n';          
	generatedHTMLCode += "<meta name=\"DC.Subject\" scheme=\"DCTERMS.NLM\" content=\"" + subject[i].value + "\">" + '\n';
	generatedXHTMLCode += "<meta name=\"DC.Subject\" scheme=\"DCTERMS.NLM\" content=\"" + subject[i].value + "\" />" + '\n';
	}
	else if((subject[i].value != "") && (subjectType[i].selectedIndex == "9")){	
	generatedXMLCode += "<dc:subject xsi:type=\"dcterms:TGM\">" + subject[i].value + "</dc:subject>" + '\n';          
	generatedHTMLCode += "<meta name=\"DC.Subject\" scheme=\"DCTERMS.TGM\" content=\"" + subject[i].value + "\">" + '\n';
	generatedXHTMLCode += "<meta name=\"DC.Subject\" scheme=\"DCTERMS.TGM\" content=\"" + subject[i].value + "\" />" + '\n';
	}
	else if((subject[i].value != "") && (subjectType[i].selectedIndex == "10")){	
	generatedXMLCode += "<dc:subject xsi:type=\"dcterms:TGN\">" + subject[i].value + "</dc:subject>" + '\n';          
	generatedHTMLCode += "<meta name=\"DC.Subject\" scheme=\"DCTERMS.TGN\" content=\"" + subject[i].value + "\">" + '\n';
	generatedXHTMLCode += "<meta name=\"DC.Subject\" scheme=\"DCTERMS.TGN\" content=\"" + subject[i].value + "\" />" + '\n';
	}
	else if((subject[i].value != "") && (subjectType[i].selectedIndex == "11")){	
	generatedXMLCode += "<dc:subject xsi:type=\"dcterms:UDC\">" + subject[i].value + "</dc:subject>" + '\n';          
	generatedHTMLCode += "<meta name=\"DC.Subject\" scheme=\"DCTERMS.UDC\" content=\"" + subject[i].value + "\">" + '\n';
	generatedXHTMLCode += "<meta name=\"DC.Subject\" scheme=\"DCTERMS.UDC\" content=\"" + subject[i].value + "\" />" + '\n';
	}
}

	for(i=0; i<=description.length-1; i++) {
	if((description[i].value.indexOf("http://") > -1) || (description[i].value.indexOf("www.") > -1) && (descriptionType[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:description>" + description[i].value + "</dc:description>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DC.Description\" href=\"" + description[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DC.Description\" href=\"" + description[i].value + "\" />" + '\n';
	}
	else if((description[i].value != "") && (descriptionType[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:description>" + description[i].value + "</dc:description>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DC.Description\" content=\"" + description[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DC.Description\" content=\"" + description[i].value + "\" />" + '\n';
	}
	else if((description[i].value.indexOf("http://") > -1) || (description[i].value.indexOf("www.") > -1) && (descriptionType[i].selectedIndex == "1")){	
	generatedXMLCode += "<dc:description>" + description[i].value + "</dc:description>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.TableofContents\" href=\"" + description[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.TableofContents\" href=\"" + description[i].value + "\" />" + '\n';
	}
	else if((description[i].value != "") && (descriptionType[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:tableOfContents>" + description[i].value + "</dcterms:tableOfContents>" + '\n';          
	generatedHTMLCode += "<meta name=\"DCTERMS.TableOfContents\" content=\"" + description[i].value + "\">" + '\n';
	generatedXHTMLCode += "<meta name=\"DCTERMS.TableOfContents\" content=\"" + description[i].value + "\" />" + '\n';
	}
	else if((description[i].value.indexOf("http://") > -1) || (description[i].value.indexOf("www.") > -1) && (descriptionType[i].selectedIndex == "2")){	
	generatedXMLCode += "<dc:description>" + description[i].value + "</dc:description>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.Abstract\" href=\"" + description[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.Abstract\" href=\"" + description[i].value + "\" />" + '\n';
	}
	else if((description[i].value != "") && (descriptionType[i].selectedIndex == "2")){	
	generatedXMLCode += "<dcterms:abstract>" + description[i].value + "</dcterms:abstract>" + '\n';          
	generatedHTMLCode += "<meta name=\"DCTERMS.Abstract\" content=\"" + description[i].value + "\">" + '\n';
	generatedXHTMLCode += "<meta name=\"DCTERMS.Abstract\" content=\"" + description[i].value + "\" />" + '\n';
	}
}

	for(i=0; i<=publisher.length-1; i++) {
	if((publisher[i].value.indexOf("http://") > -1) || (publisher[i].value.indexOf("www.") > -1)){	
	generatedXMLCode += "<dc:publisher>" + publisher[i].value + "</dc:publisher>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DC.Publisher\" href=\"" + publisher[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DC.Publisher\" href=\"" + publisher[i].value + "\" />" + '\n';
	}
	else if(publisher[i].value != ""){	
	generatedXMLCode += "<dc:publisher>" + publisher[i].value + "</dc:publisher>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DC.Publisher\" content=\"" + publisher[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DC.Publisher\" content=\"" + publisher[i].value + "\" />" + '\n';
	}
}

	for(i=0; i<=contributor.length-1; i++) {
	if((contributor[i].value.indexOf("http://") > -1) || (contributor[i].value.indexOf("www.") > -1)){	
	generatedXMLCode += "<dc:contributor>" + contributor[i].value + "</dc:contributor>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DC.Contributor\" href=\"" + contributor[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DC.Contributor\" href=\"" + contributor[i].value + "\" />" + '\n';
	}
	else if(contributor[i].value != ""){	
	generatedXMLCode += "<dc:contributor>" + contributor[i].value + "</dc:contributor>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DC.Contributor\" content=\"" + contributor[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DC.Contributor\" content=\"" + contributor[i].value + "\" />" + '\n';
	}
}

	for(i=0; i<=date.length-1; i++) {
	if((date[i].value.indexOf("http://") > -1) || (date[i].value.indexOf("www.") > -1) && (dateEncoding[i].selectedIndex == "0") &&  (dateType[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:date>" + date[i].value + "</dc:date>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DC.Date\" href=\"" + date[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DC.Date\" href=\"" + date[i].value + "\" />" + '\n';
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "0") &&  (dateType[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:date>" + date[i].value + "</dc:date>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DC.Date\" content=\"" + date[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DC.Date\" content=\"" + date[i].value + "\" />" + '\n';
	}
	else if((date[i].value.indexOf("http://") > -1) || (date[i].value.indexOf("www.") > -1) && (dateEncoding[i].selectedIndex == "0") &&  (dateType[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:created>" + date[i].value + "</dcterms:created>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.Created\" href=\"" + date[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.Created\" href=\"" + date[i].value + "\" />" + '\n';
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "0") && (dateType[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:created>" + date[i].value + "</dcterms:created>" + '\n';          
	generatedHTMLCode += "<meta name=\"DCTERMS.Created\" content=\"" + date[i].value + "\">" + '\n';
	generatedXHTMLCode += "<meta name=\"DCTERMS.Created\" content=\"" + date[i].value + "\" />" + '\n';
	}
	else if((date[i].value.indexOf("http://") > -1) || (date[i].value.indexOf("www.") > -1) && (dateEncoding[i].selectedIndex == "0") &&  (dateType[i].selectedIndex == "2")){	
	generatedXMLCode += "<dcterms:valid>" + date[i].value + "</dcterms:valid>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.Valid\" href=\"" + date[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.Valid\" href=\"" + date[i].value + "\" />" + '\n';
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "0") && (dateType[i].selectedIndex == "2")){	
	generatedXMLCode += "<dcterms:valid>" + date[i].value + "</dcterms:valid>" + '\n';          
	generatedHTMLCode += "<meta name=\"DCTERMS.Valid\" content=\"" + date[i].value + "\">" + '\n';
	generatedXHTMLCode += "<meta name=\"DCTERMS.Valid\" content=\"" + date[i].value + "\" />" + '\n';
	}
	else if((date[i].value.indexOf("http://") > -1) || (date[i].value.indexOf("www.") > -1) && (dateEncoding[i].selectedIndex == "0") &&  (dateType[i].selectedIndex == "3")){	
	generatedXMLCode += "<dcterms:available>" + date[i].value + "</dcterms:available>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.Available\" href=\"" + date[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.Available\" href=\"" + date[i].value + "\" />" + '\n';
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "0") && (dateType[i].selectedIndex == "3")){	
	generatedXMLCode += "<dcterms:available>" + date[i].value + "</dcterms:available>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.Available\" content=\"" + date[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.Available\" content=\"" + date[i].value + "\" />" + '\n';
	}
	else if((date[i].value.indexOf("http://") > -1) || (date[i].value.indexOf("www.") > -1) && (dateEncoding[i].selectedIndex == "0") &&  (dateType[i].selectedIndex == "4")){	
	generatedXMLCode += "<dcterms:issued>" + date[i].value + "</dcterms:issued>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.Issued\" href=\"" + date[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.Issued\" href=\"" + date[i].value + "\" />" + '\n';
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "0") && (dateType[i].selectedIndex == "4")){	
	generatedXMLCode += "<dcterms:issued>" + date[i].value + "</dcterms:issued>" + '\n';          
	generatedHTMLCode += "<meta name=\"DCTERMS.Issued\" content=\"" + date[i].value + "\">" + '\n';
	generatedXHTMLCode += "<meta name=\"DCTERMS.Issued\" content=\"" + date[i].value + "\" />" + '\n';
	}
	else if((date[i].value.indexOf("http://") > -1) || (date[i].value.indexOf("www.") > -1) && (dateEncoding[i].selectedIndex == "0") &&  (dateType[i].selectedIndex == "5")){	
	generatedXMLCode += "<dcterms:modified>" + date[i].value + "</dcterms:modified>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.Modified\" href=\"" + date[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.Modified\" href=\"" + date[i].value + "\" />" + '\n';
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "0") && (dateType[i].selectedIndex == "5")){	
	generatedXMLCode += "<dcterms:modified>" + date[i].value + "</dcterms:modified>" + '\n';          
	generatedHTMLCode += "<meta name=\"DCTERMS.Modified\" content=\"" + date[i].value + "\">" + '\n';
	generatedXHTMLCode += "<meta name=\"DCTERMS.Modified\" content=\"" + date[i].value + "\" />" + '\n';
	}
	else if((date[i].value.indexOf("http://") > -1) || (date[i].value.indexOf("www.") > -1) && (dateEncoding[i].selectedIndex == "0") &&  (dateType[i].selectedIndex == "6")){	
	generatedXMLCode += "<dcterms:dateAccepted>" + date[i].value + "</dcterms:dateAccepted>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.DateAccepted\" href=\"" + date[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.DateAccepted\" href=\"" + date[i].value + "\" />" + '\n';
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "0") && (dateType[i].selectedIndex == "6")){	
	generatedXMLCode += "<dcterms:dateAccepted>" + date[i].value + "</dcterms:dateAccepted>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.DateAccepted\" content=\"" + date[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.DateAccepted\" content=\"" + date[i].value + "\" />" + '\n';
	}
	else if((date[i].value.indexOf("http://") > -1) || (date[i].value.indexOf("www.") > -1) && (dateEncoding[i].selectedIndex == "0") &&  (dateType[i].selectedIndex == "7")){	
	generatedXMLCode += "<dcterms:dateCopyrighted>" + date[i].value + "</dcterms:dateCopyrighted>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.DateCopyrighted\" href=\"" + date[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.DateCopyrighted\" href=\"" + date[i].value + "\" />" + '\n';
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "0") && (dateType[i].selectedIndex == "7")){	
	generatedXMLCode += "<dcterms:dateCopyrighted>" + date[i].value + "</dcterms:dateCopyrighted>" + '\n';          
	generatedHTMLCode += "<meta name=\"DCTERMS.DateCopyrighted\" content=\"" + date[i].value + "\">" + '\n';
	generatedXHTMLCode += "<meta name=\"DCTERMS.DateCopyrighted\" content=\"" + date[i].value + "\" />" + '\n';
	}
	else if((date[i].value.indexOf("http://") > -1) || (date[i].value.indexOf("www.") > -1) && (dateEncoding[i].selectedIndex == "0") &&  (dateType[i].selectedIndex == "4")){	
	generatedXMLCode += "<dcterms:dateSubmitted>" + date[i].value + "</dcterms:dateSubmitted>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.DateSubmitted\" href=\"" + date[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.DateSubmitted\" href=\"" + date[i].value + "\" />" + '\n';
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "0") && (dateType[i].selectedIndex == "8")){	
	generatedXMLCode += "<dcterms:dateSubmitted>" + date[i].value + "</dcterms:dateSubmitted>" + '\n';          
	generatedHTMLCode += "<meta name=\"DCTERMS.DateSubmitted\" content=\"" + date[i].value + "\">" + '\n';
	generatedXHTMLCode += "<meta name=\"DCTERMS.DateSubmitted\" content=\"" + date[i].value + "\" />" + '\n';
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "1") &&  (dateType[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:date xsi:type=\"dcterms:Period\">" + date[i].value + "</dc:date>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DC.Date\" scheme=\"DCTERMS.Period\" content=\"" + date[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DC.Date\" scheme=\"DCTERMS.Period\" content=\"" + date[i].value + "\" />" + '\n';
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "1") && (dateType[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:created xsi:type=\"dcterms:Period\">" + date[i].value + "</dcterms:created>" + '\n';          
	generatedHTMLCode += "<meta name=\"DCTERMS.Created\" scheme=\"DCTERMS.Period\" content=\"" + date[i].value + "\">" + '\n';
	generatedXHTMLCode += "<meta name=\"DCTERMS.Created\" scheme=\"DCTERMS.Period\" content=\"" + date[i].value + "\" />" + '\n';
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "1") && (dateType[i].selectedIndex == "2")){	
	generatedXMLCode += "<dcterms:valid xsi:type=\"dcterms:Period\">" + date[i].value + "</dcterms:valid>" + '\n';          
	generatedHTMLCode += "<meta name=\"DCTERMS.Valid\" scheme=\"DCTERMS.Period\" content=\"" + date[i].value + "\">" + '\n';
	generatedXHTMLCode += "<meta name=\"DCTERMS.Valid\" scheme=\"DCTERMS.Period\" content=\"" + date[i].value + "\" />" + '\n';
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "1") && (dateType[i].selectedIndex == "3")){	
	generatedXMLCode += "<dcterms:available xsi:type=\"dcterms:Period\">" + date[i].value + "</dcterms:available>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.Available\" scheme=\"DCTERMS.Period\" content=\"" + date[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.Available\" scheme=\"DCTERMS.Period\" content=\"" + date[i].value + "\" />" + '\n';
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "1") && (dateType[i].selectedIndex == "4")){	
	generatedXMLCode += "<dcterms:issued xsi:type=\"dcterms:Period\">" + date[i].value + "</dcterms:issued>" + '\n';          
	generatedHTMLCode += "<meta name=\"DCTERMS.Issued\" scheme=\"DCTERMS.Period\" content=\"" + date[i].value + "\">" + '\n';
	generatedXHTMLCode += "<meta name=\"DCTERMS.Issued\" scheme=\"DCTERMS.Period\" content=\"" + date[i].value + "\" />" + '\n';
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "1") && (dateType[i].selectedIndex == "5")){	
	generatedXMLCode += "<dcterms:modified xsi:type=\"dcterms:Period\">" + date[i].value + "</dcterms:modified>" + '\n';          
	generatedHTMLCode += "<meta name=\"DCTERMS.Modified\" scheme=\"DCTERMS.Period\" content=\"" + date[i].value + "\">" + '\n';
	generatedXHTMLCode += "<meta name=\"DCTERMS.Modified\" scheme=\"DCTERMS.Period\" content=\"" + date[i].value + "\" />" + '\n';
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "1") && (dateType[i].selectedIndex == "6")){	
	generatedXMLCode += "<dcterms:dateAccepted xsi:type=\"dcterms:Period\">" + date[i].value + "</dcterms:dateAccepted>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.DateAccepted\" scheme=\"DCTERMS.Period\" content=\"" + date[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.DateAccepted\" scheme=\"DCTERMS.Period\" content=\"" + date[i].value + "\" />" + '\n';
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "1") && (dateType[i].selectedIndex == "7")){	
	generatedXMLCode += "<dcterms:dateCopyrighted xsi:type=\"dcterms:Period\">" + date[i].value + "</dcterms:dateCopyrighted>" + '\n';          
	generatedHTMLCode += "<meta name=\"DCTERMS.DateCopyrighted\" scheme=\"DCTERMS.Period\" content=\"" + date[i].value + "\">" + '\n';
	generatedXHTMLCode += "<meta name=\"DCTERMS.DateCopyrighted\" scheme=\"DCTERMS.Period\" content=\"" + date[i].value + "\" />" + '\n';
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "1") && (dateType[i].selectedIndex == "8")){	
	generatedXMLCode += "<dcterms:dateSubmitted xsi:type=\"dcterms:Period\">" + date[i].value + "</dcterms:dateSubmitted>" + '\n';          
	generatedHTMLCode += "<meta name=\"DCTERMS.DateSubmitted\" scheme=\"DCTERMS.Period\" content=\"" + date[i].value + "\">" + '\n';
	generatedXHTMLCode += "<meta name=\"DCTERMS.DateSubmitted\" scheme=\"DCTERMS.Period\" content=\"" + date[i].value + "\" />" + '\n';
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "2") &&  (dateType[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:date xsi:type=\"dcterms:W3CDTF\">" + date[i].value + "</dc:date>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DC.Date\" scheme=\"DCTERMS.W3CTDF\" content=\"" + date[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DC.Date\" scheme=\"DCTERMS.W3CTDF\" content=\"" + date[i].value + "\" />" + '\n';
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "2") && (dateType[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:created xsi:type=\"dcterms:W3CDTF\">" + date[i].value + "</dcterms:created>" + '\n';          
	generatedHTMLCode += "<meta name=\"DCTERMS.Created\" scheme=\"DCTERMS.W3CTDF\" content=\"" + date[i].value + "\">" + '\n';
	generatedXHTMLCode += "<meta name=\"DCTERMS.Created\" scheme=\"DCTERMS.W3CTDF\" content=\"" + date[i].value + "\" />" + '\n';
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "2") && (dateType[i].selectedIndex == "2")){	
	generatedXMLCode += "<dcterms:valid xsi:type=\"dcterms:W3CDTF\">" + date[i].value + "</dcterms:valid>" + '\n';          
	generatedHTMLCode += "<meta name=\"DCTERMS.Valid\" scheme=\"DCTERMS.W3CTDF\" content=\"" + date[i].value + "\">" + '\n';
	generatedXHTMLCode += "<meta name=\"DCTERMS.Valid\" scheme=\"DCTERMS.W3CTDF\" content=\"" + date[i].value + "\" />" + '\n';
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "2") && (dateType[i].selectedIndex == "3")){	
	generatedXMLCode += "<dcterms:available xsi:type=\"dcterms:W3CDTF\">" + date[i].value + "</dcterms:available>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.Available\" scheme=\"DCTERMS.W3CTDF\" content=\"" + date[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.Available\" scheme=\"DCTERMS.W3CTDF\" content=\"" + date[i].value + "\" />" + '\n';
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "2") && (dateType[i].selectedIndex == "4")){	
	generatedXMLCode += "<dcterms:issued xsi:type=\"dcterms:W3CDTF\">" + date[i].value + "</dcterms:issued>" + '\n';          
	generatedHTMLCode += "<meta name=\"DCTERMS.Issued\" scheme=\"DCTERMS.W3CTDF\" content=\"" + date[i].value + "\">" + '\n';
	generatedXHTMLCode += "<meta name=\"DCTERMS.Issued\" scheme=\"DCTERMS.W3CTDF\" content=\"" + date[i].value + "\" />" + '\n';
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "2") && (dateType[i].selectedIndex == "5")){	
	generatedXMLCode += "<dcterms:modified xsi:type=\"dcterms:W3CDTF\">" + date[i].value + "</dcterms:modified>" + '\n';          
	generatedHTMLCode += "<meta name=\"DCTERMS.Modified\" scheme=\"DCTERMS.W3CTDF\" content=\"" + date[i].value + "\">" + '\n';
	generatedXHTMLCode += "<meta name=\"DCTERMS.Modified\" scheme=\"DCTERMS.W3CTDF\" content=\"" + date[i].value + "\" />" + '\n';
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "2") && (dateType[i].selectedIndex == "6")){	
	generatedXMLCode += "<dcterms:dateAccepted xsi:type=\"dcterms:W3CDTF\">" + date[i].value + "</dcterms:dateAccepted>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.DateAccepted\" scheme=\"DCTERMS.W3CTDF\" content=\"" + date[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.DateAccepted\" scheme=\"DCTERMS.W3CTDF\" content=\"" + date[i].value + "\" />" + '\n';
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "2") && (dateType[i].selectedIndex == "7")){	
	generatedXMLCode += "<dcterms:dateCopyrighted xsi:type=\"dcterms:W3CDTF\">" + date[i].value + "</dcterms:dateCopyrighted>" + '\n';          
	generatedHTMLCode += "<meta name=\"DCTERMS.DateCopyrighted\" scheme=\"DCTERMS.W3CTDF\" content=\"" + date[i].value + "\">" + '\n';
	generatedXHTMLCode += "<meta name=\"DCTERMS.DateCopyrighted\" scheme=\"DCTERMS.W3CTDF\" content=\"" + date[i].value + "\" />" + '\n';
	}
	else if((date[i].value != "") && (dateEncoding[i].selectedIndex == "2") && (dateType[i].selectedIndex == "8")){	
	generatedXMLCode += "<dcterms:dateSubmitted xsi:type=\"dcterms:W3CDTF\">" + date[i].value + "</dcterms:dateSubmitted>" + '\n';          
	generatedHTMLCode += "<meta name=\"DCTERMS.DateSubmitted\" scheme=\"DCTERMS.W3CTDF\" content=\"" + date[i].value + "\">" + '\n';
	generatedXHTMLCode += "<meta name=\"DCTERMS.DateSubmitted\" scheme=\"DCTERMS.W3CTDF\" content=\"" + date[i].value + "\" />" + '\n';
	}
}

	for(i=0; i<=type.length-1; i++) {
	if((type[i].value.indexOf("http://") > -1) || (type[i].value.indexOf("www.") > -1) && (typeType[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:type>" + type[i].value + "</dc:type>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DC.Type\" href=\"" + type[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DC.Type\" href=\"" + type[i].value + "\" />" + '\n';
	}
	else if((type[i].value != "") && (typeType[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:type>" + type[i].value + "</dc:type>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DC.Type\" content=\"" + type[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DC.Type\" content=\"" + type[i].value + "\" />" + '\n';
	}
	else if((type[i].value != "") && (typeType[i].selectedIndex == "1")){	
	generatedXMLCode += "<dc:type xsi:type=\"dcterms:DCMIType\">" + type[i].value + "</dc:type>" + '\n';          
	generatedHTMLCode += "<meta name=\"DC.Type\" scheme=\"DCTERMS.DCMIType\" content=\"" + type[i].value + "\">" + '\n';
	generatedXHTMLCode += "<meta name=\"DC.Type\" scheme=\"DCTERMS.DCMIType\" content=\"" + type[i].value + "\" />" + '\n';
	}
}

	for(i=0; i<=format.length-1; i++) {
	if((format[i].value.indexOf("http://") > -1) || (format[i].value.indexOf("www.") > -1) && (formatEncoding[i].selectedIndex == "0") && (formatType[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:format>" + format[i].value + "</dc:format>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DC.Format\" href=\"" + format[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DC.Format\" href=\"" + format[i].value + "\" />" + '\n';
	}
	else if((format[i].value != "") && (formatEncoding[i].selectedIndex == "0") && (formatType[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:format>" + format[i].value + "</dc:format>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DC.Format\" content=\"" + format[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DC.Format\" content=\"" + format[i].value + "\" />" + '\n';
	}
	else if((format[i].value.indexOf("http://") > -1) || (format[i].value.indexOf("www.") > -1) && (formatEncoding[i].selectedIndex == "0") && (formatType[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:extent>" + format[i].value + "</dcterms:extent>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.Extent\" href=\"" + format[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.Extent\" href=\"" + format[i].value + "\" />" + '\n';
	}
	else if((format[i].value != "") && (formatEncoding[i].selectedIndex == "0") && (formatType[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:extent>" + format[i].value + "</dcterms:extent>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.Extent\" content=\"" + format[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.Extent\" content=\"" + format[i].value + "\" />" + '\n';
	}
	else if((format[i].value.indexOf("http://") > -1) || (format[i].value.indexOf("www.") > -1) && (formatEncoding[i].selectedIndex == "0") && (formatType[i].selectedIndex == "2")){	
	generatedXMLCode += "<dcterms:medium>" + format[i].value + "</dcterms:medium>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.Medium\" href=\"" + format[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.Medium\" href=\"" + format[i].value + "\" />" + '\n';
	}
	else if((format[i].value != "") && (formatEncoding[i].selectedIndex == "0") && (formatType[i].selectedIndex == "2")){	
	generatedXMLCode += "<dcterms:medium>" + format[i].value + "</dcterms:medium>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.Medium\" content=\"" + format[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.Medium\" content=\"" + format[i].value + "\" />" + '\n';
	}
	else if((format[i].value != "") && (formatEncoding[i].selectedIndex == "1") && (formatType[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:format xsi:type=\"dcterms:IMT\">" + format[i].value + "</dc:format>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DC.Format\" scheme=\"DCTERMS.IMT\" content=\"" + format[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DC.Format\" scheme=\"DCTERMS.IMT\" content=\"" + format[i].value + "\" />" + '\n';
	}
	else if((format[i].value != "") && (formatEncoding[i].selectedIndex == "1") && (formatType[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:extent xsi:type=\"dcterms:IMT\">" + format[i].value + "</dcterms:extent>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.Extent\" scheme=\"DCTERMS.IMT\" content=\"" + format[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.Extent\" scheme=\"DCTERMS.IMT\" content=\"" + format[i].value + "\" />" + '\n';
	}
	else if((format[i].value != "") && (formatEncoding[i].selectedIndex == "1") && (formatType[i].selectedIndex == "2")){	
	generatedXMLCode += "<dcterms:medium xsi:type=\"dcterms:IMT\">" + format[i].value + "</dcterms:medium>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.Medium\" scheme=\"DCTERMS.IMT\" content=\"" + format[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.Medium\" scheme=\"DCTERMS.IMT\" content=\"" + format[i].value + "\" />" + '\n';
	}
}

	for(i=0; i<=identifier.length-1; i++) {
	if((identifier[i].value.indexOf("http://") > -1) || (identifier[i].value.indexOf("www.") > -1) && (identifierEncoding[i].selectedIndex == "0") && (identifierType[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:identifier>" + identifier[i].value + "</dc:identifier>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DC.Identifier\" href=\"" + identifier[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DC.Identifier\" href=\"" + identifier[i].value + "\" />" + '\n';
	}
	else if((identifier[i].value != "") && (identifierEncoding[i].selectedIndex == "0") && (identifierType[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:identifier>" + identifier[i].value + "</dc:identifier>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DC.Identifier\" content=\"" + identifier[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DC.Identifier\" content=\"" + identifier[i].value + "\" />" + '\n';
	}
	else if((identifier[i].value.indexOf("http://") > -1) || (identifier[i].value.indexOf("www.") > -1) && (identifierEncoding[i].selectedIndex == "0") && (identifierType[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:bibliographicCitation>" + identifier[i].value + "</dcterms:bibliographicCitation>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.BibliographicCitation\" href=\"" + identifier[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.BibliographicCitation\" href=\"" + identifier[i].value + "\" />" + '\n';
	}
	else if((identifier[i].value != "") && (identifierEncoding[i].selectedIndex == "0") && (identifierType[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:bibliographicCitation>" + identifier[i].value + "</dcterms:bibliographicCitation>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.BibliographicCitation\" content=\"" + identifier[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.BibliographicCitation\" content=\"" + identifier[i].value + "\" />" + '\n';
	}
	else if((identifier[i].value != "") && (identifierEncoding[i].selectedIndex == "1") && (identifierType[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:identifier xsi:type=\"dcterms:URI\">" + identifier[i].value + "</dc:identifier>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DC.Identifier\" href=\"" + identifier[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DC.Identifier\" href=\"" + identifier[i].value + "\" />" + '\n';
	}
	else if((identifier[i].value != "") && (identifierEncoding[i].selectedIndex == "1") && (identifierType[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:bibliographicCitation xsi:type=\"dcterms:URI\">" + identifier[i].value + "</dcterms:bibliographicCitation>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.BibliographicCitation\" href=\"" + identifier[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.BibliographicCitation\" href=\"" + identifier[i].value + "\" />" + '\n';
	}
}

	for(i=0; i<=source.length-1; i++) {
	if((source[i].value.indexOf("http://") > -1) || (source[i].value.indexOf("www.") > -1) && (sourceType[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:source>" + source[i].value + "</dc:source>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DC.Source\" href=\"" + source[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DC.Source\" href=\"" + source[i].value + "\" />" + '\n';
	}
	else if((source[i].value != "") && (sourceType[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:source>" + source[i].value + "</dc:source>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DC.Source\" content=\"" + source[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DC.Source\" content=\"" + source[i].value + "\" />" + '\n';
	}
	else if((source[i].value != "") && (sourceType[i].selectedIndex == "1")){	
	generatedXMLCode += "<dc:source xsi:type=\"dcterms:URI\">" + source[i].value + "</dc:source>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DC.Source\" href=\"" + source[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DC.Source\" href=\"" + source[i].value + "\" />" + '\n';
	}
}

	for(i=0; i<=language.length-1; i++) {
	if((language[i].value.indexOf("http://") > -1) || (language[i].value.indexOf("www.") > -1) && (languageType[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:language>" + language[i].value + "</dc:language>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DC.Language\" href=\"" + language[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DC.Language\" href=\"" + language[i].value + "\" />" + '\n';
	}
	else if((language[i].value != "") && (languageType[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:language>" + language[i].value + "</dc:language>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DC.Language\" content=\"" + language[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DC.Language\" content=\"" + language[i].value + "\" />" + '\n';
	}
	else if((language[i].value != "") && (languageType[i].selectedIndex == "1")){	
	generatedXMLCode += "<dc:language xsi:type=\"dcterms:ISO639-2\">" + language[i].value + "</dc:language>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DC.Language\" scheme=\"DCTERMS.ISO639-2\" content=\"" + language[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DC.Language\" scheme=\"DCTERMS.ISO639-2\" content=\"" + language[i].value + "\" />" + '\n';
	}
	else if((language[i].value != "") && (languageType[i].selectedIndex == "2")){	
	generatedXMLCode += "<dc:language xsi:type=\"dcterms:ISO639-3\">" + language[i].value + "</dc:language>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DC.Language\" scheme=\"DCTERMS.ISO639-3\" content=\"" + language[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DC.Language\" scheme=\"DCTERMS.ISO639-3\" content=\"" + language[i].value + "\" />" + '\n';
	}
}

	for(i=0; i<=relation.length-1; i++) {
	if((relation[i].value.indexOf("http://") > -1) || (relation[i].value.indexOf("www.") > -1) && (relationType[i].selectedIndex == "0") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:relation>" + relation[i].value + "</dc:relation>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DC.Relation\" href=\"" + relation[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DC.Relation\" href=\"" + relation[i].value + "\" />" + '\n';
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "0") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:relation>" + relation[i].value + "</dc:relation>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DC.Relation\" content=\"" + relation[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DC.Relation\" content=\"" + relation[i].value + "\" />" + '\n';
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "0") && (relationEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dc:relation xsi:type=\"dcterms:URI\">" + relation[i].value + "</dc:relation>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DC.Relation\" href=\"" + relation[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DC.Relation\" href=\"" + relation[i].value + "\" />" + '\n';
	}
	else if((relation[i].value.indexOf("http://") > -1) || (relation[i].value.indexOf("www.") > -1) && (relationType[i].selectedIndex == "1") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:isVersionOf>" + relation[i].value + "</dcterms:isVersionOf>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.IsVersionOf\" href=\"" + relation[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.IsVersionOf\" href=\"" + relation[i].value + "\" />" + '\n';
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "1") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:isVersionOf>" + relation[i].value + "</dcterms:isVersionOf>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.IsVersionOf\" content=\"" + relation[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.IsVersionOf\" content=\"" + relation[i].value + "\" />" + '\n';
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "1") && (relationEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:isVersionOf xsi:type=\"dcterms:URI\">" + relation[i].value + "</dcterms:isVersionOf>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.IsVersionOf\" href=\"" + relation[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.IsVersionOf\" href=\"" + relation[i].value + "\" />" + '\n';
	}
	else if((relation[i].value.indexOf("http://") > -1) || (relation[i].value.indexOf("www.") > -1) && (relationType[i].selectedIndex == "2") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:hasVersion>" + relation[i].value + "</dcterms:hasVersion>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.HasVersion\" href=\"" + relation[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.HasVersion\" href=\"" + relation[i].value + "\" />" + '\n';
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "2") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:hasVersion>" + relation[i].value + "</dcterms:hasVersion>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.HasVersion\" content=\"" + relation[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.HasVersion\" content=\"" + relation[i].value + "\" />" + '\n';
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "2") && (relationEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:hasVersion xsi:type=\"dcterms:URI\">" + relation[i].value + "</dcterms:hasVersion>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.HasVersion\" href=\"" + relation[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.HasVersion\" href=\"" + relation[i].value + "\" />" + '\n';
	}
	else if((relation[i].value.indexOf("http://") > -1) || (relation[i].value.indexOf("www.") > -1) && (relationType[i].selectedIndex == "3") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:isReplacedBy>" + relation[i].value + "</dcterms:isReplacedBy>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.IsReplacedBy\" href=\"" + relation[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.IsReplacedBy\" href=\"" + relation[i].value + "\" />" + '\n';
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "3") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:isReplacedBy>" + relation[i].value + "</dcterms:isReplacedBy>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.IsReplacedBy\" content=\"" + relation[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.IsReplacedBy\" content=\"" + relation[i].value + "\" />" + '\n';
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "3") && (relationEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:isReplacedBy xsi:type=\"dcterms:URI\">" + relation[i].value + "</dcterms:isReplacedBy>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.IsReplacedBy\" href=\"" + relation[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.IsReplacedBy\" href=\"" + relation[i].value + "\" />" + '\n';
	}
	else if((relation[i].value.indexOf("http://") > -1) || (relation[i].value.indexOf("www.") > -1) && (relationType[i].selectedIndex == "4") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:replaces>" + relation[i].value + "</dcterms:replaces>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.Replaces\" href=\"" + relation[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.Replaces\" href=\"" + relation[i].value + "\" />" + '\n';
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "4") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:replaces>" + relation[i].value + "</dcterms:replaces>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.Replaces\" content=\"" + relation[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.Replaces\" content=\"" + relation[i].value + "\" />" + '\n';
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "4") && (relationEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:replaces xsi:type=\"dcterms:URI\">" + relation[i].value + "</dcterms:replaces>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.Replaces\" href=\"" + relation[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.Replaces\" href=\"" + relation[i].value + "\" />" + '\n';
	}
	else if((relation[i].value.indexOf("http://") > -1) || (relation[i].value.indexOf("www.") > -1) && (relationType[i].selectedIndex == "5") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:isRequiredBy>" + relation[i].value + "</dcterms:isRequiredBy>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.IsRequiredBy\" href=\"" + relation[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.IsRequiredBy\" href=\"" + relation[i].value + "\" />" + '\n';
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "5") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:isRequiredBy>" + relation[i].value + "</dcterms:isRequiredBy>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.IsRequiredBy\" content=\"" + relation[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.IsRequiredBy\" content=\"" + relation[i].value + "\" />" + '\n';
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "5") && (relationEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:isRequiredBy xsi:type=\"dcterms:URI\">" + relation[i].value + "</dcterms:isRequiredBy>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.IsRequiredBy\" href=\"" + relation[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.IsRequiredBy\" href=\"" + relation[i].value + "\" />" + '\n';
	}
	else if((relation[i].value.indexOf("http://") > -1) || (relation[i].value.indexOf("www.") > -1) && (relationType[i].selectedIndex == "6") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:requires>" + relation[i].value + "</dcterms:requires>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.Requires\" href=\"" + relation[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.Requires\" href=\"" + relation[i].value + "\" />" + '\n';
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "6") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:requires>" + relation[i].value + "</dcterms:requires>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.Requires\" content=\"" + relation[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.Requires\" content=\"" + relation[i].value + "\" />" + '\n';
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "6") && (relationEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:requires xsi:type=\"dcterms:URI\">" + relation[i].value + "</dcterms:requires>>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.Requires\" href=\"" + relation[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.Requires\" href=\"" + relation[i].value + "\" />" + '\n';
	}
	else if((relation[i].value.indexOf("http://") > -1) || (relation[i].value.indexOf("www.") > -1) && (relationType[i].selectedIndex == "7") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:isPartOf>" + relation[i].value + "</dcterms:isPartOf>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.IsPartOf\" href=\"" + relation[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.IsPartOf\" href=\"" + relation[i].value + "\" />" + '\n';
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "7") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:isPartOf>" + relation[i].value + "</dcterms:isPartOf>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.IsPartOf\" content=\"" + relation[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.IsPartOf\" content=\"" + relation[i].value + "\" />" + '\n';
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "7") && (relationEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:isPartOf xsi:type=\"dcterms:URI\">" + relation[i].value + "</dcterms:isPartOf>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.IsPartOf\" href=\"" + relation[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.IsPartOf\" href=\"" + relation[i].value + "\" />" + '\n';
	}
	else if((relation[i].value.indexOf("http://") > -1) || (relation[i].value.indexOf("www.") > -1) && (relationType[i].selectedIndex == "8") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:hasPart>" + relation[i].value + "</dcterms:hasPart>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.HasPart\" href=\"" + relation[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.HasPart\" href=\"" + relation[i].value + "\" />" + '\n';
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "8") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:hasPart>" + relation[i].value + "</dcterms:hasPart>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.HasPart\" content=\"" + relation[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.HasPart\" content=\"" + relation[i].value + "\" />" + '\n';
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "8") && (relationEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:hasPart xsi:type=\"dcterms:URI\">" + relation[i].value + "</dcterms:hasPart>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.HasPart\" href=\"" + relation[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.HasPart\" href=\"" + relation[i].value + "\" />" + '\n';
	}
	else if((relation[i].value.indexOf("http://") > -1) || (relation[i].value.indexOf("www.") > -1) && (relationType[i].selectedIndex == "9") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:isReferencedBy>" + relation[i].value + "</dcterms:isReferencedBy>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.IsReferencedBy\" href=\"" + relation[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.IsReferencedBy\" href=\"" + relation[i].value + "\" />" + '\n';
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "9") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:isReferencedBy>" + relation[i].value + "</dcterms:isReferencedBy>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.IsReferencedBy\" content=\"" + relation[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.IsReferencedBy\" content=\"" + relation[i].value + "\" />" + '\n';
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "9") && (relationEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:isReferencedBy xsi:type=\"dcterms:URI\">" + relation[i].value + "</dcterms:isReferencedBy>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.IsReferencedBy\" href=\"" + relation[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.IsReferencedBy\" href=\"" + relation[i].value + "\" />" + '\n';
	}
	else if((relation[i].value.indexOf("http://") > -1) || (relation[i].value.indexOf("www.") > -1) && (relationType[i].selectedIndex == "10") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:references>" + relation[i].value + "</dcterms:references>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.References\" href=\"" + relation[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.References\" href=\"" + relation[i].value + "\" />" + '\n';
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "10") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:references>" + relation[i].value + "</dcterms:references>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.References\" content=\"" + relation[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.References\" content=\"" + relation[i].value + "\" />" + '\n';
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "10") && (relationEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:references xsi:type=\"dcterms:URI\">" + relation[i].value + "</dc:references>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.References\" href=\"" + relation[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.References\" href=\"" + relation[i].value + "\" />" + '\n';
	}
	else if((relation[i].value.indexOf("http://") > -1) || (relation[i].value.indexOf("www.") > -1) && (relationType[i].selectedIndex == "11") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:isFormatOf>" + relation[i].value + "</dcterms:isFormatOf>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.IsFormatOf\" href=\"" + relation[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.IsFormatOf\" href=\"" + relation[i].value + "\" />" + '\n';
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "11") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:isFormatOf>" + relation[i].value + "</dcterms:isFormatOf>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.IsFormatOf\" content=\"" + relation[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.IsFormatOf\" content=\"" + relation[i].value + "\" />" + '\n';
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "11") && (relationEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:isFormatOf xsi:type=\"dcterms:URI\">" + relation[i].value + "</dcterms:isFormatOf>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.IsFormatOf\" href=\"" + relation[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.IsFormatOf\" href=\"" + relation[i].value + "\" />" + '\n';
	}
	else if((relation[i].value.indexOf("http://") > -1) || (relation[i].value.indexOf("www.") > -1) && (relationType[i].selectedIndex == "12") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:hasFormat>" + relation[i].value + "</dcterms:hasFormat>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.HasFormat\" href=\"" + relation[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.HasFormat\" href=\"" + relation[i].value + "\" />" + '\n';
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "12") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:hasFormat>" + relation[i].value + "</dcterms:hasFormat>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.HasFormat\" content=\"" + relation[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.HasFormat\" content=\"" + relation[i].value + "\" />" + '\n';
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "12") && (relationEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:hasFormat xsi:type=\"dcterms:URI\">" + relation[i].value + "</dcterms:hasFormat>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.HasFormat\" href=\"" + relation[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.HasFormat\" href=\"" + relation[i].value + "\" />" + '\n';
	}
	else if((relation[i].value.indexOf("http://") > -1) || (relation[i].value.indexOf("www.") > -1) && (relationType[i].selectedIndex == "13") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:conformsTo>" + relation[i].value + "</dcterms:conformsTo>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.ConformsTo\" href=\"" + relation[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.ConformsTo\" href=\"" + relation[i].value + "\" />" + '\n';
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "13") && (relationEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:conformsTo>" + relation[i].value + "</dcterms:conformsTo>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.ConformsTo\" content=\"" + relation[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.ConformsTo\" content=\"" + relation[i].value + "\" />" + '\n';
	}
	else if((relation[i].value != "") && (relationType[i].selectedIndex == "13") && (relationEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:conformsTo xsi:type=\"dcterms:URI\">" + relation[i].value + "</dcterms:conformsTo>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.ConformsTo\" href=\"" + relation[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.ConformsTo\" href=\"" + relation[i].value + "\" />" + '\n';
	}
}

	for(i=0; i<=coverage.length-1; i++) {
	if((coverage[i].value.indexOf("http://") > -1) || (coverage[i].value.indexOf("www.") > -1) && (coverageType[i].selectedIndex == "0") && (coverageEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:coverage>" + coverage[i].value + "</dc:coverage>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DC.Coverage\" href=\"" + coverage[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DC.Coverage\" href=\"" + coverage[i].value + "\" />" + '\n';
	}
	else if((coverage[i].value != "") && (coverageType[i].selectedIndex == "0") && (coverageEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:coverage>" + coverage[i].value + "</dc:coverage>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DC.Coverage\" content=\"" + coverage[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DC.Coverage\" content=\"" + coverage[i].value + "\" />" + '\n';
	}
	else if((coverage[i].value != "") && (coverageType[i].selectedIndex == "0") && (coverageEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dc:coverage xsi:type=\"dcterms:Box\">" + coverage[i].value + "</dc:coverage>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DC.Coverage\" scheme=\"Box\" content=\"" + coverage[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DC.Coverage\" scheme=\"Box\" content=\"" + coverage[i].value + "\" />" + '\n';
	}
	else if((coverage[i].value != "") && (coverageType[i].selectedIndex == "0") && (coverageEncoding[i].selectedIndex == "2")){	
	generatedXMLCode += "<dc:coverage xsi:type=\"dcterms:ISO3166\">" + coverage[i].value + "</dc:coverage>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DC.Coverage\" scheme=\"ISO3166\" content=\"" + coverage[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DC.Coverage\" scheme=\"ISO3166\" content=\"" + coverage[i].value + "\" />" + '\n';
	}
	else if((coverage[i].value != "") && (coverageType[i].selectedIndex == "0") && (coverageEncoding[i].selectedIndex == "3")){	
	generatedXMLCode += "<dc:coverage xsi:type=\"dcterms:Period\">" + coverage[i].value + "</dc:coverage>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DC.Coverage\" scheme=\"Period\" content=\"" + coverage[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DC.Coverage\" scheme=\"Period\" content=\"" + coverage[i].value + "\" />" + '\n';
	}
	else if((coverage[i].value != "") && (coverageType[i].selectedIndex == "0") && (coverageEncoding[i].selectedIndex == "4")){	
	generatedXMLCode += "<dc:coverage xsi:type=\"dcterms:Point\">" + coverage[i].value + "</dc:coverage>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DC.Coverage\" scheme=\"Point\" content=\"" + coverage[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DC.Coverage\" scheme=\"Point\" content=\"" + coverage[i].value + "\" />" + '\n';
	}
	else if((coverage[i].value != "") && (coverageType[i].selectedIndex == "0") && (coverageEncoding[i].selectedIndex == "5")){	
	generatedXMLCode += "<dc:coverage xsi:type=\"dcterms:TGN\">" + coverage[i].value + "</dc:coverage>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DC.Coverage\" scheme=\"DCTERMS.TGN\" content=\"" + coverage[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DC.Coverage\" scheme=\"DCTERMS.TGN\" content=\"" + coverage[i].value + "\" />" + '\n';
	}
	else if((coverage[i].value != "") && (coverageType[i].selectedIndex == "0") && (coverageEncoding[i].selectedIndex == "6")){	
	generatedXMLCode += "<dc:coverage xsi:type=\"dcterms:W3CTDF\">" + coverage[i].value + "</dc:coverage>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DC.Coverage\" scheme=\"DCTERMS.W3CTDF\" content=\"" + coverage[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DC.Coverage\" scheme=\"DCTERMS.W3CTDF\" content=\"" + coverage[i].value + "\" />" + '\n';
	}
	else if((coverage[i].value.indexOf("http://") > -1) || (coverage[i].value.indexOf("www.") > -1) && (coverageType[i].selectedIndex == "1") && (coverageEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:spatial>" + coverage[i].value + "</dcterms:spatial>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.Spatial\" href=\"" + coverage[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.Spatial\" href=\"" + coverage[i].value + "\" />" + '\n';
	}
	else if((coverage[i].value != "") && (coverageType[i].selectedIndex == "1") && (coverageEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:spatial>" + coverage[i].value + "</dcterms:spatial>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.Spatial\" content=\"" + coverage[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.Spatial\" content=\"" + coverage[i].value + "\" />" + '\n';
	}
	else if((coverage[i].value != "") && (coverageType[i].selectedIndex == "1") && (coverageEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:spatial xsi:type=\"dcterms:Box\">" + coverage[i].value + "</dcterms:spatial>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.Spatial\" scheme=\"DCTERMS.Box\" content=\"" + coverage[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.Spatial\" scheme=\"DCTERMS.Box\" content=\"" + coverage[i].value + "\" />" + '\n';
	}
	else if((coverage[i].value != "") && (coverageType[i].selectedIndex == "1") && (coverageEncoding[i].selectedIndex == "2")){	
	generatedXMLCode += "<dcterms:spatial xsi:type=\"dcterms:ISO3166\">" + coverage[i].value + "</dcterms:spatial>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.Spatial\" scheme=\"DCTERMS.ISO3166\" content=\"" + coverage[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.Spatial\" scheme=\"DCTERMS.ISO3166\" content=\"" + coverage[i].value + "\" />" + '\n';
	}
	else if((coverage[i].value != "") && (coverageType[i].selectedIndex == "1") && (coverageEncoding[i].selectedIndex == "4")){	
	generatedXMLCode += "<dcterms:spatial xsi:type=\"dcterms:Point\">" + coverage[i].value + "</dcterms:spatial>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.Spatial\" scheme=\"DCTERMS.Point\" content=\"" + coverage[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.Spatial\" scheme=\"DCTERMS.Point\" content=\"" + coverage[i].value + "\" />" + '\n';
	}
	else if((coverage[i].value != "") && (coverageType[i].selectedIndex == "1") && (coverageEncoding[i].selectedIndex == "5")){	
	generatedXMLCode += "<dcterms:spatial xsi:type=\"dcterms:TGN\">" + coverage[i].value + "</dcterms:spatial>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.Spatial\" scheme=\"DCTERMS.TGN\" content=\"" + coverage[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.Spatial\" scheme=\"DCTERMS.TGN\" content=\"" + coverage[i].value + "\" />" + '\n';
	}
	else if((coverage[i].value.indexOf("http://") > -1) || (coverage[i].value.indexOf("www.") > -1) && (coverageType[i].selectedIndex == "2") && (coverageEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:temporal>" + coverage[i].value + "</dcterms:temporal>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.Temporal\" href=\"" + coverage[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.Temporal\" href=\"" + coverage[i].value + "\" />" + '\n';
	}
	else if((coverage[i].value != "") && (coverageType[i].selectedIndex == "2") && (coverageEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:temporal>" + coverage[i].value + "</dcterms:temporal>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.Temporal\" content=\"" + coverage[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.Temporal\" content=\"" + coverage[i].value + "\" />" + '\n';
	}
	else if((coverage[i].value != "") && (coverageType[i].selectedIndex == "2") && (coverageEncoding[i].selectedIndex == "3")){	
	generatedXMLCode += "<dcterms:temporal xsi:type=\"dcterms:Period\">" + coverage[i].value + "</dcterms:temporal>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.Temporal\" scheme=\"DCTERMS.Period\" content=\"" + coverage[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.Temporal\" scheme=\"DCTERMS.Period\" content=\"" + coverage[i].value + "\" />" + '\n';
	}
	else if((coverage[i].value != "") && (coverageType[i].selectedIndex == "2") && (coverageEncoding[i].selectedIndex == "6")){	
	generatedXMLCode += "<dcterms:temporal xsi:type=\"dcterms:W3CTDF\">" + coverage[i].value + "</dcterms:temporal>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.Temporal\" scheme=\"DCTERMS.W3CTDF\" content=\"" + coverage[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.Temporal\" scheme=\"DCTERMS.W3CTDF\" content=\"" + coverage[i].value + "\">" + '\n';
	}
}

	for(i=0; i<=rights.length-1; i++) {
	if((rights[i].value.indexOf("http://") > -1) || (rights[i].value.indexOf("www.") > -1) && (rightsType[i].selectedIndex == "0") && (rightsEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:rights>" + rights[i].value + "</dc:rights>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DC.Rights\" href=\"" + rights[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DC.Rights\" href=\"" + rights[i].value + "\" />" + '\n';
	}
	else if((rights[i].value != "") && (rightsType[i].selectedIndex == "0") && (rightsEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dc:rights>" + rights[i].value + "</dc:rights>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DC.Rights\" content=\"" + rights[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DC.Rights\" content=\"" + rights[i].value + "\" />" + '\n';
	}
	else if((rights[i].value != "") && (rightsType[i].selectedIndex == "0") && (rightsEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dc:rights xsi:type=\"dcterms:URI\">" + rights[i].value + "</dc:rights>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DC.Rights\" href=\"" + rights[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DC.Rights\" href=\"" + rights[i].value + "\" />" + '\n';
	}
	else if((rights[i].value.indexOf("http://") > -1) || (rights[i].value.indexOf("www.") > -1) && (rightsType[i].selectedIndex == "1") && (rightsEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:license>" + rights[i].value + "</dcterms:license>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.License\" href=\"" + rights[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.License\" href=\"" + rights[i].value + "\" />" + '\n';
	}
	else if((rights[i].value != "") && (rightsType[i].selectedIndex == "1") && (rightsEncoding[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:license>" + rights[i].value + "</dcterms:license>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.License\" content=\"" + rights[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.License\" content=\"" + rights[i].value + "\" />" + '\n';
	}
	else if((rights[i].value != "") && (rightsType[i].selectedIndex == "1") && (rightsEncoding[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:license xsi:type=\"dcterms:URI\">" + rights[i].value + "</dcterms:license>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.License\" href=\"" + rights[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.License\" href=\"" + rights[i].value + "\" />" + '\n';
	}
}

	for(i=0; i<=audience.length-1; i++) {
	if((audience[i].value.indexOf("http://") > -1) || (audience[i].value.indexOf("www.") > -1) && (audienceType[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:audience>" + audience[i].value + "</dcterms:audience>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DC.Audience\" href=\"" + audience[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DC.Audience\" href=\"" + audience[i].value + "\" />" + '\n';
	}
	else if((audience[i].value != "") && (audienceType[i].selectedIndex == "0")){	
	generatedXMLCode += "<dcterms:audience>" + audience[i].value + "</dcterms:audience>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DC.Audience\" content=\"" + audience[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DC.Audience\" content=\"" + audience[i].value + "\" />" + '\n';
	}
	else if((audience[i].value.indexOf("http://") > -1) || (audience[i].value.indexOf("www.") > -1) && (audienceType[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:educationlevel>" + audience[i].value + "</dcterms:educationlevel>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.EducationLevel\" href=\"" + audience[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.EducationLevel\" href=\"" + audience[i].value + "\" />" + '\n';
	}
	else if((audience[i].value != "") && (audienceType[i].selectedIndex == "1")){	
	generatedXMLCode += "<dcterms:educationlevel>" + audience[i].value + "</dcterms:educationlevel>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.EducationLevel\" content=\"" + audience[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.EducationLevel\" content=\"" + audience[i].value + "\" />" + '\n';
	}
	else if((audience[i].value.indexOf("http://") > -1) || (audience[i].value.indexOf("www.") > -1) && (audienceType[i].selectedIndex == "2")){	
	generatedXMLCode += "<dcterms:mediator>" + audience[i].value + "</dcterms:mediator>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.Mediator\" href=\"" + audience[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.Mediator\" href=\"" + audience[i].value + "\" />" + '\n';
	}
	else if((audience[i].value != "") && (audienceType[i].selectedIndex == "2")){	
	generatedXMLCode += "<dcterms:mediator>" + audience[i].value + "</dcterms:mediator>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.Mediator\" content=\"" + audience[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.Mediator\" content=\"" + audience[i].value + "\" />" + '\n';
	}
}

	for(i=0; i<=provenance.length-1; i++) {
	if((provenance[i].value.indexOf("http://") > -1) || (provenance[i].value.indexOf("www.") > -1)){	
	generatedXMLCode += "<dcterms:provenance>" + provenance[i].value + "</dcterms:provenance>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.Provenance\" href=\"" + provenance[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.Provenance\" href=\"" + provenance[i].value + "\" />" + '\n';
	}
	else if(provenance[i].value != ""){	
	generatedXMLCode += "<dcterms:provenance>" + provenance[i].value + "</dcterms:provenance>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.Provenance\" content=\"" + provenance[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.Provenance\" content=\"" + provenance[i].value + "\" />" + '\n';
	}
}

	for(i=0; i<=rightsholder.length-1; i++) {
	if((rightsholder[i].value.indexOf("http://") > -1) || (rightsholder[i].value.indexOf("www.") > -1)){	
	generatedXMLCode += "<dcterms:rightsholder>" + rightsholder[i].value + "</dcterms:rightsholder>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.RightsHolder\" href=\"" + rightsholder[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.RightsHolder\" href=\"" + rightsholder[i].value + "\" />" + '\n';
	}
	else if(rightsholder[i].value != ""){	
	generatedXMLCode += "<dcterms:rightsholder>" + rightsholder[i].value + "</dcterms:rightsholder>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.RightsHolder\" content=\"" + rightsholder[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.RightsHolder\" content=\"" + rightsholder[i].value + "\" />" + '\n';
	}
}

	for(i=0; i<=instructionalmethod.length-1; i++) {
	if((instructionalmethod[i].value.indexOf("http://") > -1) || (instructionalmethod[i].value.indexOf("www.") > -1)){	
	generatedXMLCode += "<dcterms:instructionalmethod>" + instructionalmethod[i].value + "</dcterms:instructionalmethod>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.InstructionalMethod\" href=\"" + instructionalmethod[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.InstructionalMethod\" href=\"" + instructionalmethod[i].value + "\" />" + '\n';
	}
	else if(instructionalmethod[i].value != ""){	
	generatedXMLCode += "<dcterms:instructionalmethod>" + instructionalmethod[i].value + "</dcterms:instructionalmethod>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.InstructionalMethod\" content=\"" + instructionalmethod[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.InstructionalMethod\" content=\"" + instructionalmethod[i].value + "\" />" + '\n';
	}
}

	for(i=0; i<=accrualmethod.length-1; i++) {
	if((accrualmethod[i].value.indexOf("http://") > -1) || (accrualmethod[i].value.indexOf("www.") > -1)){	
	generatedXMLCode += "<dcterms:accrualmethod>" + accrualmethod[i].value + "</dcterms:accrualmethod>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.AccrualMethod\" href=\"" + accrualmethod[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.AccrualMethod\" href=\"" + accrualmethod[i].value + "\" />" + '\n';
	}
	else if(accrualmethod[i].value != ""){	
	generatedXMLCode += "<dcterms:accrualmethod>" + accrualmethod[i].value + "</dcterms:accrualmethod>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.AccrualMethod\" content=\"" + accrualmethod[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.AccrualMethod\" content=\"" + accrualmethod[i].value + "\" />" + '\n';
	}
}

	for(i=0; i<=accrualperiodicity.length-1; i++) {
	if((accrualperiodicity[i].value.indexOf("http://") > -1) || (accrualperiodicity[i].value.indexOf("www.") > -1)){	
	generatedXMLCode += "<dcterms:accrualperiodicity>" + accrualperiodicity[i].value + "</dcterms:accrualperiodicity>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.AccrualPeriodicity\" href=\"" + accrualperiodicity[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.AccrualPeriodicity\" href=\"" + accrualperiodicity[i].value + "\" />" + '\n';
	}
	else if(accrualperiodicity[i].value != ""){	
	generatedXMLCode += "<dcterms:accrualperiodicity>" + accrualperiodicity[i].value + "</dcterms:accrualperiodicity>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.AccrualPeriodicity\" content=\"" + accrualperiodicity[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.AccrualPeriodicity\" content=\"" + accrualperiodicity[i].value + "\" />" + '\n';
	}
}

	for(i=0; i<=accrualpolicy.length-1; i++) {
	if((accrualpolicy[i].value.indexOf("http://") > -1) || (accrualpolicy[i].value.indexOf("www.") > -1)){	
	generatedXMLCode += "<dcterms:accrualpolicy>" + accrualpolicy[i].value + "</dcterms:accrualpolicy>" + '\n'; 
	generatedHTMLCode +="<link rel=\"DCTERMS.AccrualPolicy\" href=\"" + accrualpolicy[i].value + "\">" + '\n';
	generatedXHTMLCode +="<link rel=\"DCTERMS.AccrualPolicy\" href=\"" + accrualpolicy[i].value + "\" />" + '\n';
	}
	else if(accrualpolicy[i].value != ""){	
	generatedXMLCode += "<dcterms:accrualpolicy>" + accrualpolicy[i].value + "</dcterms:accrualpolicy>" + '\n'; 
	generatedHTMLCode +="<meta name=\"DCTERMS.AccrualPolicy\" content=\"" + accrualpolicy[i].value + "\">" + '\n';
	generatedXHTMLCode +="<meta name=\"DCTERMS.AccrualPolicy\" content=\"" + accrualpolicy[i].value + "\" />" + '\n';
	}
}

if($("#addroot").attr('checked')){
	var rootname = $("#rootname").val();
	generatedXMLCode += '\n' + "<\/" + rootname + ">";
}

if($("#addhead").attr('checked')){
	generatedHTMLCode += "</head>";
}

if($("#adddeclarationhtml").attr('checked')){
	generatedHTMLCode += '\n' + "<body>" + '\n' + "</body>" + '\n' + "</html>"
}

if($("#addheadx").attr('checked')){
	generatedXHTMLCode += "</head>";
}

if($("#adddeclarationxhtml").attr('checked')){
	generatedXHTMLCode += '\n' + "<body>" + '\n' + "</body>" + '\n' + "</html>"
}

$('#xmlresults').val(generatedXMLCode);
$('#htmlresults').val(generatedHTMLCode);
$('#xhtmlresults').val(generatedXHTMLCode);

$('#generatebutton').blur();

}

function showHideOutput(){
	var value = $('#outputType').val();
	
	if(value == "xml"){
	$('#xmlresults').show();
	$('#xmloptions').show();
	$('#htmlresults').hide();
	$('#htmloptions').hide();
	$('#xhtmlresults').hide();
	$('#xhtmloptions').hide();
	}
	else if(value == "html"){
	$('#xmlresults').hide();
	$('#xmloptions').hide();
	$('#htmlresults').show();
	$('#htmloptions').show();
	$('#xhtmlresults').hide();
	$('#xhtmloptions').hide();
	}
	else if(value == "xhtml"){
	$('#xmlresults').hide();
	$('#xmloptions').hide();
	$('#htmlresults').hide();
	$('#htmloptions').hide();
	$('#xhtmlresults').show();
	$('#xhtmloptions').show();
	}
}

function showHideCoverage(rowId,rowNum){
var blank = document.getElementById('blank' + rowNum);
var box = document.getElementById('box' + rowNum); 
var iso3166 = document.getElementById('iso3166' + rowNum);
var period = document.getElementById('period' + rowNum);
var point = document.getElementById('point' + rowNum);
var tgn = document.getElementById('tgn' + rowNum);
var w3ctdf = document.getElementById('w3ctdf' + rowNum);

var tbl = document.getElementById('coverageTable');
var select = document.getElementById('coverageEncoding' + rowNum);
var selected = document.getElementById(rowId).selectedIndex;

if(selected === "0"){
    while (select.hasChildNodes()){
    select.removeChild(select.firstChild);
    }  
  select.options[0] = new Option('', 'nocoverage');
  select.options[0].id = 'blank' + rowNum;
  select.options[1] = new Option('Box', 'box');
  select.options[1].id = 'box' + rowNum;
  select.options[2] = new Option('ISO3166', 'iso3166');
  select.options[2].id = 'iso3166' + rowNum;
  select.options[3] = new Option('Period', 'period');
  select.options[3].id = 'period' + rowNum;
  select.options[4] = new Option('Point', 'point');
  select.options[4].id = 'point' + rowNum;
  select.options[5] = new Option('TGN', 'tgn');
  select.options[5].id = 'tgn' + rowNum;
  select.options[6] = new Option('W3CTDF', 'w3ctdf');
  select.options[6].id = 'w3ctdf' + rowNum;
}
if(selected === "1"){
    while (select.hasChildNodes()){
    select.removeChild(select.firstChild);
    }  
  select.options[0] = new Option('', 'nocoverage');
  select.options[0].id = 'blank' + rowNum;
  select.options[1] = new Option('Box', 'box');
  select.options[1].id = 'box' + rowNum;
  select.options[2] = new Option('ISO3166', 'iso3166');
  select.options[2].id = 'iso3166' + rowNum;
  select.options[3] = new Option('Point', 'point');
  select.options[3].id = 'point' + rowNum;
  select.options[4] = new Option('TGN', 'tgn');
  select.options[4].id = 'tgn' + rowNum;
}
if(selected === "2"){
    while (select.hasChildNodes()){
    select.removeChild(select.firstChild);
    }  
  select.options[0] = new Option('', 'nocoverage');
  select.options[0].id = 'blank' + rowNum;
  select.options[1] = new Option('Period', 'period');
  select.options[1].id = 'period' + rowNum;
  select.options[2] = new Option('W3CTDF', 'w3ctdf');
  select.options[2].id = 'w3ctdf' + rowNum;
}
}
