class login {
    goto() {
       cy.visit('https://magento.softwaretestingboard.com/customer/account/login')
    }

    fillUsernamePassword() {
        cy.fixture('details.json').then((users) => {
            cy.get('[name="login[username]"]').type(users.email)
            cy.get('[name="login[password]"]').type(users.password)
          })
    }



    loginbuttonclick() {
        cy.get('#send2').click()
    }
    assertHomePage(){
        cy.get('[data-ui-id="page-title-wrapper"]').should('be.visible').contains('My Account')
 
    }
}

export default login;
