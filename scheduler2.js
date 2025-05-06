
function schedulerCallBackResult(data) {
    if (data == 'error') {
        $('#scheduler').children('i').remove();
        $('#scheduler').append('<p>Error</p>');
    }
}
$(document).ready(function () {

    saveBtnInit('save-button', 'content', Salva);

    $('.document').on('click', function () {
        var id = $(this).attr('data-key');

        getFile(id);
    });



    $('input.scheduler-filter').on('keyup', function (ev) {
        if (ev.key == 'Enter') {

            this.select()
        }
        else
            filterText();
    });
    $('#date-input').val(formatDate(dtref));
    if (location.search) {
        $('#calendar-reset').addClass('text-h7brown');
    }
    $('#search-reset').on('click', function () {
        $('#search-input').val('');
        filterText();
    });


});

function Salva() {
    var data = {};
    const newObject = Object.assign(data, scheduler.data);
    console.log('salva');
    console.log(scheduler.data);
    data.Resources.forEach(function (r) {
        r.Items.forEach(function (i) {
            console.log(i.IsNew + ' ' + i.Modified);
            if (i.IsNew == "false" && i.Modified == "false") {
                console.log('remove');
                r.Items?.splice(r.Items?.indexOf(i), 1);
            }
        });
        });

    
    
    console.log(data);

    $.ajax({
        url: "/scheduler/savedata",
        data: JSON.stringify(data),
        type: "POST",
        dataType: 'JSON',
        async: true,
        contentType: "application/json",
        success: function (data) {
            $(data.data).each(function (z, d) {

                $(scheduler.data.Resources).each(function (y, r) {
                    $(this.Items).each(function (k, i) {

                        if (i.Id == d.tempId) {
                            i.Id = d.id.toString();
                            i.isNew = false;
                        }
                    })
                })

                //$('#'+$(this).tempId).attr('data-id',$(this).id);
                //$('#' + $(this).tempId).attr('id', $(this).id);
            });
            scheduler.storeData();
         //   scheduler.redrawItems();
            saveCallBack();
            $('#save-button').removeClass('bg-h7brown');
            $('#save-button').addClass('btn-secondary');
            $('#save-button').attr('disabled', true);

        },
        error: function (data) {
            saveCallBack();
        },
        timeout: function (data) {
            saveCallBack();
        }
    });



}

function processOrders(data) {
    console.log(data);
    $(data.Resources).each(function () {
        $(this.Items).each(function (i, e) {
            $('.order-row').each(function (ii, o) {
                $(this).removeClass('d-none');
                if ($(o).attr('data-key') == e.ForeignKey) {
                    $(this).addClass('d-none');
                }
            })
        })
    })
}
function filterText() {
    var value = $('input.scheduler-filter').val();
    scheduler.filterItems(value);
}
function resourceClick(e) {


}

var elem = document.documentElement;
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}

