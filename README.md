# Application Saint-Valentin 💕

Application interactive pour la Saint-Valentin avec un bouton "Non" qui fuit le curseur.

## ✅ Corrections apportées

### Problème "Not Found" - Résolu
- ✅ Ajout de `index.html` à la racine
- ✅ Création de `src/main.tsx` comme point d'entrée
- ✅ Configuration complète de TypeScript

### Problème CSS - Résolu  
- ✅ Consolidation de tous les styles CSS dans un seul fichier `src/styles/index.css`
- ✅ Import CSS avec chemin relatif (`./styles/index.css`) au lieu d'alias
- ✅ Suppression des imports CSS imbriqués qui causaient des erreurs de chargement

## Déploiement sur Vercel

### Étapes de déploiement :

1. **Pousse sur GitHub** :
```bash
git add .
git commit -m "Fix CSS loading and deployment issues"
git push origin main
```

2. **Sur Vercel.com** :
   - Connecte-toi avec GitHub
   - Importe le repository
   - Vercel détectera automatiquement Vite
   - Clique sur "Deploy"

L'application devrait maintenant se déployer sans erreur ! 🚀

## Développement local

```bash
npm install
npm run dev
```

## Technologies
- React 18.3.1
- Vite 6.3.5
- Tailwind CSS 4.1.12
- Lucide React (icônes)