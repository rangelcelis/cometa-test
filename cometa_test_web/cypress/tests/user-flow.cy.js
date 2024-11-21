describe('User flow complete', () => {
  it('should complete one order and see the bill', () => {
    cy.visit('http://localhost:3000/');

    context('Init page', () => {
      cy.findByTestId('text-welcome').should('exist');
      cy.findByTestId('text-title').should('exist');

      cy.findByTestId('button-next').should('be.enabled').click();
    });

    context('Menu page', () => {
      cy.location('pathname').should('contain', 'order');

      cy.findByTestId('text-title').should('exist');
      cy.findByTestId('text-item-title');
      cy.findByTestId('button-submit').should('be.disabled');

      cy.findAllByTestId('div-item-row')
        .should('have.length.gt', 0)
        .each(($item) => {
          // Initial state
          cy.wrap($item).findAllByTestId('button-reduce').should('be.disabled');
          cy.wrap($item).findAllByTestId('text-quantity').should('exist').should('have.text', '0');
          cy.wrap($item).findAllByTestId('button-add').should('be.enabled');

          // Adding one item
          cy.wrap($item).findAllByTestId('button-add').click();
          cy.wrap($item).findAllByTestId('text-quantity').should('have.text', '1');
          cy.wrap($item).findAllByTestId('button-reduce').should('be.enabled');

          // Reducing one item
          cy.wrap($item).findAllByTestId('button-reduce').click();
          cy.wrap($item).findAllByTestId('text-quantity').should('have.text', '0');
          cy.wrap($item).findAllByTestId('button-reduce').should('be.disabled');
        });

      // Adding one item to continue
      cy.findAllByTestId('div-item-row').first().findAllByTestId('button-add').click();

      cy.findByTestId('button-submit').should('be.enabled').click();
    });

    context('Message page', () => {
      cy.location('pathname').should('contain', 'order/message');

      cy.findByTestId('text-message').should('exist');
      cy.findByTestId('button-back').should('be.enabled').click();
    });

    context('Menu page with link to Bill', () => {
      cy.location('pathname').should('contain', 'order');

      cy.findByTestId('button-submit').should('be.disabled');
      cy.findByTestId('link-view-bill').should('exist').click();
    });

    context('Bill page', () => {
      cy.location('pathname').should('contain', 'order/bill');

      cy.findByTestId('text-title').should('exist');
      cy.findByTestId('div-bill').should('exist');
    });
  });
});
