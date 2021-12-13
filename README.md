# frontend
Monorepo with microfrontends for remindle.io

## Packages
This project is broken up in 3 seperate applications:

- Container (react): This acts as a parent application that initializes the child applications based on the current route.
- Auth (react): This acts as a small react application that houses authentication related screens & business rules. This does NOT include authorization, as this is handled by the parent (container) application.
- Dashboard (VueJS): This is the application that will be accessible after the user has successfully logged in.

## Goals
- todo