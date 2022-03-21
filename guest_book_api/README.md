## NOTES API
This is a Django Rest Framework API to Notes.

## ROUTES TO IMPLEMENT
| METHOD | ROUTE | FUNCTIONALITY |
| ------- | ----- | ------------- |
| *GET* | ```/notes/``` | _Get all notes_|
| *POST* | ```/notes/``` | _Create note_|
| *GET* | ```/notes/{note_id}/``` | _Retrive note_|
| *PUT* | ```/notes/{note_id}/``` | _Update note_|
| *PATCH* | ```/notes/{note_id}/``` | _Partial update note_|
| *DELETE* | ```/notes/{note_id}/``` | _Delete note_|

Or see at: ``/docs/``

## How to run the Project
- Install Postgreql
- Install Python
- Create your virtualenv with `Pipenv` or `virtualenv` and activate it.
- Install the requirements with ``` pip install -r requirements.txt ```
- Create you database with `python manage.py runserver` 
- Finally run the API 
`` python manage.py runserver ``
