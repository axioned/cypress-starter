// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

beforeEach(() => {

  /*
    For fetching data from google sheet all the prerequisite is mentioned in this doc: https://docs.google.com/document/d/1wkjLF2o8HsyXwZ-DcuZnb1JYHF6j4X2wS96jBO6m9AM/edit?pli=1
    1. In below url https://sheets.googleapis.com/v4/spreadsheets/SHEET-ID/values/data?key=API-KEY
      i. In place of SHEET-ID add your respective sheet id
      ii. In place of API-KEY add your respective sheet API Key
  */

  // cy.request("https://sheets.googleapis.com/v4/spreadsheets/SHEET-ID/values/data?key=API-KEY")
  // .then((response) => {
  //   const allSheetData = []; // Variable for storing all data
  //   let sheetHeading; // Variable for storing Heading Info
  //   const allData = response.body.values;
    
  //   allData.forEach((data, index) => {
  //     if(index === 0) {
  //       // As first row always has heading we are storing all heading at one place so that we can create your own data set 
  //       let newData = data.map((heading) => {
  //        return heading.toLowerCase().split(' ').join("_");
  //       })
  //       sheetHeading = newData;
  //     } else {
  //       // Here is the demo code for creating json data set
  //       const newData = {};
        
  //       data.forEach((content, newIndex) => {
  //         newData[sheetHeading[newIndex]] = content;
  //       })
  //       allSheetData.push(newData)
  //     }
  //   });
//     // Below code is creating json file based on above data set data
//     // Instead on xlsxData.json name any name can be added
  //   cy.writeFile("cypress/fixtures/sheet.json", JSON.stringify(allSheetData))
  // });


  /* 
    1. Here is the method/code for fetching excel data stored in cypress locally
    2. Always add excel sheet in cypress/fixtures folder
    3. Add your sheet path in below cy.parseXlsx('excel-sheet-path')
  */

  // cy.parseXlsx('cypress/fixtures/sheet-name.xlsx').then( (jsonData) => { 
  //   const rowLength = Cypress.$(jsonData[0].data).length
  //   const allSheetData = []; // Variable for storing all data
  //   let sheetHeading; // Variable for storing Heading Info

  //   for (let index = 0; index < rowLength; index++) { 
  //     if(index === 0) {

  //       // As first row always has heading we are storing all heading at one place so that we can create your own data set 

  //       let newData = jsonData[0].data[index].map((heading) => {
  //         return heading.toLowerCase().split(' ').join("_");
  //       })
  //       sheetHeading = newData;
  //     } else {

  //       // Here is the demo code for creating json data set

  //       const newData = {};
          
  //       jsonData[0].data[index].forEach((content, newIndex) => {
  //         newData[sheetHeading[newIndex]] = content;
  //       })
  //       allSheetData.push(newData)
  //     }

  //     // Below code is creating json file based on above data set data
  //     // Instead on xlsxData.json name any name can be added
  //     cy.writeFile("cypress/fixtures/xlsxData.json", JSON.stringify(allSheetData))
  //   }
  // });
});