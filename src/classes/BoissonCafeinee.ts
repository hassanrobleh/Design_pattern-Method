export abstract class BoissonCafeinee {

    public readonly suivreRecette = () => {
        this.faireBouillirEau();
        this.preparer();
        this.verserDansTasse();
        if(this.clientVeutSupplements()) {
            this.ajouterSupplements();
        }
    } 

    abstract preparer(): void;
    abstract ajouterSupplements(): void;

    faireBouillirEau() {
        console.log("Portage de l'eau à ébullition");
    }

    verserDansTasse() {
        console.log("Remplissage de la tasse")
    }

    clientVeutSupplements() {
        return true;
    }


}