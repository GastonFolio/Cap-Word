"use strict";

const MODULES = [
  {
    id: "documents",
    number: "01",
    icon: "▤",
    title: "Gérer les options et paramètres du document",
    short: "Créer, enregistrer, inspecter et préparer un document.",
    description: "Posez des bases solides : formats, propriétés, modèles, vues et préparation des fichiers.",
    outcomes: ["Créer un document et choisir son format", "Enregistrer une copie, un modèle et une version compatible", "Modifier les propriétés et métadonnées", "Inspecter un document avant sa diffusion"],
    lessons: [
      { title: "Créer, ouvrir et enregistrer", body: "Choisissez un nom explicite et un emplacement facile à retrouver. Le format DOCX convient à la plupart des documents Word. Utilisez Enregistrer sous pour créer une copie sans écraser l'original.", practice: "Ouvrez un fichier de projet, enregistrez-en une copie sous un nouveau nom, puis vérifiez le format du fichier." },
      { title: "Propriétés, modèles et compatibilité", body: "Les propriétés (titre, auteur, catégorie) décrivent le fichier. Un modèle DOTX réutilise une structure sans reprendre les anciennes réponses. Le mode de compatibilité signale qu'un fichier ancien peut limiter certaines fonctions.", practice: "Ajoutez une catégorie, créez un modèle sans macros et repérez le mode de compatibilité." },
      { title: "Inspecter et protéger", body: "Avant le partage, vérifiez les commentaires, métadonnées et informations cachées. L'inspecteur de document propose plusieurs vérifications : ne supprimez que ce qui est demandé. Utilisez les options de restriction lorsqu'un document ne doit pas être modifié librement.", practice: "Lancez l'inspection sur une copie de travail et notez les éléments repérés sans supprimer d'information non demandée." },
      { title: "Vues, impression et accessibilité", body: "Vérifiez la pagination en mode Mise en page et utilisez l'aperçu avant impression. Un titre structuré, des en-têtes de tableau et un texte de remplacement aident les personnes utilisant des technologies d'assistance.", practice: "Lancez le vérificateur d'accessibilité d'un projet et examinez ses recommandations." },
      { title: "Approfondissement : protéger et comparer", body: "Selon votre édition de Word, les commandes de restriction de modification, de comparaison de documents et de gestion des versions se trouvent dans Révision ou Fichier. Travaillez toujours sur une copie lorsque vous comparez des révisions.", practice: "Comparez deux copies d'un document et identifiez les différences avant d'accepter ou de rejeter des modifications." },
    ],
    keywords: ["fichier", "enregistrement", "modèle", "propriétés", "compatibilité", "inspecteur"],
  },
  {
    id: "mise-en-forme",
    number: "02",
    icon: "T",
    title: "Utiliser les fonctions avancées d’édition et de mise en forme",
    short: "Structurer les titres, les listes et la mise en page.",
    description: "Utilisez les styles et les outils de mise en page pour produire des documents cohérents et lisibles.",
    outcomes: ["Rechercher, remplacer et formater le texte", "Appliquer des styles, thèmes et listes", "Gérer paragraphes, colonnes, marges et sections", "Configurer en-têtes, pieds de page, bordures et sauts"],
    lessons: [
      { title: "Rechercher et remplacer avec précision", body: "Le volet Navigation repère un mot ou une expression. Remplacer permet de modifier une occurrence ou toutes les occurrences. Vérifiez les options de correspondance avant un remplacement global.", practice: "Dans un document de départ, recherchez un mot, puis remplacez une expression répétée et contrôlez le nombre de remplacements." },
      { title: "Styles, thèmes et hiérarchie", body: "Les styles Titre 1, Titre 2 et Normal construisent une hiérarchie réutilisable. Modifier un style met à jour toutes ses occurrences. Les jeux de styles et les thèmes changent l'apparence générale sans reformater chaque paragraphe.", practice: "Appliquez Titre 1 et Titre 2 à plusieurs sections, puis actualisez le volet de navigation." },
      { title: "Paragraphes, listes et colonnes", body: "L'interligne et l'espacement avant/après se règlent dans les options de paragraphe. Les listes à plusieurs niveaux expriment une hiérarchie. Pour une mise en colonnes limitée à une zone, sélectionnez le contenu et créez les sauts de section nécessaires.", practice: "Mettez en forme une liste numérotée à plusieurs niveaux, puis divisez une section en deux colonnes." },
      { title: "Sections et mise en page", body: "Les sauts de page et de section n'ont pas le même rôle. Une section permet d'avoir une orientation, des marges ou des en-têtes différents. Les options Première page différente et Pages paires/impaires se règlent dans les outils En-tête et pied de page.", practice: "Créez une section en paysage entre deux pages portrait, puis vérifiez l'en-tête de la première page." },
      { title: "Révision et modifications suivies", body: "Le suivi des modifications distingue les insertions, suppressions et mises en forme. Les filtres d'affichage aident à traiter séparément les types de changements. Un commentaire peut être répondu, résolu ou supprimé.", practice: "Activez le suivi, ajoutez une modification de texte et une modification de formatage, puis traitez-les selon une consigne." },
      { title: "Approfondissement : styles et champs", body: "Les styles personnalisés assurent la cohérence d'un document long. Les champs peuvent afficher des informations calculées comme la date, les numéros de page ou des références; actualisez-les après modification du contenu.", practice: "Créez un style personnalisé et actualisez les champs d'un document après avoir ajouté une page." },
    ],
    keywords: ["texte", "style", "paragraphe", "liste", "colonne", "section", "marge", "en-tête", "suivi"],
  },
  {
    id: "tableaux-references",
    number: "03",
    icon: "▦",
    title: "Créer des éléments de document personnalisés",
    short: "Construire des tableaux structurés et des références fiables.",
    description: "Maîtrisez la conversion de texte, le tri, les tables des matières et les notes.",
    outcomes: ["Créer, trier et mettre en forme un tableau", "Répéter et fusionner des cellules", "Insérer et actualiser une table des matières", "Gérer citations, notes et signets"],
    lessons: [
      { title: "Créer et convertir un tableau", body: "Un tableau facilite l'organisation de données. Un texte séparé par tabulations peut être converti en tableau : vérifiez le nombre de colonnes et le séparateur choisi. Ajustez ensuite la largeur et l'alignement.", practice: "Convertissez une liste tabulée en tableau, puis ajustez ses colonnes au contenu." },
      { title: "Trier, fusionner et répéter", body: "Le tri peut utiliser plusieurs clés et un ordre croissant ou décroissant. Fusionner combine les cellules sélectionnées. Dans un tableau qui passe sur plusieurs pages, répétez la ligne d'en-tête pour identifier les colonnes.", practice: "Triez un tableau selon deux critères, fusionnez ses cellules de titre et activez la répétition d'en-tête." },
      { title: "Table des matières et navigation", body: "La table des matières automatique s'appuie sur les styles de titre. Si les titres ou niveaux changent, choisissez Mettre à jour la table et indiquez si vous actualisez les pages ou toute la table.", practice: "Ajoutez des styles de titre, insérez une table automatique, puis limitez-la au niveau demandé." },
      { title: "Citations, notes et signets", body: "Une citation peut être associée à une source ou à un espace réservé. Les notes de bas de page apparaissent en bas de page, les notes de fin à la fin du document. Un signet marque un emplacement ou une sélection nommée.", practice: "Ajoutez un espace réservé de citation, une note et un signet dans les emplacements demandés." },
      { title: "Approfondissement : blocs réutilisables et formulaires", body: "Les composants QuickPart peuvent réutiliser des textes ou propriétés de document. Les contrôles de contenu servent à construire des formulaires structurés. Vérifiez les options disponibles dans votre édition de Word avant de bâtir un modèle.", practice: "Préparez un modèle de formulaire avec des zones de texte et des listes de choix, sans y stocker d'informations privées." },
      { title: "Approfondissement : publipostage", body: "Le publipostage relie un document principal à une source de données, puis insère des champs pour personnaliser chaque exemplaire. Prévisualisez plusieurs destinataires et vérifiez la source avant de terminer la fusion.", practice: "Créez une lettre type avec deux champs de fusion et prévisualisez les résultats avec des données fictives." },
    ],
    keywords: ["tableau", "cellule", "tri", "table des matières", "citation", "note", "signet"],
  },
  {
    id: "elements-visuels",
    number: "04",
    icon: "◈",
    title: "Utiliser les fonctionnalités avancées de Word",
    short: "Insérer des images, formes et SmartArt accessibles.",
    description: "Combinez contenu et visuels tout en préservant l'accessibilité et la mise en page.",
    outcomes: ["Insérer, redimensionner et habiller images et formes", "Modifier un graphique SmartArt", "Ajouter texte de remplacement", "Contrôler l'accessibilité des éléments visuels"],
    lessons: [
      { title: "Images, habillage et position", body: "L'habillage détermine comment le texte contourne une image. Aligné sur le texte place l'objet dans le flux du paragraphe; Carré ou Rapproché permet au texte de l'entourer. Vérifiez l'ancrage et la position après modification.", practice: "Insérez une image de ressource, essayez plusieurs habillages et choisissez celui demandé." },
      { title: "Formes et zones de texte", body: "Les formes, bannières et zones de texte soulignent une information. Saisissez le texte dans la forme, choisissez un habillage adapté et vérifiez que l'objet ne masque pas du contenu.", practice: "Ajoutez une forme avec un court message et positionnez-la dans la page sans recouvrir le texte." },
      { title: "SmartArt et modèles 3D", body: "SmartArt transforme une liste en diagramme. Le volet Texte sert à ajouter ou déplacer les libellés; les commandes de direction changent l'orientation visuelle sans réordonner les entrées. Les modèles 3D peuvent être insérés depuis un fichier compatible.", practice: "Insérez un SmartArt de processus, modifiez ses nœuds et essayez une orientation différente." },
      { title: "Accessibilité des visuels", body: "Le texte de remplacement décrit la fonction d'une image à une personne qui ne peut pas la voir. Les images décoratives peuvent être marquées comme telles. Le vérificateur d'accessibilité identifie aussi des problèmes de contraste et d'en-têtes de tableaux.", practice: "Ajoutez une description courte à une illustration et traitez une alerte d'accessibilité." },
      { title: "Approfondissement : automatisation prudente", body: "Word peut enregistrer ou exécuter des macros selon la version et les paramètres de sécurité. N'activez jamais une macro provenant d'une source inconnue; entraînez-vous seulement avec des documents et scripts de confiance.", practice: "Repérez les options de sécurité des macros et expliquez pourquoi un document inconnu ne doit pas être activé automatiquement." },
    ],
    keywords: ["image", "illustration", "forme", "SmartArt", "modèle 3D", "texte de remplacement", "accessibilité"],
  },
];

