class DashboardPage {

    dashboardSelectors() {
        const selectors = {
            dashboardGrid: ".oxd-layout-context"
        }
        return selectors

    }

    dashboardCheck() {
        cy.get(this.dashboardSelectors().dashboardGrid).should('be.visible')
    }

    }

export default DashboardPage