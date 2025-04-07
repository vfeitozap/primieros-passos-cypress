import { selectLimit } from 'async'
import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import myInfoPage from '../pages/myInfoPage'
import MenuPage from '../pages/menuPage'

const Chance = require('chance')

const loginPage = new LoginPage()
const dashcCheck = new DashboardPage()
const infoEmployee = new myInfoPage()
const personalPage = new MenuPage()
const chance = new Chance()


describe('Orange HRM User Tests', () => {

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashcCheck.dashboardCheck()
    personalPage.openMyInfoPage()
    infoEmployee.myInfoPage()
    infoEmployee.personalDetails(chance.first(), chance.letter({casting: 'upper'}), chance.last(), chance.natural({ min: 8, max: 10 }), 'Little John', chance.cpf()
    , chance.birthday({string: true}))

  })
})