Task 1 (2 - 3 hours)
Title: Add a new column to the database for agents table.
Description: Create a migration file for adding a new column in the agents table named "custom_agent_id". Add the unique index key to this column.
Make this collumn nullable because we already have agents whose custom_agent_id will
be empty when we add this column to database. Otherwise, the unique key constraing will throw error.
Please also write revert case in the migration file as well so in case things go wrong we can revert the database changes.

Assumption: We are using an ORM and migrations for dabatase changes and we have some data already on production.

Task 2 (8 - 12 hours)
Title: Modifiy add/edit agent API on the back-end
Description: You will recieve a new key in the payload of create/edit agent which will be custom_agent_id.
Change the logic of these API's and save this data against the custom_agent_id column in the database. If the id
is already in the database then catch that exception and throw a custom error stating
that "This agent id is already taken."

Assumption: We have a front-end application where we will ask our clients to enter custom agent id.

Task 3 (12 - 16 hours)
Title: Add a new input field while create/editing an agent on the front-end
Description: In the create new agent and edit agent UI, add a new field called Custom Agent ID.
Send it in the respective api call for creating/editing agent. Add an info icon which says "Agent ID must be unique".

Assumption: We have a front-end application where we will ask our clients to enter custom agent id.

Task 4 (2 - 4 hours)
Title: Modify getShiftsByFacility function
Description: Modifiy the API call which is using the function above and add custom_agent_id in the response of the api.

Task 5 (6 - 8 hours)
Title: Modify generateReport function
Description: Modifiy the API call which is using function above and add custom_agent_id as an additional parameter if its not empty then fetch the agents data from the database and generate PDF report using this new id. (new id should be in the pdf report).
