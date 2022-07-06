// console.log('hello');
// let a = "anabelle";
// let b = "piret";
// console.log(a + " " + b);
// let c = 4;
// let d = 6;
// console.log(c + d)
// console.log(c - d)
// console.log(c * d)
// console.log(c / d)
// console.log(c % d)
// console.log(c ** d)

// if (confirm("confirmer")) {
//     alert("ça marche");
// } else {
//     alert("ça marche pas");
// }

// document.getElementById('id').innerHTML = nom;
// let nom = prompt("votre nom");

// function msg(info) {
//     console.log("bonjour a vous " + info);
// };
// msg(nom);

// let an = prompt("votre âge");

// function age(age) {
//     age++;
//     alert("vous aurez bientôt " + age + " ans");
// }
// age(an);

// let poids = prompt("votre poids?");
// let taille = prompt("votre taille (en cm) ? ");

// function imc(taille, poids) {
//     taille = taille / 100;
//     let result = (poids / (taille * taille)) * 10;
//     result = Math.round(result);
//     result = result / 10;


//     console.log(result);
// }
// imc(taille, poids);

// let heure = prompt("quelle heure est-il?")
// if (heure > 24) {
//     document.getElementById('id').innerHTML = "entrez une heure valide";
// } else if (heure < 0) {
//     document.getElementById('id').innerHTML = "entrez une heure valide";
// } else {
//     if (heure < 12) {
//         document.getElementById('id').innerHTML = "c'est le matin";
//     } else if (heure <= 18 && heure >= 12) {
//         document.getElementById('id').innerHTML = "c'est l'après midi";
//     } else {
//         document.getElementById('id').innerHTML = "c'est le soir";
//     }
// }
// let nom = prompt('saisissez votre prénom');
// nom = nom.toLowerCase();
// switch (nom) {
//     case 'anabelle':
//     case 'fanny':
//     case 'kamella':
//         console.log('vous êtes une femme');
//         break;
//     case 'roman':
//     case 'quentin':
//     case 'gabriel':
//         console.log('vous êtes un homme');
//         break;
//     default:
//         console.log('vous n avez pas entrer de prénom');
// }
// let age = prompt("votre age");
// age < 18 ? console.log("vous êtes mineur") : console.log("vous êtes majeur");

// let i;
// do {
//     i = prompt("votre nom");
//     alert("remplissez votre nom");
// } while (i == "" || i == null);
// console.log(i);

let ennemy = 100;

let sort;
while (sort == "" || sort === null) {
    sort = prompt("choisissez un sort tapez boule de feu ou trait de glace ou  chaine d'éclair");
    if (sort != null) {
        sort = sort.toLowerCase();
    }
}

while (ennemy > 0) {
    try {
        sort = prompt("choisissez un sort tapez boule de feu ou trait de glace ou  chaine d'éclair");
        switch (sort) {
            case 'boule de feu':
                alert("vous avez choisi la boule de feu, vous avez infligé 40pt de dégat");
                ennemy -= 40;

                break;
            case 'trait de glace':
                alert("vous avez choisi le trait de glace, vous avez infligé 35pt de dégat");
                ennemy -= 35;
                break;
            case "chaine d'éclair":
                alert("vous avez choisi la chaine d'éclair, vous avez infligé 25pt de dégat");
                ennemy -= 25;
                break;
            case "blague carambar":
                alert("vous avez choisi la blague carambar, vos ennemis sont mort... de rire!");
                ennemy -= 100;
                break;
            default:
                throw new Error('vous êtes trop faible pour lancer ce sort');
        }
        alert("il reste " + ennemy + " pv au crapaud de la mort!");
    } catch (e) {
        alert(e);
    }
    if (ennemy <= 0) {
        alert("felicitation le crapaud de la mort est....mort?")
    }
}