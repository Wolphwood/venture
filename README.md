# Venture

## Présentation
**Venture** est un système d'histoires à choix intégrant une dimension RPG, combinant narration interactive, gestion d'inventaire et statistiques.\
Il permet de créer des aventures où les décisions des joueurs influencent l'évolution de l'histoire, tout en offrant des mécaniques de jeu telles que la gestion des ressources et des compétences.\
Ce mélange unique entre récit et gameplay rend Venture idéal pour des expériences immersives et personnalisées.

## Structure
La structure des Ventures est pensée pour être facilement utilisée à travers les supports.\
Attention cependant aux limitations des plateformes et/ou supports utilisés.

La structure est pensée au format JSON ou Objet Javascript.

### Structure Général
| Nom | Description | Type | Optionnel |
|-|-|-|-|
name | Nom du jeu | `String` | ❌
authors | Liste des auteurs | `VentureAuthor[]` | ✅
version | Version du jeu | `String\|Number` | ✅
tags | tags | `String[]` | ❌
presentation | Présentation de la venture (clé de traduction `venture.presentation` si traduction disponible) | `String` | ❌
procedures | procedures | `VentureProcedure[]` | ❌
initialization | initialization | `VentureInitialization` | ❌
situations | situations | `VentureSituation[]` | ❌
translated | translated | `Boolean` | ✅
translations | translations | `Object<Key:String\|Number\|String[]\|Number[]>` | ✅

### Author :
| Nom | Description | Type | Optionnel |
|-|-|-|-|
name | Nom de l'auteur•ice | `String` | ❌
| *contact | Liens de l'auteur•ice | `Object<Key:String>` | ✅ 

#### Author Links
| Nom | Description | Type | Optionnel |
|-|-|-|-|
mail | Adresse mail | `String` | ✅
website | URL | `String` | ✅
twitter | Profile twitter | `String` | ✅
bsky | Profile BlueSky | `String` | ✅
instagram | Profile Instagram | `String` | ✅
discord | ID Discord| `String` | ✅

# VentureInitialization
| Nom | Description | Type | Optionnel |
|-|-|-|-|
situation | ID de la situation de départ | `String` | ❌
stats | desc | `Object<Key:Number\|Range>` | ✅
inventory | desc | `Object<Key:Number\|Range>` | ✅
variable | desc | `Object<Key:Number\|Range>` | ✅

# VentureProcedure
| Nom | Description | Type | Optionnel |
|-|-|-|-|
id | ID de la procedure | `String` | ❌
requirements | Pré-requis pour autoriser la procédure à s'éxècuter | `ExpressionString\|VentureRequirement[]` | ✅
actions | Actions a effectuée | `VentureAction[]` | ❌

# VentureSituation 
| Nom | Description | Type | Optionnel |
|-|-|-|-|
| id | ID de la situation | `String` | ❌ |
| description | Description de la situation | `String` | ❌ |
| image | Informations sur l'image | `Object` | ✅ |
| options | Liste des options disponibles | `Array` | ❌ |

## VentureSituationOption 
| Nom | Description | Type | Optionnel |
|-|-|-|-|
| options.actions | Actions liées à l'option | `VentureAction[]` | ✅ |
| options.requirements | Pré-requis pour autoriser l'option | `ExpressionString\|VentureRequirement[]` | ✅ |
| options.procedures | Liste des procédures à exécuter pour l'option | `VentureProcedure[]` | ✅ |
| options.hidden | Conditions pour cacher l'option | `ExpressionString\|VentureRequirement[]` | ✅ |

# VentureImage 
| Nom | Description | Type | Optionnel |
|-|-|-|-|
| image.url | URL de l'image | `String` | ✅ |
| image.base64 | Image encodée en base64 | `String` | ✅ |
| image.file | Fichier locale de l'image | `String` | ✅ |
_Priorité `URL > FILE > BASE64`_

# VentureRequirement 
| Nom | Description | Type | Optionnel |
|-|-|-|-|
| type | Type de la condition ("AND", "OR", "comparison") | `"AND"\|"OR"\| "comparison"` | ❌ |

## VentureRequirement AND/OR 
| Nom | Description | Type | Optionnel |
|-|-|-|-|
| requirements | Liste des pré-requis imbriqués pour cette condition | `ExpressionString\|VentureRequirement[]` | ❌ |

