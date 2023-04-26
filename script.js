const questions = [
    {
        question: "Quelle est la différence entre 'undefined' et 'null' en JavaScript ?",
        reponses: [
            { texte: "Ils sont tous deux équivalents et représentent l'absence de valeur.", correcte: false },
            { texte: "'undefined' est renvoyé lorsqu'une variable n'est pas initialisée, tandis que 'null' est une valeur explicite.", correcte: true },
            { texte: "Ils représentent tous deux une chaîne vide.", correcte: false },
            { texte: "Ils représentent tous deux la valeur 'false'.", correcte: false }
        ]
    },
    {
        question: "Quelle est la différence entre '==' et '===' en JavaScript ?",
        reponses: [
            { texte: "'==' effectue une comparaison stricte, tandis que '===' effectue une comparaison lâche.", correcte: false },
            { texte: "'==' effectue une comparaison lâche, tandis que '===' effectue une comparaison stricte.", correcte: true },
            { texte: "Il n'y a pas de différence entre les deux opérateurs.", correcte: false },
            { texte: "Ils sont utilisés pour des opérations différentes.", correcte: false }
        ]
    },
    {
        question: "Qu'est-ce qu'une closure en JavaScript ?",
        reponses: [
            { texte: "Une fonction qui n'a pas de paramètres.", correcte: false },
            { texte: "Une fonction qui a une portée locale.", correcte: false },
            { texte: "Une fonction qui a accès aux variables de sa fonction parente, même après que la fonction parente a été exécutée.", correcte: true },
            { texte: "Une fonction qui ne renvoie pas de valeur.", correcte: false }
        ]
    },
    {
        question: "Qu'est-ce que la méthode 'map()' en JavaScript ?",
        reponses: [
            { texte: "Une méthode qui convertit un tableau en chaîne de caractères.", correcte: false },
            { texte: "Une méthode qui ajoute un nouvel élément à un tableau.", correcte: false },
            { texte: "Une méthode qui crée un nouveau tableau en appliquant une fonction à chaque élément du tableau d'origine.", correcte: true },
            { texte: "Une méthode qui supprime le dernier élément d'un tableau.", correcte: false }
        ]
    },
    {
        question: "Comment déclarer une variable en JavaScript ?",
        reponses: [
            { texte: "Avec le mot-clé 'let'.", correcte: true },
            { texte: "Avec le mot-clé 'var'.", correcte: true },
            { texte: "Avec le mot-clé 'const'.", correcte: true },
            { texte: "Avec le mot-clé 'new'.", correcte: false }
        ]
    },
    {
        question: "Quelle est la différence entre 'let' et 'var' en JavaScript ?",
        reponses: [
            { texte: "Il n'y a pas de différence.", correcte: false },
            { texte: "'let' est utilisé pour les variables qui ont une portée de bloc, tandisque 'var' a une portée de fonction.", correcte: true },
            { texte: "'var' est utilisé pour les variables qui ont une portée de bloc, tandis que 'let' a une portée de fonction.", correcte: false },
            { texte: "Ils sont utilisés pour des opérations différentes.", correcte: false }
        ]
    },
    {
        question: "Qu'est-ce que l'opérateur ternaire en JavaScript ?",
        reponses: [
            { texte: "Un opérateur qui effectue une opération de comparaison.", correcte: false },
            { texte: "Un opérateur qui renvoie une chaîne de caractères.", correcte: false },
            { texte: "Un opérateur qui permet d'effectuer une opération conditionnelle en une seule ligne de code.", correcte: true },
            { texte: "Un opérateur qui renvoie une valeur booléenne.", correcte: false }
        ]
    },
    {
        question: "Qu'est-ce que l'objet 'window' en JavaScript ?",
        reponses: [
            { texte: "L'objet qui représente le navigateur web.", correcte: false },
            { texte: "L'objet qui représente la page web actuelle.", correcte: false },
            { texte: "L'objet qui représente l'environnement d'exécution JavaScript, c'est-à-dire le navigateur web ou Node.js.", correcte: true },
            { texte: "L'objet qui représente l'utilisateur actuel.", correcte: false }
        ]
    },
    {
        question: "Qu'est-ce que l'opérateur 'typeof' en JavaScript ?",
        reponses: [
            { texte: "Un opérateur qui compare deux valeurs.", correcte: false },
            { texte: "Un opérateur qui renvoie la valeur booléenne 'true' si une variable est définie, sinon 'false'.", correcte: false },
            { texte: "Un opérateur qui renvoie le type de données d'une variable.", correcte: true },
            { texte: "Un opérateur qui ajoute deux nombres ensemble.", correcte: false }
        ]
    },
    {
        question: "Qu'est-ce que l'objet 'JSON' en JavaScript ?",
        reponses: [
            { texte: "Un objet qui permet de manipuler les fichiers JSON.", correcte: false },
            { texte: "Un objet qui permet de manipuler les objets JavaScript.", correcte: false },
            { texte: "Un format de données qui permet d'échanger des données entre un serveur et un client.", correcte: true },
            { texte: "Un objet qui permet de manipuler les chaînes de caractères en JSON.", correcte: false }
        ]
    }, {
        question: "Qu'est-ce que l'opérateur de négation '!' en JavaScript ?",
        reponses: [
            { texte: "Un opérateur qui inverse le signe d'un nombre.", correcte: false },
            { texte: "Un opérateur qui renvoie la valeur booléenne opposée à celle donnée.", correcte: true },
            { texte: "Un opérateur qui permet de concaténer des chaînes de caractères.", correcte: false },
            { texte: "Un opérateur qui permet de diviser deux nombres.", correcte: false }
        ]
    },
    {
        question: "Qu'est-ce que la méthode 'forEach()' en JavaScript ?",
        reponses: [
            { texte: "Une méthode qui renvoie la somme de tous les éléments d'un tableau.", correcte: false },
            { texte: "Une méthode qui crée un nouveau tableau en appliquant une fonction à chaque élément du tableau d'origine.", correcte: false },
            { texte: "Une méthode qui permet d'itérer sur les éléments d'un tableau.", correcte: true },
            { texte: "Une méthode qui renvoie le premier élément d'un tableau.", correcte: false }
        ]
    },
    {
        question: "Qu'est-ce que l'opérateur 'in' en JavaScript ?",
        reponses: [
            { texte: "Un opérateur qui permet de vérifier si une propriété est présente dans un objet.", correcte: true },
            { texte: "Un opérateur qui permet de comparer deux valeurs.", correcte: false },
            { texte: "Un opérateur qui permet d'ajouter une propriété à un objet.", correcte: false },
            { texte: "Un opérateur qui permet de supprimer une propriété d'un objet.", correcte: false }
        ]
    },
    {
        question: "Qu'est-ce que la méthode 'reduce()' en JavaScript ?",
        reponses: [
            { texte: "Une méthode qui crée un nouveau tableau en appliquant une fonction à chaque élément du tableau d'origine.", correcte: false },
            { texte: "Une méthode qui renvoie la somme de tous les éléments d'un tableau.", correcte: false },
            { texte: "Une méthode qui permet de réduire un tableau à une seule valeur en appliquant une fonction à chaque élément.", correcte: true },
            { texte: "Une méthode qui renvoie le premier élément d'un tableau.", correcte: false }
        ]
    },
    {
        question: "Qu'est-ce que l'objet 'Date' en JavaScript ?",
        reponses: [
            { texte: "Un objet qui représente une valeur booléenne.", correcte: false },
            { texte: "Un objet qui représente une chaîne de caractères.", correcte: false },
            { texte: "Un objet qui représente une date et une heure.", correcte: true },
            { texte: "Un objet qui permet de manipuler les tableaux en JavaScript.", correcte: false }
        ]
    },
    {
        question: "Qu'est-ce que l'opérateur de concaténation '+' en JavaScript ?",
        reponses: [
            { texte: "Un opérateur qui ajoute deux nombres ensemble.", correcte: false },
            { texte: "Un opérateur qui renvoie une valeur booléenne.", correcte: false },
            { texte: "Un opérateur qui permet de concaténer deux chaînes de caractères.", correcte: true },
            { texte: "Un opérateur qui permet de soustraire deux nombres.", correcte: false }
        ]
    },
    {
        question: "Qu'est-ce que l'objet 'Math' en JavaScript ?",
        reponses: [
            { texte: "Un objet qui représente une date et une heure.", correcte: false },
            { texte: "Un objet qui permet de manipuler les tableaux en JavaScript.", correcte: false },
            { texte: "Un objet qui fournit des méthodes pour effectuer des opérations mathématiques en JavaScript.", correcte: true },
            { texte: "Un objet qui permet de manipuler les chaînes de caractères en JavaScript.", correcte: false }
        ]
    },
    {
        question: "Qu'est-ce que la méthode 'splice()' en JavaScript ?",
        reponses: [
            { texte: "Une méthode qui renvoie la somme de tous les éléments d'un tableau.", correcte: false },
            { texte: "Une méthode qui ajoute un nouvel élément à un tableau.", correcte: false },
            { texte: "Une méthode qui supprime un élément d'un tableau et ajoute un ou plusieurs éléments à sa place.", correcte: true },
            { texte: "Une méthode qui crée un nouveau tableau en appliquant une fonction à chaque élément du tableau d'origine.", correcte: false }
        ]
    },
    {
        question: "Qu'est-ce que l'opérateur 'instanceof' en JavaScript ?",
        reponses: [
            { texte: "Un opérateur qui permet de vérifier si une variable est de type objet.", correcte: false },
            { texte: "Un opérateur qui permet de vérifier si une variable est de type tableau.", correcte: false },
            { texte: "Un opérateur qui permet de vérifier si un objet est une instance d'une classe spécifique.", correcte: true },
            { texte: "Un opérateur qui permet de vérifier si une variable est de type chaîne de caractères.", correcte: false }
        ]
    },
    {
        question: "Qu'est-ce que la méthode 'Object.keys()' en JavaScript ?",
        reponses: [
            { texte: "Une méthode qui renvoie un tableau contenant les valeurs d'un objet.", correcte: false },
            { texte: "Une méthode qui renvoie un tableau contenant les clés d'un objet.", correcte: true },
            { texte: "Une méthode qui renvoie la somme de tous les éléments d'un tableau.", correcte: false },
            { texte: "Une méthode qui permet de supprimer une propriété d'un objet.", correcte: false }
        ]
    }
];


