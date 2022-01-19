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
    francesco = {nome: 'francesco', cognome: 'renda', eta: '26'},
    antonio = {nome: 'antonio', cognome: 'pippo', eta: '20' },
    pietro = {nome: 'pietro', cognome: 'ciccio', eta: '21' },
    massimo = {nome: 'massimo', cognome: 'franco', eta: '22'},
]
console.table(classe);

const displayClass = document.getElementById('class-list');

for ( let i = 0; i < classe.length; i++){
   const studente = classe[i];
   let studentInfo = '';
    for (let key in studente){
        studentInfo = studente[0,1];
        console.log(studentInfo);
}
    }
    
   
    // displayClass.innerHTML += `<li></li>`