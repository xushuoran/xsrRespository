function requesrMethod (part1,part2,part3,callbalk) {
    var xhr = new XMLHttpRequest();
    xhr.open(part1,'https ://mockapi . eolinker . com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/' + par2)
    xhr . setRequestHeader("content-type", "application/x -Ww -form- -urlencoded")
    xhr. send(par3)
    xhr . onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var res = JSON.parse(xhr.responseText);
            var str = res.data;
            callback(str);
        }
    }
}


