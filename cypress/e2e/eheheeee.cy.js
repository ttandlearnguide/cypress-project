import "cypress-localstorage-commands";
Cypress.on('uncaught:exception',(err,runnable)=> {
  
  return false;
});
describe('siteye giriş yapılır.', () => {
  it('OK', () => {
    cy.visit('https://www.trendyol.com/')
  })
})
describe('wait.', () => {
  it('OK', () => {
    cy.wait(3000)
  })
})
describe('çerezler validate.', () => {
  it('OK', () => {
    cy.get('#onetrust-policy-title').should('include.text', 'SANA ÖZEL BİR DENEYİM İÇİN ÇALIŞIYORUZ', ({waitForAnimations: true}))
  })
})

describe('çezerler kabul.', () => {
  it('OK', () => {
    cy.get('#onetrust-accept-btn-handler').click({waitForAnimations: true})
  })
})

describe('çerezler validate.', () => {
  it('OK', () => {
    cy.get('.user-login-container > .link').should('be.exist')
  })
})

describe('En çok seçilen ürünlere tıklatılır.', () => {
  it('OK',  () => {
  cy.get('.user-login-container > .link').click( {waitForAnimations: true} )
  })
})

describe('çerezler validate.', () => {
  it('OK', () => {
    cy.get('#onetrust-policy-title').should('include.text', 'SANA ÖZEL BİR DENEYİM İÇİN ÇALIŞIYORUZ', ({waitForAnimations: true}))
  })
})

describe('çezerler kabul.', () => {
  it('OK', () => {
    cy.get('#onetrust-accept-btn-handler').click({waitForAnimations: true})
  })
})
describe('wait.', () => {
  it('OK', () => {
    cy.wait(2000)
  })
})

describe('çerezler validate.', () => {
  it('OK', () => {
    cy.get('[data-testid="email-input"]').type("mumin3398@gmail.com")
  })
})

describe('çerezler validate.', () => {
  it('OK', () => {
    cy.get('[data-testid="password-input"]').type("Avea12345")
  })
})

describe('Trendyol validation.', () => {
  it('Pass', () => {
    cy.get('.q-primary').click({force: true})
  })
})

describe('wait.', () => {
  it('OK', () => {
    cy.wait(2000)
  })
})

describe('çerezler validate.', () => {
  it('OK', () => {
    cy.get('.user-login-container > .link > .link-text').should('include.text', 'Hesabım', ({waitForAnimations: true}))
  })
})











