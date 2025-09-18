import { Linter } from "eslint";

// XXX: Workaround to fix type resolution behavior of eslint/config.
// All of the packages depend on the eslint@9.35.0's typedef, which is the most recent one.
// However, somehow the @types/eslint@9.6.1, which is installed as dependency of webpack@5.101.3,
// injects into the type resolution of eslint/config and this leads to type mismatch error.
// Just mimic the type definition of defineConfig with eslint@9.35.0 and everything works fine.
// Remove this when type resolutino behavior is fixed in future versions.
declare module "eslint/config" {
  type InfiniteArray<T> = T | InfiniteArray<T>[];
  type SimpleExtendsElement = string | Linter.Config;
  type ExtendsElement = SimpleExtendsElement | InfiniteArray<Linter.Config>;
  interface ConfigWithExtends extends Linter.Config {
    extends?: ExtendsElement[];
  }
  type ConfigWithExtendsArray = InfiniteArray<ConfigWithExtends>[];
  export function defineConfig(...args: ConfigWithExtendsArray): Linter.Config[];
}
