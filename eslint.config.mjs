import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript'],
    rules: {
      "@typescript-eslint/no-empty-interface": "off",
      // 필요하다면 아래도 추가 가능
      // "@typescript-eslint/no-empty-object-type": "off",
    },
  }),
]

export default eslintConfig;
