import Highway from '@dogstudio/highway';
import fade from './transition';

const H = new Highway.Core({
    transitions: {

        home: fade,
        about: fade,
        contact: fade,
    }

});