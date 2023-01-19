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
    cy.visit('http://localhost:3000/blog');
    cy.get('.post-list-item a').first().click();
    cy.wait(300);
    cy.get('a').contains('next post', { matchCase: false }).click();
    cy.wait(300);
    cy.get('a').contains('previous post', { matchCase: false }).click();
    cy.get('main');
  });
})
