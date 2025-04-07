class InfoPage {

    infoPageSelectors() {
        const selectors = {
            employeePicture: ".employee-image",
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-mm-dd']",
            dateCloseButton: ".--close",
            selectField: ".oxd-select-text-input",
            submitButton: ".orangehrm-left-space",
        }
        return selectors

    }

    myInfoPage() {
        cy.get(this.infoPageSelectors().employeePicture)
    }

    personalDetails(firstName, middleName, lastName, userId, otherId, driversLicense, dateOfBirth) {
        cy.get(this.infoPageSelectors().firstNameField).clear().type(firstName)
        cy.get(this.infoPageSelectors().middleNameField).clear().type(middleName)
        cy.get(this.infoPageSelectors().lastNameField).clear().type(lastName)
        cy.get(this.infoPageSelectors().genericField).eq(3).clear().type(userId)
        cy.get(this.infoPageSelectors().genericField).eq(4).clear().type(otherId)
        cy.get(this.infoPageSelectors().genericField).eq(5).clear().type(driversLicense)
        cy.get(this.infoPageSelectors().genericField).eq(7).clear().type(dateOfBirth)
        cy.get(this.infoPageSelectors().dateCloseButton).click()
        cy.get(this.infoPageSelectors().selectField).eq(0).click()
        cy.get('.oxd-select-dropdown > :nth-child(4)').click()
        cy.get(this.infoPageSelectors().selectField).eq(1).click()
        cy.get('.oxd-select-dropdown > :nth-child(3)').click()
        cy.get(this.infoPageSelectors().submitButton).eq(0).click()
    }

    }

export default InfoPage