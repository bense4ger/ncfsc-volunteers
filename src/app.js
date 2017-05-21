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
                    render: h => h(App),
                    created() {
                        $(document).foundation();
                    }
                });
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

