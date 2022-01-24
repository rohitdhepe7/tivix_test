Given('I navigate to the website', ()=>{

    cy.visit('http://qalab.pl.tivixlabs.com/')

})

When('I fill all the details and search', ()=>{
    cy.get('#country').select('Poland')
    cy.get('#city').select('Cracow')
    cy.get('#pickup').type('2022-01-24') 
    cy.get('#dropoff').type('2022-01-28') 
    cy.get('.btn').click()
})

When('I click on the Rent button', () =>{
    cy.get(':nth-child(1) > :nth-child(7) > .btn').click()
})

And('Verify the correct details are being shown', () => {
    cy.get('.card-title').contains('Bender-Hamilton')
    cy.get('.btn').click()
})

Then('I fill the form using user information', ()=>{
    cy.get('#name').type('John')
    cy.get('#last_name').type('Versa')
    cy.get('#card_number').type('123456789')
    cy.get('#email').type('johnversa@example.com')
})

And('Verify if the details are correct and the rent button is clicked',() => {
    cy.get('.btn').click()
})