/* tslint:disable */
/* eslint-disable */
/**
 * UniSat Wallet - OpenAPI
 * This is UniSat Wallet Open API. If you wish to use the OpenAPI, please feel free to send us an email, and we will provide you with an API KEY.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: contact@unisat.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import {
    
} from ".";

/**
 * 
 *
 * @export
 * @interface InscriptionEvent
 */
export interface InscriptionEvent {

    /**
     * false: a mint event; true: a transfer event
     *
     * @type {boolean}
     * @memberof InscriptionEvent
     */
    isTransfer?: boolean;

    /**
     * @type {string}
     * @memberof InscriptionEvent
     */
    inscriptionId?: string;

    /**
     * @type {number}
     * @memberof InscriptionEvent
     */
    inscriptionNumber?: number;

    /**
     * current address
     *
     * @type {string}
     * @memberof InscriptionEvent
     */
    address?: string;

    /**
     * only present when it's a mint event
     *
     * @type {string}
     * @memberof InscriptionEvent
     */
    contentBody?: string;

    /**
     * only present when it's a mint event
     *
     * @type {string}
     * @memberof InscriptionEvent
     */
    contentType?: string;

    /**
     * total input satoshi in tx
     *
     * @type {number}
     * @memberof InscriptionEvent
     */
    inSatoshi?: number;

    /**
     * total output satoshi in tx
     *
     * @type {number}
     * @memberof InscriptionEvent
     */
    outSatoshi?: number;

    /**
     * @type {string}
     * @memberof InscriptionEvent
     */
    pkScript?: string;

    /**
     * satoshi in inscription
     *
     * @type {number}
     * @memberof InscriptionEvent
     */
    satoshi?: number;

    /**
     * block timestamp
     *
     * @type {number}
     * @memberof InscriptionEvent
     */
    timestamp?: number;

    /**
     * inscription genesis txid
     *
     * @type {string}
     * @memberof InscriptionEvent
     */
    txid?: string;

    /**
     * inscription genesis vout
     *
     * @type {number}
     * @memberof InscriptionEvent
     */
    i?: number;

    /**
     * tx vout
     *
     * @type {number}
     * @memberof InscriptionEvent
     */
    vout?: number;

    /**
     * @type {number}
     * @memberof InscriptionEvent
     */
    sequence?: number;

    /**
     * @type {number}
     * @memberof InscriptionEvent
     */
    height?: number;

    /**
     * tx index in block
     *
     * @type {number}
     * @memberof InscriptionEvent
     */
    txidx?: number;
}