const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const reponsesElement = document.getElementById('reponses');
const suivantBtn = document.getElementById('suivant-btn');
const scoreElement = document.getElementById('score');

let score = 0;
let questionIndex = 0;

function afficherQuestion(question) {
    questionElement.innerText = question.question;
    reponsesElement.innerHTML = "";
    question.reponses.forEach(reponse => {
        const bouton = document.createElement('button');
        bouton.innerText = reponse.texte;
        bouton.classList.add('btn');
        if (reponse.correcte) {
            bouton.dataset.correcte = reponse.correcte;
        }
        bouton.addEventListener('click', selectionnerReponse);
        reponsesElement.appendChild(bouton);
    });
}

function selectionnerReponse(e) {
    const boutonSelectionne = e.target;
    const correcte = boutonSelectionne.dataset.correcte;
    if (correcte) {
        score++;
        scoreElement.innerText = score;
    }
    Array.from(reponsesElement.children).forEach(bouton => {
        setStatusClass(bouton, bouton.dataset.correcte);
    });
    if (questionIndex < questions.length - 1) {
        suivantBtn.classList.remove('invisible');
    } else {
        suivantBtn.innerText = 'Terminer';
    }
}

function setStatusClass(element, correcte) {
    effacerStatusClass(element);
    if (correcte) {
        element.classList.add('correct');
    } else {
        element.classList.add('incorrect');
    }
}

function effacerStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('incorrect');
}

afficherQuestion(questions[questionIndex]);

suivantBtn.addEventListener('click', () => {
    questionIndex++;
    if (questionIndex < questions.length) {
        afficherQuestion(questions[questionIndex]);
    } else {
        questionContainer.classList.add('invisible');
        suivantBtn.classList.add('invisible');
        const resultatElement = document.getElementById('resultat');
        resultatElement.innerText = `Votre score est de ${score}/${questions.length}`;
        resultatElement.classList.remove('invisible');
        if (score === questions.length) {
            resultatElement.classList.add('success');
        } else {
            resultatElement.classList.add('failure');
        }
    }
});

