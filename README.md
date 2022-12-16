# AXIONED Cypress Starter Repository

## Prerequisite

Need node to be installed in your system

currently we have tested on node version 12.22.7

How to install node?

1. Go to the Node.js Downloads page - https://nodejs.org/en/download/
2. Download Node.js for macOS by clicking the "Macintosh Installer" option and for Windows by clicking on Windows Installer
3. Run the downloaded Node.js .pkg Installer
4. Run the installer, including accepting the license, selecting the destination, and authenticating for the install.
5. To verify node js is installed run node -v command in terminal
6. If there is any issue installing node please reach out to the IT support team.

Use Vscode for writing script (*Recommended*)
    - [Vscode download link](https://code.visualstudio.com/download)

## Clone the repository

```bash
git clone https://github.com/axioned/cypress-starter.git

cd cypress-starter
```
## Moving File to your own project folder

Copy all the file/folder Except - `.git` folder

## Installation (optional)

To install cypress, run the following command (skip if already installed):

```bash
npm install cypress --save-dev
```

## Install all packages (Recommended)
```bash
npm install
```

## Running Cypress
```bash
npx cypress open
```
1. This will open cypress for which we need to select E2E testing.
2. Select any browser and click on start start E2E Testing in { Selected Browser name }.
3. In specs tab all the test cases will be shown select any test cases it will start running

## Running Cypress on multiple browsers simultaneously
```bash
npm run allBrowser
```
This will run cypress test for Chrome and Mozilla ( We can add additional browser as well ).

## Writing test cases

1. We can start writing test cases in cypress/e2e
2. Add file name according to test cases and then add - `.cy.js`

## Git Actions Workflow and Setup files
1. The current package consist of basic deployment scripts which can be find inside `.github/workflows` folder curenly they are some commented script.
2. There is one yml script file created for running cypress test
    - `cypress.yml`
3. The script will run whenever we create a pull request and we merge the code.
4. We can also manually run the script on github, The steps are 
    - `your-git-repo -> actions -> click on any workflow -> Run work workflow dropdown -> select branch -> run workflow`
5. We have commented code for running the script for mozilla and webkit ( Safari ) as it will consume time for running the script for all the browsers.
6. Scheduling script as also be commented. If we want we can uncomment those line.
    - How to change the schedule time? 
        - [Cron Guru](https://crontab.guru/) : Reference link
