import { BoissonCafeinee } from "./BoissonCafeinee";

export class The extends BoissonCafeinee {

    preparer() {
        console.log("Infusion du thé");
    }

    ajouterSupplements() {
        console.log("Ajout du citron");
    }
}