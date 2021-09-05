import { BoissonCafeinee } from "./method/BoissonCafeinee";

export class Cafe extends BoissonCafeinee {

    preparer() {
        return "Passage du cafe";
    }

    ajouterSupplements() {
        return "Ajout du lait et du sucre";
    }

}