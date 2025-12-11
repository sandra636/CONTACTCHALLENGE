# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

#plateform web de suivi des Encadrements des étudiants de 3IAC
Plateform web permettant de faciliter les rencontres virtuelles entre encadrants et étudiants, en complément des rencontres en présentiel, et permettre à l'administration de s'assurer que les encadrements sont effectifs.
## Equipe :

membre 1 : BIKAKA SANDRA-Branche:'main'
membre 2 : BANGFOFACK-Branche:'BANGFOFACK'
membre 3 : TAYOUO TALA-Branche:'Tayouo'

## Technologie

-**Frontend** :React.js
-**Styling** :CSS
-**Base de données**: PostgreSql
-**Backend** :

## Répartition des taches

Membre 1 : interface Administrateur

**Responsabilites principales : **
- Système d'authentification (Admin, Enseignant, Étudiant)
-  Dashboard administrateur
- Import/Export des listes d'étudiants par classes et niveaux
- Gestion des affectations encadrants-étudiants (coefficient 0.5 pour binôme)
- Vue panoramique des encadrements (par département, classe, enseignant)
- Génération des états d'encadrements et statistiques
- Génération de rapports PDF

**Composants à développer :**
- `AdminDashboard.jsx`
- `UserManagement.jsx`
- `StudentImport.jsx`
- `AssignmentManager.jsx`
- `ReportsGenerator.jsx`
- `StatisticsView.jsx`

Membre 2 : Interface Enseignant-Encadrant

**Responsabilités principales :**
- Dashboard enseignant
- Définir/Modifier le thème de travail (stage, projet, mémoire, etc.)
- Forum d'échanges avec les étudiants
- Upload/Download de fichiers (rapports, mémoires)
- Système de chat avec possibilité de correction
- Formulaire de rencontre en ligne
- Accès à l'historique des échanges
- Vue sur ses encadrements en cours

**Composants à développer :**
- `TeacherDashboard.jsx`
- `ProjectThemeManager.jsx`
- `ForumComponent.jsx`
- `FileUploadDownload.jsx`
- `ChatSystem.jsx`
- `MeetingForm.jsx`
- `HistoryView.jsx`

Membre 3 : Interface Étudiant + Base de données

**Responsabilités principales :**

- Dashboard étudiant
- Formulaire d'enregistrement des encadrements
- Notifications par mail pour chaque encadrant
- Forum d'échanges avec les encadrants
- Upload/Download de fichiers
- Chat bidirectionnel
- Accès à l'historique des échanges
- Vue de ses encadrements et documents partagés

- **Conception et modélisation de la base de données**

- **Schéma de BD et diagramme de classes**

**Composants à développer :**

- `StudentDashboard.jsx`
- `EncadrementRegistration.jsx`
- `NotificationSystem.jsx`
- `StudentForum.jsx`
- `StudentFileManager.jsx`
- `StudentChat.jsx`
- `StudentHistory.jsx`

**Base de données :**
- Modélisation des données (MCD/MLD)
- Schéma de BD
- Scripts de création des tables
- Documentation de la structure

Fonctionnalités Transversales (à partager)

### Sorties écran commune :
- Historiques des échanges
- Liste des encadrements par classe
- Liste des encadrements par type
- État des encadrements par enseignant-encadrant
- Évolution des rencontres d'encadrement par enseignant

### Aspects techniques communs :
- Design responsive (mobile/web)
- Intégration Tailwind CSS
- Composants réutilisables
- Gestion des routes (React Router)
- State management (Context API ou Redux)


##  Livrables

### Documentation (TAF)
- Dossier de projet
- Analyse et modélisation des données
- Cas d'utilisation
- Diagramme de classes
- Schéma de BD
- Maquettes d'interfaces

### Application
- Application web fonctionnelle
- Possibilités SEO
- Améliorations possibles documentées
- Code source complet
