function Ticket(movieName, firstRun, movieTime, age) {
    this.movieName = movieName;
    this.firstRun = firstRun;
    this.movieTime = movieTime;
    this.age = age;
}

Ticket.prototype.ticketPrice = function() {
    var total = 9;

    if(this.firstRun) {
        total += 2;
    }

    if(this.movieTime < 4.5) {
        total -= 2;
    }

    if(this.age) {
        total -= 2;
    }

    return total;
}

function resetFields() {
    $("input#movie-title").val("");
    $("input#age").val("");
    $("input#movie-time").val("");
}

$(document).ready(function() {
    $("form#new-ticket").submit(function(event) {
        event.preventDefault();

        var movieName = $("select#movie-title").val();
        var movieTime = parseInt($("select#movie-time").val());
        var age = parseInt($("select#age").val());
        if(movieName.charAt(movieName.length - 1) === "*") {
            var firstRun = true;
        } else {
            var firstRun = false;
        }

        var newTicket = new Ticket(movieName, firstRun, movieTime, age);

        $("#show-ticket").show();
        $(".movie").text(newTicket.movieName.replace(/\*$/, ''));
        $(".showtime").text(newTicket.movieTime + ":00");
        $(".price").text(newTicket.ticketPrice());

        resetFields();
    });
});
