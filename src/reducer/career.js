import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';

const initialState = {
    careerData: [
        {
            title: "Créatrice de solutions web & mobile",
            subtitle: "Cowemo | Nice, France",
            description: "Création et maintenance de sites web pour petite, moyenne ou très grande entreprise, via l'utilisation de la plateforme Jahia",
            icon: <WorkIcon/>,
            iconStyle: { background: 'rgb(0, 163, 213)', color: '#fff' },
            date: "2021",
            className: "work"
        },
        {
            title: "Lead Dev Front",
            subtitle: "'Apothéose' - Formation O'Clock",
            description: "Projet de fin de formation 'My travel Road', site web à destination des grands voyageurs, sur une durée d'un mois au sein d'un groupe de 4 personnes",
            icon: <StarIcon/>,
            iconStyle: { background: 'rgb(78, 171, 3)', color: '#fff' },
            date: "2020",
            className: "work"
        },
        {
            title: "Ecole O'Clock",
            subtitle: "Titre professionnelle développeur web et web mobile",
            description: "Formation intensive de niveau 5 sur une période de 700h. Ecole labellisée « Grande École du Numérique »",
            icon: <SchoolIcon />,
            iconStyle: { background: 'rgb(249, 192, 7)', color: '#fff' },
            date: "2020",
            className: "education",
        },
        {
            title: "Certification Opquast",
            subtitle: "Maîtrise de la qualité en projet Web",
            description: "Score de 830/1000 - Niveau obtenu: Avancé",
            icon: <SchoolIcon />,
            iconStyle: { background: 'rgb(249, 192, 7)', color: '#fff' },
            date: "2020",
            className: "education",
        },
        {
            title: "Event Manager",
            subtitle: "Le Méridien Beach Plaza | Monaco",
            description: "Gestion d’une équipe de 5 personnes, gestion des plannings, établissement des prévisions annuelles, gestion des dossiers les plus importants, formation et mise en place des nouveaux outils informatiques, recrutement et formation des nouveaux membres de l’équipe ou stagiaire",
            icon: <WorkIcon />,
            iconStyle: { background: 'rgb(0, 163, 213)', color: '#fff' },
            date: "2019-2020",
            className: "work",
        },
        {
            title: "Senior Event Coordinator",
            subtitle: "Le Méridien Beach Plaza | Monaco",
            description: "Gestion et répartition des dossiers d’équipe, étude de marché et développement d’un pôle mariage au sein de l’hôtel",
            icon: <WorkIcon />,
            iconStyle: { background: 'rgb(0, 163, 213)', color: '#fff' },
            date: "2017-2019",
            className: "work",
        },
        {
            title: "Event Coordinator",
            subtitle: "Le Méridien Beach Plaza | Monaco",
            description: "Gestion de projets, de budgets et d’un centre de conférences de plus de 3000 m2, qualification de demandes et préparation de devis et contrats, vente optimisée, création et suivi direct de l’évènement jusqu’à l’envoi de la facture, suivi des propositions et développement d’une relation durable avec les clients, communication directe avec tous les départements de l’hôtel et prestataires externes",
            icon: <WorkIcon />,
            iconStyle: { background: 'rgb(0, 163, 213)', color: '#fff' },
            date: "2014-2017",
            className: "work",
        },
        {
            title: "Food & Beverage Coordinator",
            subtitle: "Constance Lémuria Seychelles | Praslin, Seychelles",
            description: "",
            icon: <WorkIcon />,
            iconStyle: { background: 'rgb(0, 163, 213)', color: '#fff' },
            date: "2012-2014",
            className: "work",
        },
        {
            title: "Réceptionniste",
            subtitle: "Domo Hostel | San Miguel de Tucumán, Argentine",
            description: "",
            icon: <WorkIcon />,
            iconStyle: { background: 'rgb(0, 163, 213)', color: '#fff' },
            date: "2010-2011",
            className: "work",
        },
        {
            title: "Junior Project Manager",
            subtitle: "Globy Mundus | Paris, France",
            description: "",
            icon: <WorkIcon />,
            iconStyle: { background: 'rgb(0, 163, 213)', color: '#fff' },
            date: "2010-2011",
            className: "work",
        },
        {
            title: "Institut Vatel | Lyon, France",
            subtitle: "Licence de management hôtelier et touristique",
            description: "",
            icon: <SchoolIcon />,
            iconStyle: { background: 'rgb(249, 192, 7)', color: '#fff' },
            date: "2007-2010",
            className: "education",
        },
    ]

}

const career = (state = initialState, action = {}) => {
    switch (action.type) {
       
        default:
            return state;
    }
};

export default career;