/// <reference types="cypress" />
/* eslint-disable no-undef */

describe('Midas App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('can add a new mutant', () => {
    // add Wolverine
    cy.url('/');
    cy.contains('Cargar mutantes').click();
    cy.get('input[name="name"]').type('wolverine');
    cy.get('input[name="superpoder"]').type('regeneracion');
    cy.get('input[name="bajo"]').click();
    cy.contains('Enviar').click();
    cy.contains('Cargar otro').click();

    // add Tormenta
    cy.url('/');
    cy.contains('Cargar mutantes').click();
    cy.get('input[name="name"]').type('Tormenta');
    cy.get('input[name="superpoder"]').type('Controla el clima');
    cy.get('input[name="alto"]').click();
    cy.contains('Enviar').click();
    cy.contains('Cargar otro').click();

    // add Mystique
    cy.url('/');
    cy.contains('Cargar mutantes').click();
    cy.get('input[name="name"]').type('Mystique');
    cy.get('input[name="superpoder"]').type('Cambia su apariencia');
    cy.get('input[name="alto"]').click();
    cy.contains('Enviar').click();
    cy.contains('Cargar otro').click();

    // add Ciclope
    cy.url('/');
    cy.contains('Cargar mutantes').click();
    cy.get('input[name="name"]').type('Ciclope');
    cy.get('input[name="superpoder"]').type('Lanza rayos');
    cy.get('input[name="alto"]').click();
    cy.contains('Enviar').click();
    cy.contains('Cargar otro').click();

    // add Magneto
    cy.url('/');
    cy.contains('Cargar mutantes').click();
    cy.get('input[name="name"]').type('Magneto');
    cy.get('input[name="superpoder"]').type('Controla los metales');
    cy.get('input[name="alto"]').click();
    cy.contains('Enviar').click();
    cy.contains('Cargar otro').click();

    // add Magneto
    cy.url('/');
    cy.contains('Cargar mutantes').click();
    cy.get('input[name="name"]').type('Charles Xavier');
    cy.get('input[name="superpoder"]').type('Telèpata');
    cy.get('input[name="alto"]').click();
    cy.contains('Enviar').click();
    cy.contains('Cargar otro').click();
    cy.contains('Mis mutantes').click();
    cy.get('[data-test=add-favorite]').click({ multiple: true });
  });
});