const PROJECTS = [
  { id: 1, title: "Vacances au lac", tag: "Documents & références", topic: "Hôtellerie et édition", file: "Projet 1-Vacances au Lac-Word 2019.docx", skills: ["Rechercher et remplacer", "Convertir le texte en tableau", "Table des matières", "Zone de texte", "Commentaires"], tasks: ["Supprimer un mot repéré par la recherche.", "Remplacer toutes les occurrences d'une expression.", "Convertir des tabulations en tableau et insérer une table des matières.", "Compléter une zone de texte et traiter un commentaire."] },
  { id: 2, title: "Réunion", tag: "Documents & paramètres", topic: "Compte rendu professionnel", file: "Projet 2-Réunion-Word 2019.docx", skills: ["Modèles", "Enregistrement", "Formats de fichier"], tasks: ["Enregistrer une copie comme modèle Word sans macros.", "Conserver la compatibilité avec les fonctionnalités Word modernes."] },
  { id: 3, title: "Crème glacée", tag: "Éléments visuels", topic: "Catalogue et mise en page", file: "Projet 3-Crème glacée-Word 2019.docx", skills: ["Accessibilité", "Orientation", "Tableaux", "Citations", "Modèles 3D", "SmartArt"], tasks: ["Corriger les alertes d'en-tête du tableau.", "Mettre une seule page en paysage.", "Ajuster la largeur d'une colonne et ajouter une citation.", "Insérer un modèle 3D et décrire un SmartArt."] },
  { id: 4, title: "Ski Utah", tag: "Mise en forme", topic: "Guide touristique", file: "Projet 4-Ski Utah-Word 2019.docx", skills: ["Styles", "Tableaux", "Puces", "Notes de bas de page", "Suivi des modifications"], tasks: ["Appliquer un jeu de styles et fusionner une ligne de tableau.", "Créer une liste à puces et une note de bas de page.", "Accepter les changements de texte demandés et rejeter la mise en forme suivie."] },
  { id: 5, title: "Journalisme professionnel", tag: "Révision & collaboration", topic: "Charte rédactionnelle", file: "Projet 5-Journalisme professionnel-Word 2019.docx", skills: ["En-têtes", "Symboles", "Interligne", "Numérotation", "SmartArt", "Images"], tasks: ["Insérer un en-tête différent sur la première page.", "Ajouter un symbole, puis régler l'interligne du document.", "Continuer une numérotation, mettre en forme un SmartArt et habiller une image."] },
  { id: 6, title: "Technicien d’assistance", tag: "Mise en forme", topic: "Emploi et compétences numériques", file: "Projet 6-Technicien d’assistance-Word 2019.docx", skills: ["Propriétés", "Reproduire la mise en forme", "Tri", "Listes multiniveaux", "Modèles 3D", "Images"], tasks: ["Compléter les propriétés du fichier et reproduire une mise en forme.", "Trier un tableau selon deux critères.", "Modifier un niveau de liste et insérer des éléments visuels."] },
  { id: 7, title: "Android", tag: "Mise en forme", topic: "Guide technique", file: "Projet 7-Android-Word 2019.docx", skills: ["Bordures", "Inspecteur", "Interligne", "Styles", "Colonnes"], tasks: ["Appliquer une bordure de page.", "Inspecter le document sans supprimer les autres informations.", "Régler l'interligne, un style de paragraphe et deux colonnes."] },
  { id: 8, title: "Animaux domestiques", tag: "Documents & paramètres", topic: "Guide de soins", file: "Projet 8-Animaux domestiques-Word 2019.doc", skills: ["Mode de compatibilité", "Conversion", "Formats Word"], tasks: ["Convertir un ancien document pour quitter le mode de compatibilité.", "Enregistrer le document au format moderne sans perdre son contenu."] },
  { id: 9, title: "Camping", tag: "Mise en forme", topic: "Bulletin de plein air", file: "Projet 9-Camping-Word 2019.docx", skills: ["Styles", "Tableaux", "Sauts de section"], tasks: ["Appliquer un jeu de styles.", "Mettre en forme l'en-tête d'un tableau.", "Insérer un saut de section continu à l'emplacement demandé."] },
  { id: 10, title: "Pétroglyphes et pictogrammes", tag: "Tableaux & références", topic: "Dossier culturel", file: "Projet 10-Pétroglyphes et pictogrammes-Word 2019.docx", skills: ["Colonnes", "Tableaux", "Images", "Propriétés", "Remplacement", "Table des matières", "Commentaires"], tasks: ["Mettre des paragraphes en deux colonnes et répéter l'en-tête d'un tableau.", "Insérer une image et modifier les propriétés du document.", "Remplacer une expression, fusionner des cellules, actualiser une table des matières et résoudre un commentaire."] },
  { id: 11, title: "Antivirus", tag: "Documents & paramètres", topic: "Sécurité informatique", file: "Projet 11-Antivirus-Word 2019.docx", skills: ["Marges", "Accessibilité", "Effacer la mise en forme", "Tableaux", "Notes"], tasks: ["Personnaliser les marges et corriger une alerte d'accessibilité.", "Effacer la mise en forme d'un paragraphe.", "Espacer les cellules d'un tableau et convertir les notes de fin."] },
  { id: 12, title: "Termes légaux", tag: "Documents & paramètres", topic: "Document juridique", file: "Projet 12-Termes légaux-Word 2019.docx", skills: ["Enregistrer sous", "Texte brut", "Formats"], tasks: ["Enregistrer une copie dans le dossier Documents.", "Exporter le document au format texte brut avec le nom demandé."] },
  { id: 13, title: "Aménagement", tag: "Éléments visuels", topic: "Guide d'aménagement paysager", file: "Projet 13-Aménagement-Word 2019.docx", skills: ["En-têtes", "Symboles", "Interligne", "Numérotation", "SmartArt", "Images"], tasks: ["Configurer un en-tête différent sur la première page et insérer un symbole.", "Régler l'interligne et continuer une liste entre deux colonnes.", "Appliquer un effet à un SmartArt et habiller une image."] },
  { id: 14, title: "Brioche vanillée", tag: "Éléments visuels", topic: "Recette et mise en page", file: "Projet 14-Brioche vanillée-Word 2019.docx", skills: ["Signets", "Tableaux", "Numérotation", "Formes", "Images", "SmartArt"], tasks: ["Créer un signet et un tableau de synthèse.", "Démarrer une liste à une valeur précise et insérer une forme.", "Mettre en forme une image et inverser la direction d'un SmartArt."] },
  { id: 15, title: "Fleur d’oranger", tag: "Révision & collaboration", topic: "Fiche botanique", file: "Projet 15-Fleur d'oranger-Word 2019.docx", skills: ["Effets de texte", "Puces personnalisées", "Notes de bas de page", "Suivi des modifications"], tasks: ["Appliquer un effet de texte dans l'en-tête et personnaliser une puce.", "Insérer une note de bas de page.", "Accepter les modifications de texte et rejeter celles de mise en forme."] },
];

