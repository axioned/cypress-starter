/// <reference types="cypress" />

describe('Global Test Case name', () => { 
  
  beforeEach(() => {
    cy.visit("https://your-site.com");
    cy.clearCookies();

    /* 
      As mentioned in below fixture code instead of "jsonFileName" we have add your Json file name 
    */
   
    // cy.fixture("jsonFileName").then((data) => {
    //   myData = data;
    // })
  });
  
  it('TC:01 Your Test Case Name', () => {
    // Fetchind data from Json file

    // cy.get("input[name=email]").type(myData[index_number].student_name);
    // cy.get("select[name=prefix]").select(myData[index_number].gender, { force: true });
  });
});
