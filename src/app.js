/**
 * Created by benseager on 08/05/2017.
 */
'use strict';
import $ from 'jquery';
import * as volunteerService from './services/volunteer-service';
import App from './components/app.vue';

const appKey = 'ncfscVolunteers';

const store = {
    volunteers: [],
    baseImagePath: undefined
};

class AppLoader {
    constructor(volunteerService) {
        this.volunteerService = volunteerService;
    }

    initialise() {

        this.volunteerService.fetchData()
            .then((data) => {
                store.volunteers = data.volunteers;
                store.baseImagePath = data.imagePath;

                new Vue({
                    el: '#app',
                    render: h => h(App)
                });


                //TODO: Get rid of the jquery selectors.  Replace by passing stuff to the vue
                setTimeout(() => {
                    $('div.volunteer').addClass('initial');
                }, 500);

                setTimeout(() => {
                    $('div.volunteer').each((ix, el) => {
                        const $el = $(el);
                        $el.addClass(`vol-${$el.data('index')}`);
                    });
                }, 2250);
            })
            .catch((err) => {
                //TODO: Global Error Handling
            });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if(!window[appKey]) {
        window['store'] = store;
        window[appKey] = new AppLoader(volunteerService.create());
    }

    window[appKey].initialise();
});

