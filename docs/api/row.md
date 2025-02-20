---
title: "ion-row"
hide_table_of_contents: true
---
import TOCInline from '@theme/TOCInline';

import Props from '@site/static/auto-generated/row/props.md';
import Events from '@site/static/auto-generated/row/events.md';
import Methods from '@site/static/auto-generated/row/methods.md';
import Parts from '@site/static/auto-generated/row/parts.md';
import CustomProps from '@site/static/auto-generated/row/custom-props.md';
import Slots from '@site/static/auto-generated/row/slots.md';

<head>
  <title>ion-row: Horizontal Row Components and Alignment | Ionic API Docs</title>
  <meta name="description" content="Rows are horizontal components of the grid system and contain varying numbers of columns. Read our ion-row API Docs for more information on alignment and usage." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

<h2 className="table-of-contents__title">Contents</h2>

<TOCInline
  toc={toc}
  maxHeadingLevel={2}
/>



Rows are horizontal components of the [grid](grid.md) system and contain varying numbers of
[columns](col.md). They ensure the columns are positioned properly.

See [Grid Layout](/docs/layout/grid) for more information.


## Row Alignment

By default, columns will stretch to fill the entire height of the row and wrap when necessary. Rows are [flex containers](https://developer.mozilla.org/en-US/docs/Glossary/Flex_Container), so there are several [CSS classes](/docs/layout/css-utilities#flex-container-properties) that can be applied to a row to customize this behavior.




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