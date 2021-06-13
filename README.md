# Soccer Web Application

This is the backend part of the web application.

Using NODE.JS + EXPRESS.JS, MongoDB and Jest.

## Architecture
contains the following layers:

1. Service- incharge of nevigate the HTTP request of the the frontend. (controllers)
2. Domain- the buissness layer, contains the logic of the use cases.
3. Data Access- incharge of the access to the database and contains the entities.

## Use Cases
The usecases we implement:
* Referee Register
* Add Referee To Season
* Referees Schedule
* Matches Scheduling
* Reschedule Match
* Login Procedure
