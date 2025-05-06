///////////////////////////////////GET SCHEDULER////////////////////////////
function schedulerInit(template, key, schedulerdata) {
    const myDecipher = decipher('Author: RGab');
    let deciphered = myDecipher(template);
    setCookie('s_temp', key, 10);
    localStorage.setItem('s_temp', template);
   
    settings.template = deciphered;

   
    scheduler = new Scheduler("scheduler", data, deciphered);

    scheduler.settings= settings;
  //  scheduler.calendar = calendar;
    console.log('scheduler.calendar');
      console.log(scheduler.calendar);
    scheduler.init();
    scheduler.shiftNoAnimation(-8);
    processOrders(schedulerdata);
}
function getScheduler(url,key,schedulerdata,callback) {
    var authData = {};
    authData.publicKey = key;
    let temp_temp = getCookie('s_temp');
  
    if (temp_temp == key) {
        let t=localStorage.getItem('s_temp');
       
        if (t) {
            schedulerInit(t, key, schedulerdata);
            return;
        }
        
    }
    console.log('template from server');
       
    $.ajax({
            url: url,
            data: JSON.stringify(authData),
            type: "POST",
            dataType: 'JSON',
            async: true,
            contentType: "application/json",
            success: function (data) {
                if (data != "nok") {                      
                    schedulerInit(data, key, schedulerdata);               
                    result = "ok";
                    console.log('template from server 2');
                }
                else
                    result = "error";
                callback(result);
            },
            error: function (data) {
                result = "error";
                callback(result);
            },
            timeout: function (data) {
                result = "error";
                callback(result);
            }
        });
    
   

}


///////////////////////////////////GET FILES////////////////////////////
function getFile(part, vers) {

    var div = $("<div class='overlay'><i class='fa fa-spinner fa-6x fa-spin'></i></div>");
    $('#scheduler').append(div);


    $.ajax({
        url: '/api/values?part=' + part,
        type: "GET",
        async: true,

        success: function (data) {

            if (data) openPDF(data);
            $('.overlay').remove();

        },
        error: function (data) {
            $('.overlay').remove();


        },
        timeout: function (data) {
            $('.overlay').remove();


        }
    });

}
function openPDF(pdf) {
    window.open(pdf, "_blank");
    return false;
}


///////////////////////////////////CIPHER////////////////////////////

const cipher = salt => {
    const textToChars = text => text.split('').map(c => c.charCodeAt(0));
    const byteHex = n => ("0" + Number(n).toString(16)).substr(-2);
    const applySaltToChar = code => textToChars(salt).reduce((a, b) => a ^ b, code);

    return text => text.split('')
        .map(textToChars)
        .map(applySaltToChar)
        .map(byteHex)
        .join('');
}

const decipher = salt => {
    const textToChars = text => text.split('').map(c => c.charCodeAt(0));
    const applySaltToChar = code => textToChars(salt).reduce((a, b) => a ^ b, code);
    return encoded => encoded.match(/.{1,2}/g)
        .map(hex => parseInt(hex, 16))
        .map(applySaltToChar)
        .map(charCode => String.fromCharCode(charCode))
        .join('');
}


///////////////////////////////////COOKIES////////////////////////////
function setCookie(cname, cvalue, exdays) {

  
 
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    $.cookie(cname, cvalue, { expires: 7, path: "/" });
   // document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
