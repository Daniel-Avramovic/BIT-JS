$(document).ready(function () {
    var p = $('#p1');
    var input = $('#name');
    var button = $('button');
    // console.log(button, input)
    // console.log(p)
    // var xmlhttp = new XMLHttpRequest();
    // xmlhttp.open("GET", "http://www.geoplugin.net/xml.gp?ip=xx.xx.xx.xx");
    // xmlhttp.send();

    // xmlhttp.onload = function(){
    //     var xmlDoc = xmlhttp.responseXML;
    //     console.log(xmlDoc)
    //     var name=xmlDoc.querySelector("geoplugin_countryName").textContent;
        // $(p).append(name);

    // };
    button.on('click', function(){
        var ip = "http://www.geoplugin.net/xml.gp?ip=";
        var value = input.val();
        console.log(value)
        ip = ip+value;
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", ip);
        xmlhttp.send();
        xmlhttp.onload = function(){
            var xmlDoc = xmlhttp.responseXML;
            console.log(xmlDoc)
            var name=xmlDoc.querySelector("geoplugin_region").textContent;
             $(p).append(name);
        }
    })
    
})

//$(document).ready(function(){
//     var request=new XMLHttpRequest();
//     request.open("GET","http://www.geoplugin.net/xml.gp?ip=xx.xx.xx.xx");
//     request.send();

//     request.onload=function(event){
//         var response=request.responseXML;
//         console.log("onload")
//         console.log(response)
//         var name=response.querySelector("geoplugin_countryName").textContent;
//         console.log(name);

//     }
// })
