# undergradresearchportal


## Configuration: 
For the database, all that's needed for the current build to function is a mysql database named 'testdb' with a single table called 'application'. This table has two columns: a primary key integer column and a string.

Run
```
npm install
```
in both the root directory and the client directory.

Run
```
node db_testseed
```

Run the following command in the root directory of the project to build the project and start the server running on port 8080: 

```
npm run-script build --prefix client && node server.js
```

## Project Summary:

Our goal is to create an application portal for a variety of applications that the Office for Undergraduate Research uses that will allow students to answer a set of questions, upload PDFs and add a faculty email to upload a letter of recommendation.

 
## Detailed Project Description:

This portal would streamline the process for students interested in taking part in research and for the faculty serving as their referrers. It would automate actions that are currently being performed manually by faculty, saving them time and making the process more efficient overall for them. An easy-to-use portal would improve the application process for students as well. A quicker turnaround time between faculty and applicants would expedite the process, potentially leading to increased interest in and positive judgments toward engaging in research among undergraduates. So, the primary goal of this project is to create an organized and simplified application that makes the task of applying for undergraduate research positions as painless as possible. This project is going to be a web based app that faculty members and students will be able to easily access so that preparing a student for a research opportunity becomes much more efficient and easy to use. Our client, Boots Quimby, is the current Associate Director of Program Development and Evaluation at UNC, and has worked for the Office of Undergraduate Research for the past two years. She worked formerly at the University of Maryland as both an Associate Director of Life Sciences, and as Instructional Faculty for Cell Biology and Molecular Genetics, and has a lot of experience working with students. She now engages with students who wish to undertake a research position with one of the professors on campus and has requested this app so that the process becomes much less confusing for both the students and faculty involved by cutting down on the amount of manual work.