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

import { BRC20HistoryInscriptionData } from './brc20-history-inscription-data';
import {
    BRC20HistoryInscriptionData,
} from ".";

/**
 * 
 *
 * @export
 * @interface BRC20HistoryInscription
 */
export interface BRC20HistoryInscription {

    /**
     * @type {number}
     * @memberof BRC20HistoryInscription
     */
    confirmations?: number;

    /**
     * @type {BRC20HistoryInscriptionData}
     * @memberof BRC20HistoryInscription
     */
    data?: BRC20HistoryInscriptionData;

    /**
     * @type {string}
     * @memberof BRC20HistoryInscription
     */
    inscriptionId?: string;

    /**
     * @type {number}
     * @memberof BRC20HistoryInscription
     */
    inscriptionNumber?: number;
}
