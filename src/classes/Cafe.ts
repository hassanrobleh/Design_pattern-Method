import { BoissonCafeinee } from "./BoissonCafeinee";

export class Cafe extends BoissonCafeinee {

    preparer() {
        console.log("Passage du cafe");
    }

    ajouterSupplements() {
        console.log("Ajout du lait et du sucre");
    }

}