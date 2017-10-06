$(document).ready(function () {

    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        defaultDate: '2017-09-12',
        navLinks: true, // can click day/week names to navigate views
        selectable: true,
        selectHelper: true,
        select: function (start, end) {
            var title = prompt('Event Title:');
            var eventData;
            if (title) {
                eventData = {
                    title: title,
                    start: start,
                    end: end
                };
                $('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
            }
            $('#calendar').fullCalendar('unselect');
        },
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [
            {
                title: 'All Day Event',
                start: '2017-09-01'
            },
            {
                title: 'Long Event',
                start: '2017-09-07',
                end: '2017-09-10'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2017-09-09T16:00:00'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2017-09-16T16:00:00'
            },
            {
                title: 'Conference',
                start: '2017-09-11',
                end: '2017-09-13'
            },
            {
                title: 'Meeting',
                start: '2017-09-12T10:30:00',
                end: '2017-09-12T12:30:00'
            },           
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2017-09-28'
            }
        ],

        //event Color CSS
        eventColor:'#009966'
    });

});