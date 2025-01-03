module.exports = {
  printWidth: 80,
  tabWidth: 4,
  trailingComma: "all",
  singleQuote: true,
  semi: true,
  importOrder: [
    "^[./node_modules/]",
    "^@controllers/(.*)$",
    "^@services/(.*)$",
    "^@repositories/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ["@trivago/prettier-plugin-sort-imports"],
};
