# 🍊 Marmelade Shop - Site Web de Vente de Marmelades

Application web légère et statique pour présenter et vendre des marmelades artisanales, entièrement conteneurisée avec Docker et déployable via Ansible.

## 🚀 Fonctionnalités

- **Page d'accueil** : Présentation du vendeur et de l'activité
- **Page produits** : Catalogue des marmelades disponibles avec descriptions et prix
- **Page contact** :  Informations de contact et horaires

## 📋 Prérequis

- Docker (version 20.10+)
- Docker Compose (version 1.29+)
- Ansible (version 2.9+ pour le déploiement automatisé)

## 🏃 Lancement en local

### Avec Docker Compose (recommandé)

```bash
docker-compose up -d
```

Accédez au site sur : http://localhost:8080

### Avec Docker uniquement

```bash
# Build de l'image
docker build -t marmelade-shop .

# Lancement du conteneur
docker run -d -p 8080:80 --name marmelade-shop marmelade-shop
```

## 🔧 Commandes utiles

```bash
# Arrêter l'application
docker-compose down

# Voir les logs
docker-compose logs -f

# Rebuild après modifications
docker-compose up -d --build

# Redémarrer
docker-compose restart
```

## 🚢 Déploiement avec Ansible

### Déploiement sur Azure (recommandé)

#### 1. Installer les collections Ansible requises

```bash
ansible-galaxy collection install -r requirements.yml
```

#### 2. Créer la VM Azure avec IP publique

```bash
ansible-playbook playbooks/create-public-vm-azure.yml
```

Ce playbook crée :
- Un groupe de ressources Azure
- Un réseau virtuel et un sous-réseau
- Une IP publique statique
- Une machine virtuelle Ubuntu avec IP publique

#### 3. Déployer l'application sur la VM Azure

```bash
ansible-playbook playbooks/deploy-app-to-azure-vm.yml
```

Ce playbook :
- Récupère automatiquement l'IP publique de la VM
- Installe Docker via les modules Ansible (collection `community.docker`)
- Clone le projet depuis GitHub
- Build l'image Docker avec `docker_image`
- Lance le conteneur avec `docker_container`
- Configure le firewall

L'application sera accessible sur `http://<IP_PUBLIQUE>:8080`

### Déploiement sur serveur existant

#### 1. Configurer l'inventaire

Éditez le fichier `inventory.ini` et ajoutez vos serveurs : 

```ini
[webservers]
votre-serveur.com ansible_user=ubuntu ansible_ssh_private_key_file=~/.ssh/id_rsa
```

#### 2. Lancer le déploiement

```bash
ansible-playbook -i inventory.ini playbook.yml
```

Le playbook va :
- Installer Docker et Docker Compose
- Cloner/copier le projet
- Builder et démarrer l'application

## 🏗️ Architecture

- **Frontend** : HTML5 + CSS3 (Responsive)
- **Serveur Web** : Nginx Alpine (image Docker légère)
- **Conteneurisation** : Docker + Docker Compose
- **Automatisation** : Ansible Playbook

## 📦 Structure du projet

```
fcMarmelade/
├── index.html                    # Page d'accueil
├── produits.html                  # Catalogue des produits
├── contact.html                   # Page de contact
├── style.css                      # Feuille de style
├── Dockerfile                     # Configuration Docker
├── docker-compose.yml             # Orchestration Docker
├── playbook.yml                   # Playbook Ansible (serveur existant)
├── requirements.yml               # Collections Ansible requises
├── inventory.ini                  # Inventaire Ansible
├── playbooks/
│   ├── create-public-vm-azure.yml    # Création VM Azure
│   └── deploy-app-to-azure-vm.yml    # Déploiement sur Azure
└── README.md                      # Documentation
```

## 🎨 Personnalisation

Modifiez les fichiers HTML et CSS selon vos besoins.  Après modification : 

```bash
docker-compose up -d --build
```

## 📝 Licence

Projet libre d'utilisation. 
```