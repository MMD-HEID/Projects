const show = document.getElementById('dateDisplay');
const btn = document.getElementById("chnDate");

btn.addEventListener("click", () => {
    const currentDate = new Date();
    const gregorianYear = currentDate.getFullYear();
    const gregorianMonth = currentDate.getMonth() + 1;
    const gregorianDay = currentDate.getDate();

    // محاسبه تعداد روزهای گذشته از مبدأ
    const daysPassed = ((gregorianYear - 1) * 365) + ((gregorianMonth - 1) * 31) + gregorianDay + 150;
    const shamsiDays = daysPassed - 226899;

    // محاسبه سال، ماه و روز شمسی
    const shamsiYear = Math.floor(shamsiDays / 365) + 1;
    const remainingDays = shamsiDays % 365;
    const shamsiMonth = Math.floor(remainingDays / 30) + 1;
    const shamsiDay = remainingDays % 30;

    // نمایش تاریخ شمسی
    show.innerHTML = `${shamsiYear}/${shamsiMonth.toString().padStart(2, '0')}/${shamsiDay.toString().padStart(2, '0')}`;
});
