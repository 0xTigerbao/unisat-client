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

import { InlineResponse20010Data } from './inline-response20010-data';
import {
    InlineResponse20010Data,
} from ".";

/**
 * 
 *
 * @export
 * @interface InlineResponse20010
 */
export interface InlineResponse20010 {

    /**
     * @type {number}
     * @memberof InlineResponse20010
     */
    code?: InlineResponse20010CodeEnum;

    /**
     * @type {string}
     * @memberof InlineResponse20010
     * @example OK
     */
    msg?: string;

    /**
     * @type {InlineResponse20010Data}
     * @memberof InlineResponse20010
     */
    data?: InlineResponse20010Data;
}

/**
 * @export
 * @enum {string}
 */
export enum InlineResponse20010CodeEnum {
    NUMBER_0 = 0,
    NUMBER_MINUS_1 = -1
}

