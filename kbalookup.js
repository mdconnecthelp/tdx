var ticketSubjectID = 'attribute37';
document.getElementById(ticketSubjectID).onblur = function() {
$.get('../../Shared/AutocompleteSearch?componentStr=kb&searchText=' + $('#' + ticketSubjectID).val(),null,function(result) {
if (result.length > 0){
var html = result.map(item => "<a href=\"" + item.itemUrl + "\">" + item.title + "</a>").join("<br>");
html = "<div id=\"kbrelated\" class=\"p-2\" style=\"padding-bottom: 2em;\"><h3>Related Articles</h3>" + html + "</div>";
// if it exists, replace it
if ($("#kbrelated").length) {
$("#kbrelated").html(html);
}
else {
$("#divButtons").prepend(html);
}
}
},'json');
}
