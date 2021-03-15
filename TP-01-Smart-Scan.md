# 🎓 TP - 01 Smart Scan

Votre objectif pendant ce TP est d'atteindre les objectifs fonctionnels.

Vous avez la capacité de vous exprimer en `HTML`, `CSS`, `d'utiliser des librairies`, vous disposez d'un `environnement de développement` et avez découvert `JavaScript` en étudiant les `variables`, les `types`, le `DOM`, les `fonctions` et les `évènements`.

___

## 🐥 Précedement

> Vous avez décidé d'une thématique de projet et vous avez découvert des syntaxes vous permettant de vous rapprocher de l'objectif du projet.

Vous travaillez à implémenter le rendu graphique en pur JavaScript pour obtenir une Single Page Application.

___

## 🦆 Maintenant

Vous allez découvrir:
* Accéder à la camera
* Afficher le flux vidéo
* Capturer une image

___

## 👨🏻‍💻 Camera

> Activer la camera

[@see Web/API/MediaDevices/getUserMedia](https://developer.mozilla.org/fr/docs/Web/API/MediaDevices/getUserMedia)

Vous pouvez demander le flux vidéo en fonction de contraites.

```js
navigator.mediaDevices.getUserMedia(constraints)
.then((stream) => {
  /* use the stream */
})
.catch((err) => {
  /* handle the error */
});
```

La première étape consiste à modifier votre DOM en fonction de l'acceptation ou du refus de l'utilisateur.

* 📝 Quand le stream est obtenu afficher un bouton de capture à la place du bouton d'activation de la camera si présent

* 📝 Quand l'utilisateur refuse l'activation de la camera, proposez un bouton pour relancer l'opération au click

___

## 👨🏻‍💻 Vidéo

> Afficher le flux vidéo

Une fois le stream obtenu vous voulez afficher son flux vidéo.

[@see Web/API/MediaDevices/getUserMedia#utilisation](https://developer.mozilla.org/fr/docs/Web/API/MediaDevices/getUserMedia#utilisation_de_la_nouvelle_api_dans_les_navigateurs_plus_anciens)

Vos navigateurs implémentent la camera depuis un long moment et vous n'avez pas à vous méfier de sa compatibilité, par contre la balise vidéo possède soit un attribut src soit un attribut srcObject en fonction des navigateurs.

Intéressez-vous aux structures conditionnelles et aux opérateurs logiques.

[@see JavaScript/wiki/03#-conditions](https://github.com/seeren-training/JavaScript/wiki/03#-conditions)

```js
if ("srcObject" in video) {
    video.srcObject = stream;
} else {
    // Avoid using this in new browsers, as it is going away.
    video.src = window.URL.createObjectURL(stream);
}
```

* 📝 Affichez la vidéo correspondant aux flux vidéo obtenu
* 📝 Vérifiez la compatibilité de votre script sur différents navigateurs

___

## 👨🏻‍💻 Capture

> Capturer une image

Une fois la vidéo affichée, vous souhaitez en capturer une image.

L'opération est délicate et passe par un peu de bidouille. L'idée est de créer une balise canvas qui possède la capacité de faire un rendu graphique. Il faut créer la balise et son contexte 2D pour pouvoir dessiner une image à partir de la vidéo, puis pour obtenir la source de l'image au format base64. Une fois la source obtenue vous pouvez l'affecter à l'attribut src d'une image pour l'afficher. Cette image n'est pas présente sous forme de fichier mais uniquement dans la mémoire au format base64.

[@see Web/API/WebRTC_API/Taking_still_photos](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Taking_still_photos)

```js
canvas.width = video.videoWidth;
canvas.height = video.videoHeight;
canvas.getContext('2d').drawImage(
    video,
    0,
    0,
    video.videoWidth,
    video.videoHeight
);
img.src = canvas.toDataURL();
```

* 📝 Afficher l'image en utilisant canvas pour l'obtenir

___

## 🐧 Next

Vous découvrirez:
* La conversion d'une image

___

## 👨🏻‍💻 Conversion

> Convertir une image

Vous avez plusieurs solutions pour convertir une image. Soit vous utilisez un service distant qui le fait pour vous, soit vous installez un package.

[@see html2pdf-dom-to-image-more](https://www.npmjs.com/package/html2pdf-dom-to-image-more#usage)

```js
var element = document.getElementById('element-to-print');
html2pdf(element);
```

Il vous faudra installer puis tester différents package pour identifier celui qui correspond à vos besoins

* 📝 Convertissez votre image en PDF que vous ouvrez dans un nouvel onglet

___

## 🕕 Manage your time

C'est une première étape à franchir avant de proposer la même fonctionnalité pour différents formats, vous pouvez boucler l'objectif du projet si vous passez cette étape...