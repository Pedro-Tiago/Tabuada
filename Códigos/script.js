function verificar(){
    let num = document.getElementById('numero')
    let tab = document.getElementById('selecttabuada')
    if(num.value.length == 0){
        alert('Erro, preencha o campo!')
    }else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ""
        while(c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}