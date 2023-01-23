describe('Blogs', () => {
  it.skip('index route loads and shows blog card components', () => {
    cy.visit('http://localhost:3000/blog');
    cy.get('.post-list-item');
  });

  it.skip('post route loads and displays a post', () => {
    cy.visit('http://localhost:3000/blog');
    cy.get('.post-list-item a').first().click();
    cy.get('main');
  });

  it.skip('index next and prev buttons work', () => {
    cy.visit('http://localhost:3003/blog');
    cy.get('.post-list-item a').first().click();
    cy.wait(300);
    cy.get('a').contains('next post', {matchCase: false}).click();
    cy.wait(300);
    cy.get('a').contains('previous post', {matchCase: false}).click();
    cy.get('main');
  });

  it('blog posts display images properly, if any', () => {
    cy.visit('http://localhost:3003/blog');
    cy.get('ul li a').each(link => {
      cy.visit(`http://localhost:3003/${link.attr('href')}`);
      cy.wait(1000);
      cy.get('img').each(($img, index) => {
        if (index === 0) return; // skip header image
        cy.wrap($img).as('img');
        cy.get('@img').should('be.visible');//@ts-expect-error naturalWidth is added at runtime
        cy.get('@img').and(x => expect(x[0].naturalWidth).to.be.greaterThan(1));
      });
    });
  });
});
