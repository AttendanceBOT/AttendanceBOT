# Cahier des charges



## Contraintes du client (secrétariat)


### Le bot

1. Pouvoir **réaliser les présences** dans un cours virtuel sur Discord.
1. Le professeur peut **ajouter ou supprimer** un étudiant dans la liste de présence après l’appel effectué.
1. L'appel doit durer **2 minutes max** (les étudiants ont 2 minutes pour manifester leur présence).


### La feuille de présence

1. La feuille de présence générée doit **ressembler à l'actuel** : le modèle Excel/CSV de feuille d'émargement (voire PDF).
1. C'est le professeur qui est garant de la feuille de présence : il doit pouvoir **exporter la fiche de présence d’un cours**.
1. Le mail d'envoi de la feuille de présence **part manuellement du prof**.
    * Le professeur télécharge manuellement la feuille de présence, vérifie puis envoie au secrétariat.


### Le rapport Discord

Le rapport discord doit contenir :
1. L'heure **d'arrivée** et **départ** de l'étudiant.
1. Le **nom & prénom** (surnom) de l'étudiant.
1. Le **classe/groupe** (nom du rôle) de l'étudiant.



## Les devoirs du client (secrétariat)


### Les rôles Discord

* Les rôles Discord des **étudiants** doivent être explicites en fonction des groupes et déjà assignés à chaque étudiant.  
    Exemple : le rôle _"Groupe 201"_ est assigné à l'étudiant _"Jean-Marie"_.

* Le rôle Discord des **professeurs** doit être assigné.  
    Exemple : le rôle _"Professeur"_ est assigné au professeur _"M. DUPONT"_.


### Les surnoms

* Chaque surnom d'un étudiant doit avoir été modifié sous la forme "Prénom NOM".  
    Exemple : "_Toto DUPONT_".


### Les channels

* Les channels doivent être organisés en module avec des titres explicites.  
    Exemple : le(s) channel(s) textuel(s) et vocal(aux) d'un module sont dans un groupe nommé _"GÉNIE LOGICIEL 2 (V. BOUTOUR)"_.



## Contraintes du responsable (M. BOUTOUR)


### Sur le plan du projet
- Utilisation **obligatoire d'un git** pour le code.
- Expression du besoin via un document "**User Story**".
- Réaliser une documentation **complète**.

### Sur le code technique
- Le code doit être **testé unitairement**.
- Utilisation d'un langage comme le Java, JavaScript, Go, Python, etc.
- Respecter l'**_Inversion of Control_**.
- Utilisation d'un outil de **gestion de dépendance**.


### Fonctionnalités supplémentaires éventuelles
- Réalisation d'un message qui se déclenche à une **heure précise** (par exemple 9h) ou sur **demande par un professeur** (via une commande) chaque jour qui indique la fête du jour. Le mode de déclenchement est au choix.  
Exemple : _"Aujourd'hui on est le 01 janvier 2021 et c'est la fête du Saint Nicolas"_.