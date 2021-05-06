# React Online Marathon (Sprint 14)
Testing JS Applications (React Applications)

# Application (Component)
- The application is very simple which consist of only one App component and one DataService class
- DataService class is used for gathering information from GitHub API using username
- Try to run application using ```npm start```
- Open Web Browser and in address bar type URI like this ```localhost:3000/<your_github_user>```

## Task
Please write unit tests to check functionality of all modules (component, class) with using Jest framework
- App component with using Snapshots testing
- DataService class

All testing modules should be placed at ```src/tests``` directory
All test specifications should be real it means that code like this ```expect(2 + 2).toBe(4)``` isn't good :)
Code coverage is calculating by Jest framework and should be at least ```90%```
