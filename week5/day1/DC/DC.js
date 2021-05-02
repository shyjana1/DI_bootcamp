function getJSON() {
    let frm = document.forms.frm
    frm.addEventListener("submit", e => {
        e.preventDefault()
    })
    let firstname = frm.fname.value;
    let lastname = frm.lname.value;
    let obj = {
        firstname,
        lastname
    }
    console.log(obj);

    console.log(JSON.stringify(obj));
    obj = JSON.stringify(obj)
    let prs = JSON.parse(obj)
    console.log(prs);
    document.getElementById("result").innerHTML = (prs.firstname + " " + prs.lastname)
}