describe('Oragin HRM Specs', () => {
  
  const selectorList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTiopbar: '.oxd-topbar-header-breadcrumb-module',
    dailogAlert: "[role='alert'] .oxd-alert-content--error"
  }
  
  it('login-success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type('Admin')
    cy.get(selectorList.passwordField).type('admin123')
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.sectionTitleTiopbar).contains('Dashboard')
  })
  it('login-fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type('Test')
    cy.get(selectorList.passwordField).type('test')
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.dailogAlert)
  })
  it('login-Username Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type('Test')
    cy.get(selectorList.passwordField).type('admin123')
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.dailogAlert)
  })
  it('login-Password Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type('Admin')
    cy.get(selectorList.passwordField).type('test')
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.dailogAlert)
  })
  
})