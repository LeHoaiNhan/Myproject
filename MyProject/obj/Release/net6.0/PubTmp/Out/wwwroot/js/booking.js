$(document).ready(function () {
    $("#cbb_sex").kendoComboBox({
        dataTextField: "text",
        dataValueField: "value",
        dataSource: [
            { text: "Nữ", value: "1" },
            { text: "Nam", value: "2" }
        ],
        filter: "contains",
        suggest: true,
        index: 0
    });

    $("#customers").kendoDropDownList({
            dataTextField: "ContactName",
            dataValueField: "CustomerID",
            headerTemplate: '<div class="dropdown-header k-widget k-header">' +
                '<span>Photo</span>' +
                '<span>Contact info</span>' +
                '</div>',
            footerTemplate: 'Total #: instance.dataSource.total() # items found',
            valueTemplate: '<span class="selected-value" style="background-image: url(\'../img/p1.jpg\')"></span><span>#:data.ContactName#</span>',
        template: '<span class="k-state-default" style="background-image: url(\'../img/p1.jpg\')"></span>' +
                '<span class="k-state-default"><h3>#: data.ContactName #</h3><p>#: data.CompanyName #</p></span>',
            dataSource: {
                transport: {
                    read: {
                        dataType: "jsonp",
                        url: "https://demos.telerik.com/kendo-ui/service/Customers",
                    }
                }
                },
                height: 400
        }); 


    $("#customers2").kendoMultiSelect({
        dataTextField: "ContactName",
        dataValueField: "CustomerID",
        headerTemplate: '<div class="dropdown-header k-widget k-header"><span>Dịch vụ</span> </div>',
        footerTemplate: 'Total #: instance.dataSource.total() # items found',
        itemTemplate:  '<span class="k-state-default">#: data.ContactName # - #: data.CompanyName #</span>',
        tagTemplate: '<span class="selected-value" style="background-image: url(\'../img/p1.jpg\')"></span><span>#:data.ContactName#</span>',
        dataSource: 
            [{ "CustomerID": "1", "ContactName": "Cắt móng", "CompanyName": "0đ" },
                { "CustomerID": "2", "ContactName": "Dũa móng", "CompanyName": "23.000đ" },
                { "CustomerID": "3", "ContactName": "Sơn móng", "CompanyName": "63.000đ" },
                { "CustomerID": "4", "ContactName": "Sơn gel", "CompanyName": "83.000đ" },
                { "CustomerID": "2", "ContactName": "Dũa móng", "CompanyName": "23.000đ" },
                { "CustomerID": "3", "ContactName": "Sơn móng", "CompanyName": "63.000đ" },
                { "CustomerID": "4", "ContactName": "Sơn gel", "CompanyName": "83.000đ" }           ]
        ,
        height: 400
    });


});

// when user click on 
$("#timeFrame").on('click', 'button', function (e) {

    currentTime = $(this).attr('time-frame');

    $("#timeFrame > button").removeClass('btn-primary').addClass('btn-default');
    //$("#timeFrame > button .time").addClass('theme-text');
    $(this).removeClass('btn-default').addClass('btn-primary');
    $('#timeFrame .time').removeClass('text-white');
    $(this).find('.time').addClass('text-white');
    showBookingDateTime(currentTime, startTime);

    // remove error
    $('.general-message').hide();
    $('#time-select').css({ 'color': '' });
});

function ok() {
    alert("Chúng tôi đã nhận được thôn tin của bạn, hẹn gặp bạn tại của hàng nhé !")
}