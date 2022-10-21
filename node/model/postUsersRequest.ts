/**
 * dots api
 * Scalable and Flexible Payouts Infrastructure
 *
 * The version of the OpenAPI document: 1.0
 * Contact: info@dots.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class PostUsersRequest {
    /**
    * The user\'s first name.
    */
    'firstName': any | null;
    /**
    * The user\'s last name.
    */
    'lastName': any | null;
    /**
    * The user\'s email address.
    */
    'email': any | null;
    /**
    * The user\'s phone number country code. e.g. \"1\"
    */
    'countryCode': any | null;
    /**
    * The user\'s phone number. e.g. \"4157223331\"
    */
    'phoneNumber': any | null;
    /**
    * Username to assign the user.
    */
    'username'?: any | null;
    /**
    * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
    */
    'metadata'?: any | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "firstName",
            "baseName": "first_name",
            "type": "any"
        },
        {
            "name": "lastName",
            "baseName": "last_name",
            "type": "any"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "any"
        },
        {
            "name": "countryCode",
            "baseName": "country_code",
            "type": "any"
        },
        {
            "name": "phoneNumber",
            "baseName": "phone_number",
            "type": "any"
        },
        {
            "name": "username",
            "baseName": "username",
            "type": "any"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "any"
        }    ];

    static getAttributeTypeMap() {
        return PostUsersRequest.attributeTypeMap;
    }
}

