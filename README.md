<div dir="rtl">

## سیستم عامل 

این کد جاواسکریپت وابسته به هیچ سیستم عاملی نمی باشد و به راحتی میتوان آن را در محیط مرورگر یا نود اجرا کرد

## زبان و تکنولوژی

زبان این کد جاواسکریپت است. همچنین این کد برروی نود ۱۴ و اخرین نسخه مرورگر کروم اجرا و تست شده است


## کتابخانه

هیچ کتابخانه ای در این کد استفاده نشده است

## دیتابیس

در این کد هیچ دیتابیسی استفاده نشده است


## تشریح و توضیح 

آرایه داده شده( سایزهای اشیا) را ایتریت میکنیم، و برای هر ایندکسی، ایندکس های بعد از ان را چک میکنم. یک متغیر یک متغیری در اسکوپ بالای مراحل ایتریت قرار میدهیم که در ان بیشترین تعداد اشیا را ذخیره میکنیم. در چک کردن هر ایندکس و ایندکس های بعد از خود(هر j) تعداد اشیا قرار داده شده را در یک متغیر قرار میدهیم، و چک میکنیم اگر مقدار این متغیر بیشتر از متغیر اسکوپ بالا است یا خیر، اگر بود که مقدار ان را به عنوان تعداد اشیا بیشتر در همان متغیر اسکوپ بالا قرار میدهیم، اگر نبود از ان ایتریت گذر میکنیم و به ایتریت بعدی میرویم و همینگونه ادامه میدهیم تا وقتی که ایتریت ها تمام شود، و ما میتوانیم ببینیم که بیشترین مقدار کدام مقدار است.
* در این کد نوشته شده هم ایندکس مناسب(یا همان j در سوال)  و هم تعداد بیشترین اشیا ذخیر شده از فانکشن calaculate برگردانده میشود.
‍‍
<div dir='ltr'>

```json
{ largestCount: 1, j: 0 }
```

</div>

* برای دادن مقدار های مختلف و تست کردن فانکشن میتوانید مقدار های زیر را به صورت یک ابجکت به فانکشن calculate بدهید

<div dir='ltr'>

```typescript
calculate({ thingsCount: 5, boxesCount: 1, boxesSize: 4, things: [ 4, 2, 3, 4, 1 ] }) // { largestCount: 1, j: 0 } نمونه جواب

/*
    مقدار های مختلف بر اساس سوال

    thingsCount: n تعداد اشیا
    boxesCount: m تعداد جعبه ها
    boxesSize: k اندازه جعبه ها 
    things: [ a1, a2, a3, ..., an ] اندازه های اشیا
/*
```

</div>



##  کامپایلر
به کامپایلر خاصی نیاز ندارد، و در مرورگر یا نودجی اس اجرا میشود

## گیتهاب
لینک گیتهاب [همینجا](https://github.com/aslemammad/fanavard-1399-test) است

## سازنده 
محمد باقر عبیات

</div>