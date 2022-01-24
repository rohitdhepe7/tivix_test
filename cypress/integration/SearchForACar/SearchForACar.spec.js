

Given('I navigate to website', ()=>{

    cy.visit('http://qalab.pl.tivixlabs.com/')

})

When('I fill all the details', ()=>{
    cy.get('#country').select('Poland')
    cy.get('#city').select('Cracow')
    cy.get('#pickup').type('2022-01-24') 
    cy.get('#dropoff').type('2022-01-28') 
})

And('Click on search button', () =>{
    cy.get('.btn').click()
})