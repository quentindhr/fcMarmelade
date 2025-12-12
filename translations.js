// Système de traductions multi-langues
const translations = {
    fr: {
        // Navigation
        nav_home: "Accueil",
        nav_products: "Nos Produits",
        nav_contact: "Contact",
        nav_admin: "Admin",
        
        // Page d'accueil
        home_title: "Marmelades Artisanales",
        home_subtitle: "Fabriquées avec passion depuis 1985",
        home_description: "Découvrez nos confitures et marmelades préparées à l'ancienne, avec des fruits sélectionnés et des recettes traditionnelles.",
        home_cta:  "Découvrir nos produits",
        
        // Savoir-faire
        savoir_faire_title: "Notre Savoir-Faire",
        feature_fruits_title: "Fruits Frais",
        feature_fruits_desc: "Nous sélectionnons les meilleurs fruits de saison, issus de producteurs locaux.",
        feature_recipe_title: "Recettes Traditionnelles",
        feature_recipe_desc: "Des méthodes artisanales transmises de génération en génération.",
        feature_natural_title: "100% Naturel",
        feature_natural_desc: "Sans colorants ni conservateurs artificiels.  Que du bon ! ",
        
        // Spécialités
        specialties_title: "Nos Spécialités",
        specialty_orange:  "Marmelade d'Oranges Amères",
        specialty_apricot: "Confiture d'Abricots",
        specialty_strawberry: "Gelée de Fraises",
        specialty_lemon: "Marmelade de Citrons",
        view_all: "Voir tous nos produits",
        
        // Page produits
        products_title: "Notre Catalogue",
        products_subtitle: "Découvrez notre sélection de marmelades et confitures artisanales",
        
        // Produits individuels
        product_orange_name: "Marmelade d'Oranges Amères",
        product_orange_desc: "La recette classique britannique.  Des écorces d'oranges amères confites dans un sirop doré, pour un goût équilibré entre douceur et amertume.",
        product_orange_ingredients: "Ingrédients:  Oranges amères (55%), sucre, eau",
        
        product_apricot_name: "Confiture d'Abricots Maison",
        product_apricot_desc: "Notre spécialité !  Des abricots gorgés de soleil, cueillis à maturité.  Texture fondante et goût intense de fruit.",
        product_apricot_ingredients: "Ingrédients: Abricots (60%), sucre de canne, jus de citron",
        
        product_strawberry_name:  "Gelée de Fraises",
        product_strawberry_desc: "Délicate et translucide, notre gelée de fraises capture l'essence du fruit. Parfaite sur des crêpes ou dans un yaourt.",
        product_strawberry_ingredients: "Ingrédients: Fraises (50%), sucre, gélifiant naturel (pectine de fruits)",
        
        product_lemon_name: "Marmelade de Citrons",
        product_lemon_desc: "Acidulée et rafraîchissante.  Des citrons bio confits avec leur zeste pour un maximum de saveur.",
        product_lemon_ingredients: "Ingrédients: Citrons bio (50%), sucre, eau",
        
        product_fig_name: "Confiture de Figues",
        product_fig_desc: "Onctueuse et sucrée, avec des morceaux de figues fondants. Accompagne parfaitement les fromages affinés.",
        product_fig_ingredients: "Ingrédients: Figues (65%), sucre roux, jus de citron",
        
        product_four_fruits_name: "Marmelade Quatre Fruits",
        product_four_fruits_desc: "Un mélange harmonieux d'oranges, citrons, pamplemousses et mandarines. L'équilibre parfait des agrumes.",
        product_four_fruits_ingredients: "Ingrédients: Agrumes variés (58%), sucre, eau",
        
        bestseller:  "Best-seller",
        jar_size: "Pot de",
        
        // Informations pratiques
        practical_info_title: "Informations pratiques",
        practical_info_delivery: "Livraison possible dans toute la France",
        practical_info_conservation: "Conservation :  12 mois avant ouverture, 3 semaines au frais après ouverture",
        practical_info_discount: "Remises sur quantités :  contactez-nous ! ",
        practical_info_made:  "Tous nos produits sont fabriqués dans notre atelier artisanal",
        
        // Page contact
        contact_title: "Nous Contacter",
        contact_subtitle: "Une question ?  Une commande ? N'hésitez pas à nous contacter ! ",
        contact_workshop: "Notre Atelier",
        contact_info: "Coordonnées",
        contact_phone: "Téléphone:",
        contact_email: "Email:",
        contact_hours: "Horaires d'Ouverture",
        contact_access: "Accès",
        contact_car: "En voiture:",
        contact_car_info: "Parking gratuit disponible",
        contact_bus: "En bus:",
        contact_bus_info: "Ligne 5, arrêt \"Les Vergers\"",
        contact_walk: "À pied:",
        contact_walk_info: "10 min depuis le centre-ville",
        
        // Jours de la semaine
        monday_friday: "Lundi - Vendredi",
        saturday: "Samedi",
        sunday: "Dimanche",
        closed: "Fermé",
        
        // Formulaire de contact
        form_title: "Envoyez-nous un message",
        form_name: "Nom",
        form_email: "Email",
        form_phone: "Téléphone",
        form_subject: "Sujet",
        form_subject_order: "Commande",
        form_subject_info: "Demande d'information",
        form_subject_visit: "Visite de l'atelier",
        form_subject_other: "Autre",
        form_message: "Message",
        form_submit: "Envoyer le message",
        form_required: "Champs obligatoires",
        
        order_delivery_title: "Commandes & Livraisons",
        order_delivery_intro: "Pour toute commande, merci de nous contacter par téléphone ou email.  Nous proposons :",
        order_delivery_france: "Livraison dans toute la France (frais de port selon poids)",
        order_delivery_pickup: "Retrait gratuit à l'atelier",
        order_delivery_discount: "Remises pour les commandes importantes",
        order_delivery_gift: "Paniers cadeaux personnalisés",
        
        // Admin
        admin_title: "Tableau de bord administrateur",
        admin_users: "Utilisateurs connectés",
        admin_visitors: "visiteurs actifs",
        admin_vms: "Machines Virtuelles",
        admin_vms_active: "VM actives",
        admin_products: "Produits en ligne",
        admin_products_count: "marmelades",
        admin_status: "Statut du site",
        admin_online: "En ligne",
        admin_last_update: "Dernière MAJ :",
        
        admin_vm_management: "Gestion des Machines Virtuelles",
        admin_add_vm: "Ajouter une VM",
        admin_users_realtime: "Utilisateurs connectés en temps réel",
        admin_refresh: "Rafraîchir",
        admin_activity_log: "Journal d'activité",
        admin_clear:  "Effacer",
        
        // Footer
        footer_rights: "Tous droits réservés",
        footer_made: "Fait avec ❤️ et beaucoup de fruits"
    },
    
    en: {
        // Navigation
        nav_home: "Home",
        nav_products: "Our Products",
        nav_contact:  "Contact",
        nav_admin: "Admin",
        
        // Home page
        home_title: "Artisanal Marmalades",
        home_subtitle:  "Handcrafted with passion since 1985",
        home_description: "Discover our jams and marmalades prepared in the old-fashioned way, with selected fruits and traditional recipes.",
        home_cta: "Discover our products",
        
        // Expertise
        savoir_faire_title: "Our Expertise",
        feature_fruits_title: "Fresh Fruits",
        feature_fruits_desc: "We select the best seasonal fruits from local producers.",
        feature_recipe_title: "Traditional Recipes",
        feature_recipe_desc:  "Artisanal methods passed down from generation to generation.",
        feature_natural_title: "100% Natural",
        feature_natural_desc:  "No artificial colors or preservatives.  Only the good stuff!",
        
        // Specialties
        specialties_title: "Our Specialties",
        specialty_orange: "Bitter Orange Marmalade",
        specialty_apricot: "Apricot Jam",
        specialty_strawberry: "Strawberry Jelly",
        specialty_lemon: "Lemon Marmalade",
        view_all:  "View all our products",
        
        // Products page
        products_title: "Our Catalog",
        products_subtitle:  "Discover our selection of artisanal marmalades and jams",
        
        // Individual products
        product_orange_name: "Bitter Orange Marmalade",
        product_orange_desc: "The classic British recipe. Bitter orange peels candied in golden syrup, for a balanced taste between sweetness and bitterness.",
        product_orange_ingredients: "Ingredients: Bitter oranges (55%), sugar, water",
        
        product_apricot_name: "Homemade Apricot Jam",
        product_apricot_desc: "Our specialty! Sun-ripened apricots, picked at maturity. Melting texture and intense fruit taste.",
        product_apricot_ingredients: "Ingredients:  Apricots (60%), cane sugar, lemon juice",
        
        product_strawberry_name: "Strawberry Jelly",
        product_strawberry_desc: "Delicate and translucent, our strawberry jelly captures the essence of the fruit. Perfect on pancakes or in yogurt.",
        product_strawberry_ingredients: "Ingredients: Strawberries (50%), sugar, natural gelling agent (fruit pectin)",
        
        product_lemon_name: "Lemon Marmalade",
        product_lemon_desc:  "Tangy and refreshing.  Organic lemons candied with their zest for maximum flavor.",
        product_lemon_ingredients: "Ingredients: Organic lemons (50%), sugar, water",
        
        product_fig_name: "Fig Jam",
        product_fig_desc: "Smooth and sweet, with melting fig pieces.  Perfectly accompanies aged cheeses.",
        product_fig_ingredients: "Ingredients: Figs (65%), brown sugar, lemon juice",
        
        product_four_fruits_name: "Four Fruits Marmalade",
        product_four_fruits_desc: "A harmonious blend of oranges, lemons, grapefruits and mandarins.  The perfect balance of citrus fruits.",
        product_four_fruits_ingredients: "Ingredients: Various citrus fruits (58%), sugar, water",
        
        bestseller:  "Bestseller",
        jar_size: "Jar of",
        
        // Practical information
        practical_info_title: "Practical Information",
        practical_info_delivery: "Delivery available throughout France",
        practical_info_conservation: "Storage: 12 months before opening, 3 weeks refrigerated after opening",
        practical_info_discount: "Quantity discounts: contact us!",
        practical_info_made: "All our products are made in our artisanal workshop",
        
        // Contact page
        contact_title: "Contact Us",
        contact_subtitle:  "A question? An order? Don't hesitate to contact us!",
        contact_workshop: "Our Workshop",
        contact_info: "Contact Details",
        contact_phone:  "Phone:",
        contact_email: "Email:",
        contact_hours: "Opening Hours",
        contact_access:  "Access",
        contact_car: "By car:",
        contact_car_info: "Free parking available",
        contact_bus:  "By bus:",
        contact_bus_info: "Line 5, stop \"Les Vergers\"",
        contact_walk: "On foot:",
        contact_walk_info: "10 min from city center",
        
        // Days of the week
        monday_friday: "Monday - Friday",
        saturday: "Saturday",
        sunday: "Sunday",
        closed:  "Closed",
        
        // Contact form
        form_title: "Send us a message",
        form_name: "Name",
        form_email: "Email",
        form_phone: "Phone",
        form_subject:  "Subject",
        form_subject_order: "Order",
        form_subject_info: "Information request",
        form_subject_visit: "Workshop visit",
        form_subject_other: "Other",
        form_message: "Message",
        form_submit: "Send message",
        form_required: "Required fields",
        
        order_delivery_title: "Orders & Deliveries",
        order_delivery_intro: "For any order, please contact us by phone or email. We offer:",
        order_delivery_france: "Delivery throughout France (shipping costs according to weight)",
        order_delivery_pickup: "Free pickup at the workshop",
        order_delivery_discount: "Discounts for large orders",
        order_delivery_gift: "Personalized gift baskets",
        
        // Admin
        admin_title: "Administrator Dashboard",
        admin_users:  "Connected Users",
        admin_visitors: "active visitors",
        admin_vms: "Virtual Machines",
        admin_vms_active: "active VMs",
        admin_products:  "Online Products",
        admin_products_count: "marmalades",
        admin_status: "Site Status",
        admin_online: "Online",
        admin_last_update: "Last update:",
        
        admin_vm_management: "Virtual Machines Management",
        admin_add_vm: "Add VM",
        admin_users_realtime:  "Real-time Connected Users",
        admin_refresh:  "Refresh",
        admin_activity_log: "Activity Log",
        admin_clear: "Clear",
        
        // Footer
        footer_rights: "All rights reserved",
        footer_made:  "Made with ❤️ and lots of fruits"
    }
};

// Langue par défaut
let currentLanguage = localStorage.getItem('language') || 'fr';

// Fonction pour changer la langue
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    translatePage();
    updateLanguageButton();
}

// Fonction pour traduire la page
function translatePage() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
    
    // Traduire les placeholders
    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[currentLanguage][key]) {
            element.placeholder = translations[currentLanguage][key];
        }
    });
}

// Fonction pour mettre à jour le bouton de langue
function updateLanguageButton() {
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.textContent = currentLanguage === 'fr' ? '🇬🇧 EN' : '🇫🇷 FR';
    }
}

// Initialiser la traduction au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    translatePage();
    updateLanguageButton();
});