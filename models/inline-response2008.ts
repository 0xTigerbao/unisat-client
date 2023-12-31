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

import { InlineResponse2008Data } from './inline-response2008-data';
import {
    InlineResponse2008Data,
} from ".";

/**
 * 
 *
 * @export
 * @interface InlineResponse2008
 */
export interface InlineResponse2008 {

    /**
     * @type {number}
     * @memberof InlineResponse2008
     */
    code?: InlineResponse2008CodeEnum;

    /**
     * @type {string}
     * @memberof InlineResponse2008
     * @example OK
     */
    msg?: string;

    /**
     * @type {InlineResponse2008Data}
     * @memberof InlineResponse2008
     */
    data?: InlineResponse2008Data;
}

/**
 * @export
 * @enum {string}
 */
export enum InlineResponse2008CodeEnum {
    NUMBER_0 = 0,
    NUMBER_MINUS_1 = -1
}

