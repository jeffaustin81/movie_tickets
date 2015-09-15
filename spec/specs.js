describe('Ticket', function() {
    it("creates a new ticket with the given information", function() {
        var testTicket = new Ticket("Iron Man 5", true, 7, 79);
        expect(testTicket.movieName).to.equal("Iron Man 5");
        expect(testTicket.firstRun).to.equal(true);
        expect(testTicket.movieTime).to.equal(7);
        expect(testTicket.age).to.equal(79);
    });

    it("adds the ticketPrice method to all contacts", function() {
        var testTicket = new Ticket("Iron Man 5", false, 7, 79);
        expect(testTicket.ticketPrice()).to.equal(9);
    });

    it("adjusts the ticket price based on first-run status", function() {
        var testTicket = new Ticket("Iron Man 5", true, 7, 30);
        expect(testTicket.ticketPrice()).to.equal(11);
    });
});
