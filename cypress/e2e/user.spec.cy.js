import { selectLimit } from 'async'
import userData from '../fixtures/users/userData.json'

describe('Orange HRM Specs', () => {
  
  const selectorList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    dashboardGrid: '.orangehrm-dashboard-grid',
    dailogAlert: "[role='alert'] .oxd-alert-content--error",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    employeePicture: ".employee-image",
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    selectField: ".oxd-select-text--active",
    submitButton: ".orangehrm-left-space",
  }
 
  
  it('login-success', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.dashboardGrid)
  })
  it('login-fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.dailogAlert)
  })
  it('login-Username Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.dailogAlert)
  })
  it('login-Password Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.dailogAlert)
  })
  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.dashboardGrid)
    cy.get(selectorList.myInfoButton).click()
    cy.get(selectorList.employeePicture)
    cy.get(selectorList.firstNameField).clear().type("John")
    cy.get(selectorList.middleNameField).clear().type("Frederic")
    cy.get(selectorList.lastNameField).clear().type("Smith")
    cy.get(selectorList.genericField).eq(3).clear().type("06301659")
    cy.get(selectorList.genericField).eq(4).clear().type("Little John")
    cy.get(selectorList.genericField).eq(5).clear().type("001200340044005")
    cy.get(selectorList.dateField).eq(0).clear().type("2029-3-20")
    cy.get(selectorList.dateCloseButton).click()
    cy.get(selectorList.submitButton).eq(0).click()
    cy.get('.oxd-toast-close')
  })
})