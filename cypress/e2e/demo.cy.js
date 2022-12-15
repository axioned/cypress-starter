/// <reference types="cypress" />

describe('Global Test Case name', () => { 
  
  beforeEach(() => {
    cy.visit("https://your-site.com");
    cy.clearCookies();
  });
  
  it('TC:01 Your Test Case Name', () => {
    
  });
});
