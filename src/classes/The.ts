import { BoissonCafeinee } from "./method/BoissonCafeinee";

export class The extends BoissonCafeinee {

    preparer() {
        return "Infusion du thé";
    }

    ajouterSupplements() {
        return "Ajout du citron";
    }
}