function copyToClipboard(text) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(text).select();
    document.execCommand("copy");
    $temp.remove();
    alert("IP已複製")
}

$('#ipbutton').click(function () { copyToClipboard("luckycraft.xyz"); });