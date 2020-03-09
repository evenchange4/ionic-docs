import { Component, Element, State, Watch, h } from '@stencil/core';
import store from '../../store';

@Component({
  tag: 'docs-tabs',
  styleUrl: 'tabs.css'
})
export class DocsTabs {
  @State() selected: HTMLDocsTabElement = null;
  @State() tabs: HTMLDocsTabElement[] = [];
  @Element() element: HTMLDocsTabElement;

  storeKey: string;

  componentDidLoad() {
    this.tabs = Array.from(this.element.querySelectorAll('docs-tab'));

    this.tabs.forEach(tab => {
      ['framework', 'runtime'].forEach(key => {
        if (tab.getAttribute('tab').toLowerCase() === store[key].toLowerCase()) {
          this.select(tab);
          this.storeKey = key;
        }
      });
    });

    if (!this.storeKey) {
      this.select(this.tabs.find(t => t.hasAttribute('selected')) || this.tabs[0]);
    }
  }

  select(tab: HTMLDocsTabElement) {
    if (tab != null) {
      if (this.selected != null) {
        this.selected.removeAttribute('selected');
      }

      this.selected = tab;
      this.selected.setAttribute('selected', '');
      store[this.storeKey] = this.selected.getAttribute('tab');
    }
  }

  toTabButton = (tab: HTMLDocsTabElement) => {
    const label = tab.getAttribute('tab');
    const isSelected = this.selected.getAttribute('tab') === label.toLowerCase();
    const buttonClass = {
      'Tabs-button': true,
      'is-selected': isSelected
    };

    return (
      <button
        role="tab"
        aria-selected={isSelected ? 'true' : 'false'}
        onClick={() => this.select(tab)}
        class={buttonClass}>
          {label}
      </button>
    );
  }

  hostData() {
    return {
      role: 'tablist',
      class: {
        'Tabs': true
      }
    };
  }

  render() {
    return [
      <header class="Tabs-header">
        {this.tabs.map(this.toTabButton)}
      </header>,
      <slot/>
    ];
  }
}
