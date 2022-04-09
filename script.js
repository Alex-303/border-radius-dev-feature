let box = document.getElementsByClassName('box')[0]
let p = document.getElementsByTagName('p')[0]

function mudaBorderRadio1() {
    let borderRadio = Number(document.getElementsByTagName('input')[0].value)
    let borderRadio1 = Number(document.getElementsByTagName('input')[1].value)
    box.style.borderTopLeftRadius = `${borderRadio}% ${borderRadio1}%`
    return `${borderRadio}% ${borderRadio1}%`
}

function mudaBorderRadio2() {
    let borderRadio = Number(document.getElementsByTagName('input')[2].value)
    let borderRadio1 = Number(document.getElementsByTagName('input')[3].value)
    box.style.borderTopRightRadius = `${borderRadio}% ${borderRadio1}%`
    return `${borderRadio}% ${borderRadio1}%`
}

function mudaBorderRadio3() {
    let borderRadio = Number(document.getElementsByTagName('input')[4].value)
    let borderRadio1 = Number(document.getElementsByTagName('input')[5].value)
    box.style.borderBottomRightRadius = `${borderRadio}% ${borderRadio1}%`
    return `${borderRadio}% ${borderRadio1}%`
}

function mudaBorderRadio4() {
    let borderRadio = Number(document.getElementsByTagName('input')[6].value)
    let borderRadio1 = Number(document.getElementsByTagName('input')[7].value)
    box.style.borderBottomLeftRadius = `${borderRadio}% ${borderRadio1}%`
    return `${borderRadio}% ${borderRadio1}%`
}

function mudaTextoBorder() {
    p.innerText = `border-radius: ${mudaBorderRadio1()} ${mudaBorderRadio2()} / ${mudaBorderRadio3()} ${mudaBorderRadio4()};`
}

function copiar() {
    navigator.clipboard.writeText(p.textContent)
}