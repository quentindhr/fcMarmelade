# Utiliser l'image Nginx Alpine (légère)
FROM nginx:alpine

# Métadonnées
LABEL maintainer="contact@marmelades-antan.fr"
LABEL description="Site web pour vendeur de marmelade artisanale"
LABEL version="1.0"

# Copier les fichiers HTML/CSS dans le répertoire Nginx
COPY index.html /usr/share/nginx/html/
COPY produits.html /usr/share/nginx/html/
COPY contact.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/

# Configuration Nginx optimisée (optionnel)
# COPY nginx.conf /etc/nginx/nginx.conf

# Exposer le port 80
EXPOSE 8080

# Démarrer Nginx (CMD par défaut de l'image nginx: alpine)
CMD ["nginx", "-g", "daemon off;"]