## VentureRequirement Comparison 
| Nom | Description | Type | Optionnel |
|-|-|-|-|
| left | Valeur ou expression à gauche de la comparaison | `String\|Number\|Range` | ❌ |
| right | Valeur ou expression à droite de la comparaison | `String\|Number\|Range` | ❌ |
| operator | Opérateur de comparaison | `Operator` | ❌ (default: "set") |
| precision | Précision numérique pour la comparaison | `Number` | ✅ |
| round | Méthode d'arrondi pour la comparaison | `"round" \| "ceil" \| "floor"` | ✅ |

# VentureAction 
| Nom | Description | Type | Optionnel |
|-|-|-|-|
| type | Type d'action (`inventory`, `condition`, `stat`, `goto`, `variable`, `procedure`, `reward`) | `String` | ❌ |
| conditions | Conditions pour autoriser l'exécution de l'action | `ExpressionString\|VentureRequirement[]` | ✅ |

## VentureAction Inventory 
| Nom | Description | Type | Optionnel |
|-|-|-|-|
| item | Nom ou ID de l'objet | `String` | ❌ |
| count | Quantité de l'objet | `Number \| Range` | ✅ (default: 1) |
| action | Type d'action sur l'inventaire | `"set" \| "add" \| "remove"` | ✅ (default: "add") |

## VentureAction Condition 
| Nom | Description | Type | Optionnel |
|-|-|-|-|
| requirements | Conditions pour déterminer le résultat | `ExpressionString\|VentureRequirement[]` | ❌ |
| success | Actions à exécuter en cas de succès | `VentureAction[]` | ❌ |
| fail | Actions à exécuter en cas d'échec | `VentureAction[]` | ❌ |

## VentureAction Stat 
| Nom | Description | Type | Optionnel |
|-|-|-|-|
| name | Nom ou ID de la statistique | `String` | ❌ |
| value | Valeur ou plage de la modification | `Number \| Range` | ❌ |
| operator | Opérateur pour la modification (`set`, `add`, `sub`, etc.) | `Operator` | ✅ (default: "set") |
| precision | Précision numérique pour la modification | `Number` | ✅ |
| round | Méthode d'arrondi pour la modification | `"round" \| "ceil" \| "floor"` | ✅ |

## VentureAction Goto 
| Nom | Description | Type | Optionnel |
|-|-|-|-|
| target | ID ou nom de la cible à atteindre | `String` | ❌ |

## VentureAction Variable 
| Nom | Description | Type | Optionnel |
|-|-|-|-|
| name | Nom ou ID de la variable | `String` | ❌ |
| value | Valeur ou plage de la modification | `Number \| Range` | ❌ |
| operator | Opérateur pour la modification (`set`, `add`, `sub`, etc.) | `Operator` | ✅ (default: "set") |
| precision | Précision numérique pour la modification | `Number` | ✅ |
| round | Méthode d'arrondi pour la modification | `"round" \| "ceil" \| "floor"` | ✅ |

## VentureAction Reward 
| Nom | Description | Type | Optionnel |
|-|-|-|-|
| id | ID de la récompense | `String` | ❌ |
| title | Titre de la récompense | `String` | ❌ |
| description | Description de la récompense | `String` | ✅ |
| image | Informations sur l'image associée | `Object` | ✅ |
| url | URL de l'image | `String` | ✅ |
| base64 | Image encodée en base64 | `String` | ✅ |
| file | Fichier de l'image | `String` | ✅ |
| color | Couleur associée à la récompense | `String` | ✅ | 

# Operator 
| Nom | Description | Type | Optionnel |
|-|-|-|-|
| set | Définit une valeur | - | ❌ |
| add | Ajoute une valeur | - | ❌ |
| remove | Soustrait une valeur | - | ❌ |
| multiply | Multiplie une valeur | - | ❌ |
| divide | Divise une valeur | - | ❌ |
| modulo | Calcule le reste de la division | - | ❌ |
| power | Élévation à une puissance | - | ❌ |
| sqrt | Calcule la racine carrée | - | ❌ |

# Range
| Nom | Description | Type | Optionnel |
|-|-|-|-|
| min | Valeur minimale du champ | `Number` | ❌ |
| max | Valeur maximale du champ | `Number` | ❌ |
| precision | Nombre de décimales pour les valeurs générées | `Number` | ✅ |
| round | Méthode d'arrondi pour la plage de valeurs | `"round" \| "ceil" \| "floor"` | ✅ |