const EXAMS = [
  { series: "A", id: 1, title: "Examen blanc 1", projects: [1, 3, 4, 5, 6, 8, 11, 14], taskCount: 41 },
  { series: "A", id: 2, title: "Examen blanc 2", projects: [2, 3, 5, 7, 9, 10, 12, 15], taskCount: 35 },
  { series: "A", id: 3, title: "Examen blanc 3", projects: [1, 4, 6, 7, 8, 10, 13, 15], taskCount: 39 },
  { series: "A", id: 4, title: "Examen blanc 4", projects: [2, 4, 5, 9, 11, 12, 13, 14], taskCount: 36 },
  { series: "B", id: 1, title: "Examen thématique 1", projects: [1, 3, 4, 5, 6, 8, 11, 14], taskCount: 41 },
  { series: "B", id: 2, title: "Examen thématique 2", projects: [2, 3, 5, 7, 9, 10, 12, 15], taskCount: 35 },
  { series: "B", id: 3, title: "Examen thématique 3", projects: [1, 4, 6, 7, 8, 10, 13, 15], taskCount: 42 },
  { series: "B", id: 4, title: "Examen thématique 4", projects: [2, 4, 5, 9, 11, 12, 13, 14], taskCount: 33 },
];

const QUIZ = [
  { module: "documents", q: "Quel format convient généralement à un document Word moderne sans macros ?", options: ["DOCX", "DOTM", "TXT", "JPEG"], answer: 0, explanation: "DOCX est le format de document Word moderne. DOTM est un modèle avec prise en charge des macros." },
  { module: "documents", q: "Quel format de modèle Word standard n'autorise pas les macros ?", options: ["DOCM", "DOTX", "DOC", "RTF"], answer: 1, explanation: "DOTX est le format de modèle Word sans macros; DOTM accepte les macros." },
  { module: "documents", q: "Où peut-on ajouter une catégorie à un document ?", options: ["Dans les propriétés du fichier", "Dans le pied de page", "Dans le volet de navigation seulement", "Dans les marges"], answer: 0, explanation: "La catégorie fait partie des propriétés ou métadonnées du document." },
  { module: "documents", q: "À quoi sert l'inspecteur de document ?", options: ["À identifier certains contenus cachés ou propriétés avant le partage", "À traduire tout le document", "À remplacer toutes les images", "À créer une table des matières"], answer: 0, explanation: "L'inspecteur vérifie des informations comme les propriétés, commentaires et éléments cachés." },
  { module: "documents", q: "Avant de supprimer ce que signale une inspection, quelle est la meilleure pratique ?", options: ["Supprimer toutes les catégories", "Lire les résultats et ne corriger que ce qui est demandé", "Enregistrer au format TXT", "Fermer Word sans enregistrer"], answer: 1, explanation: "Les résultats peuvent inclure des éléments utiles; traitez seulement ceux qui sont visés." },
  { module: "mise-en-forme", q: "Quelle fonction remplace globalement un mot par un autre ?", options: ["Remplacer", "Reproduire la mise en forme", "Coupure de mots", "Atteindre"], answer: 0, explanation: "Remplacer permet de chercher une expression puis de remplacer une occurrence ou toutes les occurrences." },
  { module: "mise-en-forme", q: "Quel est l'avantage principal des styles de titre ?", options: ["Ils structurent le document et alimentent la navigation", "Ils convertissent les images en tableaux", "Ils suppriment les commentaires", "Ils verrouillent l'édition"], answer: 0, explanation: "Les styles de titre donnent une hiérarchie et servent à la navigation et à la table des matières." },
  { module: "mise-en-forme", q: "Quel saut permet de changer l'orientation d'une seule page ?", options: ["Deux sauts de ligne", "Des sauts de section avant et après la page", "Un saut de paragraphe", "Un saut de colonne uniquement"], answer: 1, explanation: "L'orientation s'applique à une section; isolez la page dans sa propre section." },
  { module: "mise-en-forme", q: "Quelle option permet un en-tête différent sur la première page ?", options: ["Première page différente", "Lier au précédent", "Conserver avec le suivant", "Réduire d'une page"], answer: 0, explanation: "L'option Première page différente sépare l'en-tête et le pied de page de la première page." },
  { module: "mise-en-forme", q: "Que faut-il sélectionner pour changer la mise en page d'une zone seulement ?", options: ["Le document entier à chaque fois", "La zone puis les paramètres de colonnes ou de section adaptés", "Uniquement le titre", "Le volet Presse-papiers"], answer: 1, explanation: "La sélection et les sauts de section permettent de limiter la mise en page à la zone voulue." },
  { module: "mise-en-forme", q: "Que fait le suivi des modifications ?", options: ["Enregistre les changements pour qu'ils soient ensuite acceptés ou rejetés", "Désactive la correction orthographique", "Crée des signets automatiquement", "Convertit les notes en citations"], answer: 0, explanation: "Le suivi affiche les insertions, suppressions et mises en forme à réviser." },
  { module: "tableaux-references", q: "Quel séparateur est couramment utilisé pour convertir un texte en tableau ?", options: ["Tabulations", "Images", "Commentaires", "Sauts de page"], answer: 0, explanation: "Les tabulations séparent les colonnes dans une liste de texte convertie en tableau." },
  { module: "tableaux-references", q: "Pourquoi répéter la ligne d'en-tête d'un tableau ?", options: ["Pour réafficher les titres de colonnes sur les pages suivantes", "Pour répéter le document entier", "Pour fusionner toutes les cellules", "Pour trier les pages"], answer: 0, explanation: "La ligne d'en-tête aide à comprendre les colonnes lorsque le tableau s'étend sur plusieurs pages." },
  { module: "tableaux-references", q: "De quoi dépend une table des matières automatique ?", options: ["Des styles de titre", "Des couleurs des images", "Des commentaires résolus", "Du nom du fichier"], answer: 0, explanation: "Word utilise la hiérarchie des styles de titre pour produire une table des matières automatique." },
  { module: "tableaux-references", q: "Quelle action met à jour les pages d'une table des matières après modification du document ?", options: ["Mettre à jour la table", "Convertir en image", "Fusionner les cellules", "Comparer les documents"], answer: 0, explanation: "Utilisez Mettre à jour la table pour actualiser les numéros de page ou toute la table." },
  { module: "tableaux-references", q: "Où se trouve normalement une note de bas de page ?", options: ["En bas de la page contenant son repère", "Dans le nom du fichier", "En haut de chaque page", "Dans le Presse-papiers"], answer: 0, explanation: "La note de bas de page est affichée en bas de la page où se trouve son repère." },
  { module: "elements-visuels", q: "Que signifie l'habillage « Aligné sur le texte » ?", options: ["L'objet se comporte comme un caractère dans le paragraphe", "Le texte traverse l'image", "L'image est toujours derrière le texte", "L'objet est envoyé par courriel"], answer: 0, explanation: "Aligné sur le texte place l'objet dans le flux du paragraphe, comme un caractère." },
  { module: "elements-visuels", q: "À quoi sert un texte de remplacement ?", options: ["À décrire un élément visuel aux personnes qui ne peuvent pas le voir", "À changer le nom du fichier", "À corriger toutes les fautes", "À remplacer une table des matières"], answer: 0, explanation: "Le texte de remplacement transmet le sens ou la fonction d'un visuel aux technologies d'assistance." },
  { module: "elements-visuels", q: "Dans SmartArt, quel volet permet de modifier le texte des formes ?", options: ["Volet Texte", "Volet Navigation", "Volet Presse-papiers", "Volet Traduction"], answer: 0, explanation: "Le volet Texte permet de saisir et réorganiser le contenu des nœuds SmartArt." },
  { module: "elements-visuels", q: "Que vérifie principalement le vérificateur d'accessibilité ?", options: ["Des problèmes qui peuvent empêcher l'accès à certains contenus", "La vitesse de frappe", "La taille du fichier ZIP", "La disponibilité des imprimantes"], answer: 0, explanation: "Le vérificateur repère des problèmes comme les tableaux sans en-tête ou les images sans description." },
];

