# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Task 1 (2 - 3 hours)
Title: Add a new column to the database for agents table.
Description: Create a migration file for adding a new column in the agents table named "custom_agent_id". Add the unique index key to this column.
Make this collumn nullable because we already have agents whose custom_agent_id will
be empty when we add this column to database. Otherwise, the unique key constraing will throw error.
Please also write revert case in the migration file as well so in case things go wrong we can revert the database changes.

Assumption: We are using an ORM and migrations for dabatase changes and we have some data already on production.
Write/Modifiy unit/http/integration tests accordingly.

Task 2 (8 - 12 hours)
Title: Modifiy add/edit agent API on the back-end
Description: You will recieve a new key in the payload of create/edit agent which will be custom_agent_id.
Change the logic of these API's and save this data against the custom_agent_id column in the database. If the id
is already in the database then catch that exception and throw a custom error stating
that "This agent id is already taken."

Assumption: We have a front-end application where we will ask our clients to enter custom agent id.
Write/Modifiy unit/http/integration tests accordingly.

Task 3 (12 - 16 hours)
Title: Add a new input field while create/editing an agent on the front-end
Description: In the create new agent and edit agent UI, add a new field called Custom Agent ID.
Send it in the respective api call for creating/editing agent. Add an info icon which says "Agent ID must be unique".

Assumption: We have a front-end application where we will ask our clients to enter custom agent id.
Write/Modifiy unit/http/integration tests accordingly.

Task 4 (2 - 4 hours)
Title: Modify getShiftsByFacility function
Description: Modifiy the API call which is using the function above and add custom_agent_id in the response of the api.
Write/Modifiy unit/http/integration tests accordingly.

Task 5 (6 - 8 hours)
Title: Modify generateReport function
Description: Modifiy the API call which is using function above and add custom_agent_id as an additional parameter if its not empty then fetch the agents data from the database and generate PDF report using this new id. (new id should be in the pdf report).
Write/Modifiy unit/http/integration tests accordingly.
