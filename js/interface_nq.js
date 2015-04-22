function addRowToTable(type){	
if(type !== "description"){	
    $("#"+type+"Table").addRow({
    newRow: '<tr><td colspan="2"><input type="text" name="'+type+'Row" size="40" class="idleField"  /></td>'
    });
}
else{
$("#"+type+"Table").addRow({
	newRow: '<tr><td colspan="2"><textarea rows="5" cols="50" name="'+type+'Row" class="idleField"></textarea></td>'	
});
}
}

function removeRowFromTable(tableID){
var rowCount = $("#"+tableID+" tr").length;
if(rowCount > 2){
$("#"+tableID+"").removeRow({});
}
}