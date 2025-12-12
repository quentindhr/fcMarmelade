# Utiliser l'image Nginx Alpine (légère)
FROM nginx:alpine

# Métadonnées
LABEL maintainer="contact@marmelades-antan.fr"
LABEL description="Site web pour vendeur de marmelade artisanale"
LABEL version="1.0"

# Copier TOUS les fichiers HTML/CSS/JS dans le répertoire Nginx
COPY index.html /usr/share/nginx/html/
COPY produits.html /usr/share/nginx/html/
COPY contact. html /usr/share/nginx/html/
COPY admin.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY admin-style.css /usr/share/nginx/html/
COPY admin-script.js /usr/share/nginx/html/

# Exposer le port 80
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]