function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
}
function move() {

    $('#handmove').toggleClass('selected');

    scheduler.settings.canMoveItems = !scheduler.settings.canMoveItems;
}
var selecting = false;
function select() {


    selecting = !selecting;
    painting = false;
    $('#select').toggleClass('selected');

}
function modified() {
    $('#save-button').addClass('bg-h7brown');
    $('#save-button').removeClass('btn-secondary');

    $('#save-button').removeAttr('disabled');
}
function expand() {

    // $('#fullscreen').toggleClass('selected');
    if ($('#fullscreen').hasClass('selected')) {
        openFullscreen();
    }
    else {
        closeFullscreen();
    }


}
function panthera() {

    $('#panthera').toggleClass('selected');



}
function stretch() {

    $('#stretch').toggleClass('selected');
    //scheduler.setCanResize($('#stretch').hasClass('selected'));
}
function goToDate() {

    var date = $('#date-input').val();
    window.location = '/scheduler/scheduler?dt=' + date;
}
function goToDateClose() {

    $('#stretch').toggleClass('selected');
    //scheduler.setCanResize($('#stretch').hasClass('selected'));
}
function formatDateTime(datetime) {
    return datetime.getUTCDate().toString().padStart(2, '0') + '-' +
        (datetime.getUTCMonth() + 1).toString().padStart(2, '0') + '-'
        + datetime.getUTCFullYear().toString(); + ' ' +
     datetime.getUTCHours().toString().padStart(2, '0') + ':' +
     datetime.getUTCMinutes().toString().padStart(2, '0');
}
function formatDate(datetime) {
    return datetime.getUTCFullYear().toString() + '-' + (datetime.getUTCMonth() + 1).toString().padStart(2, '0') + '-' + datetime.getUTCDate().toString().padStart(2, '0')
        ;
}
var painting = false;
$('.action-select').on('click', function () {
    if ($(this).hasClass('radio-select')) {
        $('.action-select.radio-select').not($(this)).removeClass('selected');
        $('.action-select.radio-select').not($(this)).children('div').children('i').removeClass('selected');
    }

    $(this).children('div').children('i').toggleClass('selected');
    $(this).toggleClass('selected');
    let action = getAction();
    console.log(action);
    //scheduler.settings.canMoveItems = (action === 'move');
    //scheduler.setCanResize((action === 'resize'));
    
    scheduler.settings.drawLinks = (action === 'links');
    scheduler.drawLinks();
    
  
    filterText();
})
function togglePaint() {
    painting = !painting;
    $('i.fa-paint-brush').toggleClass('selected');
}
function getAction() {
    let action = 'none';
    let selection = $('.action-select.radio-select.selected').attr('data-action');
    if (selection != undefined) action = selection;
    return action;
}
function rgb2hex(rgb) {
    if (rgb.search("rgb") == -1) {
        return rgb;
    } else {
        rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
        function hex(x) {
            return ("0" + parseInt(x).toString(16)).slice(-2);
        }
        return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    }
}
$('#scheduler').on('mousemove', function () {
    let action = getAction();
    let text = 'pointer';
    if (action == 'move') { text = '\uf256' };
    if (action == 'resize') { text = '\uf07e' };
    if (action == 'getcolor') { text = '\uf1fb' };
    if (action == 'paint') { text = '\uf1fc' };
    if (action == 'move') { text = 'grab' };
    if (action == 'resize') { text = 'w-resize' };
    if (action == 'getcolor') { text = 'crosshair' };
    if (action == 'paint') { text = 'cell' };
    if (text != '' && false) {
        var canvas = document.createElement("canvas");
        canvas.width = 24;
        canvas.height = 24;
        //document.body.appendChild(canvas);
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "#00ff00";
        ctx.font = "500 32px 'Font Awesome 5 Free'";
        //ctx.textAlign = "center";
        //ctx.textBaseline = "middle";
        ctx.fillText(text, 0, 0);
        var dataURL = canvas.toDataURL('image/png')
        $('#scheduler').css('cursor', 'url(' + dataURL + '), auto');
    }
    else
        $('#scheduler').css('cursor', text);
})
function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
}
function taskClick(event, item) {
    console.log('taskclick');
    let action = getAction();
    if (action == 'paint') {
        if ($('svg#' + item.Id).hasClass('selected')) {
            $('svg.svg-item.selected').each(function () {
                scheduler.setColor($(this).attr('id'), $('#colorPicker').val());
            });
        }
        else scheduler.setItemColor(item.Id, $('#colorPicker').val());
        modified();
    }
    if (action == 'getcolor') {
        let color = $('svg#' + item.Id).children('rect.item').css('fill');
        $('#colorPicker').val(rgb2hex(color));

    }
    if (action == 'select') {
        $('svg#' + item.data.Id).toggleClass('selected');
    }
    if (action == 'none') {
        console.log(item);
        if (!item.Classes?.includes('calendar-element') ?? false) {
            let from = new Date(item.From * 60 * 1000);
            let fromStr = formatDateTime(from);
            let to = new Date(item.To * 60 * 1000);
            let time = to.getTime() - from.getTime();
            time = item.To-item.From;
            let hh = Math.floor(time / 60);// Math.floor(time / 1000 / 60 / 60);
            let mm = Math.floor(time - (hh * 60));//Math.floor((time - hh * 60 * 60 * 1000) / 1000 / 60);
            let effort = item.Effort;
            let ehh = Math.floor(effort / 60);
            let emm = Math.floor(effort - (ehh * 60));

            let toStr = formatDateTime(to);
            let key = item.ForeignKey;

            $('.task-id').html('SCHEDULER TASK ID: ' + item.Id);
            $('input.popup-item-id').val(item.Id);
            $('input.popup-item-text').val(item.Text);
            $('input.popup-item-descr').val(item.Description);
            $('input.popup-item-key').val(key);
            $('input.popup-item-ref').val(item.Reference);
            $('input.popup-item-pieces').val(item.Pieces);
            $('input.popup-item-done').val(item.Done);
            $('input.popup-datetimefrom').val(fromStr);
            $('input.popup-datetimeto').val(toStr);

            $('input.popup-time').val(pad(hh) + 'h ' + pad(mm) + 'm');
            $('input.popup-effort').val(pad(ehh) + 'h ' + pad(emm) + 'm');
            $('button.popup-pdf').attr('onclick', 'getFile(' + key + ');');

            getForeignData(key);

            $('div.scheduler-popup').find('a.nav-link.active').removeClass('active');
            $('div.scheduler-popup').find('a.nav-link').first().addClass('active');
            $('div.scheduler-popup').find('div.tab-pane.active.show').removeClass('active').removeClass('show');
            $('div.scheduler-popup').find('div.tab-pane').first().addClass('active').addClass('show');
            $('div.scheduler-popup').css('display', 'block');
            $('div.scheduler-popup').css('visibility', 'visible');
            $('div.scheduler-popup').css('opacity', '1');
        }
    }




}
function popupClose(e) {

    $('div.scheduler-popup').css('display', 'none');
    $('div.scheduler-popup').css('visibility', 'hidden');
    $('div.scheduler-popup').css('opacity', '0');
}
function popupSave(e) {
    let data = {};
    data.id = $('input.popup-item-id').val();
    data.text = $('input.popup-item-text').val();
    data.description = $('input.popup-item-descr').val();
    data.reference = $('input.popup-item-ref').val();
    scheduler.setItemData(data);
    modified();
    popupClose(e);
}
function popupDel(e) {

    let id = $('input.popup-item-id').val();


    scheduler.removeItem(id);
    modified();
    popupClose(e);
}
function startdrag(evt) {

    var data = {};
    data.text1 = $(evt.target).attr('data-text1');
    data.text2 = $(evt.target).attr('data-text2');
    data.order = $(evt.target).attr('data-order');
    data.classes = $(evt.target).attr('data-classes');
    data.width = $(evt.target).attr('data-w');
    data.key = $(evt.target).attr('data-key');
    data.color1 = $(evt.target).attr('data-color');
    data.ref = $(evt.target).attr('data-ref');
    data.pieces = $(evt.target).attr('data-qt');
    data.elementId = $(evt.target).attr('id');
    evt.dataTransfer.setData("task", JSON.stringify(data));
    
}
function paintdrag(evt) {
    console.log('paint');
    var data = {};
    console.log(evt);
    data.color = $(evt.target).attr('data-color');
    console.log(data.color);
    evt.dataTransfer.setData("color", JSON.stringify(data));


}
function enddrag(event) {

    // $(event.target).remove();
}

