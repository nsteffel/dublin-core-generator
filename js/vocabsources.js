var dcmiTypes = [
"Collection",
"Dataset",
"Event",
"Image",
"InteractiveResource",
"MovingImage",
"PhysicalObject",
"Service",
"Software",
"Sound",
"StillImage",
"Text"
];

$(function() {
		$( "#DCMITypeFinder" ).autocomplete({
			source: dcmiTypes
		});
		$( "#findDCMIType" ).dialog({
			autoOpen: false,
			width: 400
		});

		$( "#findISO3166" ).dialog({
			autoOpen: false,
			width: 400
		});

		$( "#openDCMIType" ).click(function() {
			$( "#findDCMIType" ).dialog( "open" );
			return false;
		});
		$( "#IMTTypeFinder" ).autocomplete({
                source: "/php/imtlookup.php",
                minLength: 2,
                select: function(event, ui) {
                    $('#IMTTypeFinder').val(ui.item.id);
                }
			});

		$( "#ISO3166Finder" ).autocomplete({
                source: "/php/iso3166lookup.php",
                minLength: 2,
                select: function(event, ui) {
                    $('#ISO3166Finder').val(ui.item.id);
                }
			});

		$( "#openISO3166" ).click(function() {
			$( "#findISO3166" ).dialog( "open" );
			return false;
		});

		$( "#findIMTType" ).dialog({
			autoOpen: false,
			width: 400
		});
		$( "#openIMTType" ).click(function() {
			$( "#findIMTType" ).dialog( "open" );
			return false;
		});
		$( "#createDCMIPeriod" ).dialog({
			autoOpen: false,
			width: 400
		});
		$( "#openDCMIPeriod" ).click(function() {
			$( "#createDCMIPeriod" ).dialog( "open" );
			return false;
		});
		
		$( "#openDCMIPeriod2" ).click(function() {
			$( "#createDCMIPeriod" ).dialog( "open" );
			return false;
		});
		
		$( "#createDCMIBox" ).dialog({
			autoOpen: false,
			width: 400
		});
		
		$( "#createDCMIPoint" ).dialog({
			autoOpen: false,
			width: 400
		});
		
		$( "#openDCMIPoint" ).click(function() {
			$( "#createDCMIPoint" ).dialog( "open" );
			return false;
		});
		
		$( "#createW3CDTF").dialog({
			autoOpen: false,
			width: 400
		});
		
		$( "#openW3CTDF" ).click(function() {
			$( "#createW3CDTF" ).dialog( "open" );
			return false;
		});
		
		$( "#openW3CTDF2" ).click(function() {
			$( "#createW3CDTF" ).dialog( "open" );
			return false;
		});
		
		$( "#openDCMIBox" ).click(function() {
			$( "#createDCMIBox" ).dialog( "open" );
			return false;
		});
		
		$( "#findISO6392").dialog({
			autoOpen: false,
			width: 400
		});
		
		$( "#openISO6392" ).click(function() {
			$( "#findISO6392" ).dialog( "open" );
			return false;
		});
		
		$( "#ISO6392Finder" ).autocomplete({
                source: "/php/iso6392lookup.php",
                minLength: 2,
                select: function(event, ui) {
                    $('#ISO6392Finder').val(ui.item.id);
                }
			});
		
		$( "#findISO6393").dialog({
			autoOpen: false,
			width: 400
		});
		
		$( "#openISO6393" ).click(function() {
			$( "#findISO6393" ).dialog( "open" );
			return false;
		});
		$( "#ISO6393Finder" ).autocomplete({
                source: "/php/iso6393lookup.php",
                minLength: 2,
                select: function(event, ui) {
                    $('#ISO6393Finder').val(ui.item.id);
                }
			});
			$( "#findAGROVOC").dialog({
			autoOpen: false,
			width: 400
		});
			$( "#openAGROVOC" ).click(function() {
			$( "#findAGROVOC" ).dialog( "open" );
			return false;
		});
			$( "#findITIS").dialog({
			autoOpen: false,
			width: 400
		});
			$( "#openITIS" ).click(function() {
			$( "#findITIS" ).dialog( "open" );
			return false;
		});
			$( "#findLCSH").dialog({
			autoOpen: false,
			width: 400
		});
			$( "#openLCSH" ).click(function() {
			$( "#findLCSH" ).dialog( "open" );
			return false;
		});
			$( "#findMESH").dialog({
			autoOpen: false,
			width: 400
		});
			$( "#openMESH" ).click(function() {
			$( "#findMESH" ).dialog( "open" );
			return false;
		});
			$( "#findTGN").dialog({
			autoOpen: false,
			width: 400
		});
			$( "#openTGN" ).click(function() {
			$( "#findTGN" ).dialog( "open" );
			return false;
		});
			$( "#openTGN2" ).click(function() {
			$( "#findTGN" ).dialog( "open" );
			return false;
		});
		$( "input:button, input:submit").button();
	
	function log( message ) {
		$( "<div/>" ).text( message ).prependTo( "#log" );
		$( "#log" ).attr( "scrollTop", 0 );
}
	function __highlight(s, t) {
		var matcher = new RegExp("("+$.ui.autocomplete.escapeRegex(t)+")", "ig" );
		return s.replace(matcher, "<strong>$1</strong>");
}
	$( "#AGROVOCfinder" ).autocomplete({
		source: function(request, response) {
		$.ajax({
			url : 'http://hive.cci.drexel.edu:8080/ac?cv=agrovoc&',
			dataType: 'jsonp',
			data: { term: request.term },
			success: function(data) {
			response($.map(data, function(item) {
				return {label: __highlight(item.label, request.term),
				value: item.label,
				id: item.id};
			}));
		}
	});
	},
	select: function( event, ui ) {
		log( ui.item ?
		ui.item.value :
		"Nothing selected, input was " + this.value );
	},
		delay: 100,
		minLength: 2
	})
		.data( "autocomplete" )._renderItem = function( ul, item ) {
		return $( "<li></li>" )
		.data( "item.autocomplete", item )
		.append( $( "<a></a>" ).html(item.label) )
		.appendTo( ul );
	};

	function log( message ) {
		$( "<div/>" ).text( message ).prependTo( "#log" );
		$( "#log" ).attr( "scrollTop", 0 );
}
	function __highlight(s, t) {
		var matcher = new RegExp("("+$.ui.autocomplete.escapeRegex(t)+")", "ig" );
		return s.replace(matcher, "<strong>$1</strong>");
}
	$( "#ITISfinder" ).autocomplete({
		source: function(request, response) {
		$.ajax({
			url : 'http://hive.cci.drexel.edu:8080/ac?cv=itis&',
			dataType: 'jsonp',
			data: { term: request.term },
			success: function(data) {
			response($.map(data, function(item) {
				return {label: __highlight(item.label, request.term),
				value: item.label,
				id: item.id};
			}));
		}
	});
	},
	select: function( event, ui ) {
		log( ui.item ?
		ui.item.value :
		"Nothing selected, input was " + this.value );
	},
		delay: 100,
		minLength: 2
	})
		.data( "autocomplete" )._renderItem = function( ul, item ) {
		return $( "<li></li>" )
		.data( "item.autocomplete", item )
		.append( $( "<a></a>" ).html(item.label) )
		.appendTo( ul );
	};

	function log( message ) {
		$( "<div/>" ).text( message ).prependTo( "#log" );
		$( "#log" ).attr( "scrollTop", 0 );
}
	function __highlight(s, t) {
		var matcher = new RegExp("("+$.ui.autocomplete.escapeRegex(t)+")", "ig" );
		return s.replace(matcher, "<strong>$1</strong>");
}
	$( "#LCSHfinder" ).autocomplete({
		source: function(request, response) {
		$.ajax({
			url : 'http://hive.cci.drexel.edu:8080/ac?cv=lcsh&',
			dataType: 'jsonp',
			data: { term: request.term },
			success: function(data) {
			response($.map(data, function(item) {
				return {label: __highlight(item.label, request.term),
				value: item.label,
				id: item.id};
			}));
		}
	});
	},
	select: function( event, ui ) {
		log( ui.item ?
		ui.item.value :
		"Nothing selected, input was " + this.value );
	},
		delay: 100,
		minLength: 2
	})
		.data( "autocomplete" )._renderItem = function( ul, item ) {
		return $( "<li></li>" )
		.data( "item.autocomplete", item )
		.append( $( "<a></a>" ).html(item.label) )
		.appendTo( ul );
	};

	function log( message ) {
		$( "<div/>" ).text( message ).prependTo( "#log" );
		$( "#log" ).attr( "scrollTop", 0 );
}
	function __highlight(s, t) {
		var matcher = new RegExp("("+$.ui.autocomplete.escapeRegex(t)+")", "ig" );
		return s.replace(matcher, "<strong>$1</strong>");
}
	$( "#MESHfinder" ).autocomplete({
		source: function(request, response) {
		$.ajax({
			url : 'http://hive.cci.drexel.edu:8080/ac?cv=mesh&',
			dataType: 'jsonp',
			data: { term: request.term },
			success: function(data) {
			response($.map(data, function(item) {
				return {label: __highlight(item.label, request.term),
				value: item.label,
				id: item.id};
			}));
		}
	});
	},
	select: function( event, ui ) {
		log( ui.item ?
		ui.item.value :
		"Nothing selected, input was " + this.value );
	},
		delay: 100,
		minLength: 2
	})
		.data( "autocomplete" )._renderItem = function( ul, item ) {
		return $( "<li></li>" )
		.data( "item.autocomplete", item )
		.append( $( "<a></a>" ).html(item.label) )
		.appendTo( ul );
	};

	function log( message ) {
		$( "<div/>" ).text( message ).prependTo( "#log" );
		$( "#log" ).attr( "scrollTop", 0 );
}
	function __highlight(s, t) {
		var matcher = new RegExp("("+$.ui.autocomplete.escapeRegex(t)+")", "ig" );
		return s.replace(matcher, "<strong>$1</strong>");
}
	$( "#TGNfinder" ).autocomplete({
		source: function(request, response) {
		$.ajax({
			url : 'http://hive.cci.drexel.edu:8080/ac?cv=tgn&',
			dataType: 'jsonp',
			data: { term: request.term },
			success: function(data) {
			response($.map(data, function(item) {
				return {label: __highlight(item.label, request.term),
				value: item.label,
				id: item.id};
			}));
		}
	});
	},
	select: function( event, ui ) {
		log( ui.item ?
		ui.item.value :
		"Nothing selected, input was " + this.value );
	},
		delay: 100,
		minLength: 2
	})
		.data( "autocomplete" )._renderItem = function( ul, item ) {
		return $( "<li></li>" )
		.data( "item.autocomplete", item )
		.append( $( "<a></a>" ).html(item.label) )
		.appendTo( ul );
	};
});