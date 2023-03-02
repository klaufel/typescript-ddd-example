# 😈 TypeScript DDD example

A TypeScript DDD example is a skeleton of contain all business logic to be used in the application.

## 👩‍💻 Use domain

```js
import domain from "@typescript-ddd-example";

await domain.get("get_carrier_list_use_case").execute(/* params */);
```

All `execute` methods will return promises to be more consistent.

## 🔬 Test

`pnpm run domain:test`
`pnpm run domain:test:ci`

## 🗂 Conventions

### Folder structure

```
- domain
  ├── src
  │   ├── contexts
  │   │   └── [context]
  │   │       ├── entities
  │   │       │   ├── factory.ts
  │   │       │   └── [Entity].ts
  │   │       ├── mappers
  │   │       │   ├── factory.ts
  │   │       │   └── [Mapper].ts
  │   │       ├── repository
  │   │       │   ├── factory.ts
  │   │       │   └── [Repository].ts
  │   │       ├── services
  │   │       │   ├── factory.ts
  │   │       │   └── [Service].ts
  │   │       ├── useCases
  │   │       │   ├── factories
  │   │       │   │   └── [useCaseFactory].ts
  │   │       │   └── [UseCase].ts
  │   │       └── valueObjects
  │   │           ├── factories
  │   │           └── [valueObject].ts
  │   └── index.ts
  └── test
      ├── contexts
      │   └── [context]
      │       └── [useCase].spec.ts
      └── fixtures
          └── [context]
              └── [useCase|Feature].ts
```
