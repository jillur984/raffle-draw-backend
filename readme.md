# lottery sale API

-sell lottery ticket
-update lottery ticket
-get all tickets
-bluk buy(user can by multiple ticket at a time)
-raffle draw


#ticket 

--username
--number(unique)
--price
--date or timestamp

Routes

-/tickets/t/:ticketId GET Find Single Ticket
-/tickets/t/:ticketId PATCH Patch Update Ticket by ID
-/tickets/t/:ticketId DELETE Delete Ticket by ID
-/tickets/u/:username GET Find Ticket by Username
-/tickets/u/:username PATCH update ticket for a given user
-/tickets/u/:username DELETE delete all ticket for a given user
-/tickets/sell -POST Create Tickets
-/tickets/bull -Bulk Sell Ticket
-/tickets/draw
-/tickets-Find all Tickets
