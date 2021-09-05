import { BoissonCafeinee } from "./method/BoissonCafeinee";

export class CafeAvecAdaptateur extends BoissonCafeinee {
    preparer() {
        return "Passage du cafe";
    }

    ajouterSupplements() {
        return "Ajout du lait et du sucre";
    }

    clientVeutSupplements(): boolean {
        let response = this.getReponseUser("oui");

        if(response.toLowerCase().startsWith("o")) {
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