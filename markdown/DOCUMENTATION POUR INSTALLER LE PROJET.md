# Documentation pour installer le projet


## Prérequis

1. Le lien de notre [GitHub AttendanceBot](https://github.com/AttendanceBOT/AttendanceBOT).

1. Un logiciel d'édition de code/texte : **IntelliJ**, **Visual Studio Code**, **Notepad++**, etc.

1. Avoir le logiciel Discord installé depuis le [site officiel](https://discord.com/download) et un compte Discord crée.



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

1. Se rendre sur le [site officiel de Discord pour les développeurs](https://discord.com/developers/applications/).

1. Après avoir été connecté, cliquer sur "_New application_" : cela va créer un projet Discord.

1. Donnez lui un nom et cliquez sur "_Create_".
![New applicationEtCreate](https://i.imgur.com/ZJ3x28l.png)

1. Vérifiez que votre projet porte bien le nom sinon complétez-le, puis allez dans l'onglet "_Bot_".
![CategorieBot](https://i.imgur.com/0BV0tJs.png)

1. Ajoutez un bot en cliquant sur "_Add Bot_" et confirmez.
![AjoutBot](https://i.imgur.com/7ZA3weg.png)

1. Allez ensuite dans l'onglet "_OAuth2_", sélectionnez "_Bot_" puis "_Administrator_" et enfin copiez le lien généré.
![DroitsBot](https://i.imgur.com/PHkCS9p.png)

1. Collez le lien dans la barre URL de votre navigateur et sélectionnez le serveur de destination de votre bot et "_Continuer_". Validez le captcha.
![AjoutServeurBot](https://i.imgur.com/3QyaEJT.png)

1. Votre bot est maintenant ajouté à votre serveur !



## Étape 4 - Connexion du bot au code AttendanceBot

1. Retournez sur votre projet Discord et récupérez la clé (token) de votre bot Discord depuis l'onglet "_Bot_".
![CleBot](https://i.imgur.com/3SUDjQz.png)

1. Relier votre bot Discord avec le code AttendanceBot. Pour cela, créez un fichier .env ou téléchargez un modèle de notre [fichier .env](https://drive.google.com/file/d/1hhCWKnaQmWzal3GE1vO1-SFf9QwKk-TB/view?usp=sharing) ici. Placez-le ensuite à la racine de votre projet.

1. Dans le fichier, après "_TOKEN=_", collez la clé (token) de votre bot.



## Étape 5 - Lancer le bot AttendanceBot

Dans votre terminal d'éditeur de code ou dans un terminal Windows, tapez :
1. _npm i_ --> récupère les dernières commandes de NodeJS.

1. _npm start_ --> lance le serveur et le bot.  

1. Votre bot fonctionne ! Vous êtes prêt pour bénéficier des différentes fonctions d'AttendanceBot que vous pouvez retrouver dans notre _USER STORY - SCENARIO GLOBAL_ toujours dans ce dossier **markdown**.



## Étape 6 - Fermer le bot AttendanceBot

1. Pour arrêter le serveur, appuyez sur les touches : **Ctrl** + **C** et confirmez avec "_o_".

1. Enfin, fermez votre terminal avec en tapant "_exit_".