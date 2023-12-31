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

import { InlineResponse20022Data } from './inline-response20022-data';
import {
    InlineResponse20022Data,
} from ".";

/**
 * 
 *
 * @export
 * @interface InlineResponse20022
 */
export interface InlineResponse20022 {

    /**
     * @type {number}
     * @memberof InlineResponse20022
     */
    code?: InlineResponse20022CodeEnum;

    /**
     * @type {string}
     * @memberof InlineResponse20022
     * @example OK
     */
    msg?: string;

    /**
     * @type {InlineResponse20022Data}
     * @memberof InlineResponse20022
     */
    data?: InlineResponse20022Data;
}

/**
 * @export
 * @enum {string}
 */
export enum InlineResponse20022CodeEnum {
    NUMBER_0 = 0,
    NUMBER_MINUS_1 = -1
}

