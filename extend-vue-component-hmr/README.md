# Rspack using legacy ts decorator

```ts
// when version is legacy
// type.ts
export type TestType: string;

// index.ts
// should be import { type TestType } from './type'
import { TestType } from './type'

class Test {
  @Prop()
  test?: TestType 
  // throw error
  /** 
 [186:79]
 184 │ _ts_decorate([
 185 │     Prop(),
 186 │     _ts_metadata("design:type", typeof TestType === "undefined" ? Object : TestType)
     ·                                                                                ────────────
 187 │ ], Test.prototype, "test", void 0);
 188 │ Index = _ts_decorate([
**/
}
```

```bash
$ pnpm dev
```