# Redditech

# Redditech

## Description du projet

Redditech est une application mobile qui call l'api Reddit, utilisateur peux ce connecté via son compte reddit et faire plusieurs manipulations.

## Cloner le projet

Via ssh [(comment configurer sa clé SSH)](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

```bash
$ git clone git@github.com:EpitechMscProPromo2024/T-DEV-600-LYN-6-1-redditech-kamel1.blua.git
```

Via https

```bash
$ git clone https://github.com/EpitechMscProPromo2024/T-DEV-600-LYN-6-1-redditech-kamel1.blua.git
```

## Configuration de l'environnement de développement

### Local SDK

Créer un fichier "local.properties" dans la racine /App/Android

Puis copier/coller (Attention de bien mettre votre chemin vers SDK)

- MacOS
```
sdk.dir = /Users/NOM_UTILISATEUR/Library/Android/sdk
```

- Linux
```
sdk.dir = /home/NOM_UTILISATEUR/Android/Sdk
```

### Installation des dépendances

- MacOS

```bash
$ brew install node
$ brew install watchman
$ brew install --cask adoptopenjdk/openjdk/adoptopenjdk11
```

- Linux

```bash
$ sudo apt install nodejs

$ git clone https://github.com/facebook/watchman.git
$ cd watchman/
$ git checkout v4.9.0
$ sudo apt-get install -y autoconf automake build-essential python-dev libssl-dev libtool
$ ./autogen.sh
$ ./configure
$ make
$ sudo make install

$ sudo apt update
$ sudo apt install default-jdk
```

##  Installation Divice Android

Télécharger [(Android Studio)](https://developer.android.com/studio?hl=fr&gclid=Cj0KCQiAmKiQBhClARIsAKtSj-kX8fYX2-GmD3T_lbO5aMbrvij8iBmb-xpBzi41OnP-CH53ZTDJ2zQaApUaEALw_wcB&gclsrc=aw.ds)

### Installer SDK Android dans Android Studio

1) Pour ce faire, ouvrez Android Studio, cliquez sur le bouton "Configurer" et sélectionnez "SDK Manager".

2) Cocher et installer Android 10, puis appliquer.

3) Créer un Device avec Android Studio avec la version 10 Android

### Configurer la variable d'environnement ANDROID_HOME

Ajoutez les lignes suivantes à votre fichier de configuration $HOME/.bash_profile ou $HOME/.bashrc (si vous utilisez zsh, alors ~/.zprofile ou ~/.zshrc) :

```bash

Copy/Paste

export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

### Run React Native

```bash
$ npx react-native run-android
```
