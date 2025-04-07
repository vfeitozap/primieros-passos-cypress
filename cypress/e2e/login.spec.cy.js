import { selectLimit } from 'async'
import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import myInfoPage from '../pages/myInfoPage'
import MenuPage from '../pages/menuPage'

const loginPage = new LoginPage()
const dashcCheck = new DashboardPage()
const infoEmployee = new myInfoPage()
const personalPage = new MenuPage()

describe('Orange HRM Login Tests', () => {
  
  it('Login - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashcCheck.dashboardCheck()
  })
  it('login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.wrongCredentials()
   
  })
  it('login - Username Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userSuccess.password)
    loginPage.wrongCredentials()
  })
  it('login - Password Fail', () => {
    cy.visit('/auth/login')
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userFail.password)
    loginPage.wrongCredentials()
  })

})