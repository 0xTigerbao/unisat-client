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

import { InlineResponse2002Data } from './inline-response2002-data';
import {
    InlineResponse2002Data,
} from ".";

/**
 * 
 *
 * @export
 * @interface InlineResponse2002
 */
export interface InlineResponse2002 {

    /**
     * @type {number}
     * @memberof InlineResponse2002
     */
    code?: InlineResponse2002CodeEnum;

    /**
     * @type {string}
     * @memberof InlineResponse2002
     * @example OK
     */
    msg?: string;

    /**
     * @type {InlineResponse2002Data}
     * @memberof InlineResponse2002
     */
    data?: InlineResponse2002Data;
}

/**
 * @export
 * @enum {string}
 */
export enum InlineResponse2002CodeEnum {
    NUMBER_0 = 0,
    NUMBER_MINUS_1 = -1
}
