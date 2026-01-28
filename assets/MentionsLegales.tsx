import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Mentions légales
            </h1>

            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">1. Informations légales</h2>
                <div className="space-y-2">
                  <p><strong>Site internet / Website :</strong> trsi-conseil.com</p>
                  <p><strong>Éditeur :</strong> TRSI CONSEIL</p>
                  <p><strong>Adresse :</strong> 102 Av. des Champs-Élysées, 75008 Paris, FRANCE</p>
                  <p><strong>Email :</strong> contact@trsi-conseil.com</p>
                  <p><strong>Téléphone :</strong> +33 7 53 83 60 27</p>
                  <p><strong>Numéro d'immatriculation (SIRET) :</strong> 801 047 283 00040</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">2. Propriété intellectuelle</h2>
                <p>
                  L'ensemble des contenus présents sur le site (textes, images, vidéos, logos, design, etc.) est protégé par le droit de la propriété intellectuelle.
                </p>
                <p className="mt-2">
                  Toute reproduction, représentation, modification, publication ou adaptation des éléments du site, totale ou partielle, est interdite sans autorisation écrite préalable.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">3. Données personnelles</h2>
                <p>
                  Les données collectées via le site sont traitées conformément au Règlement Général sur la Protection des Données (RGPD).
                </p>
                <p className="mt-2">
                  Vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour toute demande : contact@trsi-conseil.com
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">4. Cookies</h2>
                
                <h3 className="text-lg font-medium text-foreground mt-4 mb-2">Utilisation des cookies</h3>
                <p>
                  Ce site utilise des cookies afin d'améliorer l'expérience utilisateur, analyser le trafic et personnaliser le contenu.
                </p>
                <p className="mt-2">
                  En poursuivant votre navigation, vous acceptez l'utilisation de cookies. Vous pouvez à tout moment gérer vos préférences.
                </p>

                <h3 className="text-lg font-medium text-foreground mt-4 mb-2">Types de cookies utilisés</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Cookies essentiels :</strong> nécessaires au bon fonctionnement du site.</li>
                  <li><strong>Cookies analytiques :</strong> utilisés pour mesurer l'audience et améliorer nos services.</li>
                  <li><strong>Cookies marketing :</strong> destinés à personnaliser les offres et publicités.</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground mt-4 mb-2">Gestion des cookies</h3>
                <p>
                  Lors de votre première visite, une bannière vous propose d'accepter ou de refuser les cookies.
                </p>
                <p className="mt-2">
                  Vous pouvez également modifier vos choix à tout moment en cliquant sur « Paramètres des cookies » en bas de page.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">5. Responsabilité</h2>
                <p>
                  L'éditeur ne saurait être tenu responsable des dommages directs ou indirects résultant de l'utilisation du site.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MentionsLegales;
