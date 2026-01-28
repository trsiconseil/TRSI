import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Politique de confidentialité
            </h1>

            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">1️⃣ Introduction</h2>
                <p>
                  TRSI CONSEIL s'engage à protéger vos données personnelles et à respecter votre vie privée. Cette politique explique quelles données nous collectons, comment nous les utilisons et les droits dont vous disposez.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">2️⃣ Données collectées</h2>
                <p className="font-medium text-foreground mb-2">Types de données :</p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
                  <li><strong>Identité :</strong> nom, prénom, titre</li>
                  <li><strong>Coordonnées :</strong> email, téléphone, adresse</li>
                  <li><strong>Données techniques :</strong> IP, cookies, navigateur, pages visitées</li>
                  <li><strong>Données professionnelles</strong> (si formulaire contact pour recrutement ou clients)</li>
                </ul>
                <p>
                  Elles sont collectées : formulaires, cookies, emails, événements, CV déposés.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">3️⃣ Finalité de la collecte</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Répondre aux demandes de contact</li>
                  <li>Gestion des candidatures</li>
                  <li>Envoi de newsletters ou informations professionnelles</li>
                  <li>Analyse statistique pour améliorer le site</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">4️⃣ Partage des données</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Prestataires techniques (hébergement, email marketing)</li>
                  <li>Autorités légales si requis</li>
                  <li>Pas de revente à des tiers.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">5️⃣ Conservation des données</h2>
                <p>
                  Les données des contacts sont conservées pendant 3 ans après le dernier échange. Les données obsolètes sont supprimées ou anonymisées.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">6️⃣ Sécurité des données</h2>
                <p className="font-medium text-foreground mb-2">Les mesures prises :</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Accès limité aux données</li>
                  <li>Hébergement sécurisé</li>
                  <li>Protocoles de chiffrement pour formulaires</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">7️⃣ Droits des utilisateurs (RGPD)</h2>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
                  <li>Droit d'accès, de rectification, de suppression</li>
                  <li>Droit de limitation ou d'opposition au traitement</li>
                  <li>Droit à la portabilité des données</li>
                </ul>
                <p>
                  Pour exercer vos droits, contactez-nous à l'adresse email indiquée ci-dessous.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">8️⃣ Cookies et traceurs</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Types : analytics, fonctionnels, marketing</li>
                  <li>Possibilité de les refuser ou paramétrer</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">9️⃣ Contact</h2>
                <p>
                  Pour toutes questions sur la confidentialité : <a href="mailto:contact@trsi-conseil.com" className="text-primary hover:underline">contact@trsi-conseil.com</a>
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

export default PolitiqueConfidentialite;
