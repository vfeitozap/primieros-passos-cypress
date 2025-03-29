describe('Oragin HRM Specs', () => {
  it('login-success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type('admin123')
    cy.get("[type='submit']").click()
    cy.get('.oxd-topbar-header-breadcrumb-module').contains('Dashboard')
  })
  it('login-fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Test')
    cy.get("[name='password']").type('test')
    cy.get("[type='submit']").click()
    cy.get("[role='alert'] .oxd-alert-content--error")
  })
})