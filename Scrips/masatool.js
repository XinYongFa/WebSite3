
//iframe auto height主程式
function iframe_auto_height() {
    if (!this.in_site()) return;
    var iframe;
    $(parent.document).find("iframe").map(function () { //找到自己的iframe
        if ($(this).contents().get(0).location == window.location) iframe = this;
    });
    if (!iframe) return; //no parent
    var content_height = $("body").height() + 20;
    content_height = content_height < 768 ? 768 : content_height; //設定最小高度
    content_height = typeof content_height == 'number' ? content_height + "px" : content_height;
    iframe.style.height = content_height;                                                  //當下頁
    //window.parent.document.getElementById("menuframe2").style.height = content_height;     //左邊frame
    //window.parent.document.getElementById("footerdiv").style.top = content_height;         //下邊frame

}
//判斷是否在網頁的iframe之中
function in_site() {
    if (parent != window && this.is_crosssite() == false) return (true);
    return (false);
}
//判斷是否跨站(可能是別人嵌入了你的網頁)
function is_crosssite() {
    try {
        parent.location.host;
        return (false);
    }
    catch (e) {
        return (true);
    }
}

//加千位
function FormatNumber(n) {
    n += "";
    var arr = n.split(".");
    var re = /(\d{1,3})(?=(\d{3})+$)/g;
    return arr[0].replace(re, "$1,") + (arr.length == 2 ? "." + arr[1] : "");
}
//找最大值
function findmax(Jdata, datafile) {
    var temparr = [];
    for (i = 0; i < Jdata.length; i++) {
        for (j = 0; j < datafile.length; j++) {
            temparr.push(Jdata[i][datafile[j]]);
        }
    }
    temparr.sort(function (a, b) { return b - a; });


    var maxtemp = temparr[0];
    var tempmaxarr = parseInt(maxtemp).toString().split("");
    var leng = maxtemp.toString().length;

    if (leng >= 2) {
        if (tempmaxarr[1] > 5) {
            tempmaxarr[0] = (parseInt(tempmaxarr[0]) + 1).toString();
            for (i = 1; i < tempmaxarr.length; i++) {
                tempmaxarr[i] = 0;
            }
        } else {
            tempmaxarr[1] = (parseInt(tempmaxarr[1]) + 1).toString();
            for (i = 2; i < tempmaxarr.length; i++) {
                tempmaxarr[i] = 0;
            }
        }
    } else {
        tempmaxarr[0] = (parseInt(tempmaxarr[0]) + 1).toString();
    }

    var returnstr = "";
    for (i = 0; i < tempmaxarr.length; i++) {
        returnstr += tempmaxarr[i];
    }
    return returnstr;

} //End findmax