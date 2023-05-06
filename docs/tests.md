## Тесты

В проекте используются 4 вида тестов:
1) Обычные unit тесты на jest - `npm run test:unit`
2) Тесты на компоненты с React testing library -`npm run test:unit`
3) Скриншотное тестирование с loki `npm run test:ui`
4) e2e тестирование с Cypress `npm run test:e2e`

Для запуска ЛОКИ испольовал статью
https://github.com/oblador/loki/issues/436

Go to the @loki/browser library. Find a file get-stories.js . You need to make the getStories function async and add a line 
await window.__STORYBOOK_CLIENT_API__.storyStore.cacheAllCSVfiles(); before return