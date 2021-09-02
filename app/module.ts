/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * This is a shared client/server module.
 */

import {html} from 'lit';
import {CustomList} from './component/custom-list.js';

export const initialData = {
    items: ['foo', 'bar', 'qux'],
    name: 'Server'
};

customElements.define('custom-list', CustomList);

export const template = (data: {
    items: string[],
    name: string
}) =>
    html`
        <h4>Custom List Demo:</h4>
        <custom-list name="${data.name}" items="${JSON.stringify(data.items)}"></custom-list>
    `;
