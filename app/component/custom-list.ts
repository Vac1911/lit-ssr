import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';

export class CustomList extends LitElement {
    @property({type: Array})
    items = [];

    @property({type: String})
    name = '';

    override render() {
        return html`
            <p>Hello ${this.name}!</p>
            <p>List of ${this.items.length} Items:</p>
            <ul>
                ${this.items.map(
                    (item, index) =>
                        html`
                            <li>${index}: ${item}</li>
                        `
                )}
            </ul>
        `;
    }
}