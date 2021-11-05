/// <reference types="cypress" />
/* eslint-disable no-undef */

describe('Midas App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('can detect a mutant', () => {
    cy.url('/');
    cy.get('[data-test=test-dna]').type('atgcgacagtgcttatgtagaaggcccctatcactg');
    cy.contains('Analizar').click();
    cy.contains('Volver a analizar').click();
    cy.get('[data-test=test-dna]').type('aaaaaaaaaaaaa');
    cy.contains('Analizar').click();
    cy.contains('Volver a analizar').click();
    cy.get('[data-test=test-dna]').type('acgtacgt');
    cy.contains('Analizar').click();
    cy.contains("DNA isn't Mutant");
  });
});
