/**
 * Created by benseager on 10/05/2017.
 */
'use strict';
import * as $ from 'jquery';
import {Promise} from 'es6-promise';

export const create = () => {
    return {
        fetchData: () => {
            return new Promise((resolve, reject) => {
                $.ajax({
                    url: 'volunteers.json',
                    method: 'GET',
                    dataType: 'json',
                    beforeSend: () => {
                        //TODO: Global pub-sub events/messaging
                    },
                    success: (data) => {
                        try {
                            resolve(data);
                        } catch (err) {
                            reject({err});
                        }
                    },
                    error: (xhr, status, err) => {
                        reject({ xhr, status, err });
                    }
                });
            });
        }
    }
};