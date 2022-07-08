switch (17) {
    case 5: // 5 == 2
        console.log("Değer 5'tir");
    case 2: // 2 == 2
        console.log("Değer 2'dir");
        break;
    case 65:
        console.log("Değer 65'tir");
    default:
        console.log("Hiçbir koşul sağlanmadı")
}



-Switch case kullanın birden fazla değişkeni kontrol edin.
function basla()
{
    switch(navigator.platform)
    {
        case "Win32":
        alert("Windows kullanıyorsunuz");
        break;
        case "MacPPC":
        alert("Mac kullanıyorsunuz");
        break;
        default:
        alert("Kullandığınız ortam:" + navigator.platform);
    }
}
