# Cap Word — plateforme de préparation MOS Word 2019

Plateforme pédagogique statique, en français, conçue à partir des documents Word 2019 fournis avec le cours. Elle fonctionne sans compte ni serveur : la progression est conservée dans le stockage local du navigateur.

## Contenu

- Parcours organisé autour des quatre grands domaines d'utilisation de Word.
- Leçons guidées, quiz avec explications et suivi de progression.
- Quinze projets Word d'origine, consignes d'entraînement et fichiers de départ.
- Huit examens blancs téléchargeables (deux séries de quatre), avec fichiers de travail.
- Guides PDF, modèles 3D et image d'exercice.
- Site responsive, utilisable au clavier et configuré pour GitHub Pages.

## Publication sur GitHub Pages

1. Créez un dépôt GitHub public et poussez **le contenu de ce dossier** dans sa branche `main`.
2. Avant le premier déploiement, ouvrez **Settings → Pages → Build and deployment** et choisissez **GitHub Actions** comme source. Cette activation initiale doit être faite dans les paramètres du dépôt : le jeton standard du workflow ne peut pas activer Pages lui-même.
3. Le workflow `.github/workflows/pages.yml` déploie automatiquement le site après un push sur `main`. L'URL apparaît dans l'exécution de l'action ou dans **Settings → Pages**.

Le site utilise des chemins relatifs et ne demande ni compilation ni secrets.

## Confidentialité et matériel

GitHub Pages est public. Les corrigés et documents contenant des solutions sont volontairement exclus des fichiers publiés. Le dépôt contient les fichiers de départ et les sujets d'examen; les deux archives d'examen ne contiennent pas de corrigés.

La plateforme est un support pédagogique indépendant, non affilié ni agréé par Microsoft ou Certiport. Le contenu et le format de certification peuvent évoluer; consultez les pages officielles avant de vous inscrire. Aucun résultat d'examen ni préparation « à 100 % » ne peut être garanti.
