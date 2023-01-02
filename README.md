# Axioned Cypress Starter

## How to use this repo?

- Click on the 'Use this template' button above, create a new repository
- Make sure your client repositories are always private
- Give it a clear name. We advice the format `clientname-projectname-app` (eg: `acme-saas-api`)
- After your repo is created - remove this section

## Prerequisite
- Node.js (12.x, 14.x, 16.x, 18.x and above)

You find the latest and most up-to-date system requirements on [Cypress' documentation site](https://docs.cypress.io/guides/getting-started/installing-cypress).

### How to install Node.js

Follow the Cypress' documentation for [installation instructions](https://docs.cypress.io/guides/getting-started/installing-cypress#Installing).

If you already have `npm` or `yarn` installed then refer to that section. Else, head on over to the [Direct download](https://docs.cypress.io/guides/getting-started/installing-cypress#Direct-download) section and run the installer.

To verify Node.js version, run the following in your terminal:
```bash
node -v
```
Use Vscode for writing script (*Recommended*)
    - [Vscode download link](https://code.visualstudio.com/download)

## Install Git
[Git Installation link](https://git-scm.com/downloads)
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

## NVM installation (optional)

1. If npm installation is failed it may due to node version issue
2. Steps to installation nvm for windows/mac/linux and repective commands can be found [here](https://www.freecodecamp.org/news/nvm-for-windows-how-to-download-and-install-node-version-manager-in-windows-10/)
3. If above steps didn't help please take IT support team for installation.
4. Once above step is done run `npm install` again

## Writing test cases

1. We can start writing test cases in cypress/e2e
2. Add file name according to test cases and then add - `.cy.js`

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
