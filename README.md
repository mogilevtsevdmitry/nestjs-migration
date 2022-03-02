# NestJS Миграции


## Описание

Простой пример запуска миграций с использованием одного файла конфигурации `.env` и без дополнительных настроек в модулях проекта

## Установка

```bash
# копируем репозиторий
git clone https://github.com/mogilevtsevdmitry/nestjs-typeorm-migration

# переходим в папку с проектом
cd nestjs-typeorm-migration/

# выполняем установку зависимостей
npm install

# (ОПЦИОНАЛЬНО) накатить миграции
npm run migration:run
```

## Запуск приложения

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

## Запуск миграций

```bash
# создание шаблона миграции
npm run migration:create Name

# создание миграции на основе изменений схемы приложения и сравнения схемы в базе данных
npm run migration:generate Name

# применение миграций
npm run migration:run

# откат последней миграции
npm run migration:down
```
