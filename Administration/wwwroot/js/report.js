$(document).ready(function () {
    var date = new Date();
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right:'month,listMonth'            
        },
        defaultDate: date,
        defaultView:'month',
        events: [
            {
                id: 412,
                employee:'abc',
                title: 'All Day Event',
                start: '2017-10-01'
            },
            {
                id: 544,
                title: 'Long Event',
                employee: 'cde',
                start: '2017-09-07',
                end: '2017-10-10'
            },
            {
                id: 999,
                title: 'Repeating Event',
                employee: 'def',
                start: '2017-10-09T16:00:00'
            },
            {
                id: 9929,
                title: 'Repeating Event',
                employee: 'ghi',
                start: '2017-10-16T16:00:00'
            },
            {
                id: 463,
                title: 'Conference',
                employee: 'klm',
                start: '2017-10-11',
                end: '2017-10-13'
            },
            {
                id: 643,
                title: 'Meeting',
                employee: 'klam',
                start: '2017-10-12T10:30:00',
                end: '2017-10-12T12:30:00'
            },
            {
                id: 135,
                title: 'Click for Google',
                employee: 'klmn',
                //url: 'http://google.com/',
                start: '2017-09-28'
            }
        ],
        eventColor: 'DeepSkyBlue3',
        eventRender: function eventRender(event, element, view) {
            return ['', event.employee].indexOf($('#employee').val()) >= 0;
        },
        themeSystem:'jquery-ui'
    });
    $('#filter').on('click', function () {
        $('#calendar').fullCalendar('rerenderEvents');
    });
});