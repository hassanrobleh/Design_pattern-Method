import { CafeAvecAdaptateur } from './CafeAvecAdaptateur';
import { TheAvecAdaptateur } from './TheAvecAdaptateur';
import { The } from './The';
export class App {

    main() {

        let monThe = new TheAvecAdaptateur();
        let monCafe = new CafeAvecAdaptateur();

        console.log("\nPréparation du thé...")
        monThe.suivreRecette();
        
        console.log("\nPréparation du cafe...")
        monCafe.suivreRecette()

        // monThe.faireBouillirEau();
        // monThe.preparer();
        // monThe.verserDansTasse();
        // monThe.ajouterSupplements();

    }



}

let app = new App();
app.main();