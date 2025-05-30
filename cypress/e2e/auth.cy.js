describe('Visit /auth skipping React minified errors', () => {
  before(() => {
    Cypress.on('uncaught:exception', (err) => {
      if (
        err.message.includes('Minified React error #418') ||
        err.message.includes('Minified React error #423')
      ) {
        return false;
      }
    });
  });

  it('Visits /auth page', () => {
    cy.visit('https://hotel-management-fullstack.vercel.app/auth');
    
  });
});
describe('Click specific SVG element', () => {
  it('Clicks the target svg element', () => {
    cy.visit('https://hotel-management-fullstack.vercel.app/auth'); // o la URL que corresponda

    cy.get('body > div.min-h-screen > div > main > section > div > div > span > svg.ml-3.text-4xl.cursor-pointer')
      .click();
  });
});
describe('Click two SVG elements', () => {
  it('Clicks both target svg elements', () => {
    cy.visit('https://hotel-management-fullstack.vercel.app/auth');

    cy.get('body > div.min-h-screen > div > main > section > div > div > span > svg.ml-3.text-4xl.cursor-pointer')
      .should('be.visible')
      .click();

    cy.get('body > div.min-h-screen > div > main > section > div > div > span > svg.mr-3.text-4xl.cursor-pointer.text-black.dark\\:text-white')
      .should('be.visible')
      .click();
  });
});

