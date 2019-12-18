//import { browser, element, by, Expectedconditions, protractor} from 'protractor'
//import { Alert, webElement } from 'selenium-webdriver';

describe('effecteur une recherche sur google', function() {
var originalTimeout;
    beforeEach(function() {
      originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 1800000;
    });
  it('se rendre sur le moteur de recherche google', function() {
browser.waitForAngularEnabled(false);

// se rendre sur la page d'accueil de recherche de google
browser.get('https://www.google.com/');

// attendre 5s pour être sûr que la page soit bien chargée
browser.sleep(5000);

var rech = element.all(by.className('gLFyf gsfi')).first();
browser.sleep(3000); 
// simuler l'appui sur le clavier
rech.sendKeys('site'); 

var lanc = element.all(by.className('gNO89b')).first();
browser.sleep(3000); 
// cliquer sur le boutton lancer la recherche 
lanc.click();

// attendre pour que la page se charge correctement
browser.sleep(3000);

// vérification de la page 10

 var nbpage = element.all(by.className('LC20lb'));

 browser.sleep(3000);

// je vérifie ici si le nombre de résultat sur la page est égale à 10. 
 expect(nbpage.count()).toEqual(10);

browser.sleep(5000);
 /*var pag = element.all(by.cssContainingText('.fl', 'Page 10'));
      browser.sleep(20000); */

  
  });
afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
 });


