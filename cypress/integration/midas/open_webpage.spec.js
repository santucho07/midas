/// <reference types="cypress" />
/* eslint-disable no-undef */

describe('Midas App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('web page can be opened', () => {
    cy.contains('Analizar');
  });

  it('navigate in the options menu', () => {
    cy.contains('Detector de mutantes').click();
    cy.url().should('includes', '/');
    cy.contains('Cargar mutantes').click();
    cy.url().should('includes', '/mutants/upload');
    cy.contains('Mis mutantes').click();
    cy.url().should('includes', '/mutants/favorite');
  });
});
