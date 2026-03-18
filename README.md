# graphmind

**Client-side knowledge graph creator with interactive visualization and built-in Graph RAG Agent**

![Build](https://img.shields.io/badge/build-passing-brightgreen) ![License](https://img.shields.io/badge/license-proprietary-red)

## Install
```bash
npm install
```

## Quick Start
```typescript
import { Graphmind } from "./graphmind";
const instance = new Graphmind()
const r = await instance.addnode({ input: 'test' })
```

## CLI
```bash
npx tsx src/cli.ts status
npx tsx src/cli.ts run --input "data"
```

## API
| Method | Description |
|--------|-------------|
| `addnode()` | Addnode |
| `addedge()` | Addedge |
| `query()` | Query |
| `traverse()` | Traverse |
| `findpath()` | Findpath |
| `extractentities()` | Extractentities |

## Test
```bash
npx vitest
```

## License
(c) 2026 Officethree Technologies. All Rights Reserved.
