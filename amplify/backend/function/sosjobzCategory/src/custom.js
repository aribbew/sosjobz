/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

var aws = require('aws-sdk');
var dynamoDB = new aws.DynamoDB();

exports.handler = async (event) => {
  try {
    // Retrieve the categories array from the event
    const categories = [
      { id: 1, name: 'Acheteur' },
      { id: 2, name: 'Administrateur de base de données' },
      { id: 3, name: 'Agent de sûreté aéroportuaire' },
      { id: 4, name: 'Agent de transit' },
      { id: 5, name: 'Agent d\'entretien' },
      { id: 6, name: 'Agent funéraire' },
      { id: 7, name: 'Agent immobilier' },
      { id: 8, name: 'Agent de police' },
      { id: 9, name: 'Agent de presse' },
      { id: 10, name: 'Agent de sécurité' },
      { id: 11, name: 'Agent de surveillance de la voie publique (ASVP)' },
      { id: 12, name: 'Agronome' },
      { id: 13, name: 'Ambulancier' },
      { id: 14, name: 'Analyste financier' },
      { id: 15, name: 'Analyste programmeur' },
      { id: 16, name: 'Analyste Web' },
      { id: 17, name: 'Architecte' },
      { id: 18, name: 'Architecte paysagiste' },
      { id: 19, name: 'Architecte en système d\'information' },
      { id: 20, name: 'Archiviste' },
      { id: 21, name: 'Assistant administratif et financier' },
      { id: 22, name: 'Assistant bibliothécaire' },
      { id: 23, name: 'Assistant d\'éducation' },
      { id: 24, name: 'Assistant dentaire' },
      { id: 25, name: 'Assistant marketing' },
      { id: 26, name: 'Assistant paie et administration' },
      { id: 27, name: 'Assistant RH' },
      { id: 28, name: 'Assureur' },
      { id: 29, name: 'Audioprothésiste' },
      { id: 30, name: 'Auditeur financier' },
      { id: 31, name: 'Auxiliaire de puériculture' },
      { id: 32, name: 'Auxiliaire de vie sociale' },
      { id: 33, name: 'Avocat' },
      { id: 34, name: 'Bibliothécaire' },
      { id: 35, name: 'Biologiste' },
      { id: 36, name: 'Chargé de communication' },
      { id: 37, name: 'Chargé de recrutement' },
      { id: 38, name: 'Charpentier' },
      { id: 39, name: 'Chauffeur de taxi' },
      { id: 40, name: 'Chefs de chantier' },
      { id: 41, name: 'Chef de projet' },
      { id: 42, name: 'Chef de projet marketing' },
      { id: 43, name: 'Chef d\'établissement' },
      { id: 44, name: 'Chiropracteur' },
      { id: 45, name: 'Chirurgien orthopédiste' },
      { id: 46, name: 'Coiffeur' },
      { id: 47, name: 'Commis de cuisine' },
      { id: 48, name: 'Comptable' },
      { id: 49, name: 'Concepteur de jeux vidéos' },
      { id: 50, name: 'Concepteur-rédacteur' },
      { id: 51, name: 'Conducteur de grue' },
      { id: 52, name: 'Conducteur de train' },
      { id: 53, name: 'Conseiller' },
      { id: 54, name: 'Conseiller d\'orientation' },
      { id: 55, name: 'Conseiller en insertion professionnelle' },
      { id: 56, name: 'Consultant bien-être' },
      { id: 57, name: 'Consultant en informatique' },
      { id: 58, name: 'Contrôleur (trains)' },
      { id: 59, name: 'Contrôleur aérien' },
      { id: 60, name: 'Contrôleur de gestion' },
      { id: 61, name: 'Contrôleur financier' },
      { id: 62, name: 'Courtier en assurance' },
      { id: 63, name: 'Cuisinier' },
      { id: 64, name: 'Décorateur d\'intérieur' },
      { id: 65, name: 'Dentiste' },
      { id: 66, name: 'Designer industriel' },
      { id: 67, name: 'Développeur informatique' },
      { id: 68, name: 'Diacre' },
      { id: 69, name: 'Diététicien' },
      { id: 70, name: 'Directeur artistique' },
      { id: 71, name: 'Directeur des ventes' },
      { id: 72, name: 'Directeur financier' },
      { id: 73, name: 'Directeur RH' },
      { id: 74, name: 'Économiste' },
      { id: 75, name: 'Éducateur de jeunes' },
      { id: 76, name: 'Éleveur' },
      { id: 77, name: 'Employé de banque' },
      { id: 78, name: 'Enseignant' },
      { id: 79, name: 'Ergothérapeute' },
      { id: 80, name: 'Esthéticienne' },
      { id: 81, name: 'Fleuriste' },
      { id: 82, name: 'Gardien' },
      { id: 83, name: 'Géomètre' },
      { id: 84, name: 'Gestionnaire immobilier' },
      { id: 85, name: 'Hôtesse de l\'air' },
      { id: 86, name: 'Huissier' },
      { id: 87, name: 'Illustrateur' },
      { id: 88, name: 'Infirmière' },
      { id: 89, name: 'Ingénieur civil' },
      { id: 90, name: 'Ingénieur électronicien' },
      { id: 91, name: 'Ingénieur du BTP' },
      { id: 92, name: 'Inspecteur de l\'action sanitaire et sociale' },
      { id: 93, name: 'Jardinier' },
      { id: 94, name: 'Jardinier paysagiste' },
      { id: 95, name: 'Journaliste' },
      { id: 96, name: 'Juge' },
      { id: 97, name: 'Kinésithérapeute' },
      { id: 98, name: 'Linguiste' },
      { id: 99, name: 'Machiniste' },
      { id: 100, name: 'Magasinier' },
      { id: 101, name: 'Maître d\'hôtel' },
      { id: 102, name: 'Manipulateur radio' },
      { id: 103, name: 'Masseur' },
      { id: 104, name: 'Mécanicien aéronautique' },
      { id: 105, name: 'Médecin' },
      { id: 106, name: 'Moniteur d\'auto-école' },
      { id: 107, name: 'Monteur électricien' },
      { id: 108, name: 'Nutritionniste' },
      { id: 109, name: 'Officier' },
      { id: 110, name: 'Opérateur de production' },
      { id: 111, name: 'Opérateur d\'usinage sur commande numérique (UCN)' },
      { id: 112, name: 'Opticien' },
      { id: 113, name: 'Orthophoniste' },
      { id: 114, name: 'Personal Trainer' },
      { id: 115, name: 'Pharmacien' },
      { id: 116, name: 'Photographe' },
      { id: 117, name: 'Physicien' },
      { id: 118, name: 'Physicien médical' },
      { id: 119, name: 'Pilote' },
      { id: 120, name: 'Politicien' },
      { id: 121, name: 'Pompier' },
      { id: 122, name: 'Poseur de sol (solier)' },
      { id: 123, name: 'Prêtre' },
      { id: 124, name: 'Procureur' },
      { id: 125, name: 'Professeur des écoles' },
      { id: 126, name: 'Professeur d\'éducation physique (EPS)' },
      { id: 127, name: 'Professeur de français langue étrangère' },
      { id: 128, name: 'Professeur des universités' },
      { id: 129, name: 'Psychologue' },
      { id: 130, name: 'Réceptionniste' },
      { id: 131, name: 'Réceptionniste d\'hôtel' },
      { id: 132, name: 'Responsable communication' },
      { id: 133, name: 'Responsable grands comptes' },
      { id: 134, name: 'Responsable service clientèle' },
      { id: 135, name: 'Sages-femmes' },
      { id: 136, name: 'Secrétaire médical' },
      { id: 137, name: 'Soudeur' },
      { id: 138, name: 'Spécialiste en marketing digital' },
      { id: 139, name: 'Styliste' },
      { id: 140, name: 'Surveillant de baignade' },
      { id: 141, name: 'Technicien de laboratoire' },
      { id: 142, name: 'Technicien de maintenance informatique' },
      { id: 143, name: 'Technicien réseau' },
      { id: 144, name: 'Traducteur' },
      { id: 145, name: 'Vétérinaire' },
      { id: 146, name: 'Webdesigner' },
      { id: 147, name: 'Wedding planner' },
      { id: 148, name: 'Zoologiste' },
    ];

    let date = new Date()
    
    // Prepare the array of put requests for DynamoDB
    const putRequests = categories.map(category => {
      return {
        PutRequest: {
          Item: {
            'id': { S: category.id.toString() },
            'name': { S: category.name },
            '__typename': { S: 'Category' },
            '_lastChangedAt': { N: date.valueOf().toString() },   // timestamp
            '_version': { N: '1' },     
          }
        }
      }
    })

    // Prepare the DynamoDB batchWriteItem parameters
    const params = {
      RequestItems: {
        putRequests
      },
      TableName: process.env.CATEGORYTABLE
    }

    // Write the categories into the DynamoDB table
    await dynamoDB.putItem(params).promise();
    console.log('Success');
  } catch (error) {
    console.error('Error adding categories to DynamoDB', error);
    throw error;
  }
};