$('#colorsel').on("change", function () {

    $(".color-select").css('color', $('#colorsel').val());
});
$('div.3dviewer').each(function () {

    //  STLViewer(this);
});






var calendar = new Calendar();

var item1 = calendar.newItem();
item1.duration = 525600;
item1.type = 'rule';
item1.name = 'not on saturday';
item1.day = 6;
item1.capacity = 0;
item1.dateFrom = '2023-01-01';

var item2 = calendar.newItem();
item2.duration = 525600;
item2.type = 'rule';
item2.name = 'not on sunday';
item2.day = 0;
item2.capacity = 0;
item2.dateFrom = '2023-01-01';

var item3 = calendar.newItem();
item3.duration = 525600;
item3.type = 'rule';
item3.name = 'regular shift';
item3.day = -1;
item3.capacity = 960;
item3.dateFrom = '2023-01-01';
//item.duration=1234;
var item4 = calendar.newItem();
item4.duration = 1440;
item4.type = 'calendar';
item4.day = -1;
item4.capacity = 480;
item4.dateFrom = '2023-05-05';

var item5 = calendar.newItem();
item5.duration = 1440;
item5.type = 'calendar';
item5.day = -1;
item5.capacity = 960;
item5.dateFrom = '2023-05-06';

var item6 = calendar.newItem();
item6.duration = 7200;
item6.type = 'calendar';
item6.day = -1;
item6.capacity = 480;
item6.dateFrom = '2023-05-08';



var today = new Date()
var date = new Date(today.getFullYear(), today.getMonth(), today.getDate());



function gridMouseOver(e, i) {
   
    document.getElementById('crossinfo').value = i.resource
    document.getElementById('fillinfotext').value = i.info;
    //$('#fillinfotext').val('-- --');

   
    //$('#crossinfo').val(dt2.toLocaleDateString() + " | " + name);
}

//$('div.date-popup').css('display', 'block');
//$('div.date-popup').css('visibility', 'visible');
//$('div.date-popup').css('opacity', '1'