const STORAGE_KEY = "cap-word-progress-v1";
const INITIAL_STATE = { doneModules: [], doneProjects: [], examAttempts: [], quizBest: 0, quizAttempts: 0, quizCorrect: 0 };
const VIEW_LABELS = {
  accueil: "Vue d’ensemble", cours: "Parcours de cours", projets: "Projets Word",
  examens: "Examens blancs", quiz: "Quiz de révision", ressources: "Cours & ressources",
  progression: "Ma progression",
};
let state = readState();
let currentView = "accueil";
let projectFilter = "Tous";
let projectQuery = "";
let quizSession = null;
let toastTimer = null;
let examTimer = null;
let timerSeconds = 50 * 60;
let activeExam = null;
let selectedSeries = "A";

function readState() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return { ...INITIAL_STATE, ...stored };
  } catch (error) {
    console.warn("Progression locale illisible; démarrage avec une progression vierge.", error);
    return { ...INITIAL_STATE };
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    updateSidebarProgress();
  } catch (error) {
    console.error("Impossible d'enregistrer la progression locale.", error);
    showToast("La progression n'a pas pu être enregistrée sur cet appareil.");
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character]);
}

function fileUrl(path) {
  return path.split("/").map((part) => encodeURIComponent(part)).join("/");
}

function getProgress() {
  const modules = state.doneModules.length;
  const projects = state.doneProjects.length;
  const exams = state.examAttempts.filter((attempt) => attempt.percent >= 70).length;
  return Math.min(100, Math.round((modules / MODULES.length) * 60 + (projects / PROJECTS.length) * 25 + (exams / 8) * 15));
}

function updateSidebarProgress() {
  const percent = getProgress();
  const bar = document.getElementById("sidebar-progress-bar");
  const text = document.getElementById("sidebar-progress-text");
  if (bar) bar.style.width = `${percent}%`;
  if (text) text.textContent = `${percent} % terminé`;
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
}

