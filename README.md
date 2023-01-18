# Вёрстка одностраничного сайта в качестве тестового задания для компании "Формула"



#### Используемые технологии:
+ HTML5/СSS3
+ JavaScript
+ Webpack

##### В проекте реализовано:

+ Адаптивная кроссбраузерная вёрстка страницы согласно макета из Figma
+ Взаимодействие с интерфейсом (hover, focus, animations) согласно макета и там, где не было указано, на свое усмотрение
+ Подключение яндекс карты через iframe
+ Открытие/закрытие pop-up
+ Открытие/закрытие бургер меню (планшет, мобильная версия)

##### Проект загружен на gitPages
https://paulochaser.github.io/formula/

##### Запуск проекта:
```
git clone https://github.com/PauloChaser/formula.git
cd formula
npm i
npm run dev
```

##### Некоторые комментарии по выполненному заданию и ТЗ:
+ Задание выполнено на чистом CSS, а не на SCSS как указано в ТЗ.
+ Модальное окно реализовано не на JQuery, а на чистом JS
+ На странице добавлены Hover и некоторые анимации для большинства элементов, т.к. в макете не было отображено их поведение
+ В секции Контакты в макете использованы свг для иконок, я использовал  иконочные шрифты Awesome. Поэтому есть небольшая разница в иконках.