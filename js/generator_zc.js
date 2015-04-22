function generateCode(){
//Each block of generated code is a string which starts out empty.

	var generatedXMLCode = String("");
		
	var results = $("#results");
	
//Each element is an array, we use JQuery to find every input row starting with the right name (titleRow, creatorRow, etc.)

	var title = [];
	title = $('input[name="titleRow"]');
	
	var creator = [];
	creator = $('input[name="creatorRow"]');
	
	var subject = [];
	subject = $('input[name="subjectRow"]');
  
  var genre = [];
	genre = $('input[name="genreRow"]');
	
	var description = [];
	description = $('textarea[name="descriptionRow"]');
  
  var abstract = [];
	abstract = $('textarea[name="abstractRow"]');
  
  var contents = [];
	contents = $('textarea[name="contentsRow"]');

	var publisher = [];
	publisher = $('input[name="publisherRow"]');
	
	var date = [];
	date = $('input[name="dateRow"]');
	
	var extent = [];
	extent = $('input[name="extentRow"]');	
  
  var dimensions = [];
	dimensions = $('input[name="dimensionsRow"]');	
  
  var medium = [];
	medium = $('input[name="mediumRow"]');

	var identifier = [];
	identifier = $('input[name="identifierRow"]');

	var language = [];
	language = $('input[name="languageRow"]');
	
	  var collection = [];
	collection = $('input[name="collectionRow"]');
  
    var volume = [];
	volume = $('input[name="volumeRow"]');
  
    var issue = [];
	issue = $('input[name="issueRow"]');
	
	var coverage = [];
	coverage = $('input[name="coverageRow"]');
	
	var rights = [];
	rights = $('input[name="rightsRow"]');

	generatedXMLCode +="<?xml version=\"1.0\" encoding=\"UTF-8\"?>"  + '\n' + '\n';
	
//One of these per element type -- run each element from the array we created through, get the correct text
//and append it to the string for each output language.  Does a special test for things beginning with http
//or www. to pick a <link> instead of a <meta> for the HTML and XHTML output.
	for(i=0; i<=title.length-1; i++) {
	if(title[i].value !== ""){
	generatedXMLCode += "<zc:title>" + title[i].value + "</zc:title>" + '\n';
	}
}

	for(i=0; i<=creator.length-1; i++) {
	if(creator[i].value !== ""){	
	generatedXMLCode += "<zc:creator>" + creator[i].value + "</zc:creator>" + '\n'; 
	}
}

	for(i=0; i<=subject.length-1; i++) {
	if(subject[i].value !== ""){	
	generatedXMLCode += "<zc:subject>" + subject[i].value + "</zc:subject>" + '\n'; 
	}
}

	for(i=0; i<=genre.length-1; i++) {
	if(genre[i].value !== ""){	
	generatedXMLCode += "<zc:genre>" + genre[i].value + "</zc:genre>" + '\n'; 
	}
}

	for(i=0; i<=description.length-1; i++) {
	if(description[i].value !== ""){	
	generatedXMLCode += "<zc:description>" + description[i].value + "</zc:description>" + '\n'; 
	}
}

	for(i=0; i<=abstract.length-1; i++) {
	if(abstract[i].value !== ""){	
	generatedXMLCode += "<zc:abstract>" + abstract[i].value + "</zc:abstract>" + '\n'; 
	}
}

	for(i=0; i<=contents.length-1; i++) {
	if(contents[i].value !== ""){	
	generatedXMLCode += "<zc:tableofcontents>" + contents[i].value + "</zc:tableofcontents>" + '\n'; 
	}
}

	for(i=0; i<=publisher.length-1; i++) {
	if(publisher[i].value !== ""){	
	generatedXMLCode += "<zc:publisher>" + publisher[i].value + "</zc:publisher>" + '\n'; 
	}
}

	for(i=0; i<=date.length-1; i++) {
	if(date[i].value !== ""){	
	generatedXMLCode += "<zc:datecreated>" + date[i].value + "</zc:datecreated>" + '\n'; 
	}
}

	for(i=0; i<=extent.length-1; i++) {
	if(extent[i].value !== ""){	
	generatedXMLCode += "<zc:extent>" + extent[i].value + "</zc:extent>" + '\n'; 
	}
}

	for(i=0; i<=dimensions.length-1; i++) {
	if(dimensions[i].value !== ""){	
	generatedXMLCode += "<zc:dimensions>" + dimensions[i].value + "</zc:dimensions>" + '\n'; 
	}
}

	for(i=0; i<=medium.length-1; i++) {
	if(medium[i].value !== ""){	
	generatedXMLCode += "<zc:medium>" + medium[i].value + "</zc:medium>" + '\n'; 
	}
}

	for(i=0; i<=identifier.length-1; i++) {
	if(identifier[i].value !== ""){	
	generatedXMLCode += "<zc:identifier>" + identifier[i].value + "</zc:identifier>" + '\n'; 
	}
}

	for(i=0; i<=language.length-1; i++) {
	if(language[i].value !== ""){	
	generatedXMLCode += "<zc:language>" + language[i].value + "</zc:language>" + '\n'; 
	}
}

	for(i=0; i<=collection.length-1; i++) {
	if(collection[i].value !== ""){	
	generatedXMLCode += "<zc:collection>" + collection[i].value + "</zc:collection>" + '\n'; 
	}
}

	for(i=0; i<=volume.length-1; i++) {
	if(volume[i].value !== ""){	
	generatedXMLCode += "<zc:volume>" + volume[i].value + "</zc:volume>" + '\n'; 
	}
}

	for(i=0; i<=issue.length-1; i++) {
	if(issue[i].value !== ""){	
	generatedXMLCode += "<zc:issue>" + issue[i].value + "</zc:issue>" + '\n'; 
	}
}

	for(i=0; i<=coverage.length-1; i++) {
	if(coverage[i].value !== ""){	
	generatedXMLCode += "<zc:placeofpublication>" + coverage[i].value + "</zc:placeofpublication>" + '\n'; 
	}
}

	for(i=0; i<=rights.length-1; i++) {
	if(rights[i].value !== ""){	
	generatedXMLCode += "<zc:rights>" + rights[i].value + "</zc:rights>" + '\n'; 
	}
}

$('#xmlresults').val(generatedXMLCode);

$('#generatebutton').blur();

}