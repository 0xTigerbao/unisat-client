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

import { InlineResponse20023Data } from './inline-response20023-data';
import {
    InlineResponse20023Data,
} from ".";

/**
 * 
 *
 * @export
 * @interface InlineResponse20023
 */
export interface InlineResponse20023 {

    /**
     * @type {number}
     * @memberof InlineResponse20023
     */
    code: number;

    /**
     * @type {string}
     * @memberof InlineResponse20023
     */
    msg: string;

    /**
     * @type {InlineResponse20023Data}
     * @memberof InlineResponse20023
     */
    data: InlineResponse20023Data;
}
