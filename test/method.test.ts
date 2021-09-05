import { CafeAvecAdaptateur } from './../src/classes/CafeAvecAdaptateur';
import { App } from './../src/classes/App';

describe('Pattern template method CafeAvecAdaptateur', () => {

    it("should be return Portage de l'eau à ébullition", () => {
        let caf = new CafeAvecAdaptateur();
        expect(caf.faireBouillirEau()).toBe("Portage de l'eau à ébullition, ");
    });

    it("should be return Passage du cafe", () => {
        let caf = new CafeAvecAdaptateur();
        expect(caf.preparer()).toBe("Passage du cafe")
    });

    it("should be return Remplissage de la tasse", () => {
        let caf = new CafeAvecAdaptateur();
        expect(caf.verserDansTasse()).toBe("Remplissage de la tasse, ");
    });

    it("should be return Ajout du lait et du sucre", () => {
        let caf = new CafeAvecAdaptateur();
        expect(caf.ajouterSupplements()).toBe("Ajout du lait et du sucre");
    });

});

describe('Pattern template method theAvecAdaptateur', () => {
    it("should be return Portage de l'eau à ébullition, Passage du thé, Remplissage de la tasse, ", () => {
        let app = new App();
        expect(app.main()).toBe("Portage de l'eau à ébullition, Passage du thé, Remplissage de la tasse, ");
    });
});

