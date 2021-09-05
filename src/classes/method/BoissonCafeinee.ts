export abstract class BoissonCafeinee {

    suivreRecette() {
        let result = "";
        result += this.faireBouillirEau();
        result += this.preparer();
        result += this.verserDansTasse();
        if(this.clientVeutSupplements()) {
            result += this.ajouterSupplements();
        }

        return result;
    } 

    abstract preparer(): string;
    abstract ajouterSupplements(): string;

    faireBouillirEau(): string {
        return "Portage de l'eau à ébullition, ";
    }

    verserDansTasse(): string {
        return "Remplissage de la tasse, ";
    }

    clientVeutSupplements(): boolean {
        return true;
    }


}