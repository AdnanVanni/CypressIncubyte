class CreateAccount {
    goto() {
       cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    }

    filldetails() {
        cy.fixture('details.json').then((user) => {
            cy.get('#firstname').type(user.firstname)
            cy.get('#lastname').type(user.lastname)
            cy.get("[name='email']").type(user.email)
            cy.get('[name="password"]').eq(0).type(user.password)
            cy.get('[title="Create an Account"]').type(user.password)
        })
    }



    submit() {
        cy.get('[class="action submit primary"]').click()
    }
    assertHomePage(){
        cy.get('[data-ui-id="page-title-wrapper"]').should('be.visible').contains('My Account')
 
    }
}

export default CreateAccount;
