/// <reference types="cypress" />

context('Testing side bar 1941720230_MuhammadRezaPahlevi', () => {
    const username = '1941720230'
    const password = '774523'
    
    // try
    // it('Testing Bugger Button 1941720230_MuhammadRezaPahlevi', () => {
    //     cy.visit('https://library.polinema.ac.id/login');
    //     cy.get(`input[name = "memberId"]`).type(username);
    //     cy.get(`input[name = "password"]`).type(password);
    //     cy.get(`button`).contains('Login').should('be.visible').click();
    //     cy.visit('https://library.polinema.ac.id/search');
    // })

    beforeEach(() => {
        cy.visit('https://library.polinema.ac.id/login');
        cy.get(`input[name = "memberId"]`).type(username);
        cy.get(`input[name = "password"]`).type(password);
        cy.get(`button`).contains('Login').click();
        cy.visit('https://library.polinema.ac.id/search');
    })

    it('Testing filter author Barners, Frank S 1941720230_MuhammadRezaPahlevi', () => {
        cy.get(`button`).contains('Pengarang').click();
        cy.contains('Barners, Frank S').parent().find('input[type=checkbox]').check({force: true});
        cy.contains(' Barners, Frank S ')
        .parent()
        .find('.book-card').should('have.length',30);
        cy.contains(' Menampilkan 1-31 dari total 188 item ').should('be.visible');
    })

    it('Testing filter author Kadir, Abdul 1941720230_MuhammadRezaPahlevi', () => {
        cy.get(`button`).contains('Pengarang').click();
        cy.contains('Kadir, Abdul').parent().find('input[type=checkbox]').check({force: true});
        cy.contains(' Kadir, Abdul ')
        .parent()
        .find('.book-card').should('have.length',30);
        cy.contains(' Menampilkan 1-31 dari total 49 item ').should('be.visible');
    })

    it('Testing filter author Daryanto 1941720230_MuhammadRezaPahlevi', () => {
        cy.get(`button`).contains('Pengarang').click();
        cy.contains('Daryanto').parent().find('input[type=checkbox]').check({force: true});
        cy.contains(' Daryanto ')
        .parent()
        .find('.book-card').should('have.length',30);
        cy.contains(' Menampilkan 1-31 dari total 36 item ').should('be.visible');
    })

    it('Testing filter author FANDY TJIPTONO 1941720230_MuhammadRezaPahlevi', () => {
        cy.get(`button`).contains('Pengarang').click();
        cy.contains('FANDY TJIPTONO').parent().find('input[type=checkbox]').check({force: true});
        cy.contains(' FANDY TJIPTONO ')
        .parent()
        .find('.book-card').should('have.length',24);
        cy.contains(' Menampilkan 1-undefined dari total 24 item ').should('be.visible');
    })

    it('Testing filter author PHILIP KOTLER 1941720230_MuhammadRezaPahlevi', () => {
        cy.get(`button`).contains('Pengarang').click();
        cy.contains('PHILIP KOTLER').parent().find('input[type=checkbox]').check({force: true});
        cy.contains(' PHILIP KOTLER ')
        .parent()
        .find('.book-card').should('have.length',22);
        cy.contains(' Menampilkan 1-undefined dari total 22 item ').should('be.visible');
    })

})