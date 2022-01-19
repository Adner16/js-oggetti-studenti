console.log('js ok');


// 1 Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// 2 Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// 3 Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte).
// 4 Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.
// 5 Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere all’array creato in precedenza, un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età.
// 6 Usiamo il DOM per stampare e chiedere le informazioni all'utente!

const dispalyStudent = document.getElementById('list');

//1 creare un oggetto // 2 stampare a schermo
const student = { nome:'Giovanni', cognome:'renda', eta:'26'};
    console.log(student);
    for (let key in student){
        console.log(key, student[key]);
            dispalyStudent.innerHTML += `<li>${student[key]}</li>`
    }


// 3 creare un arrey di oggetti

const classe = [
    {nome: 'francesco', cognome: 'renda', eta: '26'},
    {nome: 'antonio', cognome: 'pippo', eta: '20' },
    {nome: 'pietro', cognome: 'ciccio', eta: '21' },
    {nome: 'massimo', cognome: 'franco', eta: '22'},
]
console.table(classe);

const displayClass = document.getElementById('class-list');

for ( let i = 0; i < classe.length; i++){
   const studente = classe[i];
        console.log(studente.nome,studente.cognome);
        displayClass.innerHTML += `<li>${studente.nome} ${studente.cognome}</li>`
}


    const newName = prompt('inserisci il nome','peppe');
    const newSurname = prompt('inserisci il cognome','rossi');
    const newAge = prompt("inserisci l'età","30");

    const newMember = { nome: newName, cognome: newSurname, eta: newAge};
    classe.push(newMember);
    console.table(classe);

    let updatedClass = document.getElementById('updated-class');

    for ( let i = 0; i < classe.length; i++){
        const current = classe[i];
        updatedClass.innerHTML += `<li>${current.nome} ${current.cognome}</li>`;
    }

