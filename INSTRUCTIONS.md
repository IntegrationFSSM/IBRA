# 📝 INSTRUCTIONS POUR COMPLÉTER VOTRE SITE WEB

Bienvenue ! Voici comment ajouter vos photos et informations de réseaux sociaux.

---

## 📸 ÉTAPE 1 : AJOUTER VOS 11 PHOTOS

### 1.1 Préparer vos photos

1. **Renommez vos photos** comme suit :
   - `1.jpeg`
   - `2.jpeg`
   - `3.jpeg`
   - ... jusqu'à `11.jpeg`

2. **Copiez ces 11 photos** dans le dossier :
   ```
   c:\Users\yassi\OneDrive\Bureau\tarz\images\gallery\
   ```

### 1.2 Descriptions des photos (OPTIONNEL)

Si vous voulez personnaliser les titres et descriptions :

1. Ouvrez le fichier `index.html`
2. Cherchez `<!-- Photo 1 -->` (ligne ~100)
3. Modifiez ces lignes :
   ```html
   <h3>Broderie Artisanale 1</h3>
   <p>Description personnalisée</p>
   ```
   
4. Répétez pour chaque photo (1 à 11)

---

## 📱 ÉTAPE 2 : AJOUTER VOS RÉSEAUX SOCIAUX

### 2.1 WhatsApp (2 numéros)

#### Dans la section CONTACT :

1. Ouvrez `index.html`
2. Cherchez `<!-- WhatsApp 1 - AJOUTEZ VOTRE NUMÉRO ICI -->` (ligne ~230)
3. Remplacez :
   ```html
   <a href="https://wa.me/212XXXXXXXXX" target="_blank">+212 XXX XXX XXX</a>
   ```
   Par exemple :
   ```html
   <a href="https://wa.me/212612345678" target="_blank">+212 612 345 678</a>
   ```

4. Faites la même chose pour `<!-- WhatsApp 2 -->` quelques lignes plus bas

**Format du numéro :** 
- Pour le `href` : `https://wa.me/212XXXXXXXXX` (sans espaces)
- Pour le texte affiché : `+212 XXX XXX XXX` (avec espaces pour la lisibilité)

#### Dans le FOOTER :

1. Cherchez `<!-- WHATSAPP 1 - AJOUTEZ VOTRE NUMÉRO ICI -->` (ligne ~275)
2. Remplacez de la même façon :
   ```html
   <a href="https://wa.me/212612345678" target="_blank" ...>
   ```

3. Faites pareil pour WhatsApp 2

---

### 2.2 Facebook

1. Cherchez `<!-- AJOUTEZ VOTRE LIEN FACEBOOK ICI -->` (ligne ~272)
2. Remplacez :
   ```html
   <a href="https://facebook.com/VOTRE_PAGE" target="_blank" ...>
   ```
   Par votre lien, par exemple :
   ```html
   <a href="https://facebook.com/IbraDahabia" target="_blank" ...>
   ```

---

### 2.3 Instagram

1. Cherchez `<!-- AJOUTEZ VOTRE LIEN INSTAGRAM ICI -->` (ligne ~275)
2. Remplacez :
   ```html
   <a href="https://instagram.com/VOTRE_COMPTE" target="_blank" ...>
   ```
   Par exemple :
   ```html
   <a href="https://instagram.com/ibradahabia" target="_blank" ...>
   ```

---

## ✅ VÉRIFICATION

Après avoir ajouté tout :

1. **Ouvrez** `index.html` dans votre navigateur
2. **Vérifiez** que toutes les photos s'affichent
3. **Testez** les liens WhatsApp, Facebook et Instagram

---

## 🎯 RÉSUMÉ RAPIDE

### Photos
✅ Copiez 1.jpeg à 11.jpeg dans `images/gallery/`

### Réseaux Sociaux
Dans `index.html`, cherchez et remplacez :
- `<!-- WhatsApp 1 -->` → Votre premier numéro
- `<!-- WhatsApp 2 -->` → Votre second numéro  
- `<!-- AJOUTEZ VOTRE LIEN FACEBOOK -->` → Votre page Facebook
- `<!-- AJOUTEZ VOTRE LIEN INSTAGRAM -->` → Votre compte Instagram

---

## 💡 AIDE

Si vous avez des questions, les commentaires dans le code commencent par `<!--` et finissent par `-->`.
Cherchez ces commentaires pour trouver rapidement où modifier.

**Bon courage ! 🎨**
