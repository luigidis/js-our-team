// console.log('yo');
let ulEl = document.querySelector('.list');
console.log(ulEl);

const team = [
    {
        nome: 'Wayne Barnett',
        role: 'Founder & CEO',
        img: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        nome: 'Angela Caroll',
        role: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg',
    },
    {
        nome: 'Walter Gordon',
        role: 'Office Manager',
        img: 'walter-gordon-office-manager.jpg',
    },
    {
        nome: 'Angela Lopez',
        role: 'Social Media Manager',
        img: 'angela-lopez-social-media-manager.jpg',
    },
    {
        nome: 'Scott Estrada',
        role: 'Developer',
        img: 'scott-estrada-developer.jpg',
    },
    {
        nome: 'Scott Estrada',
        role: 'Graphic Designer',
        img: 'barbara-ramos-graphic-designer.jpg',
    },
]
// console.log(team.length);

for (let i = 0; i < team.length; i++) {
    const nome = team[i].nome;
    const role = team[i].role;
    const img = team[i].img;
    console.log(`Nome: ${nome}\n` + `Role: ${role}\n` + `url: ${img}`);
    ulEl.innerHTML += `<li>Nome: ${nome},\n` + `Role: ${role},\n` + `url: ${img}</li>`;
}

