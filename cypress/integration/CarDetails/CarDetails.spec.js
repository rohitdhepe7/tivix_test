
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
})