---
title: "ion-ripple-effect"
hide_table_of_contents: true
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TOCInline from '@theme/TOCInline';

import Props from '@site/static/auto-generated/ripple-effect/props.md';
import Events from '@site/static/auto-generated/ripple-effect/events.md';
import Methods from '@site/static/auto-generated/ripple-effect/methods.md';
import Parts from '@site/static/auto-generated/ripple-effect/parts.md';
import CustomProps from '@site/static/auto-generated/ripple-effect/custom-props.md';
import Slots from '@site/static/auto-generated/ripple-effect/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<head>
  <title>ion-ripple-effect | Ripple Effect Button Component for Ionic Apps</title>
  <meta name="description" content="The ripple effect button component adds the Material Design ink ripple interaction effect. It can only be used in an ion-app and can be added to any component." />
</head>

<EncapsulationPill type="shadow" />

<h2 className="table-of-contents__title">Contents</h2>

<TOCInline
  toc={toc}
  maxHeadingLevel={2}
/>



The ripple effect component adds the [Material Design ink ripple interaction effect](https://material.io/develop/web/supporting/ripple). This component can only be used inside of an `<ion-app>` and can be added to any component.

It's important to note that the parent should have [relative positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/position) because the ripple effect is absolutely positioned and will cover the closest parent with relative positioning. The parent element should also be given the `ion-activatable` class, which tells the ripple effect that the element is clickable.

The default type, `"bounded"`, will expand the ripple effect from the click position outwards. To add a ripple effect that always starts in the center of the element and expands in a circle, add an `"unbounded"` type. It's recommended to add `overflow: hidden` to the parent element to avoid the ripple overflowing its container, especially with an unbounded ripple.



## Usage

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-app>
  <ion-content>
    <div class="ion-activatable ripple-parent">
      A plain div with a bounded ripple effect
      <ion-ripple-effect></ion-ripple-effect>
    </div>

    <button class="ion-activatable ripple-parent">
      A button with a bounded ripple effect
      <ion-ripple-effect></ion-ripple-effect>
    </button>

    <div class="ion-activatable ripple-parent">
      A plain div with an unbounded ripple effect
      <ion-ripple-effect type="unbounded"></ion-ripple-effect>
    </div>

    <button class="ion-activatable ripple-parent">
      A button with an unbounded ripple effect
      <ion-ripple-effect type="unbounded"></ion-ripple-effect>
    </button>
  </ion-content>
</ion-app>
```

```css
.ripple-parent {
  position: relative;
  overflow: hidden;
}
```

</TabItem>


<TabItem value="javascript">

```html
<ion-app>
  <ion-content>
    <div class="ion-activatable ripple-parent">
      A plain div with a bounded ripple effect
      <ion-ripple-effect></ion-ripple-effect>
    </div>

    <button class="ion-activatable ripple-parent">
      A button with a bounded ripple effect
      <ion-ripple-effect></ion-ripple-effect>
    </button>

    <div class="ion-activatable ripple-parent">
      A plain div with an unbounded ripple effect
      <ion-ripple-effect type="unbounded"></ion-ripple-effect>
    </div>

    <button class="ion-activatable ripple-parent">
      A button with an unbounded ripple effect
      <ion-ripple-effect type="unbounded"></ion-ripple-effect>
    </button>
  </ion-content>
</ion-app>
```

```css
.ripple-parent {
  position: relative;
  overflow: hidden;
}
```

</TabItem>


<TabItem value="react">

```tsx
import React from 'react';
import { IonApp, IonContent, IonRippleEffect } from '@ionic/react';
import './RippleEffectExample.css';

export const RippleExample: React.FC = () => (
  <IonApp>
   <IonContent>
      <div className="ion-activatable ripple-parent">
        A plain div with a bounded ripple effect
        <IonRippleEffect></IonRippleEffect>
      </div>

      <button className="ion-activatable ripple-parent">
        A button with a bounded ripple effect
        <IonRippleEffect></IonRippleEffect>
      </button>

      <div className="ion-activatable ripple-parent">
        A plain div with an unbounded ripple effect
        <IonRippleEffect type="unbounded"></IonRippleEffect>
      </div>

      <button className="ion-activatable ripple-parent">
        A button with an unbounded ripple effect
        <IonRippleEffect type="unbounded"></IonRippleEffect>
      </button>
    </IonContent>
  </IonApp>
);
```

```css
.ripple-parent {
  position: relative;
  overflow: hidden;
}
```

</TabItem>


<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'ripple-effect-example',
  styleUrl: 'ripple-effect-example.css'
})
export class RippleEffectExample {
  render() {
    return [
      <ion-app>
        <ion-content>
          <div class="ion-activatable ripple-parent">
            A plain div with a bounded ripple effect
            <ion-ripple-effect></ion-ripple-effect>
          </div>

          <button class="ion-activatable ripple-parent">
            A button with a bounded ripple effect
            <ion-ripple-effect></ion-ripple-effect>
          </button>

          <div class="ion-activatable ripple-parent">
            A plain div with an unbounded ripple effect
            <ion-ripple-effect type="unbounded"></ion-ripple-effect>
          </div>

          <button class="ion-activatable ripple-parent">
            A button with an unbounded ripple effect
            <ion-ripple-effect type="unbounded"></ion-ripple-effect>
          </button>
        </ion-content>
      </ion-app>
    ];
  }
}
```

```css
.ripple-parent {
  position: relative;
  overflow: hidden;
}
```

</TabItem>


<TabItem value="vue">

```html
<template>
  <ion-app>
    <ion-content>
      <div class="ion-activatable ripple-parent">
        A plain div with a bounded ripple effect
        <ion-ripple-effect></ion-ripple-effect>
      </div>

      <button class="ion-activatable ripple-parent">
        A button with a bounded ripple effect
        <ion-ripple-effect></ion-ripple-effect>
      </button>

      <div class="ion-activatable ripple-parent">
        A plain div with an unbounded ripple effect
        <ion-ripple-effect type="unbounded"></ion-ripple-effect>
      </div>

      <button class="ion-activatable ripple-parent">
        A button with an unbounded ripple effect
        <ion-ripple-effect type="unbounded"></ion-ripple-effect>
      </button>
    </ion-content>
  </ion-app>
</template>

<style>
  .ripple-parent {
    position: relative;
    overflow: hidden;
  }
</style>

<script>
import { IonApp, IonContent, IonRippleEffect } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonApp, IonContent, IonRippleEffect }
});
</script>
```

</TabItem>

</Tabs>

## Properties
<Props />

## Events
<Events />

## Methods
<Methods />

## CSS Shadow Parts
<Parts />

## CSS Custom Properties
<CustomProps />

## Slots
<Slots />