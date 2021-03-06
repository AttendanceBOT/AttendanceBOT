# User Story - Scénario global



## Action 1 : En tant que professeur, je peux lancer un appel :ballot_box_with_check: 

* Le professeur écrit dans le channel :
    * **!appel @Groupe 2xx (il s'agit du numéro du groupe = nom du rôle) / jusqu'à 4 groupes possibles**.
* Le bot envoie un message dans un channel dédié où l’appel a lieu et affiche l'emoji **:white_check_mark:** pendant 2 minutes.


## Action 2 : En tant qu’étudiant, je peux manifester ma présence en répondant à l’appel :ballot_box_with_check: 

* Je peux réagir à l'emoji :white_check_mark: en cliquant dessus ou en réagissant manuellement.


## Action 3 : En tant que bot, quand un appel est lancé, je peux terminer l’appel :ballot_box_with_check: 

* Je termine l’appel en envoyant un message 2 minutes après le début de l’appel.
* La liste des étudiants présents (et uniquement les étudiants du même groupe que le professeur a demandé) est affichée avec mention des étudiants (@xxx) et de son groupe.

* ## Optionnel : Flexibilité du professeur

    * ### Action 4 : En tant que professeur, quand un appel est en cours, je peux annuler l’appel :x: 

        * Le professeur écrit dans le channel :
            * **!annuler**
        * Le bot demande confirmation “êtes-vous sûr de vouloir annuler l’appel en cours ?”.
        * Le professeur écrit :
            * o : pour oui
            * n : pour non
        * Le bot confirme l’annulation de l’appel.


    * ### Action 5 : En tant que professeur, quand l’appel est terminé, je peux ajouter/supprimer un étudiant :x: 

        * Le professeur écrit dans le channel :
            * **!ajouter @xxx**
            * **!supprimer @xxx**
        * Le bot demande confirmation “êtes-vous sûr de vouloir supprimer cet étudiant @xxx de la feuille de présence ?”.
        * Le professeur écrit :
            * o : pour oui
            * n : pour non
        * Le bot confirme l’ajout ou la suppression.


    * ### Action 6 : En tant que professeur, quand un appel est terminé, je peux supprimer le dernier appel :x: 

        * Le professeur écrit dans le channel :
            * **!supprimer**
        * Le bot demande confirmation “êtes-vous sûr de vouloir supprimer le dernier appel (+ rappel des présences des étudiants et l’heure de l’appel) ?”.
        * Le professeur écrit :
            * o : pour oui
            * n : pour non
        * Le bot confirme la suppression du dernier appel.


## Action 7 : En tant que professeur, quand un appel est terminé, je peux afficher la liste des présences en cours :x: 

* Le professeur écrit dans le channel :
    * **!afficher**
* Le bot affiche la liste des présences du dernier appel avec @xxx.


## Action 8 : En tant que professeur, quand l’appel est terminé, je peux générer la feuille de présence :ballot_box_with_check: 

* Le professeur écrit dans le channel :
    * **!feuille @Groupe 2xx**
* Le bot confirme la génération du document (envoyé en message privé directement au professeur).


## Action 9 : En tant que bot, quand un utilisateur me le demande, je peux afficher la liste des commandes du serveur :ballot_box_with_check: 

* Le professeur écrit dans le channel :
    * **!help**
* Le bot affiche la liste des commandes possibles avec une description et un exemple.



>>> :ballot_box_with_check: : fonctionnalités développées
 :x: : fonctionnalités non développées