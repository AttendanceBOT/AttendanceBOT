# Documentation pour installer le projet


## Prérequis

1. Le lien de notre [GitHub AttendanceBot](https://github.com/AttendanceBOT/AttendanceBOT).
1. Un logiciel d'édition de code/texte : IntelliJ, Visual Studio Code, Notepad++, etc.
1. Avoir le logiciel Discord installé depuis le [site officiel](https://discord.com/download).


## Étape 1 - Installation de l'environnement

Dans votre terminal d'éditeur de code ou dans un terminal Windows, tapez :
1. _git clone https://github.com/AttendanceBOT/AttendanceBOT.git_ --> récupère le projet Git à l'emplacement où vous vous situez.
1. _npm install -g npm_ --> installe NodeJS.
1. _npm install -g typescript_ --> installe TypeScript.
1. _npm install -g ts-node_ --> installe TypeScript (si la commande précédente ne marche pas).


## Étape 2 - Préparation

Dans votre terminal d'éditeur de code ou dans un terminal Windows, tapez :
1. _git checkout Production_ --> changer de branche vers Production.
1. _git pull_ --> récupère la dernière version de branche où vous vous situez (de Production donc).


## Étape 3 - Création du Bot Discord

1. Se rendre sur le [site officiel de Discord pour les developpeurs](https://discord.com/developers/applications/)
1. Après avoir été connecté, cliquer sur "New application" : cela va créer un projet Discord.
1. Donnez lui un nom et cliquez sur "Create".
![New applicationEtCreate](https://i.imgur.com/ZJ3x28l.png)

1. Vérifiez que votre projet porte bien le nom sinon completez-le, puis allez dans l'onglet "Bot".
![CategorieBot](https://i.imgur.com/0BV0tJs.png)

1. Ajoutez un bot en cliquant sur "Add Bot" et confirmez.
![AjoutBot](https://i.imgur.com/7ZA3weg.png)

1. Allez ensuite dans l'onglet "OAuth2", sélectionnez "Bot" puis "Administrator" et enfin copiez le lien généré.
![DroitsBot](https://i.imgur.com/ODK1F2w.png)

1. Collez le lien dans la barre URL de votre navigateur et sélectionnez le serveur de destination de votre bot et "Continuer". Validez le captcha.
![AjoutServeurBot](https://i.imgur.com/6EYGTWM.png)

1. Votre bot est maintenant ajouté à votre serveur !


## Étape 4 - Connexion du bot au code AttendanceBot

1. Retournez sur votre projet Discord et récupérez la clé de votre Discord. 
![CleBot](https://i.imgur.com/W6elqrl.png)



Faire un npm i

Relier le code avec le bot Discord en récupérant le [fichier .env](https://drive.google.com/file/d/1g_WCQMxGGoZX0RD6VTsNxoOJeY1zNH1M/view?usp=sharing) et le token

INSTALLER LES BIBLIOTHEQUES NECESSAIRES POUR TRAVAILLER

Faire npm start pour lancer l'application

EXPLIQUER COMMENT ARRETER