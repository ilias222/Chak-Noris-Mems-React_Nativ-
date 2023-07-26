<header>
<img src="https://github.com/ilias222/test-readi/blob/main/chak-banner.png?raw=true" alt="Что то пошло не так. Это баннер!" align="center">

<div>
<h3 align="center">Это пробный проект React Native</h3>
<p align="center">Все материалы - картинки и иллюстрации, тексты и т.п. 
<span>Использованны для учебных целей, и не имеют цели извлечения материальной выгоды, прибыли и т.п.</span>
<br>
<br>
</p>
<div>
</header>
<br>
<br>
<section align="left">
<div>
<p>
Приложение основанно на двух API:
<ul>
<li>
API - генератор шуток Чака Норриса (url: https://api.chucknorris.io);
</li>
<li>
API - Google переводчика (url: https://rapidapi.com)
</li>
</ul>
</p>
</div>
<br>
<br>

<hr>
<p>
Для работы с API Google переводчика - нужен API key.
<br>

**Получить** такой можно по адрессу: https://rapidapi.com/sibaridev/api/rapid-translate-multi-traduction
</p>
<p>

**Имеется рабочий APK файл.**
P.S. Он не подписан, так что требуется выслущать гневные предупреждения Android.

</p>
<hr>
</section>


<section>
<div>
<p>

**Cейчас** я начал создание своего, мини переводчика. Эта часть кода, получила еще - Очень мало внимания.
По крайней мере это работает еще не так как задумывалось. Так, что он может показаться не достаточно "корректным"

<br>
</p>
<div>
<p>

```javascript
export function APIAhuckTranslate(api){         //Получаем строку текста
    if(api){
        let arrText = api.split(' ');           //Разбиваем ее на массив и ищем в таблице переводов

        arrText.forEach((item, index) => {
            if(dbEnRu[item]){
                arrText[index] = dbEnRu[item];
            }
        });
        return arrText.join(' ');
    }
```

</p>
<div>
</div>
</section>

<br><br>
<section>
<h2>



Запуск

</h2>
<hr>

<ul>
<li>

**Скачиваем репозиторий:** git@github.com:ilias222/test-readi.git

</li>
<li>

**Устанавливаем node mudule:** ``npm install``

</li>
<li>

**Запускаем для андройд:** ``npx expo start``

</li>
</ul>

<hr>

**Для запуска на смартфоне** (проверенно на системе Android) устанавливаем на дивайсе
**Expo Go**

Запустить можно через package.json

**Для запуска скрина экрана дивайса**, использовался: scrcpy

Скачать можно сдесь: https://github.com/Genymobile/scrcpy/releases

Перед запуском, проверить наличие java пакета: https://www.java.com/ru/

<hr>
</section>
