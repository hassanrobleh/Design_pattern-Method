import { BoissonCafeinee } from "./method/BoissonCafeinee";

export class TheAvecAdaptateur extends BoissonCafeinee {

    preparer() {
        return "Passage du thé, ";
    }

    ajouterSupplements() {
        return "Ajout du lait et du sucre";
    }

    clientVeutSupplements(): boolean {
        let reponse = this.getReponseUser();

        if(reponse) {
            return true
        } else {
            return false
        }
    }

    private getReponseUser(): string {
        let reponse: string = "";

        if(reponse == null) {
            return "non";
        }

        return reponse
    }
}