import { CafeAvecAdaptateur } from './CafeAvecAdaptateur';
import { TheAvecAdaptateur } from './TheAvecAdaptateur';

export class App {

    main() {
        let monThe = new TheAvecAdaptateur();
        return monThe.suivreRecette();
    }
}
