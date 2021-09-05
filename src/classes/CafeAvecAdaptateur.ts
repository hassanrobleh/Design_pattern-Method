import { BoissonCafeinee } from "./BoissonCafeinee";

export class CafeAvecAdaptateur extends BoissonCafeinee {


    preparer() {
        console.log("Passage du cafe");
    }

    ajouterSupplements() {
        console.log("Ajout du lait et du sucre");
    }

    clientVeutSupplements(): boolean {

        let reponse = this.getReponseUser("n");

        if(reponse.toLowerCase().startsWith("o")) {
            return true
        } else {
            return false
        }

    }

    private getReponseUser(response: string): string {


        if(response == null) {
            return "non";
        }

        return response;

    }
}