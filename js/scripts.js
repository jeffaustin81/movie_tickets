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

    if(this.movieTime < 4) {
        total -= 2;
    }

    return total;
}
