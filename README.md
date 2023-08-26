PROJECT DETAILS
This undertaking involves the operational and backend aspects of a social media application. Throughout the course of this project, I gained extensive knowledge about mongoDB and mongoose. The application enables users to discover all registered users, retrieve information about a specific user, establish, modify, or remove user accounts, and manage a list of friends. Additionally, users have the ability to access collective and individual user thoughts. The application also supports the creation, editing, and deletion of individual thoughts, along with the option to add or remove reactions to a particular thought.

Installation
Please install express, mongoose, and mongoDB. It is also necessary to have insomnia to run the CRUD operations.

Usage
Video walkthrough:

Here is a list to use for the userRoutes:

GET /api/users (shows all users)

POST /api/users (creates a user)

GET /api/users/:userId (gets a single user)

PUT /api/users/:userId (can change a single user information)

DELETE /api/users/:userId (deletes a single user)

POST /api/users/:userId/friends/:friendId (adds a friend to user friend list)

DELETE /api/users/:userId/friends/:friendId (deletes a friend to user friend list)

Here is a list for the thoughtRoutes:

GET /api/thought (gets all thoughts)

POST /api/thought (creates a thought)

GET /api/thought/:thoughtId (gets a single thought)

PUT /api/thought/:thoughtId (edits a single thought)

DELETE /api/thought/:thoughtId (deletes a single thought)

POST /api/thought/:thoughtId/reactions (posts a reaction about a thought)

DELETE /api/thought/:thoughtId/reactions/:reactionId (deletes a reaction about a thought)

Contribution
Please contact me with any questions.

Questions
email- marcyrappaport.blessed@gmail.com

github- momofastorm

Test
N/A

License
This project is licensed under the MIT license.