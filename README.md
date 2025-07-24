# flex-types

A collection of typescript utility types.

> Some types are meant to be used to create more types and are not for everyday use.

## Installation

> pnpm

```bash
pnpm add flex-types -D
```

> yarn

```bash
yarn add flex-types -D
```

## Usage

You can visit [the doc website] (*Not ready yet*) for detailed documentation.

### import

You can import the types you need from the root index file or the sub-modules.

```ts
import type { UpperFirst } from "flex-types"; // or "flex-types/string"

type Action = "buy" | "sell" | "cancel";

type Handlers = {
  [Key in Action as `on${UpperFirst<Key>}`]: () => void;
};
// {
//   onBuy: () => void;
//   onSell: () => void;
//   onCancel: () => void;
// }
```

### `types.d.ts`

To use everyday types without import, you can use a `*.d.ts` file like this:

> `types.d.ts`

```ts
/// <reference types="flex-types/global" />
```

Now you can use some types without import:

```ts
type A = UpperFirst<"nice">; // "Nice"
type B = List<"nice">; // "nice"[]
type C = Func<[index: number], boolean>; // (index: number) => boolean
```

For a list of the available types, you can [visit this page] (*Not ready yet*).
