import { BoissonCafeinee } from "./BoissonCafeinee";

export class TheAvecAdaptateur extends BoissonCafeinee {


    preparer() {
        console.log("Passage du thé");
    }

    ajouterSupplements() {
        console.log("Ajout du lait et du sucre");
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