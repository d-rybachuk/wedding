var socket = io();

$(function () {
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Voting for babies'
        },
        xAxis: {
            categories: ['Baby']
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Boy',
            data: [5]
        }, {
            name: 'Girl',
            data: [3]
        }]
    });
});
