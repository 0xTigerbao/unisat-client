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

import { InlineResponse20048Data } from './inline-response20048-data';
import {
    InlineResponse20048Data,
} from ".";

/**
 * 
 *
 * @export
 * @interface InlineResponse20048
 */
export interface InlineResponse20048 {

    /**
     * @type {number}
     * @memberof InlineResponse20048
     */
    code: number;

    /**
     * @type {string}
     * @memberof InlineResponse20048
     */
    msg: string;

    /**
     * @type {InlineResponse20048Data}
     * @memberof InlineResponse20048
     */
    data: InlineResponse20048Data;
}
