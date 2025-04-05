class DashboardPage {

    dashboardSelectors() {
        const selectors = {
            dashboardGrid: '.orangehrm-dashboard-grid'
        }
        return selectors

    }

    dashboardCheck() {
        cy.get(this.dashboardSelectors().dashboardGrid).should('be.visible')
    }

    }

export default DashboardPage