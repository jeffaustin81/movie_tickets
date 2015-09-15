function Ticket(movieName, firstRun, movieTime, age) {
    this.movieName = movieName;
    this.firstRun = firstRun;
    this.movieTime = movieTime;
    this.age = age;
}

Ticket.prototype.ticketPrice = function() {
    var basePrice = 9;
    var total = basePrice;
    if(this.firstRun) {
        total += 2;
    }

    return total;
}
