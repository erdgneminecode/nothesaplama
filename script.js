function ortalama(vize, final)
{

    var sonuc = (vize * 0.4) + (final * 0.6);
    return sonuc;

}

function hesapla()
{

    var gecici_vize = document.getElementById("input_vize").value;
    var gecici_final = document.getElementById("input_final").value;

    var sonuc = ortalama(gecici_vize, gecici_final);

    document.getElementById("div_sonuc").innerText = sonuc;

    

}