function setView(view) {
  currentView = view;
  document.querySelectorAll(".nav-link").forEach((button) => {
    const active = button.dataset.view === view;
    button.classList.toggle("active", active);
    if (active) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });
  document.getElementById("page-label").textContent = VIEW_LABELS[view] || "Formation";
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("mobile-menu").setAttribute("aria-expanded", "false");
  render();
  document.getElementById("main-content").focus({ preventScroll: true });
  if (location.hash !== `#${view}`) history.replaceState(null, "", `#${view}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function render() {
  const main = document.getElementById("main-content");
  const views = {
    accueil: renderHome, cours: renderCourse, projets: renderProjects,
    examens: renderExams, quiz: renderQuiz, ressources: renderResources,
    progression: renderProgress,
  };
  main.innerHTML = (views[currentView] || renderHome)();
  updateSidebarProgress();
  if (activeExam && currentView === "examens") renderTimer();
}

function sectionTitle(title, description, action = "") {
  return `<div class="section-title-row"><div><h2 class="section-heading">${title}</h2>${description ? `<p class="section-intro">${description}</p>` : ""}</div>${action}</div>`;
}

function renderHome() {
  const percent = getProgress();
  const doneProjects = state.doneProjects.length;
  const attempts = state.examAttempts.length;
  const nextModule = MODULES.find((module) => !state.doneModules.includes(module.id)) || MODULES[0];
  const objectiveCards = MODULES.map((module) => `
    <article class="objective-card card">
      <div class="objective-top"><span class="objective-icon" aria-hidden="true">${module.icon}</span><span class="pill">${module.number} / 04</span></div>
      <h3>${escapeHtml(module.title)}</h3><p>${escapeHtml(module.short)}</p>
      <div class="objective-bottom"><span class="objective-meter" aria-label="${state.doneModules.includes(module.id) ? "Module terminé" : "Module à découvrir"}"><span style="width:${state.doneModules.includes(module.id) ? 100 : 0}%"></span></span><button class="text-button" data-open-module="${module.id}">${state.doneModules.includes(module.id) ? "Revoir" : "Explorer"} →</button></div>
    </article>`).join("");
  return `
    <section class="hero">
      <div class="hero-copy">
        <p class="hero-kicker">Votre atelier Word 2019</p>
        <h1>Transformez vos gestes Word en réflexes.</h1>
        <p>Des leçons guidées, des fichiers authentiques et des examens blancs pour apprendre en faisant.</p>
        <button class="button" data-view="cours">Continuer le parcours <span aria-hidden="true">→</span></button>
      </div>
      <div class="hero-art" aria-hidden="true"><div class="hero-art-card"><div class="hero-art-top"><i></i><i></i><i></i><span>Document de travail.docx</span></div><div class="doc-heading"></div><div class="doc-line"></div><div class="doc-line short"></div><div class="doc-table"><i></i><i></i><i></i><i></i><i></i><i></i></div></div><div class="hero-orbit">✦</div></div>
    </section>
    <section class="stats-grid" aria-label="Résumé de progression">
      <div class="stat-card card"><span class="stat-icon">◔</span><div class="stat-text"><strong>${percent}%</strong><span>progression globale</span></div></div>
      <div class="stat-card card"><span class="stat-icon coral">▤</span><div class="stat-text"><strong>${state.doneModules.length}<small> / 4</small></strong><span>domaines maîtrisés</span></div></div>
      <div class="stat-card card"><span class="stat-icon blue">▧</span><div class="stat-text"><strong>${doneProjects}<small> / 15</small></strong><span>projets réalisés</span></div></div>
      <div class="stat-card card"><span class="stat-icon yellow">◷</span><div class="stat-text"><strong>${attempts}</strong><span>examens tentés</span></div></div>
    </section>
    ${sectionTitle("Votre parcours d’apprentissage", "Quatre domaines essentiels. Progressez à votre rythme.")}
    <div class="home-grid">
      <section class="path-card card">
        <div class="path-list">${MODULES.map((module, index) => `
          <button class="path-row" data-open-module="${module.id}">
            <span class="path-num">${state.doneModules.includes(module.id) ? "✓" : `0${index + 1}`}</span>
            <span class="path-meta"><strong>${escapeHtml(module.title)}</strong><span>${module.lessons.length} mini-leçons · ${state.doneModules.includes(module.id) ? "terminé" : "à découvrir"}</span></span>
            <span class="path-check ${state.doneModules.includes(module.id) ? "done" : ""}">${state.doneModules.includes(module.id) ? "Terminé" : "Ouvrir →"}</span>
          </button>`).join("")}</div>
      </section>
      <aside class="tip-card card"><span class="tip-label">Petit conseil</span><h3>Apprendre Word, c’est pratiquer.</h3><p>Ouvrez un fichier de départ dans Word et reproduisez les tâches au fur et à mesure des leçons.</p><button class="text-button" data-view="projets">Choisir un projet →</button></aside>
    </div>
    ${sectionTitle("Reprendre là où vous en étiez", "La progression reste sur cet appareil.")}
    <section class="continue-card card">
      <span class="continue-art" aria-hidden="true">${nextModule.icon}</span>
      <span class="continue-copy"><strong>${state.doneModules.length === MODULES.length ? "Revoir les notions clés" : escapeHtml(nextModule.title)}</strong><span>${state.doneModules.length === MODULES.length ? "Tous les domaines sont cochés. Renforcez vos acquis." : `${nextModule.lessons.length} mini-leçons · progression ${percent}%`}</span></span>
      <button class="button secondary small" data-open-module="${nextModule.id}">Reprendre <span aria-hidden="true">→</span></button>
    </section>
    ${sectionTitle("Les domaines à maîtriser", "Le programme s’appuie sur les compétences pratiquées dans les documents fournis.")}
    <div class="objective-grid">${objectiveCards}</div>
    <div class="resource-disclaimer"><strong>Un repère important</strong> — Cette plateforme est un support indépendant. Elle ne garantit ni une note, ni la réussite d'une certification. Vérifiez auprès de l'organisme de certification le nom, la disponibilité et le programme de l'examen visé.</div>
  `;
}

function renderCourse() {
  return `
    <header><p class="eyebrow">Leçons courtes · pratique immédiate</p><h1 class="page-heading">Parcours de cours</h1><p class="page-subtitle">Comprenez les outils, essayez-les dans Word, puis cochez le module lorsque vous êtes prêt à les réutiliser sans aide.</p></header>
    <div class="module-list">${MODULES.map((module) => {
      const isDone = state.doneModules.includes(module.id);
      return `<article class="module-card card" id="module-${module.id}">
        <div class="module-head"><span class="module-number">${module.number}</span><div><h2 class="module-title">${escapeHtml(module.title)}</h2><p class="module-description">${escapeHtml(module.description)}</p></div><span class="pill">${isDone ? "✓ Terminé" : `${module.lessons.length} leçons`}</span></div>
        <div class="module-body">
          <div><h4>Vous allez apprendre à</h4><ul class="lesson-list">${module.outcomes.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
            <h4 style="margin-top:15px">Leçons à pratiquer</h4><ul class="lesson-list">${module.lessons.map((lesson) => `<li><strong>${escapeHtml(lesson.title)}</strong> — ${escapeHtml(lesson.body)}</li>`).join("")}</ul>
          </div>
          <div class="module-action"><small>À faire dans Word : ${escapeHtml(module.lessons[0].practice)}</small><button class="button small ${isDone ? "secondary" : ""}" data-toggle-module="${module.id}">${isDone ? "Marquer à revoir" : "Marquer le module terminé"}</button></div>
        </div>
      </article>`;
    }).join("")}</div>
    <div class="resource-disclaimer"><strong>Astuce</strong> — Les noms de commandes peuvent varier légèrement selon la langue et la mise à jour de Word. Dans les tâches, recherchez la commande par son nom dans le ruban ou utilisez la zone de recherche de Word.</div>
  `;
}

function renderProjects() {
  const categories = ["Tous", ...new Set(PROJECTS.map((project) => project.tag))];
  const filtered = PROJECTS.filter((project) => (projectFilter === "Tous" || project.tag === projectFilter)
    && `${project.title} ${project.topic} ${project.skills.join(" ")}`.toLocaleLowerCase("fr").includes(projectQuery.toLocaleLowerCase("fr")));
  return `
    <header><p class="eyebrow">15 fichiers de départ · missions pratiques</p><h1 class="page-heading">Les projets Word</h1><p class="page-subtitle">Des documents de travail issus du cours, avec des objectifs concrets pour pratiquer dans Word 2019.</p></header>
    <div class="section-title-row"><div class="filter-row">${categories.map((category) => `<button class="filter-chip ${category === projectFilter ? "active" : ""}" data-filter="${escapeHtml(category)}">${escapeHtml(category)}</button>`).join("")}</div><label class="search-box"><span aria-hidden="true">⌕</span><input id="project-search" type="search" value="${escapeHtml(projectQuery)}" placeholder="Rechercher un projet ou une compétence" aria-label="Rechercher un projet ou une compétence"></label></div>
    <div class="project-grid">${filtered.map((project) => `
      <article class="project-card card">
        <div class="project-card-top"><span class="project-number">PROJET ${String(project.id).padStart(2, "0")}</span><span class="pill">${escapeHtml(project.tag)}</span></div>
        <h3>${escapeHtml(project.title)}</h3><p>${escapeHtml(project.topic)}</p>
        <div class="project-tags">${project.skills.slice(0, 4).map((skill) => `<span class="tag">${escapeHtml(skill)}</span>`).join("")}${project.skills.length > 4 ? `<span class="tag">+${project.skills.length - 4}</span>` : ""}</div>
        <div class="project-card-bottom"><span class="task-count">${project.tasks.length} objectifs à pratiquer</span><button class="button secondary small" data-expand-project="${project.id}" aria-expanded="false">Voir la mission</button></div>
        <div class="project-detail" id="project-detail-${project.id}" hidden>
          <strong class="muted" style="font-size:10px">Fichier de départ</strong><p class="muted" style="font-size:10px;overflow-wrap:anywhere">${escapeHtml(project.file)}</p>
          <ul>${project.tasks.map((task) => `<li>${escapeHtml(task)}</li>`).join("")}</ul>
          <div style="display:flex;gap:7px;flex-wrap:wrap"><a class="button small" href="${fileUrl(`assets/projets/${project.file}`)}" download>Télécharger le fichier</a><button class="button secondary small" data-complete-project="${project.id}">${state.doneProjects.includes(project.id) ? "✓ Réalisé" : "Marquer réalisé"}</button></div>
        </div>
      </article>`).join("") || `<div class="empty-state">Aucun projet ne correspond à cette recherche.</div>`}</div>
    <div class="resource-disclaimer"><strong>Pour pratiquer :</strong> téléchargez le fichier de départ, ouvrez-le dans Word, accomplissez les tâches de la mission et enregistrez votre copie sous un nouveau nom. Les corrigés ne sont pas publiés sur ce site.</div>
  `;
}

function examSubjectUrl(exam) {
  return `assets/examens/serie-${exam.series.toLowerCase()}/examen-${exam.id}.docx`;
}

function examArchiveUrl(series) {
  return series === "A" ? "assets/examens/Examens-Word-2019-Serie-A.zip" : "assets/examens/Examens-Word-2019-Serie-B.zip";
}

function renderExams() {
  const visible = EXAMS.filter((exam) => exam.series === selectedSeries);
  const active = activeExam ? EXAMS.find((exam) => exam.series === activeExam.series && exam.id === activeExam.id) : null;
  return `
    <header><p class="eyebrow">Mise en situation · autoévaluation</p><h1 class="page-heading">Examens blancs</h1><p class="page-subtitle">Entraînez-vous sur des tâches Word avec les sujets et documents de travail fournis. Le site ne peut pas vérifier vos actions dans Word : l'évaluation finale est une autoévaluation.</p></header>
    <div class="exam-intro">
      <section class="exam-info card"><h3>La simulation en 3 temps</h3><p>1. Téléchargez le sujet Word et le pack complet.<br>2. Lancez le chronomètre, ouvrez les fichiers de travail et exécutez les tâches dans Word.<br>3. Cochez les projets terminés puis notez les points à revoir.</p><div class="info-foot">50 minutes est une durée indicative pour s'entraîner — confirmez le format officiel de votre examen avant l'inscription.</div></section>
      <section class="exam-info card"><h3>Deux séries, huit sujets</h3><p>La série A reprend les projets de cours. La série B apporte de nouveaux contextes : CV, anime, technologies, réseaux et programmation.</p><div class="info-foot">Chaque pack ZIP contient les sujets et les fichiers de travail associés. Les corrigés en sont exclus.</div></section>
    </div>
    ${active ? renderActiveExam(active) : `
      <div class="filter-row" style="margin-top:25px"><button class="filter-chip ${selectedSeries === "A" ? "active" : ""}" data-series="A">Série A · projets du cours</button><button class="filter-chip ${selectedSeries === "B" ? "active" : ""}" data-series="B">Série B · nouveaux thèmes</button></div>
      <div class="exam-grid">${visible.map((exam) => `
        <article class="exam-card card"><span class="exam-icon">${String(exam.id).padStart(2, "0")}</span><h4>${exam.title}</h4><p>${exam.projects.length} projets · ${exam.taskCount} tâches · sujet sans corrigé</p>
          <div class="exam-actions"><a class="button secondary small" href="${fileUrl(examSubjectUrl(exam))}" download>Sujet Word</a><button class="button small" data-start-exam="${exam.series}-${exam.id}">Préparer</button></div>
        </article>`).join("")}</div>
      <div class="section-title-row"><div><h2 class="section-heading">Récupérer une série complète</h2><p class="section-intro">Les packs incluent les quatre sujets et tous les documents de travail.</p></div></div>
      <div class="resource-grid">${["A", "B"].map((series) => `<article class="resource-card card"><span class="resource-icon">⇩</span><div class="resource-copy"><h3>Série ${series} — 4 examens</h3><p>Archive ZIP avec sujets Word, fichiers de travail et ressources associées.</p><a href="${fileUrl(examArchiveUrl(series))}" download>Télécharger l'archive ZIP ↓</a></div></article>`).join("")}</div>
    `}
    <section class="timer-panel" id="timer-panel" ${active ? "" : "hidden"} aria-live="polite">
      <div><div class="timer-label">${active ? `Entraînement · ${escapeHtml(active.title)}` : "Chronomètre d'entraînement"}</div><div class="timer-value" id="timer-value">50:00</div></div>
      <div class="timer-controls"><button class="button small" id="timer-toggle">${activeExam && activeExam.running ? "Pause" : "Démarrer"}</button><button class="button secondary small" id="timer-stop">Terminer</button></div>
    </section>
  `;
}

function renderActiveExam(exam) {
  const checked = activeExam ? activeExam.checked || [] : [];
  const items = exam.projects.map((id) => {
    const project = PROJECTS.find((item) => item.id === id);
    return `<label class="path-row"><input type="checkbox" class="exam-project-check" value="${id}" ${checked.includes(id) ? "checked" : ""}><span class="path-meta"><strong>Projet ${String(id).padStart(2, "0")} · ${escapeHtml(project.title)}</strong><span>${escapeHtml(project.skills.slice(0, 3).join(" · "))}</span></span><span class="path-check">${checked.includes(id) ? "Fait" : ""}</span></label>`;
  }).join("");
  return `
    <div class="section-title-row"><div><h2 class="section-heading">${escapeHtml(exam.title)} · Série ${exam.series}</h2><p class="section-intro">Cochez un projet seulement après avoir vérifié les tâches du sujet dans Word.</p></div><button class="text-button" data-exam-back>← Tous les examens</button></div>
    <div class="home-grid">
      <section class="path-card card"><h3 class="section-heading" style="font-size:15px">Checklist d'autoévaluation</h3><p class="section-intro">${exam.projects.length} projets à réaliser · ${exam.taskCount} tâches dans le sujet Word.</p><div class="path-list">${items}</div><div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:15px"><a class="button small" href="${fileUrl(examSubjectUrl(exam))}" download>Télécharger le sujet Word</a><a class="button secondary small" href="${fileUrl(examArchiveUrl(exam.series))}" download>Pack complet de la série</a></div></section>
      <aside class="tip-card card"><span class="tip-label">Avant de démarrer</span><h3>Ouvrez Word et préparez votre espace de travail.</h3><p>Vous pouvez démarrer ou mettre en pause le chronomètre. Lorsque vous avez terminé, cochez les projets réalisés et enregistrez votre tentative.</p><button class="button small" data-save-exam="${exam.series}-${exam.id}">Terminer et enregistrer</button></aside>
    </div>
  `;
}

function renderQuiz() {
  if (!quizSession) quizSession = makeQuizSession();
  if (quizSession.complete) return renderQuizResult();
  const item = quizSession.questions[quizSession.index];
  const letters = ["A", "B", "C", "D"];
  const currentAnswer = quizSession.answers[quizSession.index];
  const isSubmitted = currentAnswer !== undefined;
  const correct = currentAnswer === item.answer;
  return `
    <header><p class="eyebrow">20 questions · explications immédiates</p><h1 class="page-heading">Quiz de révision</h1><p class="page-subtitle">Une série de questions pour vérifier les notions. L'examen MOS évalue des actions dans Word; ce quiz complète la pratique, il ne la remplace pas.</p></header>
    <div class="quiz-layout">
      <section class="quiz-card card">
        <div class="quiz-top"><span class="pill">${escapeHtml(MODULES.find((module) => module.id === item.module).title)}</span><span class="muted" style="font-size:11px">${quizSession.index + 1} / ${quizSession.questions.length}</span></div>
        <div class="quiz-progress"><span style="width:${((quizSession.index + 1) / quizSession.questions.length) * 100}%"></span></div>
        <h2 class="quiz-question">${escapeHtml(item.q)}</h2>
        <div class="answer-list">${item.options.map((option, index) => {
          let classes = "answer-option";
          if (isSubmitted && index === item.answer) classes += " correct";
          else if (isSubmitted && index === currentAnswer && !correct) classes += " wrong";
          else if (!isSubmitted && index === currentAnswer) classes += " selected";
          return `<button class="${classes}" data-answer="${index}" ${isSubmitted ? "disabled" : ""}><span class="option-letter">${letters[index]}</span>${escapeHtml(option)}</button>`;
        }).join("")}</div>
        <div class="answer-feedback" ${isSubmitted ? "" : "hidden"}>${correct ? "Bonne réponse. " : "À revoir. "}${escapeHtml(item.explanation)}</div>
        <div class="quiz-controls"><button class="button secondary small" data-quiz-reset>Recommencer</button><button class="button small" data-quiz-next ${isSubmitted ? "" : "disabled"}>${quizSession.index === quizSession.questions.length - 1 ? "Voir mon résultat" : "Question suivante →"}</button></div>
      </section>
      <aside class="quiz-aside card"><h3>Votre série</h3><p>Répondez puis lisez l'explication avant de passer à la suite.</p><div class="quiz-score">${quizSession.score} <span class="muted" style="font-size:12px">bonne${quizSession.score === 1 ? "" : "s"} réponse${quizSession.score === 1 ? "" : "s"}</span></div><p>Meilleur résultat : <strong>${state.quizBest}%</strong><br>Tentatives : <strong>${state.quizAttempts}</strong></p><button class="text-button" data-view="cours">Revoir les leçons →</button></aside>
    </div>
  `;
}

function makeQuizSession() {
  const questions = [...QUIZ].sort(() => Math.random() - 0.5).slice(0, 10);
  return { questions, index: 0, answers: [], score: 0, complete: false };
}

function renderQuizResult() {
  const percent = Math.round((quizSession.score / quizSession.questions.length) * 100);
  return `
    <header><p class="eyebrow">Quiz de révision</p><h1 class="page-heading">Votre résultat</h1></header>
    <section class="quiz-card card" style="margin-top:22px">
      <div class="quiz-result"><div><span class="quiz-result-icon">${percent >= 70 ? "✓" : "↻"}</span><h2>${percent}%</h2><p>${quizSession.score} bonne${quizSession.score === 1 ? "" : "s"} réponse${quizSession.score === 1 ? "" : "s"} sur ${quizSession.questions.length}. ${percent >= 70 ? "Beau travail. Consolidez vos acquis avec un projet dans Word." : "Relisez les explications et refaites une série pour progresser."}</p>
      <div style="display:flex;justify-content:center;gap:8px;flex-wrap:wrap"><button class="button" data-quiz-reset>Nouvelle série</button><button class="button secondary" data-view="cours">Revoir les cours</button><button class="button secondary" data-view="projets">Pratiquer un projet</button></div></div></div>
    </section>`;
}

function renderResources() {
  const projectFiles = PROJECTS.map((project) => `
    <div class="file-row card"><div><strong>Projet ${String(project.id).padStart(2, "0")} · ${escapeHtml(project.title)}</strong><span>${escapeHtml(project.file.endsWith(".doc") ? "Document Word ancien (.doc)" : "Document de travail (.docx)")}</span></div><a class="button secondary small" href="${fileUrl(`assets/projets/${project.file}`)}" download>Télécharger</a></div>`).join("");
  const resources = [
    { icon: "▤", title: "Cours Word 2019", description: "Support de cours PDF fourni avec vos documents.", link: "assets/cours/Cours-Word-2019.pdf", label: "Ouvrir ou télécharger le cours" },
    { icon: "▧", title: "Guide étudiant Word 2019 (FR)", description: "Guide d'apprentissage fourni dans le dossier.", link: "assets/cours/Guide-etudiant-Word-2019.pdf", label: "Ouvrir ou télécharger le guide" },
    { icon: "◷", title: "Examens blancs · Série A", description: "Quatre sujets du cours, documents de travail et ressources.", link: examArchiveUrl("A"), label: "Télécharger les 4 examens" },
    { icon: "✦", title: "Examens thématiques · Série B", description: "Quatre nouveaux examens sur des thèmes professionnels et numériques.", link: examArchiveUrl("B"), label: "Télécharger les 4 examens" },
    { icon: "↗", title: "Certification MOS Word Expert 2019", description: "Consultez la page officielle Microsoft pour vérifier les compétences mesurées et la disponibilité de l'examen.", link: "https://learn.microsoft.com/en-us/credentials/certifications/mos-word-expert-2019/", label: "Consulter Microsoft Learn" },
    { icon: "☷", title: "Référentiel officiel de compétences", description: "Document Microsoft récapitulant les compétences mesurées pour MO-101 Word Expert 2019.", link: "https://arch-center.azureedge.net/Learning/Credentials/mo-101-microsoft-word-expert-skills-measured.pdf", label: "Consulter le référentiel" },
    { icon: "◧", title: "Image d’exercice : tente", description: "Image incluse dans les ressources d'entraînement de la série A.", link: "assets/media/Tente.jpg", label: "Télécharger l’image" },
    { icon: "◇", title: "Modèle 3D : ordinateur portable", description: "Ressource GLB pour les exercices d'insertion de modèles 3D.", link: "assets/media/Laptop.glb", label: "Télécharger le modèle 3D" },
    { icon: "◇", title: "Modèle 3D : crème glacée", description: "Ressource GLB pour les exercices d'insertion de modèles 3D.", link: "assets/media/Crèmeglacée.glb", label: "Télécharger le modèle 3D" },
  ];
  return `
    <header><p class="eyebrow">À télécharger · pour apprendre hors ligne</p><h1 class="page-heading">Cours et ressources</h1><p class="page-subtitle">Retrouvez les guides, les fichiers de départ et les examens. Pour les projets, travaillez sur une copie afin de garder le document original intact.</p></header>
    <div class="resource-grid">${resources.map((resource) => `<article class="resource-card card"><span class="resource-icon">${resource.icon}</span><div class="resource-copy"><h3>${escapeHtml(resource.title)}</h3><p>${escapeHtml(resource.description)}</p><a href="${resource.link.startsWith("https://") ? resource.link : fileUrl(resource.link)}" ${resource.link.startsWith("https://") || resource.link.endsWith(".pdf") ? 'target="_blank" rel="noreferrer"' : "download"}>${escapeHtml(resource.label)} ↓</a></div></article>`).join("")}</div>
    <div class="section-title-row"><div><h2 class="section-heading">Les 15 documents de travail</h2><p class="section-intro">Les fichiers fournis sont conservés sans leurs corrigés.</p></div><button class="text-button" data-view="projets">Voir les missions →</button></div>
    <div class="file-list">${projectFiles}</div>
    <div class="resource-disclaimer"><strong>Modèles 3D</strong> — Le fichier Laptop est inclus dans les packs d'examen. Certains formats 3D peuvent nécessiter Word 2019 et une carte graphique compatible.</div>
  `;
}

function renderProgress() {
  const progress = getProgress();
  const examAverage = state.examAttempts.length
    ? Math.round(state.examAttempts.reduce((total, attempt) => total + attempt.percent, 0) / state.examAttempts.length)
    : 0;
  const rows = MODULES.map((module) => {
    const done = state.doneModules.includes(module.id);
    return `<div class="progress-module card"><strong>${escapeHtml(module.title)}</strong><span class="meter"><span style="width:${done ? 100 : 0}%"></span></span><small>${done ? "Terminé" : "À commencer"}</small></div>`;
  }).join("");
  const attempts = [...state.examAttempts].reverse().slice(0, 8);
  return `
    <header><p class="eyebrow">Vos jalons et vos résultats</p><h1 class="page-heading">Ma progression</h1><p class="page-subtitle">Ces données sont sauvegardées uniquement dans le navigateur de cet appareil. Elles ne sont ni envoyées ni synchronisées.</p></header>
    <div class="progress-summary">
      <div class="progress-stat card"><span>Progression globale</span><strong>${progress}%</strong></div>
      <div class="progress-stat card"><span>Projets marqués réalisés</span><strong>${state.doneProjects.length}<small class="muted"> / 15</small></strong></div>
      <div class="progress-stat card"><span>Moyenne autoévaluée des examens</span><strong>${examAverage}%</strong></div>
    </div>
    ${sectionTitle("Parcours de cours", "Cochez un module lorsque vous savez refaire les gestes dans Word.")}
    <div class="progress-detail">${rows}</div>
    ${sectionTitle("Dernières tentatives d'examen", "Le résultat est calculé à partir des projets que vous avez cochés.")}
    <div class="history-list">${attempts.length ? attempts.map((attempt) => `<div class="history-item card"><div><strong>${escapeHtml(attempt.title)}</strong><span> Série ${attempt.series} · ${new Date(attempt.date).toLocaleDateString("fr-FR")}</span></div><strong>${attempt.percent}%</strong></div>`).join("") : `<div class="empty-state">Pas encore de tentative enregistrée. Choisissez un examen blanc pour commencer.</div>`}</div>
    <div class="section-title-row"><div><h2 class="section-heading">Réinitialiser mes données locales</h2><p class="section-intro">Cette action efface la progression conservée sur cet appareil.</p></div><button class="button secondary small" data-clear-progress>Effacer ma progression</button></div>
  `;
}

function renderTimer() {
  const panel = document.getElementById("timer-panel");
  const value = document.getElementById("timer-value");
  const toggle = document.getElementById("timer-toggle");
  if (!panel || !value || !activeExam) return;
  panel.hidden = false;
  value.textContent = `${String(Math.floor(timerSeconds / 60)).padStart(2, "0")}:${String(timerSeconds % 60).padStart(2, "0")}`;
  toggle.textContent = activeExam.running ? "Pause" : "Démarrer";
}

function startExam(key) {
  const [series, id] = key.split("-");
  activeExam = { series, id: Number(id), running: false, checked: [] };
  timerSeconds = 50 * 60;
  setView("examens");
}

function timerTick() {
  timerSeconds = Math.max(0, timerSeconds - 1);
  renderTimer();
  if (timerSeconds === 0) {
    clearInterval(examTimer);
    examTimer = null;
    activeExam.running = false;
    showToast("Temps écoulé. Cochez les projets terminés pour enregistrer votre autoévaluation.");
    renderTimer();
  }
}

function stopExam() {
  if (!activeExam) return;
  clearInterval(examTimer);
  examTimer = null;
  activeExam.running = false;
  const exam = EXAMS.find((item) => item.series === activeExam.series && item.id === activeExam.id);
  const checked = activeExam.checked || [];
  const percent = Math.round((checked.length / exam.projects.length) * 100);
  state.examAttempts.push({ series: exam.series, title: exam.title, percent, date: new Date().toISOString() });
  saveState();
  activeExam = null;
  setView("progression");
  showToast(`Tentative enregistrée : ${percent}% des projets cochés.`);
}

function handleClick(event) {
  const target = event.target.closest("button, a");
  if (!target) return;
  if (target.dataset.view) { setView(target.dataset.view); return; }
  if (target.dataset.openModule) {
    setView("cours");
    requestAnimationFrame(() => document.getElementById(`module-${target.dataset.openModule}`)?.scrollIntoView({ behavior: "smooth", block: "start" }));
    return;
  }
  if (target.dataset.toggleModule) {
    const id = target.dataset.toggleModule;
    state.doneModules = state.doneModules.includes(id) ? state.doneModules.filter((item) => item !== id) : [...state.doneModules, id];
    saveState(); render(); showToast("Progression du module mise à jour."); return;
  }
  if (target.dataset.filter) { projectFilter = target.dataset.filter; render(); return; }
  if (target.dataset.expandProject) {
    const detail = document.getElementById(`project-detail-${target.dataset.expandProject}`);
    const open = detail.hidden;
    detail.hidden = !open;
    target.setAttribute("aria-expanded", String(open));
    target.textContent = open ? "Masquer la mission" : "Voir la mission";
    return;
  }
  if (target.dataset.completeProject) {
    const id = Number(target.dataset.completeProject);
    state.doneProjects = state.doneProjects.includes(id) ? state.doneProjects.filter((item) => item !== id) : [...state.doneProjects, id];
    saveState(); render(); showToast("Projet marqué comme réalisé."); return;
  }
  if (target.dataset.series) { selectedSeries = target.dataset.series; render(); return; }
  if (target.dataset.startExam) { startExam(target.dataset.startExam); return; }
  if (target.dataset.examBack) { activeExam = null; clearInterval(examTimer); examTimer = null; render(); return; }
  if (target.id === "timer-toggle" && activeExam) {
    activeExam.running = !activeExam.running;
    if (activeExam.running) examTimer = setInterval(timerTick, 1000);
    else { clearInterval(examTimer); examTimer = null; }
    renderTimer(); return;
  }
  if (target.id === "timer-stop") { stopExam(); return; }
  if (target.dataset.saveExam) { stopExam(); return; }
  if (target.dataset.answer !== undefined && quizSession && !quizSession.complete) {
    const index = Number(target.dataset.answer);
    const item = quizSession.questions[quizSession.index];
    quizSession.answers[quizSession.index] = index;
    if (index === item.answer) {
      quizSession.score++;
      state.quizCorrect++;
    }
    saveState(); render(); return;
  }
  if (target.dataset.quizNext !== undefined && quizSession) {
    if (quizSession.index < quizSession.questions.length - 1) {
      quizSession.index++;
    } else {
      quizSession.complete = true;
      const percent = Math.round((quizSession.score / quizSession.questions.length) * 100);
      state.quizAttempts++;
      state.quizBest = Math.max(state.quizBest, percent);
      saveState();
    }
    render(); return;
  }
  if (target.dataset.quizReset !== undefined) { quizSession = makeQuizSession(); render(); return; }
  if (target.dataset.clearProgress !== undefined) {
    if (window.confirm("Effacer toute la progression enregistrée dans ce navigateur ?")) {
      state = { ...INITIAL_STATE }; saveState(); render(); showToast("Progression réinitialisée.");
    }
  }
}

function handleChange(event) {
  if (event.target.matches(".exam-project-check") && activeExam) {
    const id = Number(event.target.value);
    activeExam.checked = event.target.checked
      ? [...new Set([...(activeExam.checked || []), id])]
      : (activeExam.checked || []).filter((item) => item !== id);
    const projectRow = event.target.closest(".path-row");
    const label = projectRow.querySelector(".path-check");
    if (label) label.textContent = event.target.checked ? "Fait" : "";
    saveState();
  }
}

function handleInput(event) {
  if (event.target.id === "project-search") {
    const cursor = event.target.selectionStart;
    projectQuery = event.target.value;
    render();
    const input = document.getElementById("project-search");
    input.focus();
    input.setSelectionRange(cursor, cursor);
  }
}

document.addEventListener("click", handleClick);
document.addEventListener("change", handleChange);
document.addEventListener("input", handleInput);
document.getElementById("mobile-menu").addEventListener("click", (event) => {
  const sidebar = document.getElementById("sidebar");
  const isOpen = sidebar.classList.toggle("open");
  event.currentTarget.setAttribute("aria-expanded", String(isOpen));
});
window.addEventListener("hashchange", () => {
  const view = location.hash.slice(1);
  if (["accueil", "cours", "projets", "examens", "quiz", "ressources", "progression"].includes(view) && view !== currentView) {
    currentView = view;
    document.querySelectorAll(".nav-link").forEach((button) => {
      const isActive = button.dataset.view === view;
      button.classList.toggle("active", isActive);
      if (isActive) button.setAttribute("aria-current", "page");
      else button.removeAttribute("aria-current");
    });
    document.getElementById("page-label").textContent = VIEW_LABELS[view] || "Formation";
    render();
  }
});

const initialView = location.hash.slice(1);
if (["accueil", "cours", "projets", "examens", "quiz", "ressources", "progression"].includes(initialView)) currentView = initialView;
document.querySelectorAll(".nav-link").forEach((button) => button.classList.toggle("active", button.dataset.view === currentView));
document.getElementById("page-label").textContent = VIEW_LABELS[currentView] || "Vue d’ensemble";
render();
